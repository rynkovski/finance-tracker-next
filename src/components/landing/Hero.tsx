import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={{
        width: "100%",
        height: "100dvh",
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
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
            <Button variant="contained" color="primary">
              Get started
            </Button>
            <Button variant="outlined" color="primary">
              Learn more
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
