"use client";

const steps = [
  {
    number: "1",
    title: "Download the app",
    description: "Create cards that work exactly as you configured them. Make real-time decisions on charges and spendings.",
  },
  {
    number: "2",
    title: "Request your card",
    description: "Create cards that work exactly as you configured them. Make real-time decisions on charges and spendings.",
  },
  {
    number: "3",
    title: "Connect all your account",
    description: "Create cards that work exactly as you configured them. Make real-time decisions on charges and spendings.",
  },
];

export default function GetStarted() {
  return (
    <section className="relative py-20 lg:py-24">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-20" aria-hidden="true" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div 
          className="text-center mb-16" 
          data-aos="fade-up"
          data-aos-delay="150"
          data-aos-duration="1000"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold leading-[44px] text-slate-800 mb-6">
            Get started in minutes and connect all your accounts in one place
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Logos Placeholder */}
        <div 
          className="text-center mb-16" 
          data-aos="fade-up" 
          data-aos-delay="300"
          data-aos-duration="1000"
        >
          <div className="w-full max-w-3xl mx-auto aspect-video bg-slate-100 rounded-lg flex items-center justify-center">
            <span className="text-slate-500">Partner Logos</span>
          </div>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="text-center"
              data-aos="fade-up"
              data-aos-delay={450 + index * 150}
              data-aos-duration="1000"
            >
              <div 
                className="mb-6 flex justify-center" 
                data-aos="zoom-in" 
                data-aos-delay={450 + index * 150 + 100}
                data-aos-duration="800"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-hero flex items-center justify-center text-white text-2xl font-bold">
                  {step.number}
                </div>
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-4">{step.title}</h4>
              <p className="text-slate-500 text-base leading-6">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

