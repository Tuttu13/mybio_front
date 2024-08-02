import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Slide,
    SlideProps,
    Typography
} from "@mui/material";
import React,{forwardRef} from "react";
  
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
    } | null;
  }
  
  const Transition = forwardRef(function Transition(
    props: SlideProps & { children: React.ReactElement<any, any> },
    ref: React.Ref<unknown>,
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  
  const ProjectModal: React.FC<ProjectModalProps> = ({ open, onClose, project }) => {
    return (
      <Dialog
        open={open}
        onClose={onClose}
        TransitionComponent={Transition}
        aria-labelledby="project-dialog-title"
      >
        <DialogTitle id="project-dialog-title">
          {project ? project.title : ""}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {project ? project.description : ""}
          </DialogContentText>
          <Typography variant="h6" gutterBottom>
            Period
          </Typography>
          <DialogContentText>
            {project ? `${project.start_period} - ${project.end_period}` : ""}
          </DialogContentText>
          <Typography variant="h6" gutterBottom>
            Technologies
          </Typography>
          <DialogContentText>
            {project ? project.technologies : ""}
          </DialogContentText>
          <Typography variant="h6" gutterBottom>
            Responsibilities
          </Typography>
          <DialogContentText>
            {project ? project.responsibilities : ""}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    );
  };
  
  export default ProjectModal;
  