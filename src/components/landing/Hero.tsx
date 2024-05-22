import { SignedOut, SignInButton } from "@clerk/nextjs";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function Hero() {
  return (
    <Box id="hero" width="100%">
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: { xs: 18, sm: 32 },
          pb: { xs: 8, sm: 26 },
        }}
      >
        <Stack spacing={2} useFlexGap sx={{ width: { xs: "100%", sm: "90%" } }}>
          <Typography
            variant="h1"
            fontWeight={600}
            fontSize="clamp(3.5rem, 10vw, 4rem)"
            display={"flex"}
            flexWrap={"wrap"}
            justifyContent="center"
            textAlign={"center"}
          >
            Track your&nbsp;
            <Typography
              component="span"
              variant="h1"
              fontWeight={600}
              fontSize="clamp(3.5rem, 10vw, 4rem)"
              color="primary"
            >
              finances&nbsp;
            </Typography>
            with ease and precision
          </Typography>
          <Typography textAlign="center" color="text.secondary">
            Take control of your money and achieve your financial goals
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            alignSelf="center"
            spacing={1}
            useFlexGap
            sx={{ pt: 2, width: { xs: "100%", sm: "auto" } }}
          >
            <SignedOut>
              <SignInButton>
                <Button variant="contained" color="primary">
                  Get started
                </Button>
              </SignInButton>
            </SignedOut>

            <Button variant="outlined" color="primary">
              Learn more
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
