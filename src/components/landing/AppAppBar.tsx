import * as React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";

const links = [
  { name: "Features", section: "features" },
  { name: "Testimonials", section: "testimonials" },
  { name: "Highlights", section: "highlights" },
  { name: "Pricing", section: "pricing" },
  { name: "FAQ", section: "faq" },
];

function AppAppBar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: "smooth" });
      window.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      });
      setOpen(false);
    }
  };

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: "transparent",
          backgroundImage: "none",
          mt: 2,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            variant="regular"
            sx={() => ({
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexShrink: 0,
              borderRadius: "20px",
              bgcolor: "#CEE5FD",
              backdropFilter: "blur(24px)",
              maxHeight: 40,
              border: "1px solid",
              borderColor: "divider",
              boxShadow:
                "0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)",
            })}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                ml: "-18px",
                px: 0,
              }}
            >
              <Typography
                color={"black"}
                fontWeight={"700"}
                ml={3}
                sx={{ cursor: "pointer" }}
              >
                budgetify.
              </Typography>

              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                }}
              >
                {links.map((link) => (
                  <MenuItem
                    onClick={() => scrollToSection(link.section)}
                    sx={{ py: "6px", px: "12px", borderRadius: "5px" }}
                  >
                    <Typography
                      variant="body2"
                      color="text.primary"
                      key={link.name}
                    >
                      {link.name}
                    </Typography>
                  </MenuItem>
                ))}
              </Box>
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  gap: 0.5,
                  alignItems: "center",
                }}
              >
                <Button
                  color="primary"
                  variant="text"
                  size="small"
                  component="a"
                  href="/sign-in"
                  target="_blank"
                >
                  Sign in
                </Button>
                <Button
                  color="primary"
                  variant="contained"
                  size="small"
                  component="a"
                  href="/sign-up"
                  target="_blank"
                >
                  Sign up
                </Button>
              </Box>
            </Box>

            <Box sx={{ display: { sm: "", md: "none" } }}>
              <Button
                variant="text"
                color="primary"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ minWidth: "30px", p: "4px" }}
              >
                <MenuIcon />
              </Button>
              <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                <Box
                  sx={{
                    minWidth: "60dvw",
                    p: 2,
                    backgroundColor: "background.paper",
                    flexGrow: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "end",
                      flexGrow: 1,
                    }}
                  ></Box>
                  {links.map((link) => (
                    <MenuItem
                      key={link.name}
                      onClick={() => scrollToSection(link.section)}
                    >
                      {link.name}
                    </MenuItem>
                  ))}

                  <Divider />
                  <MenuItem>
                    <Button
                      color="primary"
                      variant="contained"
                      component="a"
                      href="/sign-up"
                      target="_blank"
                      sx={{ width: "100%" }}
                    >
                      Sign up
                    </Button>
                  </MenuItem>
                  <MenuItem>
                    <Button
                      color="primary"
                      variant="outlined"
                      component="a"
                      href="/sign-in"
                      target="_blank"
                      sx={{ width: "100%" }}
                    >
                      Sign in
                    </Button>
                  </MenuItem>
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default AppAppBar;
