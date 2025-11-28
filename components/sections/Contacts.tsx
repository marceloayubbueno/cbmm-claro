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
    <section className="relative py-32 lg:py-40 w-full overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Background Elements - Mesmo padrão do Hero */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-gradient-to-br from-cyan-600 to-blue-500 rounded-full opacity-30 blur-3xl"></div>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
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
              className="group relative"
              data-aos="fade-up"
              data-aos-delay={index * 150}
              data-aos-duration="1000"
            >
              {/* Card com glassmorphism - Mesmo padrão do Hero */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-8 h-full text-center hover:bg-white/10 transition-all duration-300 group">

                {/* Ícone do card */}
                <div 
                  className="relative mb-6 flex justify-center items-center"
                  data-aos="zoom-in" 
                  data-aos-delay={index * 150 + 100}
                  data-aos-duration="800"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {card.type === "email" ? (
                      <Mail className="w-8 h-8 text-white" />
                    ) : (
                      <MessageSquare className="w-8 h-8 text-white" />
                    )}
                  </div>
                </div>

                {/* Título */}
                <h3 className="text-lg font-semibold text-white mb-6 text-center">
                  {card.title}
                </h3>

                {/* Conteúdo do card */}
                {card.type === "email" && card.contacts && (
                  <div className="relative space-y-4">
                    {card.contacts.map((contact, contactIndex) => (
                      <div
                        key={contactIndex}
                        className="flex flex-col items-center text-center"
                        data-aos="fade-up"
                        data-aos-delay={index * 150 + 200 + contactIndex * 100}
                        data-aos-duration="800"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <User className="w-5 h-5 text-blue-400" />
                          <span className="text-white font-semibold text-sm">
                            {contact.name}
                          </span>
                        </div>
                        <a
                          href={`mailto:${contact.email}`}
                          className="text-gray-300 hover:text-cyan-400 text-sm transition-colors duration-300 flex items-center gap-2 group/link"
                        >
                          <Mail className="w-4 h-4 group-hover/link:scale-110 transition-transform duration-300" />
                          {contact.email}
                        </a>
                      </div>
                    ))}
                  </div>
                )}

                {card.type === "info" && card.info && (
                  <p
                    className="text-gray-300 text-sm leading-relaxed text-center"
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
