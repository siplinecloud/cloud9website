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
  <strong>Email:</strong> info@cloud9innovations.com<br/> 
  <strong>Phone:</strong> +123-456-7890<br/> 
  <strong>Address:</strong> Sunnyside Blantyre Malawi.
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
