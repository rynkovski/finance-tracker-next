"use client";
import Box from "@mui/material/Box";
import Hero from "@/components/landing/Hero";
import Highlights from "@/components/landing/Highlights";
import Pricing from "@/components/landing/Pricing";
import Features from "@/components/landing/Features";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";
import LandingTopBar from "@/components/landing/LandingTopBar";

export default function LandingPage() {
  return (
    <>
      <LandingTopBar />
      <Hero />
      <Box>
        <Features />
        <Highlights />
        <Pricing />
        <FAQ />
        <Footer />
      </Box>
    </>
  );
}
