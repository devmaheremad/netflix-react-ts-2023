import axios from "axios";
import { useEffect, useState } from "react";
import { moviePropsTypes } from "../../types/HeroHeader.types";
import { sliderPropsTypes } from "../../types/slider.types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Typography } from "@mui/material";
import { Movie } from "../index";

// import required modules
import { FreeMode, Navigation, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "./slider.css";

const Slider = ({ title, requestLink }: sliderPropsTypes) => {
  const [movies, setMovies] = useState<[moviePropsTypes]>([
    {} as moviePropsTypes,
  ]);
  useEffect(() => {
    axios.get(requestLink).then((res) => setMovies(res.data.results));
  }, [requestLink]);

  return (
    <>
      <Typography
        sx={{ px: { xs: 2, sm: 3, md: 4, lg: 5 } }}
        variant="h5"
        mb={1}
        mt={3}
        color="white"
      >
        {title}
      </Typography>
      <Swiper
        loop={true}
        autoplay={{
          delay: Math.floor((Math.random() + 1) * 4000),
        }}
        className="movieSwiper"
        navigation
        slidesPerView={"auto"}
        spaceBetween={15}
        freeMode={true}
        modules={[FreeMode, Navigation, Autoplay]}
      >
        <Box className="swiper-button-prev movieSlider__arrows">
          <svg
            width={35}
            height={35}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#e50914"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </Box>
        <Box className="swiper-button-next movieSlider__arrows">
          <svg
            width={35}
            height={35}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#e50914"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </Box>
        {movies.map((movie, index) => {
          return (
            <SwiperSlide className="movieSlider max-w-300px" key={index}>
              <Movie movie={movie} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Slider;
