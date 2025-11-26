"use client";

import Button from "../ui/Button";

interface PricingPlan {
  name: string;
  price: string;
  image: string;
  features: string[];
  popular?: boolean;
}

const plans: PricingPlan[] = [
  {
    name: "Starter",
    price: "$0/m",
    image: "/images/pricing-01.png",
    features: [
      "Contactless payments",
      "Mobile payments",
      "Extra card (optional)",
      "Free payments worldwide",
      "Free domestic ATM withdrawals",
    ],
  },
  {
    name: "Smart",
    price: "$12/m",
    image: "/images/pricing-02.png",
    features: [
      "Cashback",
      "Travel insurance",
      "3 Extra cards (optional)",
      "Flight insurance",
      "Two-factor authentication",
      "Chatbot and in-app support",
      "Discounted domestic transfers",
    ],
    popular: true,
  },
  {
    name: "You",
    price: "$24/m",
    image: "/images/pricing-03.png",
    features: [
      "Split and settle bills",
      "Money management",
      "5 Extra cards (optional)",
      "Finance tracking",
      "Free and international domestic ATM withdrawals",
    ],
  },
  {
    name: "Black",
    price: "$49/m",
    image: "/images/pricing-04.png",
    features: [
      "Manage subscriptions",
      "Savings vaults",
      "Commission-free stock trade",
      "Crypto and commodities",
      "Free foreign exchange",
    ],
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

export default function Pricing() {
  return (
    <section className="relative py-20 lg:py-24">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-section-light opacity-50" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-section-white opacity-30" aria-hidden="true" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div 
          className="text-center mb-16" 
          data-aos="fade-up"
          data-aos-delay="150"
          data-aos-duration="1000"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold leading-[44px] text-slate-800 mb-6">
            Get the only custom super card you&apos;ll ever need
          </h2>
          <p className="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-lg p-6 shadow-lg ${
                plan.popular ? "bg-gradient-pricing" : ""
              }`}
              data-aos="fade-up"
              data-aos-delay={300 + index * 150}
              data-aos-duration="1000"
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Popular
                </div>
              )}

              {/* Card Header */}
              <div className="text-center mb-6">
                <div className="text-xl font-bold text-slate-800 mb-4">{plan.name}</div>
                <div className="w-full h-24 bg-slate-100 rounded flex items-center justify-center mb-4">
                  <span className="text-slate-500 text-sm">Card Image</span>
                </div>
              </div>

              {/* Price */}
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-slate-800 mb-4">{plan.price}</div>
                <Button
                  href="#0"
                  variant={plan.popular ? "primary" : "secondary"}
                  className="w-full"
                >
                  Get {plan.name}
                </Button>
              </div>

              {/* Features */}
              <div className="mb-4">
                <div className="text-sm font-semibold text-slate-800 mb-3">
                  {index === 0
                    ? "Features include"
                    : index === 1
                    ? "Everything in Starter, plus"
                    : index === 2
                    ? "Everything in Starter, plus"
                    : "Everything in You, plus"}
                </div>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <CheckIcon />
                      <span className="text-slate-500 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

