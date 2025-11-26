"use client";

import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const features = [
  "Identity verifications",
  "Secure credit card data tokenization",
  "Online and mobile payments",
  "Global regulations and compliance",
];

const testimonials = [
  {
    image: "/images/testimonial-01.jpg",
    signature: "/images/testimonial-sign-01.svg",
    quote:
      "This card is awesome. The app lets me link foreign cards with a new one which makes everything 100 times easier. Like Apple Pay, online shopping without useless phone confirmation. I wish I knew this earlier.",
    name: "Elisa Koeppel",
    role: "CEO & Co-Founder",
  },
  {
    image: "/images/testimonial-02.jpg",
    signature: "/images/testimonial-sign-02.svg",
    quote:
      "This card allows us to achieve compliance with minimal effort, spend practically no time on payments-related customer support, and keep the user experience on our platform.",
    name: "Maria Gress",
    role: "CEO & Co-Founder",
  },
];

const CheckIcon = () => (
  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
    <path
      className="fill-blue-500"
      d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"
    />
  </svg>
);

export default function Compliance() {
  useEffect(() => {
    // Swiper será inicializado automaticamente
  }, []);

  return (
    <section className="relative py-20 lg:py-24 bg-slate-800">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-testimonial opacity-50" aria-hidden="true" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2
              className="text-3xl sm:text-4xl lg:text-[44px] font-bold leading-[44px] text-white mb-6"
              data-aos="fade-up"
              data-aos-delay="150"
              data-aos-duration="1000"
            >
              Compliance built card for businesses and professionals
            </h2>
            <p
              className="text-base sm:text-lg text-slate-300 mb-8"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1000"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua minim veniam, quis nostrud exercitation.
            </p>
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li 
                  key={index} 
                  className="flex items-center gap-3"
                  data-aos="fade-right"
                  data-aos-delay={450 + index * 120}
                  data-aos-duration="800"
                >
                  <CheckIcon />
                  <span className="text-slate-300 text-base">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Testimonials Carousel */}
          <div 
            className="relative" 
            data-aos="zoom-in" 
            data-aos-delay="250"
            data-aos-duration="1200"
          >
            <Swiper
              modules={[Autoplay, Pagination, EffectFade]}
              effect="fade"
              spaceBetween={30}
              slidesPerView={1}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              className="testimonial-carousel"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-gradient-testimonial rounded-lg overflow-hidden">
                    <div className="w-full h-48 bg-slate-700 flex items-center justify-center">
                      <span className="text-slate-400">Testimonial Image</span>
                    </div>
                    <div className="p-6">
                      <div className="mb-4 h-12 bg-slate-700 rounded flex items-center justify-center">
                        <span className="text-slate-400 text-xs">Signature</span>
                      </div>
                      <p className="text-white text-lg mb-4 italic">"{testimonial.quote}"</p>
                      <div className="text-slate-300 text-sm">
                        <span className="font-semibold">{testimonial.name}</span> —{" "}
                        <span>{testimonial.role}</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

