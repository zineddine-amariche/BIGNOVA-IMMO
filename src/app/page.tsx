
"use client";
import { ChakraProvider } from "@chakra-ui/react";

import HeroSection from "../components/section_2/hero-section";
import Content from "../components/content";
import Feature from "../components/features";
import Footer from "@/components/footer";
import Header from "@/components/header";
import CaptionCarousel from "@/components/section-carousel";

export default function Home() {
  return (
    <ChakraProvider>
      <main>
        <Header />
        <CaptionCarousel/>
        <HeroSection />
        <Content />
        <Feature />
        <Footer />
      </main>
    </ChakraProvider>
  );
}
