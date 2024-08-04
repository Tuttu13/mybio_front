import {Box,Container,Typography} from "@mui/material";
import React from "react";

const About: React.FC = () => {
  return (
    <Box
      id="about"
      sx={{
        backgroundColor: "#99E5E5", // 背景色を #33C1C1 に設定
        py: 8,
      }}
    >
      <Container>
        <Typography variant="h3" component="h2" gutterBottom>
          MY PROFILE
        </Typography>
        <Typography variant="body1" paragraph>
          つっつと申します。主に業務ではPython, Djangoでやらせていただいているので、
          <br />
          Pythonをより深く知り、プロフェッショナルなPythonistになれるように日々取り組んでいます。
          <br />
          個人的なエンジニアとしてのビジョンとしては、フルスタックエンジニアとして活躍したいです。
          <br />
          将来的には、プレイングマネージャーを目指しています！
          <br />
          <br />
          現在は転職活動中です！
          <br />
          ご連絡の際はX（旧Twitter）のDMからよろしくお願いいたします！
        </Typography>
      </Container>
    </Box>
  );
};

export default About;
