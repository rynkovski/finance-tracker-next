import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import FacebookIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/X";
import LogoIcon from "../logo-icon";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" mt={1}>
      {"Copyright © "}
      <Link href="https://github.com/rynkovski">rynkovski&nbsp;</Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 4, sm: 8 },
        py: { xs: 8, sm: 10 },
        textAlign: { sm: "center", md: "left" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            minWidth: { xs: "100%", sm: "60%" },
          }}
        >
          <Box sx={{ width: { xs: "100%", sm: "60%" } }}>
            <Stack direction={"row"} spacing={1} mb={2}>
              <LogoIcon />
              <Typography
                color={"black"}
                fontWeight={"700"}
                sx={{ cursor: "pointer" }}
                letterSpacing={1}
              >
                budgetify
              </Typography>
            </Stack>
            <Stack
              direction="row"
              justifyContent="left"
              spacing={1}
              useFlexGap
              sx={{
                color: "text.secondary",
              }}
            >
              <IconButton
                color="inherit"
                href="https://github.com/rynkovski"
                aria-label="GitHub"
                sx={{ alignSelf: "center" }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                color="inherit"
                href="https://twitter.com/MaterialUI"
                aria-label="X"
                sx={{ alignSelf: "center" }}
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                color="inherit"
                href="https://www.linkedin.com/company/mui/"
                aria-label="LinkedIn"
                sx={{ alignSelf: "center" }}
              >
                <LinkedInIcon />
              </IconButton>
            </Stack>
            <Copyright />
          </Box>
        </Box>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Typography variant="body2" fontWeight={600}>
            Product
          </Typography>
          <Link color="text.secondary" href="#">
            Features
          </Link>
          <Link color="text.secondary" href="#">
            Highlights
          </Link>
          <Link color="text.secondary" href="#">
            Pricing
          </Link>
          <Link color="text.secondary" href="#">
            FAQs
          </Link>
        </Box>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Typography variant="body2" fontWeight={600}>
            Company
          </Typography>
          <Link color="text.secondary" href="#">
            About us
          </Link>
          <Link color="text.secondary" href="#">
            Careers
          </Link>
          <Link color="text.secondary" href="#">
            Press
          </Link>
        </Box>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Typography variant="body2" fontWeight={600}>
            Legal
          </Typography>
          <Link color="text.secondary" href="#">
            Terms
          </Link>
          <Link color="text.secondary" href="#">
            Privacy
          </Link>
          <Link color="text.secondary" href="#">
            Contact
          </Link>
        </Box>
      </Box>
    </Container>
  );
}
