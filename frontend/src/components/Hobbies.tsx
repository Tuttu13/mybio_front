import {
  Box,
  Container,
  List,
  ListItem,
  ListItemText,
  Typography
} from "@mui/material";
import React from "react";

const Hobbies: React.FC = () => {
  const whiskeyHobbies = ["Tasting", "Collecting", "Exploring different brands"];
  const readingHobbies = ["Fiction", "Non-fiction", "Technical books"];

  return (
    <Box sx={{ backgroundColor: "#33C1C1", py: 8 }}>
      <Container id="hobbies" sx={{ textAlign: "left" }}>
        <Typography variant="h3" component="h2" gutterBottom>
          MY HOBBIES
        </Typography>

        <Box sx={{ mt: 4 }}>
          <Typography variant="h4" component="h3" gutterBottom>
            Whiskey
          </Typography>
          <List>
            {whiskeyHobbies.map((hobby, index) => (
              <ListItem key={index}>
                <ListItemText primary={hobby} />
              </ListItem>
            ))}
          </List>
        </Box>

        <Box sx={{ mt: 4 }}>
          <Typography variant="h4" component="h3" gutterBottom>
            Reading
          </Typography>
          <List>
            {readingHobbies.map((hobby, index) => (
              <ListItem key={index}>
                <ListItemText primary={hobby} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Container>
    </Box>
  );
};

export default Hobbies;
