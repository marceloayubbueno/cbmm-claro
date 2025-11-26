"use client";

import Button from "../ui/Button";

const physicalStores = [
  "Starbucks",
  "Tesco",
  "American Eagle",
  "Bershka",
  "Sainsbury's",
  "Marks & Spencer",
  "Primark",
  "SportsDirect",
];

const onlineStores = [
  "Amazon Prime",
  "Universal Store",
  "Apple One",
  "Booking.com",
  "Netflix",
  "Deliveroo",
  "Spotify",
  "Well Made Clothes",
];

const CheckIcon = () => (
  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <circle className="fill-blue-500" cx="10" cy="10" r="10" />
    <path
      className="fill-white"
      d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z"
    />
  </svg>
);

export default function Cashback() {
  return (
    <section className="relative py-20 lg:py-24">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-section-light opacity-50" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-section-white opacity-30" aria-hidden="true" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2
              className="text-3xl sm:text-4xl lg:text-[44px] font-bold leading-[44px] text-slate-800 mb-6"
              data-aos="fade-up"
              data-aos-delay="150"
              data-aos-duration="1000"
            >
              Get cashback rewards on your favourite brands
            </h2>
            <p
              className="text-base sm:text-lg text-slate-500 mb-8"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1000"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>

            {/* Lists */}
            <div
              className="grid sm:grid-cols-2 gap-8 mb-8"
              data-aos="fade-up"
              data-aos-delay="450"
              data-aos-duration="1000"
            >
              {/* Physical Stores */}
              <div>
                <h5 className="text-base font-bold text-slate-800 mb-4">Physical Stores</h5>
                <ul className="space-y-3">
                  {physicalStores.map((store, index) => (
                    <li 
                      key={index} 
                      className="flex items-center gap-3"
                      data-aos="fade-right"
                      data-aos-delay={300 + index * 50}
                    >
                      <CheckIcon />
                      <span className="text-slate-500 text-base">{store}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Online Stores */}
              <div>
                <h5 className="text-base font-bold text-slate-800 mb-4">Online Stores</h5>
                <ul className="space-y-3">
                  {onlineStores.map((store, index) => (
                    <li 
                      key={index} 
                      className="flex items-center gap-3"
                      data-aos="fade-right"
                      data-aos-delay={300 + index * 50}
                    >
                      <CheckIcon />
                      <span className="text-slate-500 text-base">{store}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Button */}
            <div data-aos="fade-up" data-aos-delay="300">
              <Button href="/apply" variant="secondary">
                Get your card
              </Button>
            </div>
          </div>

          {/* Image */}
          <div 
            className="relative" 
            data-aos="zoom-in" 
            data-aos-delay="250"
            data-aos-duration="1200"
          >
            <div className="w-full aspect-square bg-slate-200 rounded-lg flex items-center justify-center">
              <span className="text-slate-500">Features Image</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

