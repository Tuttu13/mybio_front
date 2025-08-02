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
import { motion } from "framer-motion";
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
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <AppBar 
          position="fixed" 
          sx={{ 
            backgroundColor: "rgba(0, 102, 102, 0.95)",
            backdropFilter: "blur(10px)",
            borderBottom: "1px solid rgba(255,255,255,0.1)"
          }}
        >
          <Toolbar>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Typography variant="h6" sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                つっつ's Bio
              </Typography>
            </motion.div>
            
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2, ml: "auto" }}>
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    color="inherit"
                    sx={{
                      position: "relative",
                      overflow: "hidden",
                      '&:hover': {
                        backgroundColor: 'rgba(255,255,255,0.1)',
                      },
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: '-100%',
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                        transition: 'left 0.6s',
                      },
                      '&:hover::before': {
                        left: '100%',
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
                </motion.div>
              ))}
            </Box>
            
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={handleDrawerToggle}
                sx={{ display: { md: "none" } }}
              >
                <MenuIcon />
              </IconButton>
            </motion.div>
          </Toolbar>
        </AppBar>
      </motion.div>
      
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerClose}
        sx={{ display: { md: "none" } }}
      >
        <motion.div
          initial={{ x: 250 }}
          animate={{ x: 0 }}
          exit={{ x: 250 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <Box
            sx={{ 
              width: 250, 
              background: "linear-gradient(135deg, #006666, #004d4d)",
              height: "100%"
            }}
            role="presentation"
            onClick={handleDrawerClose}
            onKeyDown={handleDrawerClose}
          >
            <List>
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  whileHover={{ x: 10 }}
                >
                  <ScrollLink
                    to={item.to}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={handleDrawerClose}
                  >
                    <ListItem 
                      button
                      sx={{
                        '&:hover': { 
                          backgroundColor: 'rgba(255,255,255,0.1)',
                          borderLeft: '4px solid #66D4D4'
                        }
                      }}
                    >
                      <ListItemText 
                        primary={item.text} 
                        sx={{ color: 'white' }}
                      />
                    </ListItem>
                  </ScrollLink>
                </motion.div>
              ))}
            </List>
          </Box>
        </motion.div>
      </Drawer>
    </>
  );
};

export default Navbar;