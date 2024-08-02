import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

const frontendSkills = ["TypeScript", "React"];
const backendSkills = ["Python", "Django"];
const databaseSkills = ["Postgres", "MySQL", "MongoDB"];
const infrastructureSkills = ["AWS", "Docker"];
const versionControlSkills = ["Git"];
const operatingSystemSkills = ["Linux"];

const Skills: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: "#66E3E0", py: 8 }}>
      <Container id="skills">
        <Typography variant="h3" component="h2" gutterBottom>
          My Skills
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h4" component="h3" gutterBottom>
                  フロントエンド
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                  {frontendSkills.map((skill, index) => (
                    <Box key={index} sx={{ m: 1 }}>
                      <Typography variant="body1">{skill}</Typography>
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h4" component="h3" gutterBottom>
                  バックエンド
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                  {backendSkills.map((skill, index) => (
                    <Box key={index} sx={{ m: 1 }}>
                      <Typography variant="body1">{skill}</Typography>
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h4" component="h3" gutterBottom>
                  データベース
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                  {databaseSkills.map((skill, index) => (
                    <Box key={index} sx={{ m: 1 }}>
                      <Typography variant="body1">{skill}</Typography>
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h4" component="h3" gutterBottom>
                  インフラ
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                  {infrastructureSkills.map((skill, index) => (
                    <Box key={index} sx={{ m: 1 }}>
                      <Typography variant="body1">{skill}</Typography>
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h4" component="h3" gutterBottom>
                  バージョン管理
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                  {versionControlSkills.map((skill, index) => (
                    <Box key={index} sx={{ m: 1 }}>
                      <Typography variant="body1">{skill}</Typography>
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h4" component="h3" gutterBottom>
                  OS
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                  {operatingSystemSkills.map((skill, index) => (
                    <Box key={index} sx={{ m: 1 }}>
                      <Typography variant="body1">{skill}</Typography>
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;
