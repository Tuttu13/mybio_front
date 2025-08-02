import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Slide,
  SlideProps,
  Typography,
  Box,
  Chip,
  Divider,
  IconButton,
  Paper
} from "@mui/material";
import {
  Close,
  CalendarToday,
  Code,
  Assignment,
  Launch
} from "@mui/icons-material";
import { motion } from "framer-motion";
import React, { forwardRef } from "react";
  
  interface ProjectModalProps {
    open: boolean;
    onClose: () => void;
    project: {
      title: string;
      description: string;
      start_period: string;
      end_period: string;
      technologies: string;
      responsibilities: string;
      status?: string;
      gradient?: string;
      icon?: React.ElementType;
    } | null;
  }
  
  const Transition = forwardRef(function Transition(
    props: SlideProps & { children: React.ReactElement<any, any> },
    ref: React.Ref<unknown>,
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  
  const ProjectModal: React.FC<ProjectModalProps> = ({ open, onClose, project }) => {
    if (!project) return null;

    return (
      <Dialog
        open={open}
        onClose={onClose}
        TransitionComponent={Transition}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 4,
            background: "linear-gradient(145deg, rgba(255,255,255,0.95), rgba(255,255,255,0.9))",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.2)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
            overflow: "hidden"
          }
        }}
      >
        {/* ヘッダー部分 */}
        <Box
          sx={{
            position: "relative",
            background: project.gradient || "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            color: "white",
            p: 4,
            pb: 6
          }}
        >
          <IconButton
            onClick={onClose}
            sx={{
              position: "absolute",
              top: 16,
              right: 16,
              color: "white",
              backgroundColor: "rgba(255,255,255,0.1)",
              backdropFilter: "blur(10px)",
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.2)",
                transform: "scale(1.1)"
              }
            }}
          >
            <Close />
          </IconButton>

          <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
            {project.icon && (
              <Box
                sx={{
                  width: 64,
                  height: 64,
                  borderRadius: "16px",
                  background: "rgba(255,255,255,0.2)",
                  backdropFilter: "blur(10px)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mr: 3,
                  boxShadow: "0 8px 24px rgba(0,0,0,0.1)"
                }}
              >
                <project.icon sx={{ fontSize: 32 }} />
              </Box>
            )}
            <Box>
              <Typography 
                variant="h4" 
                component="h2"
                sx={{
                  fontWeight: 700,
                  mb: 1,
                  textShadow: "0 2px 4px rgba(0,0,0,0.3)"
                }}
              >
                {project.title}
              </Typography>
              <Typography 
                variant="h6" 
                sx={{ 
                  opacity: 0.9,
                  fontWeight: 400
                }}
              >
                {project.description}
              </Typography>
            </Box>
          </Box>

          {project.status && (
            <Chip
              label={project.status}
              sx={{
                backgroundColor: "rgba(255,255,255,0.2)",
                color: "white",
                fontSize: "0.9rem",
                fontWeight: 600,
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.3)"
              }}
            />
          )}

          {/* 装飾的な要素 */}
          <Box
            sx={{
              position: "absolute",
              bottom: -30,
              right: -30,
              width: 60,
              height: 60,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.1)",
              pointerEvents: "none"
            }}
          />
        </Box>

        <DialogContent sx={{ p: 0 }}>
          <Box sx={{ p: 4 }}>
            {/* 期間情報 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Paper
                sx={{
                  p: 3,
                  mb: 3,
                  background: "linear-gradient(145deg, rgba(102, 212, 212, 0.1), rgba(102, 212, 212, 0.05))",
                  border: "1px solid rgba(102, 212, 212, 0.2)",
                  borderRadius: 3
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <CalendarToday sx={{ color: "#2c5282", mr: 2 }} />
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      fontWeight: 600,
                      color: "#2c5282"
                    }}
                  >
                    プロジェクト期間
                  </Typography>
                </Box>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: "#4a5568",
                    fontSize: "1.1rem"
                  }}
                >
                  {project.start_period} - {project.end_period}
                </Typography>
              </Paper>
            </motion.div>

            {/* 技術スタック */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Paper
                sx={{
                  p: 3,
                  mb: 3,
                  background: "linear-gradient(145deg, rgba(103, 126, 234, 0.1), rgba(103, 126, 234, 0.05))",
                  border: "1px solid rgba(103, 126, 234, 0.2)",
                  borderRadius: 3
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <Code sx={{ color: "#5a67d8", mr: 2 }} />
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      fontWeight: 600,
                      color: "#5a67d8"
                    }}
                  >
                    使用技術
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {project.technologies.split(',').map((tech, index) => (
                    <Chip
                      key={index}
                      label={tech.trim()}
                      sx={{
                        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                        color: "white",
                        fontWeight: 500,
                        fontSize: "0.9rem",
                        "&:hover": {
                          transform: "translateY(-2px)",
                          boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
                        }
                      }}
                    />
                  ))}
                </Box>
              </Paper>
            </motion.div>

            {/* 担当領域 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Paper
                sx={{
                  p: 3,
                  background: "linear-gradient(145deg, rgba(245, 87, 108, 0.1), rgba(245, 87, 108, 0.05))",
                  border: "1px solid rgba(245, 87, 108, 0.2)",
                  borderRadius: 3
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <Assignment sx={{ color: "#e53e3e", mr: 2 }} />
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      fontWeight: 600,
                      color: "#e53e3e"
                    }}
                  >
                    担当領域・責任範囲
                  </Typography>
                </Box>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: "#4a5568",
                    lineHeight: 1.7,
                    fontSize: "1.1rem"
                  }}
                >
                  {project.responsibilities}
                </Typography>
              </Paper>
            </motion.div>
          </Box>
        </DialogContent>

        <DialogActions 
          sx={{ 
            p: 4, 
            pt: 0,
            background: "linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.5) 100%)"
          }}
        >
          <Button
            onClick={onClose}
            variant="contained"
            startIcon={<Close />}
            sx={{
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              color: "white",
              fontWeight: 600,
              borderRadius: 3,
              textTransform: "none",
              py: 1.5,
              px: 4,
              fontSize: "1rem",
              boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
              "&:hover": {
                transform: "translateY(-2px)",
                boxShadow: "0 8px 24px rgba(0,0,0,0.2)"
              }
            }}
          >
            閉じる
          </Button>
        </DialogActions>
      </Dialog>
    );
  };
  
  export default ProjectModal;
  