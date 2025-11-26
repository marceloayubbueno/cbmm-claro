"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    AOS: any;
  }
}

export default function AOSInit() {
  useEffect(() => {
    let initialized = false;
    let attempts = 0;
    const maxAttempts = 30; // 3 segundos máximo

    const initAOS = () => {
      attempts++;
      
      if (initialized) return; // Evita inicialização duplicada
      
      if (typeof window !== "undefined" && window.AOS && !initialized) {
        try {
          window.AOS.init({
            easing: "ease-out-cubic",
            duration: 1000,
            once: true,
            offset: 80,
            delay: 0,
            mirror: false,
            anchorPlacement: "top-bottom",
          });

          initialized = true;
          console.log("✅ AOS initialized successfully");

          // Refresh após imagens carregarem
          const refreshAOS = () => {
            if (window.AOS) {
              window.AOS.refresh();
            }
          };

          if (document.readyState === "complete") {
            refreshAOS();
          } else {
            window.addEventListener("load", refreshAOS, { once: true });
          }
        } catch (error) {
          console.error("Error initializing AOS:", error);
        }
      } else if (attempts < maxAttempts) {
        // Tenta novamente após 100ms
        setTimeout(initAOS, 100);
      } else {
        console.warn("⚠️ AOS not loaded after", maxAttempts, "attempts");
      }
    };

    // Inicia imediatamente
    initAOS();

    // Fallback: tenta novamente após DOM estar pronto
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", initAOS);
    }
  }, []);

  return null;
}
