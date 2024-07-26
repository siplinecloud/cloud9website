import SectionTitle from "../Common/SectionTitle";
import SingleData from "./singleData";
import OfferData from "./offerData";

const WhyUs = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="What We Offer"
            paragraph="At Cloud9 Innovations, we provide advanced communication tools tailored for your call center, ensuring efficiency, scalability, and exceptional performance."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {OfferData.map((offer) => (
              <SingleData key={offer.id} offer={offer} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyUs;
