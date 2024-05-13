import { SignUp } from "@clerk/nextjs";
import { Container } from "@mui/material";

export default function Page() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 14,
      }}
    >
      <SignUp path="/sign-up" />
    </Container>
  );
}
