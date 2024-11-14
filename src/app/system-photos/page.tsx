import SystemPhotosCarousel from "./SystemPhotosCarousel";

export const metadata = {
  title: "Call center system photos | Cloud9 Innovations",
  description: "This is system photos page",
};

const SystemPhotosPage = () => {
  return (
    <section className="pb-[120px] pt-[150px]">
      <div className="">
        <div className=" flex flex-wrap justify-center">
          <div className="w-max lg:w-8/12">
            <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl">
              Cloud9 Innovations Call Center System Photos
            </h2>
            <div className="mb-10">
              <a
                href="/demo-request"
                className="inline-flex items-center justify-center rounded-full bg-amber-400 px-4 py-2 text-sm font-semibold text-black hover:bg-opacity-90"
              >
                Request demo
              </a>
            </div>
            <p className="mb-10 text-base font-medium text-body-color">
              Here are some images of our call center system. These photos provide a glimpse into the features and capabilities of our system.
            </p>
            <SystemPhotosCarousel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemPhotosPage;
