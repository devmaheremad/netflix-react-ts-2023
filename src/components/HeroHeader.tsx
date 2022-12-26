import { Box, Button, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import moviesRequest from "../api/moviesRequest";
import { moviesToNotShow } from "../constants/constants";
import { moviePropsTypes } from "../types/HeroHeader.types";

const HeroHeader = () => {
  const [movies, setMovies] = useState<[moviePropsTypes]>([
    {} as moviePropsTypes,
  ]);
  useEffect(() => {
    axios
      .get(
        moviesRequest[Math.floor(Math.random() * moviesRequest.length)]
          .requestLink
      )
      .then((res) => setMovies(res.data.results));
  }, []);

  // Films without girls photos, cuz on my crush
  let finalRes: [moviePropsTypes] = [{} as moviePropsTypes];

  for (let i = 0; i < movies.length; i++) {
    if (!moviesToNotShow.includes(movies[i].title)) {
      finalRes.push(movies[i]);
    }
  }
  const movie = finalRes[Math.floor(Math.random() * finalRes.length)];

  const { title, overview, release_date } = movie;
  return (
    <Box height={"75vh"} position={"relative"}>
      <Box
        position={"absolute"}
        left={0}
        top={0}
        width={"100%"}
        height={"100%"}
      >
        <Box
          zIndex={2}
          position={"absolute"}
          left={0}
          top={0}
          width={"100%"}
          height={"100%"}
          bgcolor={"black"}
          sx={{ opacity: 0.45 }}
        ></Box>
        {movie?.backdrop_path && (
          <img
            style={{
              width: "100%",
              objectFit: "cover",
              height: "100%",
              zIndex: 1,
              position: "absolute",
              left: "0",
              top: "0",
            }}
            src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
            alt={title}
            loading="lazy"
          />
        )}
        <Box
          px={{ xs: 2, sm: 3, md: 4, lg: 5 }}
          width={"100%"}
          position={"relative"}
          zIndex={3}
          top={"50%"}
          left={0}
          sx={{ transform: { xs: "translateY(-17%)", sm: "translateY(-50%)" } }}
        >
          <Typography variant="h4" color="white" m={0}>
            {title}
          </Typography>
          <Box
            mt={1}
            mb={3}
            display={"flex"}
            gap={2}
            flexWrap={"wrap"}
            flexDirection={"row"}
            sx={{
              justifyContent: "start",
              alignItems: "center",
            }}
          >
            <Button
              variant="contained"
              sx={{
                borderRadius: "0",
                color: "black",
                textTransform: "capitalize",
                fontWeight: "700",
                minWidth: "120px",
                bgcolor: "white",
                "&:hover": {
                  color: "white",
                },
              }}
            >
              Play
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              sx={{
                borderRadius: "0",
                textTransform: "capitalize",
                color: "white",
                fontWeight: "700",
                minWidth: "120px",
              }}
            >
              Watch later
            </Button>
          </Box>
          <Typography variant="h6" color="#c8c8c8" mb={1}>
            Released {release_date}
          </Typography>
          <Typography
            variant="subtitle1"
            color="white"
            m={0}
            maxWidth={"650px"}
            textAlign={"justify"}
          >
            {overview?.length > 200 ? `${overview.slice(0, 150)}...` : overview}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroHeader;
