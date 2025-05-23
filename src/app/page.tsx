import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import WhyUs from "@/components/WhyUs";
import Offer from "@/components/Offer";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Team from "@/components/Team";
import Video from "@/components/Video";
import { Metadata } from "next";
import Hero2 from "@/components/Hero2";
import ResellerInfo from "@/components/reseller";

export const metadata: Metadata = {
  title: "Cloud9 Innovations",
  description: "Cloud9 Innovations Landing page",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      {/* <Hero2 /> */}
      <Features />
      <WhyUs />
      <Video />
      {/* <Brands /> */}
      <AboutSectionOne />
      <ResellerInfo />
      {/* <AboutSectionTwo /> */}
      <Offer />
      <Team />
      {/* <Pricing /> */}
      {/* <Blog /> */}
      <Contact />
    </>
  );
}
