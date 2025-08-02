import CloudIcon from '@mui/icons-material/Cloud';
import CodeIcon from '@mui/icons-material/Code';
import ComputerIcon from '@mui/icons-material/Computer';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import GitHubIcon from '@mui/icons-material/GitHub';
import StorageIcon from '@mui/icons-material/Storage';
import {Box,Card,CardContent,Container,Grid,List,ListItem,ListItemIcon,ListItemText,Typography} from "@mui/material";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const frontendSkills = ["TypeScript", "React"];
const backendSkills = ["Python", "Django"];
const databaseSkills = ["Postgres", "MySQL", "MongoDB"];
const infrastructureSkills = ["AWS", "Docker"];
const versionControlSkills = ["Git"];
const operatingSystemSkills = ["Linux"];

const Skills: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        duration: 0.3
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        duration: 0.4
      }
    }
  };

  const skillItemVariants = {
    hidden: { opacity: 0, x: -15 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 }
    }
  };

  const skillsData = [
    {
      title: "フロントエンド",
      skills: frontendSkills,
      icon: CodeIcon,
      color: "#007BFF",
      gradient: "linear-gradient(135deg, #007BFF, #0056b3)"
    },
    {
      title: "バックエンド",
      skills: backendSkills,
      icon: DeveloperModeIcon,
      color: "#28a745",
      gradient: "linear-gradient(135deg, #28a745, #1e7e34)"
    },
    {
      title: "データベース",
      skills: databaseSkills,
      icon: StorageIcon,
      color: "#ffc107",
      gradient: "linear-gradient(135deg, #ffc107, #e0a800)"
    },
    {
      title: "インフラ",
      skills: infrastructureSkills,
      icon: CloudIcon,
      color: "#17a2b8",
      gradient: "linear-gradient(135deg, #17a2b8, #138496)"
    },
    {
      title: "バージョン管理",
      skills: versionControlSkills,
      icon: GitHubIcon,
      color: "#6f42c1",
      gradient: "linear-gradient(135deg, #6f42c1, #59359a)"
    },
    {
      title: "OS",
      skills: operatingSystemSkills,
      icon: ComputerIcon,
      color: "#dc3545",
      gradient: "linear-gradient(135deg, #dc3545, #c82333)"
    }
  ];

  return (
    <Box 
      ref={ref}
      sx={{ 
        background: "linear-gradient(135deg, #E0F7FA 0%, #B2EBF2 100%)", 
        py: 8,
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "radial-gradient(circle at 30% 70%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(255,255,255,0.1) 0%, transparent 50%)",
          pointerEvents: "none"
        }
      }}
    >
      <Container id="skills">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={titleVariants}>
            <Typography 
              variant='h3' 
              component='h2' 
              gutterBottom
              sx={{
                textAlign: "center",
                background: "linear-gradient(45deg, #006666, #004d4d)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: 700,
                position: "relative",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: "-10px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "80px",
                  height: "4px",
                  background: "linear-gradient(45deg, #007BFF, #66D4D4)",
                  borderRadius: "2px"
                }
              }}
            >
              My Skills
            </Typography>
          </motion.div>
          
          <motion.div variants={titleVariants}>
            <Typography 
              variant="body1" 
              paragraph
              sx={{
                textAlign: "center",
                fontSize: "1.1rem",
                color: "#555",
                mt: 3
              }}
            >
              私自身得意としている技術
            </Typography>
          </motion.div>
          
          <Grid container spacing={4} sx={{ mt: 4 }}>
            {skillsData.map((category, categoryIndex) => (
              <Grid item xs={12} sm={6} md={4} key={category.title}>
                <motion.div
                  variants={cardVariants}
                  whileHover={{ 
                    scale: 1.03,
                    transition: { duration: 0.15 }
                  }}
                  style={{ height: "100%" }}
                >
                  <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <Card 
                      sx={{ 
                        background: "rgba(255,255,255,0.9)",
                        backdropFilter: "blur(10px)",
                        boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
                        border: "1px solid rgba(255,255,255,0.2)",
                        flex: 1,
                        borderRadius: 3,
                        overflow: "hidden",
                        position: "relative",
                        "&::before": {
                          content: '""',
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          height: "4px",
                          background: category.gradient
                        }
                      }}
                    >
                      <CardContent sx={{ pt: 3 }}>
                        <Typography 
                          variant="h4" 
                          component="h3" 
                          gutterBottom 
                          sx={{ 
                            color: category.color,
                            fontWeight: 600,
                            textAlign: "center",
                            mb: 3
                          }}
                        >
                          {category.title}
                        </Typography>
                        <List>
                          {category.skills.map((skill, index) => (
                            <motion.div
                              key={index}
                              variants={skillItemVariants}
                              whileHover={{ x: 6 }}
                              transition={{ type: "spring", stiffness: 400 }}
                            >
                              <ListItem>
                                <ListItemIcon>
                                  <category.icon 
                                    sx={{ 
                                      color: category.color, 
                                      fontSize: 30
                                    }} 
                                  />
                                </ListItemIcon>
                                <ListItemText 
                                  primary={skill} 
                                  primaryTypographyProps={{ 
                                    variant: 'body1', 
                                    fontWeight: 'bold', 
                                    color: '#333'
                                  }} 
                                />
                              </ListItem>
                            </motion.div>
                          ))}
                        </List>
                      </CardContent>
                    </Card>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Skills;
