import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Cloud9 Innovations",
  description: "This is Contact Page for Cloud9",
  // other metadata
};

const ContactPage = () => {

  const description = `
  <span  className="text-white">Email:</span> info@cloud9innovations.com<br/> 
  <span  className="text-white">Phone:</span> +265 111 80 01 01<br/> 
  <span  className="text-white">Address:</span> Sunnyside Blantyre Malawi.
`;
  return (
    <>
      <Breadcrumb
        pageName="Contact Us"
        description={description}
      />

      <Contact />
    </>
  );
};

export default ContactPage;
