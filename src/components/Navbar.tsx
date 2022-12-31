import { Alert, AppBar, Box, Button, Modal, Toolbar } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  // add color to navbar when scroll
  const [windowScrolled, setWindowScrolled] = useState<boolean>(false);

  const changeColor = () => {
    if (window.scrollY >= 50) {
      setWindowScrolled(true);
    } else {
      setWindowScrolled(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  const { user, logOut } = UserAuth();

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      // console.log(error);
    }
  };
  const [openSuccess, setOpenSuccess] = useState(true);
  const handleClose = () => {
    setOpenSuccess(false);
  };
  useEffect(() => {
    setTimeout(() => {
      user?.email && setOpenSuccess(false);
    }, 1500);
  });

  return (
    <Box sx={{ flexGrow: 1 }} position={"relative"}>
      {user?.email && (
        <Modal
          open={openSuccess}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            border={"none"}
            position={"absolute"}
            left={"2%"}
            bottom={"2%"}
            sx={{
              backdropFilter: "blur(15px)",
              boxShadow: 3,
            }}
          >
            <Alert
              severity="success"
              sx={{
                fontWeight: 700,
                color: "white",
                borderRadius: "0",
                bgcolor: "#000",
                p: 2,
                minWidth: "250px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              You are sign in now!
            </Alert>
          </Box>
        </Modal>
      )}
      <AppBar
        className={windowScrolled ? "navbarWhenScrolled" : "navbarNoScrolled"}
        position="fixed"
        sx={{
          boxShadow: "none",
          transition: "all 0.3s ease-in-out",
          py: { xs: 2, md: 0 },
        }}
      >
        <Toolbar sx={{ px: { xs: 2, sm: 3, md: 4, lg: 5 } }}>
          <Box
            display={"flex"}
            width={"100%"}
            sx={{
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: { xs: "center", sm: "space-between" },
              alignItems: "center",
            }}
          >
            <Box
              display={"flex"}
              justifyContent="center"
              alignItems="center"
              sx={{
                width: { xs: "150px", sm: "200px" },
                height: { xs: "90px", sm: "120px" },
              }}
            >
              <Link to="/netflix-react-ts-2023" className="align-items-center">
                <svg
                  width={200}
                  height={55}
                  viewBox="0 0 111 30"
                  data-uia="netflix-logo"
                  className="svg-icon svg-icon-netflix-logo"
                  aria-hidden="true"
                  focusable="false"
                >
                  <g fill="#e50914">
                    <path
                      d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"
                      id="Fill-14"
                    ></path>
                  </g>
                </svg>
              </Link>
            </Box>
            <Box
              display={"flex"}
              gap={2}
              flexWrap={"wrap"}
              flexDirection={"row"}
              sx={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {user?.email ? (
                <>
                  <Link className="text-decoration-none" to="/account">
                    <Button
                      variant="text"
                      sx={{
                        textTransform: "capitalize",
                        height: "40px",
                        color: "white",
                        borderRadius: "0",
                        fontWeight: "700",
                        minWidth: "120px",
                      }}
                    >
                      Account
                    </Button>
                  </Link>
                  <Button
                    onClick={handleLogout}
                    variant="contained"
                    sx={{
                      color: "white",
                      borderRadius: "0",
                      height: "40px",
                      textTransform: "capitalize",
                      fontWeight: "700",
                      minWidth: "120px",
                    }}
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Link className="text-decoration-none" to="/signin">
                    <Button
                      variant="text"
                      sx={{
                        textTransform: "capitalize",
                        height: "40px",
                        color: "white",
                        borderRadius: "0",
                        fontWeight: "700",
                        minWidth: "120px",
                      }}
                    >
                      Sign in
                    </Button>
                  </Link>
                  <Link className="text-decoration-none" to="/signup">
                    <Button
                      variant="contained"
                      sx={{
                        color: "white",
                        borderRadius: "0",
                        height: "40px",
                        textTransform: "capitalize",
                        fontWeight: "700",
                        minWidth: "120px",
                      }}
                    >
                      Sign up
                    </Button>
                  </Link>
                </>
              )}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
