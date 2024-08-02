import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React,{useState} from "react";
import ProjectModal from "./ProjectModal";

const Projects: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<null | {
    title: string;
    description: string;
    start_period: string;
    end_period: string;
    technologies: string;
    responsibilities: string;
  }>(null);

  const projects = [
    {
      title: "Project X",
      description: "This is a description of Project X.",
      start_period: "2022-01",
      end_period: "2022-06",
      technologies: "React, TypeScript",
      responsibilities: "Frontend Development",
    },
    {
      title: "Project Y",
      description: "This is a description of Project Y.",
      start_period: "2021-05",
      end_period: "2021-12",
      technologies: "Node.js, Express",
      responsibilities: "Backend Development",
    },
    {
      title: "Project Z",
      description: "This is a description of Project Z.",
      start_period: "2020-03",
      end_period: "2020-09",
      technologies: "Python, Django",
      responsibilities: "Fullstack Development",
    },
  ];

  const handleClickOpen = (project: {
    title: string;
    description: string;
    start_period: string;
    end_period: string;
    technologies: string;
    responsibilities: string;
  }) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProject(null);
  };

  return (
    <Box sx={{ backgroundColor: "#66D4D4", py: 8 }}>
      <Container id="projects">
        <Typography variant="h3" component="h2" gutterBottom>
          My Projects
        </Typography>
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="h3">
                    {project.title}
                  </Typography>
                  <Typography variant="body1">{project.description}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.start_period} - {project.end_period}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => handleClickOpen(project)}
                  >
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        <ProjectModal
          open={open}
          onClose={handleClose}
          project={selectedProject}
        />
      </Container>
    </Box>
  );
};

export default Projects;