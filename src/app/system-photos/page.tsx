
import Image from "next/image";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Call center system photos | Cloud9 Innovations",
  description: "This is system photos page",
  // other metadata
};

const systemPhotos = () => {
  return (
    <>
      <section className="pb-[120px] pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                Cloud9 Innovations Call Center System Photos
                </h2>
                <div className="mb-10 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
                 
                  <div className="mb-5">
                    <a
                      href="/demo-request"
                      className="inline-flex items-center justify-center rounded-full bg-amber-400 px-4 py-2 text-sm font-semibold text-black hover:bg-opacity-90 hover:shadow-btn-hover"
                    >
                      Request demo
                    </a>
                  </div>
                </div>
                <div>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  Here are some images of our call center system. These photos provide a glimpse into the features and capabilities of our system.
                  </p>
                  <div className="mb-10 w-full overflow-hidden rounded">
                    <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                    <a href="/images/cloud9/cloud5.png" target="_blank" rel="noopener noreferrer">
                      <Image
                        src="/images/cloud9/cloud5.png"
                        alt="image"
                        fill
                        className="object-cover object-center"
                      />
                      </a>
                    </div>
                  </div>
                  <div className="mb-10 w-full overflow-hidden rounded">
                    <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                    <a href="/images/cloud9/cloud3.png" target="_blank" rel="noopener noreferrer">
                      <Image
                        src="/images/cloud9/cloud3.png"
                        alt="image"
                        fill
                        className="object-cover object-center"
                      />
                      </a>
                    </div>
                  </div>
                  <div className="mb-10 w-full overflow-hidden rounded">
                    <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                    <a href="/images/cloud9/cloud1.png" target="_blank" rel="noopener noreferrer">
                      <Image
                        src="/images/cloud9/cloud1.png"
                        alt="image"
                        fill
                        className="object-cover object-center"
                      />
                      </a>
                    </div>
                  </div>
                  <div className="mb-10 w-full overflow-hidden rounded">
                    <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                    <a href="/images/cloud9/cloud2.png" target="_blank" rel="noopener noreferrer">
                      <Image
                        src="/images/cloud9/cloud2.png"
                        alt="image"
                        fill
                        className="object-cover object-center"
                      />
                      </a>
                    </div>
                  </div>
                  
                  <div className="mb-10 w-full overflow-hidden rounded">
                    <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                    <a href="/images/cloud9/cloud4.png" target="_blank" rel="noopener noreferrer">
                      <Image
                        src="/images/cloud9/cloud4.png"
                        alt="image"
                        fill
                        className="object-cover object-center"
                      />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default systemPhotos;
