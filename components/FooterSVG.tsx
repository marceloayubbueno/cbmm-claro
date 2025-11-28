'use client'

import { useEffect, useState, useRef } from 'react'

export default function FooterSVG() {
  const [svgContent, setSvgContent] = useState<string>('')
  const [error, setError] = useState<string>('')
  const svgContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    fetch('/images/rodape-pt.svg')
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`)
        }
        return res.text()
      })
      .then(text => {
        setSvgContent(text)
        setError('')
      })
      .catch(err => {
        console.error('Erro ao carregar SVG:', err)
        setError(err.message)
      })
  }, [])

  // Adiciona eventos de hover aos grupos do SVG após renderização
  useEffect(() => {
    if (!svgContent || !svgContainerRef.current) return

    const container = svgContainerRef.current
    const svgElement = container.querySelector('svg') as SVGSVGElement
    
    if (!svgElement) return

    // Garante que o SVG tenha width e height corretos
    svgElement.style.width = '100%'
    svgElement.style.height = 'auto'
    svgElement.style.display = 'block'
    // Permite que o overflow seja visível para não cortar sombras/escalas
    svgElement.style.overflow = 'visible'

    // Busca apenas grupos <g> diretos do SVG
    const directGroups = Array.from(svgElement.children).filter(
      (child) => child.tagName === 'g'
    ) as SVGElement[]
    
    const handlers: Array<{ group: SVGElement; enter: () => void; leave: () => void }> = []
    
    // Adiciona hover APENAS em grupos que contêm IMAGENS e NÃO contêm texto
    directGroups.forEach((group) => {
      // Verifica se tem imagem
      const hasImage = group.querySelector('image')
      
      // Verifica se tem texto em qualquer lugar (direto ou aninhado)
      const hasText = group.querySelector('text, tspan')
      
      // Verifica se tem outros elementos visuais além de image
      const hasOtherVisuals = group.querySelector('path, rect, circle, polygon, ellipse, line')
      
      // Aplica hover APENAS se:
      // - Tem imagem
      // - NÃO tem texto
      // - NÃO tem outros elementos visuais (apenas image)
      if (!hasImage || hasText || hasOtherVisuals) return
      
      // Define estilos iniciais
      group.style.transformOrigin = 'center'
      // @ts-ignore - transformBox é válido mas o TS pode reclamar dependendo da versão
      group.style.transformBox = 'fill-box'
      group.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
      group.style.cursor = 'pointer'
      
      const handleMouseEnter = () => {
        // Escala e levanta levemente
        group.style.transform = 'scale(1.1) translateY(-5px)'
        // Adiciona brilho e sombra
        group.style.filter = 'drop-shadow(0 10px 8px rgba(0,0,0,0.5)) brightness(1.2)'
        // Garante que o elemento fique por cima dos outros durante o hover
        group.style.zIndex = '10'
      }
      
      const handleMouseLeave = () => {
        group.style.transform = 'scale(1) translateY(0)'
        group.style.filter = 'none'
        group.style.zIndex = 'auto'
      }

      group.addEventListener('mouseenter', handleMouseEnter)
      group.addEventListener('mouseleave', handleMouseLeave)
      
      handlers.push({ group, enter: handleMouseEnter, leave: handleMouseLeave })
    })

    // Cleanup: remove event listeners quando componente desmonta
    return () => {
      handlers.forEach(({ group, enter, leave }) => {
        group.removeEventListener('mouseenter', enter)
        group.removeEventListener('mouseleave', leave)
        // Reseta estilos
        group.style.transform = ''
        group.style.filter = ''
        group.style.zIndex = ''
      })
    }
  }, [svgContent])

  if (error) {
    return (
      <div className="w-full h-[320px] bg-red-500/10 border border-red-500/20 rounded flex items-center justify-center text-red-400 text-sm">
        Erro ao carregar: {error}
      </div>
    )
  }

  if (!svgContent) {
    return (
      <div className="w-full h-[320px] bg-gray-500/10 border border-gray-500/20 rounded flex items-center justify-center text-gray-400 text-sm">
        Carregando...
      </div>
    )
  }

  return (
    <div 
      ref={svgContainerRef}
      className="w-full h-auto"
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  )
}

