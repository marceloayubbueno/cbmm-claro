# Cores e Gradientes - Site FinTech

## 🎨 Paleta de Cores Completa

### Cores Principais (Hex)
```css
/* Neutros */
--white: #FFFFFF;
--slate-50: #F8FAFC;
--slate-100: #F1F5F9;
--slate-400: #94A3B8;
--slate-500: #64748B;
--slate-700: #334155;
--slate-800: #1E293B;
--gray-800: #1F2937;
--gray-900: #111827;

/* Azuis */
--blue-50: #EFF6FF;
--blue-100: #DBEAFE;
--blue-200: #BFDBFE;
--blue-400: #60A5FA;
--blue-500: #3B82F6;
--blue-600: #2563EB;

/* Violeta */
--violet-500: #7E5FFB;

/* Cyan (para destaques) */
--cyan-400: #2DD4BF;
```

### Cores RGB (para uso em CSS)
```css
/* Neutros */
rgb(255, 255, 255)      /* Branco */
rgb(241, 245, 249)      /* Slate-100 */
rgb(148, 163, 184)      /* Slate-400 */
rgb(100, 116, 139)      /* Slate-500 */
rgb(51, 65, 85)         /* Slate-700 */
rgb(30, 41, 59)         /* Slate-800 */
rgb(31, 41, 55)         /* Gray-800 */
rgb(17, 24, 39)         /* Gray-900 */

/* Azuis */
rgb(239, 246, 255)      /* Blue-50 */
rgb(219, 234, 254)       /* Blue-100 */
rgb(191, 219, 254)       /* Blue-200 */
rgb(96, 165, 250)        /* Blue-400 */
rgb(59, 130, 246)        /* Blue-500 */
rgb(37, 99, 235)         /* Blue-600 */

/* Violeta */
rgb(126, 95, 251)        /* Violet-500 */

/* Cyan */
rgb(45, 212, 191)       /* Cyan-400 */
```

## 🌈 Gradientes CSS

### 1. Hero Background (Principal)
```css
background: linear-gradient(to right top, #2563EB, #3B82F6);
/* ou */
background: linear-gradient(to right top, rgb(37, 99, 235), rgb(59, 130, 246));
```

### 2. Button Gradient (Secundário)
```css
background: linear-gradient(to right top, #60A5FA, rgba(96, 165, 250, 0));
/* ou */
background: linear-gradient(to right top, rgb(96, 165, 250), rgba(96, 165, 250, 0));
```

### 3. Section Background Light
```css
background: linear-gradient(#F1F5F9, rgba(241, 245, 249, 0));
/* ou */
background: linear-gradient(rgb(241, 245, 249), rgba(241, 245, 249, 0));
```

### 4. Section Background White
```css
background: linear-gradient(to top, #FFFFFF, rgba(255, 255, 255, 0));
/* ou */
background: linear-gradient(to top, rgb(255, 255, 255), rgba(255, 255, 255, 0));
```

### 5. Testimonial Card Gradient
```css
background: linear-gradient(to top, #1E293B, #334155);
/* ou */
background: linear-gradient(to top, rgb(30, 41, 59), rgb(51, 65, 85));
```

### 6. Pricing Card Popular Gradient
```css
background: linear-gradient(#DBEAFE, #EFF6FF);
/* ou */
background: linear-gradient(rgb(219, 234, 254), rgb(239, 246, 255));
```

### 7. Hero Alternative Gradient
```css
background: linear-gradient(to right top, #2563EB, #3B82F6);
/* Mesmo do hero principal */
```

## 🎯 Uso por Componente

### Botões
```css
/* Botão Primário (Dark) */
.btn-primary {
  background-color: #1E293B;
  color: #F1F5F9;
  border-radius: 9999px;
  padding: 8px 16px;
}

.btn-primary:hover {
  background-color: #0F172A; /* Mais escuro */
}

/* Botão Secundário (Blue) */
.btn-secondary {
  background-color: #3B82F6;
  color: #EFF6FF;
  border-radius: 9999px;
  padding: 8px 16px;
}

.btn-secondary:hover {
  background-color: #2563EB;
}

/* Botão Outline */
.btn-outline {
  background: transparent;
  border: 1px solid #3B82F6;
  color: #3B82F6;
  border-radius: 9999px;
  padding: 8px 16px;
}

.btn-outline:hover {
  background-color: #3B82F6;
  color: #EFF6FF;
}
```

### Backgrounds de Seção
```css
/* Hero Section */
.hero-bg {
  background: linear-gradient(to right top, #2563EB, #3B82F6);
}

/* Section Alternada (Light) */
.section-light-bg {
  background: linear-gradient(#F1F5F9, rgba(241, 245, 249, 0));
}

/* Section Alternada (Dark) */
.section-dark-bg {
  background: linear-gradient(to top, #1E293B, #334155);
}

/* Section White Fade */
.section-white-fade {
  background: linear-gradient(to top, #FFFFFF, rgba(255, 255, 255, 0));
}
```

### Cards
```css
/* Card Normal */
.card {
  background-color: #FFFFFF;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

/* Card Testimonial */
.card-testimonial {
  background: linear-gradient(to top, #1E293B, #334155);
  color: #F1F5F9;
  border-radius: 12px;
}

/* Card Pricing Popular */
.card-pricing-popular {
  background: linear-gradient(#DBEAFE, #EFF6FF);
  border-radius: 12px;
  position: relative;
}
```

## 📐 Tailwind Config Sugerido

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        // Cores customizadas do site
        'slate': {
          50: '#F8FAFC',
          100: '#F1F5F9',
          400: '#94A3B8',
          500: '#64748B',
          700: '#334155',
          800: '#1E293B',
        },
        'blue': {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
        },
        'violet': {
          500: '#7E5FFB',
        },
        'cyan': {
          400: '#2DD4BF',
        },
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(to right top, #2563EB, #3B82F6)',
        'gradient-button': 'linear-gradient(to right top, #60A5FA, rgba(96, 165, 250, 0))',
        'gradient-section-light': 'linear-gradient(#F1F5F9, rgba(241, 245, 249, 0))',
        'gradient-section-white': 'linear-gradient(to top, #FFFFFF, rgba(255, 255, 255, 0))',
        'gradient-testimonial': 'linear-gradient(to top, #1E293B, #334155)',
        'gradient-pricing': 'linear-gradient(#DBEAFE, #EFF6FF)',
      },
    },
  },
}
```

## 🎨 Variáveis CSS (Alternativa)

```css
:root {
  /* Cores */
  --color-white: #FFFFFF;
  --color-slate-100: #F1F5F9;
  --color-slate-400: #94A3B8;
  --color-slate-500: #64748B;
  --color-slate-700: #334155;
  --color-slate-800: #1E293B;
  --color-blue-50: #EFF6FF;
  --color-blue-100: #DBEAFE;
  --color-blue-200: #BFDBFE;
  --color-blue-400: #60A5FA;
  --color-blue-500: #3B82F6;
  --color-blue-600: #2563EB;
  --color-violet-500: #7E5FFB;
  --color-cyan-400: #2DD4BF;

  /* Gradientes */
  --gradient-hero: linear-gradient(to right top, #2563EB, #3B82F6);
  --gradient-button: linear-gradient(to right top, #60A5FA, rgba(96, 165, 250, 0));
  --gradient-section-light: linear-gradient(#F1F5F9, rgba(241, 245, 249, 0));
  --gradient-section-white: linear-gradient(to top, #FFFFFF, rgba(255, 255, 255, 0));
  --gradient-testimonial: linear-gradient(to top, #1E293B, #334155);
  --gradient-pricing: linear-gradient(#DBEAFE, #EFF6FF);
}
```

