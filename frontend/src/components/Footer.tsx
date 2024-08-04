import {Box,Typography} from "@mui/material";
import React from "react";

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        py: 2,
        textAlign: "center",
        backgroundColor: "#008080", // 背景色を #008080 に設定
        color: "#fff",
      }}
    >
      <Typography variant="body2">
        &copy; 2024 tuttu13_IPA. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
