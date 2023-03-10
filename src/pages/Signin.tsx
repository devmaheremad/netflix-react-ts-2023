import {
  Alert,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { bgImageforSignupPage } from "../constants/constants";
import { UserAuth } from "../context/AuthContext";
import "./signStyle.css";

const Signin = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const { logIn } = UserAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/netflix-react-ts-2023");
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <Box
      minWidth={"100vw"}
      minHeight={"100vh"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      position={"relative"}
      sx={{
        background: `url(${bgImageforSignupPage}) center no-repeat`,
        backgroundSize: "cover",
      }}
    >
      <Box
        position={"absolute"}
        top={0}
        left={0}
        width={"100%"}
        height={"100%"}
        bgcolor={{ xs: "#000", md: "#000000a8" }}
        zIndex={1}
      ></Box>
      <Box
        px={{ xs: 4, sm: 5, md: 7 }}
        py={{ xs: 5, sm: 6, md: 8 }}
        width={{ xs: "100%", sm: "450px" }}
        minHeight={"550px"}
        position={"relative"}
        zIndex={2}
        bgcolor={"#00000000"}
        sx={{ backdropFilter: "blur(15px)" }}
      >
        <Typography
          variant="h4"
          component={"h1"}
          color="white"
          mb={3}
          fontWeight={700}
        >
          Sign In
        </Typography>
        {error && (
          <Alert
            sx={{
              mb: 3,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            severity="error"
          >
            {error.match(/invalid-email/gi)
              ? "Invalid email"
              : error.match(/wrong-password/gi)
              ? "Wrong password"
              : "User not found, please create one!"}
          </Alert>
        )}
        <form onSubmit={handleSubmit} className="signForm">
          <TextField
            type={"email"}
            required
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            sx={{ display: "block", bgcolor: "#1d222b", mb: 2 }}
            label="Email"
            variant="filled"
          />
          <TextField
            required
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            sx={{ display: "block", bgcolor: "#1d222b", mb: 4 }}
            type={"password"}
            label="Password"
            variant="filled"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              height: "50px",
              borderRadius: "0",
              color: "white",
              textTransform: "capitalize",
              fontWeight: "700",
              minWidth: "120px",
              mb: 2,
            }}
          >
            Sign In
          </Button>
          <FormControlLabel
            control={<Checkbox sx={{ pr: 2 }} />}
            label="Remember me?"
          />
        </form>
        <Stack
          mt={4}
          display={"flex"}
          justifyContent={"start"}
          alignItems={"center"}
          spacing={1}
          direction={"row"}
        >
          <Typography variant="body1" color="GrayText">
            New to Netflix?
          </Typography>
          <Link to={"/signup"} className="text-decoration-none">
            <Button
              variant="text"
              sx={{
                color: "white",
                fontWeight: "700",
                textTransform: "capitalize",
              }}
            >
              Sign Up
            </Button>
          </Link>
        </Stack>
      </Box>
    </Box>
  );
};

export default Signin;
