import { Box, Stack, Typography } from "@mui/material";
import SavedShows from "../components/SavedShows";
import { bgImageforSignupPage } from "../constants/constants";

const Account = () => {
  return (
    <Stack direction={"column"} minHeight={"100vh"}>
      <Box
        height={"55vh"}
        width={"100%"}
        sx={{
          background: `url(${bgImageforSignupPage}) center no-repeat`,
          backgroundSize: "cover",
        }}
        position={"relative"}
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
        <Typography
          position={"absolute"}
          bottom={"10%"}
          zIndex={3}
          variant="h4"
          px={{ xs: 2, sm: 3, md: 4, lg: 5 }}
          fontWeight={"700"}
          color="white"
          component={"h1"}
        >
          My Shows
        </Typography>
      </Box>
      <Box my={4}>
        <SavedShows />
      </Box>
    </Stack>
  );
};

export default Account;
