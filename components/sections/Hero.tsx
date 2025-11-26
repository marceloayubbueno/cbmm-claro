"use client";

import { useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative overflow-visible">
      {/* Background Gradient - Exatamente como no original: chf8c cistn ch1vk c5aqy c43am cx5bd c5llv ctehq cakxp coou2 */}
      <div 
        className="absolute inset-0 bg-gradient-hero"
        aria-hidden="true"
      />

      {/* Curva na parte inferior esquerda - linha reta que curva para cima no final */}
      <div 
        className="absolute bottom-0 left-0 w-full h-32 lg:h-40 pointer-events-none"
        aria-hidden="true"
      >
        <svg
          className="absolute bottom-0 left-0 w-full h-full"
          viewBox="0 0 1440 160"
          preserveAspectRatio="none"
          fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
            d="M1440 160 L200 160 Q40 160 0 30 L0 160 L1440 160 Z"
            fill="white"
                  />
                </svg>
      </div>

      {/* Container: cl9ye cc8xx cdcfy chlof */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Wrapper: c823v c6lgd cmprh - Altura aumentada */}
        <div className="py-20 lg:py-32">
          {/* Hero Content: cwihz cqmiq clpz0 cyhno c4pup cdcfy */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Content: c13k6 */}
            <div className="w-full text-center lg:text-left order-2 lg:order-1 transform translate-y-8 lg:translate-y-15">
              {/* Copy */}
              <div>
                {/* H1: c4nhw c1ig3 c7bak */}
                <h1 
                  className="text-4xl sm:text-5xl lg:text-[52px] font-bold leading-[52px] text-white mb-4 lg:mb-6"
              data-aos="fade-up"
                  data-aos-delay="150"
                  data-aos-duration="1000"
            >
              Ciclo de Gente:{" "}
              <br />
              <span className="whitespace-nowrap">avaliando performance</span>
              {" "}
              <br />
              <span className="whitespace-nowrap">e desempenho</span>
            </h1>
                
                {/* Red Line - Primeiro parágrafo resumido */}
            <p
                  className="text-base sm:text-lg text-blue-200 mb-6 lg:mb-8 max-w-2xl mx-auto lg:mx-0 leading-[27px]"
              data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1000"
            >
              Realizado anualmente em todas as unidades do Brasil e escritórios regionais.
            </p>

            {/* Buttons */}
            <div
                  className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
              data-aos="fade-up"
                  data-aos-delay="450"
                  data-aos-duration="1000"
            >
              <button
                className="flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-200 hover:bg-white/20 text-white border border-white/30"
                aria-label="Saiba Mais"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
                <span className="text-sm">Saiba Mais</span>
              </button>
            </div>
            </div>
          </div>

            {/* Image: c8hvl cwihz c2zer czzq5 czk18 ctp1d c5llv cdcfy c9wuj */}
            <div 
              className="relative w-full order-1 lg:order-2" 
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              <div className="relative w-full flex items-center justify-center pb-0">
                {/* Illustration Container: cyhno ctp3x c29tm cmlc2 */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
                  {/* Illustration SVG: cistn cleik c89jy cb6o0 cs15f cfhlr cx5bd c08f2 cogs9 cakxp c4elr */}
                  <svg
                    className="w-full h-full max-w-[960px] max-h-[960px] opacity-20"
                    viewBox="0 0 960 960"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Placeholder - será substituído pela ilustração real hero-illustration.svg */}
                    <circle cx="480" cy="480" r="200" fill="rgba(255,255,255,0.1)" />
                  </svg>
                </div>
                
                {/* Sistema de Iluminação Profissional - Luz vinda de BAIXO */}
                <div className="absolute inset-0 flex items-end justify-center pointer-events-none z-0 pb-0">
                  {/* Luz Principal - Vem de BAIXO (parte inferior) */}
                  <div 
                    className="absolute rounded-full"
                    style={{
                      width: '550px',
                      height: '550px',
                      background: 'radial-gradient(circle at 50% 70%, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0.3) 20%, rgba(191, 219, 254, 0.18) 40%, transparent 70%)',
                      filter: 'blur(70px)',
                      transform: 'translate(0, 60%)',
                    }}
                  />
                  
                  {/* Luz Secundária - Inferior esquerda */}
                  <div 
                    className="absolute rounded-full"
                    style={{
                      width: '480px',
                      height: '480px',
                      background: 'radial-gradient(circle at 30% 65%, rgba(255, 255, 255, 0.35) 0%, rgba(239, 246, 255, 0.25) 25%, rgba(191, 219, 254, 0.15) 50%, transparent 75%)',
                      filter: 'blur(65px)',
                      transform: 'translate(-15%, 60%)',
                    }}
                  />
                  
                  {/* Luz de Preenchimento - Inferior central */}
                  <div 
                    className="absolute rounded-full"
                    style={{
                      width: '450px',
                      height: '450px',
                      background: 'radial-gradient(circle at 50% 80%, rgba(239, 246, 255, 0.3) 0%, rgba(191, 219, 254, 0.2) 35%, rgba(96, 165, 250, 0.1) 55%, transparent 80%)',
                      filter: 'blur(60px)',
                      transform: 'translate(5%, 65%)',
                    }}
                  />
                  
                  {/* Luz de Contorno */}
                  <div 
                    className="absolute"
                    style={{
                      width: '520px',
                      height: '520px',
                      background: 'radial-gradient(ellipse 90% 100% at 50% 70%, transparent 45%, rgba(255, 255, 255, 0.25) 55%, rgba(191, 219, 254, 0.15) 65%, transparent 80%)',
                      filter: 'blur(55px)',
                      transform: 'translate(0, 55%)',
                    }}
                  />
                </div>
                
                {/* Credit Card Image: cwihz - Ultrapassa a borda do Hero */}
                <div 
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-20 w-full max-w-[700px] translate-y-[59.5%]"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  {/* Elementos flutuantes 3D ao redor da imagem */}
                  
                  {/* Círculo flutuante superior esquerdo */}
                  <div 
                    className="absolute -top-8 -left-8 w-16 h-16 rounded-full pointer-events-none z-10"
                    style={{
                      background: 'radial-gradient(circle, rgba(255, 255, 255, 0.4) 0%, rgba(191, 219, 254, 0.3) 50%, transparent 100%)',
                      filter: 'blur(15px)',
                      animation: 'floatUp 5s ease-in-out infinite',
                    }}
                  />
                  
                  {/* Círculo flutuante superior direito */}
                  <div 
                    className="absolute -top-6 -right-12 w-20 h-20 rounded-full pointer-events-none z-10"
                    style={{
                      background: 'radial-gradient(circle, rgba(239, 246, 255, 0.5) 0%, rgba(96, 165, 250, 0.3) 50%, transparent 100%)',
                      filter: 'blur(20px)',
                      animation: 'floatDown 6s ease-in-out infinite',
                    }}
                  />
                  
                  {/* Círculo flutuante inferior esquerdo */}
                  <div 
                    className="absolute -bottom-10 -left-6 w-24 h-24 rounded-full pointer-events-none z-10"
                    style={{
                      background: 'radial-gradient(circle, rgba(191, 219, 254, 0.4) 0%, rgba(255, 255, 255, 0.3) 50%, transparent 100%)',
                      filter: 'blur(18px)',
                      animation: 'floatUp 7s ease-in-out infinite 1s',
                    }}
                  />
                  
                  {/* Círculo flutuante inferior direito */}
                  <div 
                    className="absolute -bottom-8 -right-8 w-18 h-18 rounded-full pointer-events-none z-10"
                    style={{
                      background: 'radial-gradient(circle, rgba(255, 255, 255, 0.35) 0%, rgba(239, 246, 255, 0.25) 50%, transparent 100%)',
                      filter: 'blur(16px)',
                      animation: 'floatDown 5.5s ease-in-out infinite 0.5s',
                    }}
                  />
                  
                  {/* Forma geométrica flutuante - Meio esquerdo */}
                  <div 
                    className="absolute top-1/2 -left-12 w-12 h-12 pointer-events-none z-10"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, rgba(191, 219, 254, 0.2) 100%)',
                      clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
                      animation: 'rotateFloat 8s linear infinite',
                    }}
                  />
                  
                  {/* Forma geométrica flutuante - Meio direito */}
                  <div 
                    className="absolute top-1/3 -right-10 w-14 h-14 pointer-events-none z-10"
                    style={{
                      background: 'linear-gradient(45deg, rgba(239, 246, 255, 0.35) 0%, rgba(96, 165, 250, 0.25) 100%)',
                      clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
                      animation: 'rotateFloat 10s linear infinite reverse',
                    }}
                  />
                  
                  {/* Efeitos relacionados a Fotografia - Complementam a pose */}
                  
                  {/* Partículas de brilho - Simulam flashes de câmera sutis */}
                  <div 
                    className="absolute top-1/4 left-1/4 w-1 h-1 rounded-full pointer-events-none z-10"
                    style={{
                      background: 'rgba(255, 255, 255, 0.8)',
                      boxShadow: '0 0 4px rgba(255, 255, 255, 0.6), 0 0 8px rgba(255, 255, 255, 0.4)',
                      animation: 'sparkle 2.5s ease-in-out infinite',
                    }}
                  />
                  <div 
                    className="absolute top-1/3 right-1/4 w-1 h-1 rounded-full pointer-events-none z-10"
                    style={{
                      background: 'rgba(191, 219, 254, 0.8)',
                      boxShadow: '0 0 4px rgba(191, 219, 254, 0.6), 0 0 8px rgba(96, 165, 250, 0.4)',
                      animation: 'sparkle 3s ease-in-out infinite 0.5s',
                    }}
                  />
                  <div 
                    className="absolute bottom-1/4 left-1/3 w-1 h-1 rounded-full pointer-events-none z-10"
                    style={{
                      background: 'rgba(255, 255, 255, 0.7)',
                      boxShadow: '0 0 4px rgba(255, 255, 255, 0.5), 0 0 8px rgba(255, 255, 255, 0.3)',
                      animation: 'sparkle 2.8s ease-in-out infinite 1s',
                    }}
                  />
                  <div 
                    className="absolute bottom-1/3 right-1/3 w-1 h-1 rounded-full pointer-events-none z-10"
                    style={{
                      background: 'rgba(239, 246, 255, 0.75)',
                      boxShadow: '0 0 4px rgba(255, 255, 255, 0.5), 0 0 8px rgba(191, 219, 254, 0.3)',
                      animation: 'sparkle 3.2s ease-in-out infinite 1.5s',
                    }}
                  />
                  
                  {/* Anéis decorativos - Simulam molduras/lentes de câmera */}
                  <div 
                    className="absolute top-1/4 -right-6 w-20 h-20 rounded-full pointer-events-none z-10"
                    style={{
                      border: '1.5px solid rgba(255, 255, 255, 0.2)',
                      boxShadow: '0 0 10px rgba(255, 255, 255, 0.15)',
                      animation: 'rotateFloat 12s linear infinite',
                    }}
                  />
                  <div 
                    className="absolute bottom-1/4 -left-6 w-16 h-16 rounded-full pointer-events-none z-10"
                    style={{
                      border: '1.5px solid rgba(191, 219, 254, 0.2)',
                      boxShadow: '0 0 8px rgba(191, 219, 254, 0.15)',
                      animation: 'rotateFloat 15s linear infinite reverse',
                    }}
                  />
                  
                  {/* Elementos de foco - Simulam pontos de foco de câmera */}
                  <div 
                    className="absolute top-12 left-12 w-6 h-6 pointer-events-none z-10"
                    style={{
                      border: '1px dashed rgba(255, 255, 255, 0.3)',
                      borderRadius: '50%',
                      animation: 'focusPulse 4s ease-in-out infinite',
                    }}
                  />
                  <div 
                    className="absolute bottom-16 right-14 w-5 h-5 pointer-events-none z-10"
                    style={{
                      border: '1px dashed rgba(191, 219, 254, 0.3)',
                      borderRadius: '50%',
                      animation: 'focusPulse 5s ease-in-out infinite 1s',
                    }}
                  />
                  
                  {/* Mais partículas de brilho - Flash adicional */}
                  <div 
                    className="absolute top-20 left-1/2 w-1 h-1 rounded-full pointer-events-none z-10"
                    style={{
                      background: 'rgba(255, 255, 255, 0.9)',
                      boxShadow: '0 0 5px rgba(255, 255, 255, 0.7), 0 0 10px rgba(255, 255, 255, 0.5)',
                      animation: 'sparkle 2.2s ease-in-out infinite 0.3s',
                    }}
                  />
                  <div 
                    className="absolute top-1/2 right-8 w-1 h-1 rounded-full pointer-events-none z-10"
                    style={{
                      background: 'rgba(191, 219, 254, 0.85)',
                      boxShadow: '0 0 5px rgba(191, 219, 254, 0.6), 0 0 10px rgba(96, 165, 250, 0.4)',
                      animation: 'sparkle 3.5s ease-in-out infinite 0.8s',
                    }}
                  />
                  <div 
                    className="absolute bottom-1/4 right-1/4 w-1 h-1 rounded-full pointer-events-none z-10"
                    style={{
                      background: 'rgba(255, 255, 255, 0.75)',
                      boxShadow: '0 0 4px rgba(255, 255, 255, 0.6), 0 0 8px rgba(255, 255, 255, 0.4)',
                      animation: 'sparkle 2.9s ease-in-out infinite 1.2s',
                    }}
                  />
                  
                  {/* Mais anéis decorativos - Simulam lentes adicionais */}
                  <div 
                    className="absolute top-1/3 -left-8 w-14 h-14 rounded-full pointer-events-none z-10"
                    style={{
                      border: '1px solid rgba(255, 255, 255, 0.25)',
                      boxShadow: '0 0 8px rgba(255, 255, 255, 0.2)',
                      animation: 'rotateFloat 14s linear infinite reverse',
                    }}
                  />
                  <div 
                    className="absolute bottom-1/3 -right-8 w-18 h-18 rounded-full pointer-events-none z-10"
                    style={{
                      border: '1px solid rgba(191, 219, 254, 0.22)',
                      boxShadow: '0 0 9px rgba(191, 219, 254, 0.18)',
                      animation: 'rotateFloat 16s linear infinite',
                    }}
                  />
                  
                  {/* Mais círculos de foco */}
                  <div 
                    className="absolute top-20 right-20 w-4 h-4 pointer-events-none z-10"
                    style={{
                      border: '1px dashed rgba(255, 255, 255, 0.25)',
                      borderRadius: '50%',
                      animation: 'focusPulse 4.5s ease-in-out infinite 0.5s',
                    }}
                  />
                  <div 
                    className="absolute bottom-24 left-20 w-5 h-5 pointer-events-none z-10"
                    style={{
                      border: '1px dashed rgba(191, 219, 254, 0.28)',
                      borderRadius: '50%',
                      animation: 'focusPulse 5.5s ease-in-out infinite 1.5s',
                    }}
                  />
                  
                  {/* Elementos que simulam luzes de estúdio - Formas hexagonais */}
                  <div 
                    className="absolute -top-4 left-1/4 w-8 h-8 pointer-events-none z-10"
                    style={{
                      clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)',
                      background: 'rgba(255, 255, 255, 0.15)',
                      animation: 'floatUp 6s ease-in-out infinite',
                    }}
                  />
                  <div 
                    className="absolute -bottom-4 right-1/4 w-10 h-10 pointer-events-none z-10"
                    style={{
                      clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)',
                      background: 'rgba(191, 219, 254, 0.18)',
                      animation: 'floatDown 7s ease-in-out infinite 1s',
                    }}
                  />
                  
                  {/* Imagem - Efeito de movimento suave no hover */}
                  <div 
                    className="relative aspect-[4/5] rounded-2xl overflow-hidden transition-all duration-700 ease-out"
                    style={{
                      transform: isHovered ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
                    }}
                  >
                    <Image
                      src="/images/0202.png"
                      alt="Hero image"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

