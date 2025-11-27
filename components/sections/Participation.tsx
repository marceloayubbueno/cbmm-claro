"use client";

import { useState } from "react";
import Image from "next/image";

export default function Participation() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <section className="relative py-12 lg:py-8 overflow-hidden" style={{ backgroundColor: '#111827' }}>
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

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-testimonial opacity-50" aria-hidden="true" />

      {/* Sistema de Iluminação Tecnológica */}
      <div className="absolute inset-0 pointer-events-none z-0" aria-hidden="true">
        {/* Luz Principal - Canto superior direito */}
        <div 
          className="absolute rounded-full"
          style={{
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle at 70% 30%, rgba(59, 130, 246, 0.3) 0%, rgba(37, 99, 235, 0.2) 25%, rgba(6, 182, 212, 0.15) 50%, transparent 75%)',
            filter: 'blur(80px)',
            transform: 'translate(20%, -20%)',
          }}
        />
        
        {/* Luz Secundária - Centro esquerdo */}
        <div 
          className="absolute rounded-full"
          style={{
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle at 30% 50%, rgba(96, 165, 250, 0.25) 0%, rgba(59, 130, 246, 0.15) 30%, rgba(6, 182, 212, 0.1) 55%, transparent 80%)',
            filter: 'blur(70px)',
            transform: 'translate(-15%, 10%)',
          }}
        />
        
        {/* Luz de Destaque - Canto inferior direito */}
        <div 
          className="absolute rounded-full"
          style={{
            width: '450px',
            height: '450px',
            background: 'radial-gradient(circle at 60% 70%, rgba(37, 99, 235, 0.2) 0%, rgba(6, 182, 212, 0.15) 35%, transparent 70%)',
            filter: 'blur(65px)',
            transform: 'translate(10%, 30%)',
          }}
        />
        
        {/* Linhas de luz tecnológica */}
        <div 
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background: 'linear-gradient(135deg, transparent 0%, rgba(59, 130, 246, 0.05) 25%, transparent 50%, rgba(6, 182, 212, 0.05) 75%, transparent 100%)',
            filter: 'blur(2px)',
          }}
        />
      </div>

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

