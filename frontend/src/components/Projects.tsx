import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import React,{useState} from 'react';
import ProjectModal from './ProjectModal';

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
      title: 'ふるさと納税支払いシステム',
      description: '新規開発案件',
      start_period: '2021-11',
      end_period: '2022-09',
      technologies: 'Python | Django | Postgres | Docker',
      responsibilities: '実装 | 単体テスト | 結合テスト | SQL実行計画',
    },
    {
      title: 'EV車電池分析アプリ',
      description: '運用・保守開発案件',
      start_period: '2022-10',
      end_period: '2024-03',
      technologies: 'Python | Django | Postgres | mongoDB | Docker | AWS(EC2/RDS)',
      responsibilities: '詳細設計 | 実装 | 単体テスト | 結合テスト | SQL実行計画',
    },
    {
      title: '飲食店オーダーアプリ',
      description: '自社開発アプリ新規開発案件',
      start_period: '2024-04',
      end_period: '2024-07',
      technologies: 'React | TypeScript | Python | Django | Postgres | Docker',
      responsibilities: 'DB設計 | 詳細設計 | 実装 | 単体テスト',
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
    <Box sx={{ backgroundColor: '#66D4D4', py: 8 }}>
      <Container id='projects'>
        <Typography variant='h3' component='h2' gutterBottom>
          Projects
        </Typography>
        <Typography variant="body1" paragraph>
          今まで参画して来たプロジェクト
        </Typography>
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  transition: 'box-shadow 0.3s ease',
                  '&:hover': {
                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
                  },
                }}
              >
                <CardContent>
                  <Typography variant='h5' component='h3'>
                    {project.title}
                  </Typography>
                  <Typography variant='body1'>{project.description}</Typography>
                  <Typography variant='body2' color='textSecondary'>
                    {project.start_period} - {project.end_period}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size='small'
                    color='primary'
                    onClick={() => handleClickOpen(project)}
                    sx={{
                      transition: 'background-color 0.3s ease, transform 0.3s ease',
                      '&:hover': {
                        backgroundColor: 'primary.main',
                        transform: 'scale(1.05)',
                      },
                    }}
                  >
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        <ProjectModal open={open} onClose={handleClose} project={selectedProject} />
      </Container>
    </Box>
  );
};

export default Projects;