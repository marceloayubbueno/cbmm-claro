"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-slate-800 text-white">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-testimonial opacity-50" aria-hidden="true" />

      {/* Footer Illustration Placeholder */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-slate-700/50" aria-hidden="true" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-32 pb-12">
        {/* Footer Blocks */}
        <div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          data-aos="fade-up"
          data-aos-delay="150"
          data-aos-duration="1000"
        >
          {/* Logo CBMM Block */}
          <div className="col-span-1">
            <Link 
              href="https://cbmm.com" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="CBMM"
              className="inline-block mb-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">C</span>
                </div>
                <span className="text-white font-bold text-xl">CBMM</span>
              </div>
            </Link>
            <p className="text-slate-300 text-sm mb-4">
              Visit our website for more information about CBMM.
            </p>
            <Link
              href="https://cbmm.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 text-sm transition-colors inline-flex items-center gap-2"
            >
              cbmm.com
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </Link>
          </div>

          {/* Nossos Valores CBMM */}
          <div className="col-span-1">
            <h6 className="text-sm font-bold text-white mb-4">Nossos Valores CBMM</h6>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              Os valores da CBMM guiam nossas ações e decisões, fortalecendo nossa cultura organizacional e promovendo excelência em tudo que fazemos.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs px-3 py-1 bg-slate-700/50 rounded-full text-slate-300">Excelência</span>
              <span className="text-xs px-3 py-1 bg-slate-700/50 rounded-full text-slate-300">Integridade</span>
              <span className="text-xs px-3 py-1 bg-slate-700/50 rounded-full text-slate-300">Inovação</span>
              <span className="text-xs px-3 py-1 bg-slate-700/50 rounded-full text-slate-300">Sustentabilidade</span>
            </div>
          </div>

          {/* Ciclo de Gente */}
          <div className="col-span-1">
            <h6 className="text-sm font-bold text-white mb-4">Ciclo de Gente</h6>
            <p className="text-slate-300 text-sm leading-relaxed">
              O Ciclo de Gente é um programa estratégico da CBMM que promove o desenvolvimento e crescimento dos nossos colaboradores através de avaliações, gestão de metas e desenvolvimento contínuo.
            </p>
          </div>
        </div>

        {/* Bottom Area */}
        <div 
          className="border-t border-slate-700 pt-8"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1000"
        >
          <p className="text-slate-400 text-sm text-center">
            © {new Date().getFullYear()} CBMM. Todos os direitos reservados. |{" "}
            <Link 
              href="https://cbmm.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              cbmm.com
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
