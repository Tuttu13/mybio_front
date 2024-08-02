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

const PersonalProjects: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<null | {
    title: string;
    description: string;
    start_period: string;
    end_period: string;
    technologies: string;
    responsibilities: string;
  }>(null);

  const personalProjects = [
    {
      title: "Project A",
      description: "This is a description of Project A.",
      start_period: "2021-01",
      end_period: "2021-06",
      technologies: "React, TypeScript",
      responsibilities: "Frontend Development",
    },
    {
      title: "Project B",
      description: "This is a description of Project B.",
      start_period: "2020-05",
      end_period: "2020-12",
      technologies: "Node.js, Express",
      responsibilities: "Backend Development",
    },
    {
      title: "Project C",
      description: "This is a description of Project C.",
      start_period: "2019-03",
      end_period: "2019-09",
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
    <Box sx={{ backgroundColor: "#33CFCB", py: 8 }}>
      <Container id="personal-projects">
        <Typography variant="h3" component="h2" gutterBottom>
          Personal Projects
        </Typography>
        <Grid container spacing={4}>
          {personalProjects.map((project, index) => (
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

export default PersonalProjects;
