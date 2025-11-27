"use client";

import Button from "../ui/Button";
import { Target, ClipboardCheck, TrendingUp } from "lucide-react";

interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  href: string;
}

const features: Feature[] = [
  {
    icon: Target,
    title: "Avaliação de Metas",
    href: "/avaliacao-de-metas",
  },
  {
    icon: ClipboardCheck,
    title: "Avaliação de Competências",
    href: "/avaliacao-de-competencias",
  },
  {
    icon: TrendingUp,
    title: "Gestão de Desenvolvimento",
    href: "/gestao-de-desenvolvimento",
  },
];

export default function Features() {
  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group relative text-center bg-white rounded-3xl p-8 shadow-md border border-gray-100 hover:shadow-2xl transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 150}
                data-aos-duration="1000"
              >
                {/* Icon with gradient background - seguindo padrão do projeto de referência */}
                <div 
                  className="relative mb-6 flex justify-center items-center"
                  data-aos="zoom-in" 
                  data-aos-delay={index * 150 + 100}
                  data-aos-duration="800"
                >
                  <div
                    className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
                  >
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                </div>
                
                {/* Title */}
                <h4 className="text-xl font-bold text-slate-800 mb-6 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {feature.title}
                </h4>
                
                {/* Button */}
                <div>
                  <Button
                    href={feature.href}
                    variant="secondary"
                    className="w-full group-hover:scale-105 transition-transform duration-300"
                  >
                    SAIBA MAIS
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
