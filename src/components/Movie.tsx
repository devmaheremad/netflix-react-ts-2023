import { Box, Typography } from "@mui/material";
import { UserAuth } from "../context/AuthContext";
import { useState } from "react";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { MoviePropsType } from "../types/MoviePropsType.type";
import { db } from "../firebase";

const Movie = ({ movie }: MoviePropsType) => {
  const [like, setLike] = useState<boolean>(false);
  const { user } = UserAuth();
  const { id, title, backdrop_path } = movie;
  const movieId = doc(db, "user", `${user?.email}`);

  const saveMovie = async () => {
    if (user?.email) {
      setLike(true);
      await updateDoc(movieId, {
        savedMovies: arrayUnion({
          id: id,
          title: title,
          backdrop_path: backdrop_path,
        }),
      });
    } else {
      alert("Please login first!");
    }
  };

  return (
    <>
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
        <Typography fontWeight={"bold"} variant="body2" color="white">
          {title}
        </Typography>

        <Box
          onClick={saveMovie}
          position={"absolute"}
          left={0}
          top={0}
          m={2}
          sx={{ cursor: "pointer" }}
        >
          {like ? (
            <svg
              width={"25px"}
              height={"25px"}
              xmlns="http://www.w3.org/2000/svg"
              fill="#e50914"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#e50914"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          ) : (
            <svg
              width={"25px"}
              height={"25px"}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#fff"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          )}
        </Box>
      </Box>
    </>
  );
};

export default Movie;
