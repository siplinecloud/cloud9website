import SectionTitle from "../Common/SectionTitle";
import SingleData from "./singleData";
import whyUsData from "./whyUsData";

const WhyUs = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Why Cloud9 Innovations?"
            paragraph="At Cloud9 Innovations, we are committed to delivering exceptional value through our solutions."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {whyUsData.map((whyus) => (
              <SingleData key={whyus.id} whyus={whyus} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyUs;
