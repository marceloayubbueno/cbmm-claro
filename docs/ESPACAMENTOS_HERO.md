# Espaçamentos e Dimensões Exatas do Hero - Site Original

## 📐 Dimensões Identificadas

### Section Hero
- **Altura**: `542px` (fixa, não min-h-screen)
- **Display**: `flex items-center`
- **Overflow**: `hidden`

### Container Principal
- **Max Width**: `1280px` (max-w-7xl)
- **Padding Horizontal**: 
  - Mobile: `16px` (px-4)
  - Tablet: `24px` (px-6)
  - Desktop: `32px` (px-8)
- **Padding Vertical**: 
  - Mobile: `48px` (py-12)
  - Desktop: `64px` (py-16)

### Grid Layout
- **Colunas**: 2 colunas no desktop (`lg:grid-cols-2`)
- **Gap**: 
  - Mobile: `24px` (gap-6)
  - Desktop: `48px` (gap-12)
- **Align Items**: `center`

### Título (H1)
- **Font Size**: `52px` (lg:text-[52px])
- **Line Height**: `52px` (leading-[52px])
- **Font Weight**: `700` (bold)
- **Color**: `white`
- **Margin Bottom**: 
  - Mobile: `16px` (mb-4)
  - Desktop: `24px` (mb-6)

### Parágrafo
- **Font Size**: `18px` (text-lg)
- **Line Height**: `27px` (leading-relaxed)
- **Color**: `blue-200` (#BFDBFE)
- **Margin Bottom**: 
  - Mobile: `24px` (mb-6)
  - Desktop: `32px` (mb-8)
- **Max Width**: `672px` (max-w-2xl)

### Botões
- **Gap**: 
  - Mobile: `12px` (gap-3)
  - Desktop: `16px` (gap-4)
- **Flex Direction**: 
  - Mobile: `column` (flex-col)
  - Desktop: `row` (sm:flex-row)

### Imagem do Cartão
- **Width**: `548px` (max-w-[548px])
- **Height**: `545px` (aspect-[548/545])
- **Aspect Ratio**: `548:545`

### Ilustração SVG
- **Max Width**: `960px`
- **Max Height**: `960px`
- **Opacity**: `20%` (opacity-20)
- **Position**: `absolute`

## 🎯 Espaçamentos Específicos

### Padding Interno do Container
```
Mobile:  py-12 (48px top/bottom)
Desktop: py-16 (64px top/bottom)
```

### Gap entre Colunas
```
Mobile:  gap-6 (24px)
Desktop: gap-12 (48px)
```

### Espaçamento entre Elementos
```
Título → Parágrafo:  mb-4 (mobile) / mb-6 (desktop)
Parágrafo → Botões:  mb-6 (mobile) / mb-8 (desktop)
Botões:              gap-3 (mobile) / gap-4 (desktop)
```

## 📏 Valores Exatos em Pixels

| Elemento | Mobile | Desktop |
|----------|--------|---------|
| Section Height | 542px | 542px |
| Container Padding Top/Bottom | 48px | 64px |
| Container Padding Left/Right | 16px | 32px |
| Grid Gap | 24px | 48px |
| Título Margin Bottom | 16px | 24px |
| Parágrafo Margin Bottom | 24px | 32px |
| Botões Gap | 12px | 16px |
| Imagem Width | 548px | 548px |
| Imagem Height | 545px | 545px |

## ✅ Ajustes Aplicados

1. ✅ Altura fixa: `min-h-[542px]` (removido lg:min-h-screen)
2. ✅ Padding vertical reduzido: `py-12 lg:py-16`
3. ✅ Gap do grid ajustado: `gap-6 lg:gap-12`
4. ✅ Margin bottom do título: `mb-4 lg:mb-6`
5. ✅ Margin bottom do parágrafo: `mb-6 lg:mb-8`
6. ✅ Gap dos botões: `gap-3 sm:gap-4`
7. ✅ Font size do parágrafo: `text-base sm:text-lg lg:text-lg`
8. ✅ Line height do parágrafo: `leading-relaxed`

