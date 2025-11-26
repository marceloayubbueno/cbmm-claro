"use client";

import Button from "../ui/Button";

interface SectionAlternateProps {
  variant: "light" | "dark";
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  quote?: string;
  quoteAuthor?: string;
  reverse?: boolean;
}

export default function SectionAlternate({
  variant,
  title,
  description,
  imageSrc,
  imageAlt,
  quote,
  quoteAuthor,
  reverse = false,
}: SectionAlternateProps) {
  const isDark = variant === "dark";
  const textColor = isDark ? "text-white" : "text-slate-800";
  const bgGradient = isDark
    ? "bg-gradient-testimonial"
    : "bg-gradient-section-light";

  return (
    <section className={`relative py-20 lg:py-24 ${isDark ? "bg-slate-800" : ""}`}>
      {/* Background Gradient */}
      <div className={`absolute inset-0 ${bgGradient} opacity-50`} aria-hidden="true" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`grid lg:grid-cols-2 gap-12 items-center ${
            reverse ? "lg:grid-flow-dense" : ""
          }`}
        >
          {/* Text Column */}
          <div className={reverse ? "lg:col-start-2" : ""}>
            <h2
              className={`text-3xl sm:text-4xl lg:text-[44px] font-bold leading-[44px] ${textColor} mb-6`}
              data-aos="fade-up"
              data-aos-delay="150"
              data-aos-duration="1000"
            >
              {title}
            </h2>
            <p
              className={`text-base sm:text-lg ${isDark ? "text-slate-300" : "text-slate-500"} mb-8`}
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1000"
            >
              {description}
            </p>

            {/* Button */}
            <div 
              className="mb-8" 
              data-aos="fade-up" 
              data-aos-delay="450"
              data-aos-duration="1000"
            >
              <Button href="/apply" variant={isDark ? "secondary" : "secondary"}>
                Get your card
              </Button>
            </div>

            {/* Quote */}
            {quote && (
              <div
                className="flex items-start gap-4"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="w-8 h-8 rounded-full bg-blue-500 flex-shrink-0" />
                <div>
                  <blockquote className={`${isDark ? "text-slate-300" : "text-slate-700"} italic mb-2`}>
                    "{quote}"
                  </blockquote>
                  {quoteAuthor && (
                    <p className={`text-sm ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                      — {quoteAuthor}
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Image Column */}
          <div className={reverse ? "lg:col-start-1 lg:row-start-1" : ""}>
            <div 
              className="relative" 
              data-aos={reverse ? "fade-left" : "fade-right"} 
              data-aos-delay="250"
              data-aos-duration="1200"
            >
              {/* Placeholder para imagem */}
              <div className="w-full aspect-video bg-slate-200 rounded-lg flex items-center justify-center">
                <span className="text-slate-500">{imageAlt}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

