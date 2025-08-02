import {
  Box,
  Button,
  Container,
  Typography,
  Chip,
  IconButton,
} from "@mui/material";
import { 
  Work, 
  RestaurantMenu, 
  BatteryChargingFull, 
  CalendarToday, 
  Build,
  Visibility,
  ArrowBackIos,
  ArrowForwardIos
} from "@mui/icons-material";
import { motion, useInView } from "framer-motion";
import React, { useState, useRef } from "react";
import ProjectModal from "./ProjectModal";

const Projects: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [open, setOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedProject, setSelectedProject] = useState<null | {
    title: string;
    description: string;
    start_period: string;
    end_period: string;
    technologies: string;
    responsibilities: string;
    status: string;
    gradient: string;
    icon: React.ElementType;
  }>(null);

  const projects = [
    {
      title: 'ふるさと納税支払いシステム',
      description: '新規開発案件',
      start_period: '2021年11月',
      end_period: '2022年09月',
      technologies: 'Python,Django,Postgres,Docker',
      responsibilities: '実装 | 単体テスト | 結合テスト | SQL実行計画',
      status: "完了",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      icon: Work,
    },
    {
      title: 'EV車電池分析アプリ',
      description: '運用・保守開発案件',
      start_period: '2022年10月',
      end_period: '2024年03月',
      technologies: 'Python,Django,Postgres,mongoDB,Docker,AWS',
      responsibilities: '詳細設計 | 実装 | 単体テスト | 結合テスト | SQL実行計画',
      status: "完了",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      icon: BatteryChargingFull,
    },
    {
      title: '飲食店オーダーアプリ',
      description: '自社開発アプリ新規開発案件',
      start_period: '2024年04月',
      end_period: '2024年07月',
      technologies: 'React,TypeScript,Python,Django,Postgres,Docker',
      responsibilities: 'DB設計 | 詳細設計 | 実装 | 単体テスト',
      status: "完了",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      icon: RestaurantMenu,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    hidden: { opacity: 0, y: 40, scale: 0.95 },
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

  const handleClickOpen = (project: {
    title: string;
    description: string;
    start_period: string;
    end_period: string;
    technologies: string;
    responsibilities: string;
    status: string;
    gradient: string;
    icon: React.ElementType;
  }) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProject(null);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "開発中": return "#4caf50";
      case "完了": return "#2196f3";
      case "企画中": return "#ff9800";
      default: return "#757575";
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <Box 
      ref={ref}
      sx={{ 
        background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)", 
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
          background: "radial-gradient(circle at 25% 75%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 75% 25%, rgba(255,255,255,0.1) 0%, transparent 50%)",
          pointerEvents: "none"
        }
      }}
    >
      <Container id="projects">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={titleVariants}>
            <Typography 
              variant="h3" 
              component="h2"
              sx={{
                textAlign: "center",
                color: "white",
                fontWeight: 700,
                textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
                position: "relative",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: "-10px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "100px",
                  height: "4px",
                  background: "linear-gradient(45deg, #ffffff, rgba(255,255,255,0.7))",
                  borderRadius: "2px"
                }
              }}
            >
              Projects
            </Typography>
          </motion.div>
          
          <motion.div variants={titleVariants}>
            <Typography 
              variant="body1" 
              paragraph
              sx={{
                textAlign: "center",
                color: "rgba(255,255,255,0.9)",
                fontSize: "1.1rem",
                mt: 3,
                mb: 6
              }}
            >
              今まで参画して来たプロジェクト
            </Typography>
          </motion.div>
          
          {/* スライダーコンテナ */}
          <Box sx={{ position: "relative", maxWidth: "800px", mx: "auto" }}>
            {/* ナビゲーションボタン */}
            <IconButton
              onClick={prevSlide}
              sx={{
                position: "absolute",
                left: -60,
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 2,
                backgroundColor: "rgba(255,255,255,0.2)",
                backdropFilter: "blur(10px)",
                color: "white",
                border: "1px solid rgba(255,255,255,0.3)",
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.3)",
                  transform: "translateY(-50%) scale(1.1)"
                }
              }}
            >
              <ArrowBackIos />
            </IconButton>
            
            <IconButton
              onClick={nextSlide}
              sx={{
                position: "absolute",
                right: -60,
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 2,
                backgroundColor: "rgba(255,255,255,0.2)",
                backdropFilter: "blur(10px)",
                color: "white",
                border: "1px solid rgba(255,255,255,0.3)",
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.3)",
                  transform: "translateY(-50%) scale(1.1)"
                }
              }}
            >
              <ArrowForwardIos />
            </IconButton>

            {/* スライダー */}
            <Box sx={{ overflow: "hidden", borderRadius: 4 }}>
              <motion.div
                animate={{ 
                  x: `calc(-${currentSlide * 100}% - ${currentSlide * 16}px)` 
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                style={{ 
                  display: "flex", 
                  gap: "16px"
                }}
              >
                {projects.map((project, index) => (
                  <Box
                    key={index}
                    sx={{ 
                      minWidth: "calc(100% - 0px)",
                      flexShrink: 0
                    }}
                  >
                    <motion.div
                      whileHover={{ 
                        scale: 1.02,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <Box
                        sx={{
                          position: "relative",
                          borderRadius: 4,
                          overflow: "hidden",
                          background: "linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
                          backdropFilter: "blur(20px)",
                          border: "1px solid rgba(255,255,255,0.2)",
                          boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
                          transition: "all 0.3s ease",
                          cursor: "pointer",
                          height: "450px",
                          "&:hover": {
                            boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
                            transform: "translateY(-5px)",
                            border: "1px solid rgba(255,255,255,0.3)"
                          }
                        }}
                        onClick={() => handleClickOpen(project)}
                      >
                        {/* ヘッダー部分 */}
                        <Box
                          sx={{
                            position: "relative",
                            background: project.gradient,
                            p: 3,
                            color: "white",
                            height: "200px",
                            display: "flex",
                            flexDirection: "column"
                          }}
                        >
                          <Box sx={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", mb: 2 }}>
                            <Box sx={{ flexGrow: 1 }}>
                              <Typography 
                                variant="h5" 
                                component="h3"
                                sx={{
                                  fontWeight: 700,
                                  mb: 1,
                                  textShadow: "0 2px 4px rgba(0,0,0,0.3)"
                                }}
                              >
                                {project.title}
                              </Typography>
                              <Typography 
                                variant="body1" 
                                sx={{ 
                                  opacity: 0.9,
                                  fontWeight: 400
                                }}
                              >
                                {project.description}
                              </Typography>
                            </Box>
                            
                            <Box
                              sx={{
                                width: 56,
                                height: 56,
                                borderRadius: "16px",
                                background: "rgba(255,255,255,0.2)",
                                backdropFilter: "blur(10px)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                ml: 2,
                                boxShadow: "0 4px 16px rgba(0,0,0,0.1)"
                              }}
                            >
                              <project.icon sx={{ fontSize: 28 }} />
                            </Box>
                          </Box>
                          
                          {/* ステータスバッジ */}
                          <Box sx={{ mt: "auto" }}>
                            <Chip
                              label={project.status}
                              sx={{
                                backgroundColor: "rgba(255,255,255,0.2)",
                                color: "white",
                                fontSize: "0.8rem",
                                fontWeight: 600,
                                backdropFilter: "blur(10px)",
                                border: "1px solid rgba(255,255,255,0.3)"
                              }}
                            />
                          </Box>
                        </Box>

                        {/* コンテンツ部分 */}
                        <Box sx={{ p: 3, color: "white", height: "250px", display: "flex", flexDirection: "column" }}>
                          {/* 期間情報 */}
                          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                            <CalendarToday sx={{ fontSize: 18, mr: 1, opacity: 0.8 }} />
                            <Typography variant="body2" sx={{ opacity: 0.9 }}>
                              {project.start_period} - {project.end_period}
                            </Typography>
                          </Box>
                          
                          {/* 技術スタック */}
                          <Box sx={{ mb: 2 }}>
                            <Typography 
                              variant="body2" 
                              sx={{ 
                                fontWeight: 600, 
                                mb: 1,
                                opacity: 0.9
                              }}
                            >
                              使用技術
                            </Typography>
                            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                              {project.technologies.split(',').slice(0, 4).map((tech, techIndex) => (
                                <Box
                                  key={techIndex}
                                  sx={{
                                    px: 1.5,
                                    py: 0.5,
                                    borderRadius: 4,
                                    background: "rgba(255,255,255,0.15)",
                                    backdropFilter: "blur(10px)",
                                    border: "1px solid rgba(255,255,255,0.2)",
                                    fontSize: "0.7rem",
                                    fontWeight: 500,
                                    color: "white"
                                  }}
                                >
                                  {tech.trim()}
                                </Box>
                              ))}
                            </Box>
                          </Box>

                          {/* 担当領域 */}
                          <Box sx={{ mb: 2 }}>
                            <Typography 
                              variant="body2" 
                              sx={{ 
                                fontWeight: 600, 
                                mb: 1,
                                opacity: 0.9
                              }}
                            >
                              担当領域
                            </Typography>
                            <Typography 
                              variant="body2" 
                              sx={{ 
                                opacity: 0.8,
                                fontSize: "0.8rem"
                              }}
                            >
                              {project.responsibilities}
                            </Typography>
                          </Box>

                          {/* アクションボタン */}
                          <Box sx={{ mt: "auto" }}>
                            <Button
                              fullWidth
                              variant="contained"
                              startIcon={<Visibility />}
                              onClick={(e) => {
                                e.stopPropagation();
                                handleClickOpen(project);
                              }}
                              sx={{
                                background: "rgba(255,255,255,0.2)",
                                backdropFilter: "blur(10px)",
                                border: "1px solid rgba(255,255,255,0.3)",
                                color: "white",
                                fontWeight: 600,
                                borderRadius: 2,
                                textTransform: "none",
                                py: 1,
                                "&:hover": {
                                  background: "rgba(255,255,255,0.3)",
                                  transform: "translateY(-1px)"
                                }
                              }}
                            >
                              詳細を見る
                            </Button>
                          </Box>
                        </Box>
                      </Box>
                    </motion.div>
                  </Box>
                ))}
              </motion.div>
            </Box>

            {/* ドットインジケーター */}
            <Box sx={{ display: "flex", justifyContent: "center", mt: 4, gap: 1 }}>
              {projects.map((_, index) => (
                <Box
                  key={index}
                  onClick={() => goToSlide(index)}
                  sx={{
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    background: currentSlide === index 
                      ? "rgba(255,255,255,0.8)" 
                      : "rgba(255,255,255,0.3)",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      background: "rgba(255,255,255,0.6)",
                      transform: "scale(1.2)"
                    }
                  }}
                />
              ))}
            </Box>
          </Box>
        </motion.div>
        
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