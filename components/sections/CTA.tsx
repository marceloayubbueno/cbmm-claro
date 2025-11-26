"use client";

import Button from "../ui/Button";

export default function CTA() {
  return (
    <section className="relative py-20 lg:py-24">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-testimonial" aria-hidden="true" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* CTA Content */}
          <div 
            className="mb-8" 
            data-aos="fade-up" 
            data-aos-delay="150"
            data-aos-duration="1000"
          >
            <p className="text-sm font-semibold text-blue-400 mb-4">
              What are you waiting for?
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold leading-[44px] text-white">
              Get the only custom super card
            </h2>
          </div>

          {/* Buttons */}
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1000"
          >
            <Button href="/apply" variant="secondary">
              Get your card
            </Button>
            <Button href="#0" variant="outline" className="border-slate-600 text-white hover:bg-slate-600">
              Get in touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

