import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import React,{useState} from "react";
import {Link as ScrollLink} from "react-scroll";

const Navbar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const menuItems = [
    { text: "Home", to: "home" },
    { text: "About", to: "about" },
    { text: "Skills", to: "skills" },
    { text: "Projects", to: "projects" },
    { text: "Personal Projects", to: "personal-projects" },
    { text: "Hobby", to: "hobbies" },
  ];

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: "#006666" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
            {/* ロゴを追加する場合はここに <img src="path_to_logo" alt="logo" style={{ marginRight: '8px' }} /> */}
            つっつ's Bio
          </Typography>
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            {menuItems.map((item) => (
              <Button
                color="inherit"
                key={item.text}
                sx={{
                  '&:hover': {
                    backgroundColor: '#005555',
                  },
                }}
              >
                <ScrollLink
                  to={item.to}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  {item.text}
                </ScrollLink>
              </Button>
            ))}
          </Box>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
            sx={{ display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerClose}
        sx={{ display: { md: "none" } }}
      >
        <Box
          sx={{ width: 250, '& .MuiListItem-button:hover': { backgroundColor: '#005555' } }}
          role="presentation"
          onClick={handleDrawerClose}
          onKeyDown={handleDrawerClose}
        >
          <List>
            {menuItems.map((item) => (
              <ScrollLink
                key={item.text}
                to={item.to}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={handleDrawerClose}
              >
                <ListItem button>
                  <ListItemText primary={item.text} />
                </ListItem>
              </ScrollLink>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;