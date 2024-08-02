import {Box,Button,Container,TextField,Typography} from "@mui/material";
import axios from "axios";
import React,{useState} from "react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/contact/", formData);
      setResponseMessage(response.data.success);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        setResponseMessage(error.response.data.error);
      } else {
        setResponseMessage("An unexpected error occurred.");
      }
    }
  };

  return (
    <Box sx={{ backgroundColor: "#33B0B0", py: 8 }}>
      <Container id="contact">
        <Typography variant="h3" component="h2" gutterBottom>
          Contact Me
        </Typography>
        {responseMessage && (
          <Typography variant="body1" color="secondary" gutterBottom>
            {responseMessage}
          </Typography>
        )}
        <Box
          component="form"
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          onSubmit={handleSubmit}
        >
          <TextField
            label="Name"
            variant="outlined"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            InputProps={{
              sx: {
                backgroundColor: "#99E6E6", // 33B0B0をベースにした明るい背景色
              },
            }}
          />
          <TextField
            label="Email"
            variant="outlined"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            InputProps={{
              sx: {
                backgroundColor: "#99E6E6", // 33B0B0をベースにした明るい背景色
              },
            }}
          />
          <TextField
            label="Message"
            variant="outlined"
            multiline
            rows={4}
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            InputProps={{
              sx: {
                backgroundColor: "#99E6E6", // 33B0B0をベースにした明るい背景色
              },
            }}
          />
          <Button type="submit" variant="contained" color="primary">
            Send
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
