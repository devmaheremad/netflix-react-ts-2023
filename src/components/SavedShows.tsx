import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Autoplay } from "swiper";
import { useEffect, useState } from "react";
import { moviePropsTypes } from "../types/HeroHeader.types";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { doc, updateDoc, onSnapshot } from "firebase/firestore";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "./Slider/slider.css";

const SavedShows = () => {
  const { user } = UserAuth();
  const [movies, setMovies] = useState<moviePropsTypes[]>([
    {} as moviePropsTypes,
  ]);
  useEffect(() => {
    onSnapshot(doc(db, "user", `${user?.email}`), (doc) => {
      setMovies(doc.data()?.savedMovies);
    });
  }, [user?.email]);

  const moviesRefBeforeDeleteOne = doc(db, "user", `${user?.email}`);

  const deleteMovie = async (movieId: number) => {
    const restMovies = movies.filter((movie) => movie.id !== movieId);
    try {
      await updateDoc(moviesRefBeforeDeleteOne, {
        savedMovies: restMovies,
      });
    } catch (error) {
      // console.log(error);
    }
  };

  return (
    <>
      {movies.length === 0 ? (
        <Box px={{ xs: 2, sm: 3, md: 4, lg: 5 }}>
          <Typography variant="h5" color="white">
            No saved movies here!
            <br /> Go to your home page and save some of it to have it here!
          </Typography>
        </Box>
      ) : (
        <Swiper
          loop={movies.length > 5}
          autoplay={{
            delay: 4000,
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
            const { backdrop_path, title, id: movieId } = movie;
            return (
              <SwiperSlide className="movieSlider max-w-300px" key={index}>
                <Box position={"relative"} zIndex={1}>
                  {backdrop_path && (
                    <img
                      className="max-w-300px"
                      src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
                      alt={title}
                    />
                  )}
                  <Box
                    zIndex={2}
                    position={"absolute"}
                    left={0}
                    top={0}
                    width={"100%"}
                    height={"100%"}
                    bgcolor={"black"}
                    sx={{ opacity: 0.35 }}
                  ></Box>
                </Box>
                <Box
                  onClick={() => deleteMovie(movieId)}
                  position={"absolute"}
                  left={0}
                  top={0}
                  m={2}
                  zIndex={3}
                  sx={{ cursor: "pointer" }}
                >
                  <svg
                    width={"20px"}
                    height={"20px"}
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
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </Box>
                <Box
                  zIndex={2}
                  position={"absolute"}
                  top={0}
                  left={0}
                  width={"100%"}
                  height={"100%"}
                  bgcolor={"#000"}
                  sx={{ opacity: 0 }}
                  className="movieSlider__blackLyer"
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Typography
                    fontWeight={"bold"}
                    variant="body2"
                    color="white"
                    textAlign={"center"}
                  >
                    {title}
                  </Typography>
                </Box>
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </>
  );
};

export default SavedShows;
