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
      title: "自己紹介webサイト",
      description: "個人開発",
      start_period: "未定",
      end_period: "",
      technologies: 'React | TypeScript | Docker | AWS',
      responsibilities: "設計 | 実装 | 単体テスト",
    },
    {
      title: "イベント紹介webサイト",
      description: "個人開発(請負)",
      start_period: "未定",
      end_period: "",
      technologies: 'React | TypeScript | Docker | AWS',
      responsibilities: "Backend Development",
    },
    {
      title: "建築士のポートフォリオwebサイト",
      description: "個人開発(請負)",
      start_period: "未定",
      end_period: "",
      technologies: 'React | TypeScript | webGL | Docker | AWS',
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
        <Typography variant="h3" component="h2">
          Personal Projects
        </Typography>
        <Typography variant="body1" paragraph>
          個人で開発を行っているプロジェクト
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
