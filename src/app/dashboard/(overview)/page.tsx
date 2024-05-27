"use client";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Copyright from "@/components/copyright";
import Chart, { SimpleLineChart } from "@/components/dashboard/chart";
import BasicCard from "@/components/dashboard/basic-card";

export default function Dashboard() {
  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <BasicCard />
          </Grid>
          <Grid item xs={12} md={4}>
            <BasicCard />
          </Grid>
          <Grid item xs={12} md={4}>
            <BasicCard />
          </Grid>
          <Grid item xs={12} md={8}>
            <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
              <SimpleLineChart />
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: 240,
              }}
            >
              <Chart />
            </Paper>
          </Grid>
        </Grid>
        <Copyright sx={{ pt: 4 }} />
      </Container>
    </>
  );
}
