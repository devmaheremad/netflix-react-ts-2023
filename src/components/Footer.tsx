import { Grid, Link, Stack } from "@mui/material";

const Footer = () => {
  return (
    <Stack
      px={{ xs: 2, sm: 3, md: 4, lg: 5 }}
      my={6}
      spacing={2}
      direction={"column"}
    >
      <Link
        mx={{ xs: "auto", md: "0" }}
        sx={{
          textTransform: "capitalize",
          color: "#c8c8c8",
          borderRadius: "0",
          maxWidth: "180px",
        }}
        href="#"
      >
        Questions? Contact us
      </Link>
      <Grid container rowSpacing={4}>
        <Grid
          item
          display={"flex"}
          justifyContent={{ xs: "center", md: "start" }}
          xs={12}
          sm={6}
          lg={3}
        >
          <Stack direction={"column"} spacing={1}>
            <Link
              color={"#c8c8c8"}
              textAlign={{ xs: "center", md: "start" }}
              href="#"
              fontSize={"14px"}
            >
              FAQ
            </Link>
            <Link href="#" color={"#c8c8c8"} fontSize={"14px"}>
              Cookie Preferences
            </Link>
          </Stack>
        </Grid>
        <Grid
          item
          display={"flex"}
          justifyContent={{ xs: "center", md: "start" }}
          xs={12}
          sm={6}
          lg={3}
        >
          <Stack direction={"column"} spacing={1}>
            <Link
              color={"#c8c8c8"}
              textAlign={{ xs: "center", md: "start" }}
              href="#"
              fontSize={"14px"}
            >
              Help Center
            </Link>
            <Link href="#" color={"#c8c8c8"} fontSize={"14px"}>
              Corporate Information
            </Link>
          </Stack>
        </Grid>
        <Grid
          item
          display={"flex"}
          justifyContent={{ xs: "center", md: "start" }}
          xs={12}
          sm={6}
          lg={3}
        >
          <Stack direction={"column"} spacing={1}>
            <Link
              color={"#c8c8c8"}
              textAlign={{ xs: "center", md: "start" }}
              href="#"
              fontSize={"14px"}
            >
              Terms of Use
            </Link>
          </Stack>
        </Grid>
        <Grid
          item
          display={"flex"}
          justifyContent={{ xs: "center", md: "start" }}
          xs={12}
          sm={6}
          lg={3}
        >
          <Stack direction={"column"} spacing={1}>
            <Link
              color={"#c8c8c8"}
              textAlign={{ xs: "center", md: "start" }}
              href="#"
              fontSize={"14px"}
            >
              Privacy
            </Link>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Footer;
