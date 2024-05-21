"use client";
import * as React from "react";
import { PaletteMode } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Hero from "@/components/landing/Hero";
import Highlights from "@/components/landing/Highlights";
import Pricing from "@/components/landing/Pricing";
import Features from "@/components/landing/Features";
import Testimonials from "@/components/landing/Testimonials";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";
import LandingTopBar from "@/components/landing/LandingTopBar";

export default function LandingPage() {
  return (
    <>
      <LandingTopBar />
      <Hero />
      {/* <Box>
        <Features />
        <Divider />
        <Testimonials />
        <Divider />
        <Highlights />
        <Divider />
        <Pricing />
        <Divider />
        <FAQ />
        <Divider />
        <Footer />
      </Box> */}
    </>
  );
}
