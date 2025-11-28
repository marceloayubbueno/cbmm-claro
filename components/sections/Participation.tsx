"use client";

import { useState } from "react";
import Image from "next/image";

export default function Participation() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <section className="relative pt-8 lg:pt-5 pb-5 lg:pb-5 overflow-hidden bg-gradient-to-b from-[#020617] via-[#041026] to-[#071a34] text-white">
      {/* Curva na parte superior - espelhando o efeito do Hero (curva para baixo) */}
      <div 
        className="absolute top-0 left-0 w-full h-32 lg:h-40 pointer-events-none z-10"
        aria-hidden="true"
      >
        <svg
          className="absolute top-0 left-0 w-full h-full"
          viewBox="0 0 1440 160"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0 L1240 0 Q1400 0 1440 130 L1440 0 L0 0 Z"
            fill="white"
          />
        </svg>
      </div>

      {/* Background Radial Gradient - Mesmo do Footer */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(37,150,255,0.22),_transparent_60%)]"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Column */}
          <div className="text-center lg:text-left">
            {/* Ícone do Ciclo de Gente - Centralizado */}
            <div 
              className="mb-8 flex justify-center"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="800"
            >
              <div className="relative group cursor-pointer">
                {/* Glow effect no hover */}
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"
                />
                {/* Ícone com rotação suave no hover */}
                <div className="relative transition-transform duration-700 ease-in-out group-hover:rotate-[360deg]">
                  <Image
                    src="/images/Ciclo_de_Gente_Icone_v2.png"
                    alt="Ciclo de Gente"
                    width={120}
                    height={120}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-white mb-6 uppercase"
              data-aos="fade-up"
              data-aos-delay="150"
              data-aos-duration="1000"
            >
              Quem participa do Ciclo de Gente?
            </h2>
            <p
              className="text-sm sm:text-base text-slate-300 mb-4 leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1000"
            >
              Os colaboradores participantes do Ciclo de Gente são selecionados anualmente de acordo com as diretrizes estratégicas da CBMM.
            </p>
            <p
              className="text-sm sm:text-base text-slate-300 mb-6 leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1000"
            >
              Atualmente, os seguintes grupos de cargos/atividades estão contemplados:
            </p>
            
            {/* Lista */}
            <ul className="space-y-3 text-left" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
              <li className="flex items-start gap-3">
                <div className="relative mt-1.5 flex-shrink-0">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  <div className="absolute inset-0 w-2 h-2 bg-blue-500 rounded-full animate-ping opacity-75" />
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Colaboradores admitidos ou movimentados de posição, até 30 de setembro.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="relative mt-1.5 flex-shrink-0">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  <div className="absolute inset-0 w-2 h-2 bg-blue-500 rounded-full animate-ping opacity-75" />
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Colaborados com cargos de Presidente, Diretores, Gerentes Executivos, Gerentes, Especialistas, Coordenadores e equipes ligadas aos gestores dos cargos descritos, exceto o público Técnico e Operacional da CBMM.
                </p>
              </li>
            </ul>
          </div>

          {/* Visual Column */}
          <div>
            <div 
              data-aos="fade-right" 
              data-aos-delay="250"
              data-aos-duration="1200"
            >
              {/* Foto - Efeito de movimento suave no hover */}
              <div 
                className="relative transition-all duration-700 ease-out"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{
                  transform: isHovered 
                    ? 'translateY(calc(2rem - 8px)) scale(1.02)' 
                    : 'translateY(2rem) scale(1)',
                }}
              >
                <Image
                  src="/images/foto-02.png"
                  alt="Ciclo de Gente"
                  width={600}
                  height={800}
                  className="object-cover w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

