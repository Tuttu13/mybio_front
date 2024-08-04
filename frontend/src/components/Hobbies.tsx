import {
  Box,
  Container,
  Typography
} from "@mui/material";
import React from "react";
import Slider from "react-slick";
import whiskeyImage from "../assets/whiskey.jpg";
import whiskeyImage2 from "../assets/whiskey2.jpg"; // 追加の画像
import whiskeyImage3 from "../assets/whiskey3.jpg"; // 追加の画像

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const Hobbies: React.FC = () => {
  // const whiskeyHobbies = ["Tasting", "Collecting", "Exploring different brands"];
  // const readingHobbies = ["Fiction", "Non-fiction", "Technical books"];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Box sx={{ backgroundColor: "#33C1C1", py: 8 }}>
      <Container id="hobbies" sx={{ textAlign: "left" }}>
        <Typography variant="h3" component="h2" gutterBottom>
          Hobby
        </Typography>
        <Typography variant="body1" paragraph>
          個人的な趣味紹介を写真で紹介します！
        </Typography>
        <Box sx={{ mt: 4 }}>
          <Typography variant="h4" component="h3" gutterBottom>
            Gallery
          </Typography>
          <Box sx={{ mb: 2 }}>
            <Slider {...settings}>
              <div>
                <img src={whiskeyImage} alt="Whiskey" style={{ width: '100%', height: '100%', borderRadius: '8px' }} />
              </div>
              <div>
                <img src={whiskeyImage2} alt="Whiskey" style={{ width: '100%', height: '100%', borderRadius: '8px' }} />
              </div>
              <div>
                <img src={whiskeyImage3} alt="Whiskey" style={{ width: '100%', height: '100%', borderRadius: '8px' }} />
              </div>
            </Slider>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Hobbies;
