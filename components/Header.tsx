"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Button from "./ui/Button";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll(); // Verifica no mount
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Previne scroll quando menu está aberto
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isActiveLink = (link: string) => {
    if (link === "/") {
      return pathname === "/";
    }
    return pathname === link || pathname.startsWith(link + "/");
  };

  const menuItems = [
    { href: "/", label: "Início" },
    { href: "/avaliacao-de-metas", label: "Avaliação de Metas" },
    { href: "/avaliacao-de-competencias", label: "Avaliação de Competências" },
    { href: "/gestao-de-desenvolvimento", label: "Gestão de Desenvolvimento" },
    { href: "https://cbmmbr.sharepoint.com", label: "Ciclo de Gente em 1 página", external: true },
    { href: "/tutoriais", label: "Tutoriais e Materiais de Apoio" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] w-full transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
      style={{ opacity: 1, transform: 'translateY(0)' }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-16 lg:h-20 w-full">
          {/* Lado Esquerdo - Hamburger + Logo */}
          <div className="flex items-center gap-3">
            {/* Menu Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`p-2 rounded-lg transition ${
                scrolled
                  ? "hover:bg-gray-100 text-slate-700"
                  : "hover:bg-white/20 text-white"
              }`}
              aria-label="Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>

            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src={
                  scrolled
                    ? "/images/clicodegenteescuro.png"
                    : "/images/clicodegenteclaro.png"
                }
                alt="Ciclo de Gente"
                width={192}
                height={64}
                className="h-12 w-auto transition-opacity duration-300"
                priority
              />
            </Link>
          </div>

          {/* Botão Download */}
          <button
            className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-200 ${
              scrolled
                ? "hover:bg-gray-100 text-slate-700 border border-slate-200"
                : "hover:bg-white/20 text-white border border-white/30"
            }`}
            aria-label="Download do Material"
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
            <span className="hidden sm:inline text-sm">Download do Material</span>
          </button>
        </div>
      </div>

      {/* Menu Lateral */}
      {menuOpen && mounted && createPortal(
        <>
          <div
            className="fixed inset-0 bg-black/30 backdrop-blur-md z-[110] animate-fade-in"
            onClick={() => setMenuOpen(false)}
          />
          <div
            className="fixed left-0 top-0 w-80 bg-white/10 backdrop-blur-2xl shadow-2xl z-[111] animate-slide-in-left border-2 border-white/30 rounded-r-3xl"
            onClick={(e) => e.stopPropagation()}
            style={{
              maxHeight: 'calc(100vh - 2rem)',
              marginTop: '1rem',
              marginBottom: '1rem',
              overflowY: 'auto',
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)'
            }}
          >
            {/* Header do Menu */}
            <div className="p-6 border-b border-white/20">
              <div className="flex items-center justify-between">
                <h2 className="text-base font-semibold text-white">Menu</h2>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="p-2 rounded-full text-white/80 hover:text-white hover:bg-white/10 border-2 border-white/30 hover:border-white/40 transition-all duration-200"
                  aria-label="Fechar menu"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Navegação */}
            <nav className="p-4">
              <ul className="space-y-2">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    {item.external ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 text-white/90 rounded-xl hover:text-white hover:bg-white/10 border border-transparent hover:border-white/30 transition-all duration-200 group"
                      >
                        <svg
                          className="w-5 h-5 flex-shrink-0 text-blue-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                          />
                        </svg>
                        <span className="text-sm font-medium">{item.label}</span>
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-200 group border ${
                          isActiveLink(item.href)
                            ? "text-white bg-white/10 border-white/40 font-semibold"
                            : "text-white/90 border-transparent hover:text-white hover:bg-white/10 hover:border-white/30"
                        }`}
                        onClick={() => setMenuOpen(false)}
                      >
                        <svg
                          className={`w-5 h-5 flex-shrink-0 ${
                            isActiveLink(item.href) ? "text-blue-400" : "text-blue-400/80 group-hover:text-blue-400"
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                          />
                        </svg>
                        <span className={`text-sm ${
                          isActiveLink(item.href) ? "font-semibold" : "font-medium"
                        }`}>
                          {item.label}
                        </span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </>,
        document.body
      )}
    </header>
  );
}
