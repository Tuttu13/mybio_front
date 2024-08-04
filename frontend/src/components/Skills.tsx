import CloudIcon from '@mui/icons-material/Cloud';
import CodeIcon from '@mui/icons-material/Code';
import ComputerIcon from '@mui/icons-material/Computer';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import GitHubIcon from '@mui/icons-material/GitHub';
import StorageIcon from '@mui/icons-material/Storage';
import {Box,Card,CardContent,Container,Grid,List,ListItem,ListItemIcon,ListItemText,Typography} from "@mui/material";
import React from "react";

const frontendSkills = ["TypeScript", "React"];
const backendSkills = ["Python", "Django"];
const databaseSkills = ["Postgres", "MySQL", "MongoDB"];
const infrastructureSkills = ["AWS", "Docker"];
const versionControlSkills = ["Git"];
const operatingSystemSkills = ["Linux"];

const Skills: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: "#E0F7FA", py: 8 }}>
      <Container id="skills">
        <Typography variant='h3' component='h2' gutterBottom>
          My Skills
        </Typography>
        <Typography variant="body1" paragraph>
          私自身得意としている技術
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <Card sx={{ backgroundColor: '#FFFFFF', boxShadow: 3, flex: 1 }}>
                <CardContent>
                  <Typography variant="h4" component="h3" gutterBottom sx={{ color: 'black' }}>
                    フロントエンド
                  </Typography>
                  <List>
                    {frontendSkills.map((skill, index) => (
                      <ListItem key={index}>
                        <ListItemIcon>
                          <CodeIcon sx={{ color: '#00796B', fontSize: 30 }} />
                        </ListItemIcon>
                        <ListItemText primary={skill} primaryTypographyProps={{ variant: 'body1', fontWeight: 'bold', color: 'black' }} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <Card sx={{ backgroundColor: '#FFFFFF', boxShadow: 3, flex: 1 }}>
                <CardContent>
                  <Typography variant="h4" component="h3" gutterBottom sx={{ color: 'black' }}>
                    バックエンド
                  </Typography>
                  <List>
                    {backendSkills.map((skill, index) => (
                      <ListItem key={index}>
                        <ListItemIcon>
                          <DeveloperModeIcon sx={{ color: '#00796B', fontSize: 30 }} />
                        </ListItemIcon>
                        <ListItemText primary={skill} primaryTypographyProps={{ variant: 'body1', fontWeight: 'bold', color: 'black' }} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <Card sx={{ backgroundColor: '#FFFFFF', boxShadow: 3, flex: 1 }}>
                <CardContent>
                  <Typography variant="h4" component="h3" gutterBottom sx={{ color: 'black' }}>
                    データベース
                  </Typography>
                  <List>
                    {databaseSkills.map((skill, index) => (
                      <ListItem key={index}>
                        <ListItemIcon>
                          <StorageIcon sx={{ color: '#00796B', fontSize: 30 }} />
                        </ListItemIcon>
                        <ListItemText primary={skill} primaryTypographyProps={{ variant: 'body1', fontWeight: 'bold', color: 'black' }} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <Card sx={{ backgroundColor: '#FFFFFF', boxShadow: 3, flex: 1 }}>
                <CardContent>
                  <Typography variant="h4" component="h3" gutterBottom sx={{ color: 'black' }}>
                    インフラ
                  </Typography>
                  <List>
                    {infrastructureSkills.map((skill, index) => (
                      <ListItem key={index}>
                        <ListItemIcon>
                          <CloudIcon sx={{ color: '#00796B', fontSize: 30 }} />
                        </ListItemIcon>
                        <ListItemText primary={skill} primaryTypographyProps={{ variant: 'body1', fontWeight: 'bold', color: 'black' }} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <Card sx={{ backgroundColor: '#FFFFFF', boxShadow: 3, flex: 1 }}>
                <CardContent>
                  <Typography variant="h4" component="h3" gutterBottom sx={{ color: 'black' }}>
                    バージョン管理
                  </Typography>
                  <List>
                    {versionControlSkills.map((skill, index) => (
                      <ListItem key={index}>
                        <ListItemIcon>
                          <GitHubIcon sx={{ color: '#00796B', fontSize: 30 }} />
                        </ListItemIcon>
                        <ListItemText primary={skill} primaryTypographyProps={{ variant: 'body1', fontWeight: 'bold', color: 'black' }} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <Card sx={{ backgroundColor: '#FFFFFF', boxShadow: 3, flex: 1 }}>
                <CardContent>
                  <Typography variant="h4" component="h3" gutterBottom sx={{ color: 'black' }}>
                    OS
                  </Typography>
                  <List>
                    {operatingSystemSkills.map((skill, index) => (
                      <ListItem key={index}>
                        <ListItemIcon>
                          <ComputerIcon sx={{ color: '#00796B', fontSize: 30 }} />
                        </ListItemIcon>
                        <ListItemText primary={skill} primaryTypographyProps={{ variant: 'body1', fontWeight: 'bold', color: 'black' }} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;
