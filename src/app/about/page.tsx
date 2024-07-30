import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Cloud9 Innovations",
  description: "This is About Us Page for Cloud9 Innovations",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Us"
        description="At Cloud9 Innovations, we are dedicated to revolutionizing the way businesses communicate. With a strong foundation built on Asterisk PBX, we specialize in creating innovative call center solutions tailored to meet the unique needs of our clients."
      />
      <AboutSectionOne />
      {/* <AboutSectionTwo /> */}
    </>
  );
};

export default AboutPage;
