"use client";

import { Mail, User, MessageSquare } from "lucide-react";

interface Contact {
  title: string;
  type: "email" | "info";
  contacts?: {
    name: string;
    email: string;
  }[];
  info?: string;
}

const contactCards: Contact[] = [
  {
    title: "CICLO DE GENTE / SISTEMA SUCCESS FACTORS",
    type: "email",
    contacts: [
      {
        name: "Andréa Affonso",
        email: "andrea.affonso@cbmm.com",
      },
      {
        name: "Dora Mirabeau",
        email: "dora.reis@cbmm.com",
      },
    ],
  },
  {
    title: "GESTÃO DE METAS / SISTEMA STRATWSONE",
    type: "email",
    contacts: [
      {
        name: "Osvaldo Martins Neto",
        email: "gestaodemetas@cbmm.com",
      },
    ],
  },
  {
    title: "COMUNICAÇÃO GERAL",
    type: "info",
    info: "Os comunicados sobre o Ciclo de Gente são enviados periodicamente via Comunicação Geral.",
  },
];

export default function Contacts() {
  return (
    <section className="relative py-20 lg:py-24 w-full" style={{ backgroundColor: '#f8fafc' }}>
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-20">
        {/* Título da seção */}
        <div 
          className="text-left mb-12 lg:mb-16 group"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent mb-4">
            Contatos
          </h2>
          {/* Linha decorativa tech */}
          <div 
            className="h-[3px] w-32 sm:w-40 lg:w-48 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-300 group-hover:w-40 sm:group-hover:w-52 lg:group-hover:w-64 group-hover:shadow-lg group-hover:shadow-cyan-500/50"
          />
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 w-full">
          {contactCards.map((card, index) => (
            <div
              key={index}
              className="group relative text-center rounded-xl p-[0.5px] hover:-translate-y-2 transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, #06b6d4, #3b82f6, #6366f1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #06b6d4, #3b82f6, #6366f1, #8b5cf6, #06b6d4)';
                e.currentTarget.style.backgroundSize = '200% 200%';
                e.currentTarget.style.animation = 'gradientShift 2s ease infinite';
                e.currentTarget.style.boxShadow = '0 0 15px rgba(6, 182, 212, 0.4), 0 0 30px rgba(59, 130, 246, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #06b6d4, #3b82f6, #6366f1)';
                e.currentTarget.style.backgroundSize = '100% 100%';
                e.currentTarget.style.animation = 'none';
                e.currentTarget.style.boxShadow = 'none';
              }}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              data-aos-duration="1000"
            >
              <div className="rounded-xl p-8 h-full" style={{ backgroundColor: '#f8fafc' }}>
              {/* Ícone do card */}
              <div 
                className="mb-6 flex justify-center items-center"
                data-aos="zoom-in" 
                data-aos-delay={index * 150 + 100}
                data-aos-duration="800"
              >
                <div
                  className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
                >
                  {card.type === "email" ? (
                    <Mail className="w-8 h-8 text-white" />
                  ) : (
                    <MessageSquare className="w-8 h-8 text-white" />
                  )}
                </div>
              </div>

              {/* Título */}
              <h3 className="text-lg font-bold text-slate-800 mb-6 text-center group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                {card.title}
              </h3>

              {/* Conteúdo do card */}
              {card.type === "email" && card.contacts && (
                <div className="space-y-4">
                  {card.contacts.map((contact, contactIndex) => (
                    <div
                      key={contactIndex}
                      className="flex flex-col items-center text-center"
                      data-aos="fade-up"
                      data-aos-delay={index * 150 + 200 + contactIndex * 100}
                      data-aos-duration="800"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <User className="w-5 h-5 text-blue-500" />
                        <span className="text-slate-800 font-semibold text-sm">
                          {contact.name}
                        </span>
                      </div>
                      <a
                        href={`mailto:${contact.email}`}
                        className="text-blue-600 hover:text-blue-700 text-sm transition-colors duration-300 flex items-center gap-2"
                      >
                        <Mail className="w-4 h-4" />
                        {contact.email}
                      </a>
                    </div>
                  ))}
                </div>
              )}

              {card.type === "info" && card.info && (
                <p
                  className="text-slate-600 text-sm leading-relaxed text-center"
                  data-aos="fade-up"
                  data-aos-delay={index * 150 + 200}
                  data-aos-duration="800"
                >
                  {card.info}
                </p>
              )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

