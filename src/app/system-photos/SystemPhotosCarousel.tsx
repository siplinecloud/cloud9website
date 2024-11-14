"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [
  { src: "/images/cloud9/cloud5.png", alt: "Cloud5" },
  { src: "/images/cloud9/admin-dashboard.png", alt: "Admin Dashboard" },
  { src: "/images/cloud9/agent-dashboard.png", alt: "Agent Dashboard" },
  { src: "/images/cloud9/Screenshot 2024-11-14 195616.png", alt: "Screenshot" },
  { src: "/images/cloud9/heatmap.png", alt: "Heatmap" },
];

const SystemPhotosCarousel = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
      className="mb-10 w-full overflow-hidden rounded"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
            <a href={image.src} target="_blank" rel="noopener noreferrer">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover object-center"
              />
            </a>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SystemPhotosCarousel;
