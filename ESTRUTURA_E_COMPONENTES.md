# Estrutura HTML e Componentes - Site FinTech

## 📐 Estrutura Geral da Página

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Meta tags -->
  <!-- CSS: AOS, Swiper, Custom -->
</head>
<body>
  <div class="page-wrapper">
    <!-- Header -->
    <header>...</header>
    
    <!-- Main Content -->
    <main>
      <!-- Hero Section -->
      <section class="hero">...</section>
      
      <!-- Features Section #1 -->
      <section>...</section>
      
      <!-- Section #2 (Alternada) -->
      <section>...</section>
      
      <!-- Section #3 (Alternada Dark) -->
      <section>...</section>
      
      <!-- Section #4 (Cashback) -->
      <section>...</section>
      
      <!-- Section #5 (Get Started) -->
      <section>...</section>
      
      <!-- Section #6 (Compliance) -->
      <section>...</section>
      
      <!-- Section #7 (Pricing) -->
      <section>...</section>
      
      <!-- FAQs Section -->
      <section>...</section>
      
      <!-- CTA Section -->
      <section class="cta">...</section>
    </main>
    
    <!-- Footer -->
    <footer>...</footer>
  </div>
  
  <!-- Scripts: Alpine, AOS, Swiper, Main -->
</body>
</html>
```

## 🧩 Componentes Detalhados

### 1. Header Component

```html
<header class="site-header">
  <div class="container">
    <div class="header-inner">
      <!-- Logo -->
      <div class="logo">
        <a href="/" aria-label="Cruip">
          <svg width="30" height="30">
            <!-- Logo SVG -->
          </svg>
        </a>
      </div>
      
      <!-- Navigation -->
      <nav class="desktop-nav">
        <ul>
          <li>
            <a href="/apply" class="btn-primary">
              Get your card
              <span class="icon-arrow">
                <svg>...</svg>
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</header>
```

**Estilos:**
- Background: Transparente
- Position: Fixed ou Absolute (sobre o hero)
- Z-index: Alto para ficar sobre gradientes

### 2. Hero Section

```html
<section class="hero">
  <!-- Background Gradient -->
  <div class="hero-bg" aria-hidden="true"></div>
  
  <div class="container">
    <div class="hero-content">
      <!-- Text Content -->
      <div class="hero-text">
        <h1 data-aos="fade-up" data-aos-delay="100">
          Create physical and virtual cards for your 
          <span class="highlight">
            <svg>...</svg>
            business
          </span>
        </h1>
        <p data-aos="fade-up" data-aos-delay="200">
          Our landing page template works on all devices...
        </p>
        
        <!-- Buttons -->
        <div class="hero-buttons" data-aos="fade-up" data-aos-delay="300">
          <a href="/apply" class="btn-primary">Get your card</a>
          <a href="/support" class="btn-outline">Read documentation</a>
        </div>
      </div>
      
      <!-- Image -->
      <div class="hero-image">
        <div class="hero-illustration">
          <img src="hero-illustration.svg" alt="" aria-hidden="true">
          <img src="hero-image.png" alt="Credit card" data-aos="fade-up">
        </div>
      </div>
    </div>
  </div>
</section>
```

**Características:**
- Background: Gradiente azul (to right top)
- Layout: 2 colunas (texto + imagem)
- Animações: AOS fade-up com delays escalonados
- Altura: ~542px (desktop)

### 3. Features Cards Section

```html
<section class="features-section">
  <div class="container">
    <div class="features-grid">
      <!-- Feature Card 1 -->
      <div class="feature-card" data-aos="fade-up">
        <div class="feature-icon">
          <svg>...</svg>
        </div>
        <h4>Create custom cards</h4>
        <p>Create cards that work exactly as you configured them...</p>
      </div>
      
      <!-- Feature Card 2 -->
      <div class="feature-card" data-aos="fade-up" data-aos-delay="100">
        ...
      </div>
      
      <!-- Feature Card 3 -->
      <div class="feature-card" data-aos="fade-up" data-aos-delay="200">
        ...
      </div>
    </div>
  </div>
</section>
```

**Características:**
- Grid: 3 colunas (desktop), 1 coluna (mobile)
- Ícones: SVG com gradientes
- Animações: Fade-up com delays

### 4. Alternating Sections

```html
<!-- Section Alternada (Light) -->
<section class="section-alternate section-light">
  <div class="section-bg" aria-hidden="true"></div>
  
  <div class="container">
    <div class="section-content">
      <!-- Text Column -->
      <div class="section-text">
        <h2 data-aos="fade-up" data-aos-delay="100">
          Build a flexible card program...
        </h2>
        <p data-aos="fade-up" data-aos-delay="200">...</p>
        
        <div data-aos="fade-up" data-aos-delay="300">
          <a href="/apply" class="btn-secondary">Get your card</a>
        </div>
        
        <!-- Quote -->
        <div class="quote" data-aos="fade-up" data-aos-delay="300">
          <img src="quote-author-01.jpg" alt="Author">
          <blockquote>...</blockquote>
        </div>
      </div>
      
      <!-- Image Column -->
      <div class="section-image">
        <img src="features-02.png" alt="Features" data-aos="fade-up">
      </div>
    </div>
  </div>
</section>

<!-- Section Alternada (Dark) -->
<section class="section-alternate section-dark">
  <!-- Mesma estrutura, mas com classes dark -->
</section>
```

**Características:**
- Layout alternado: Texto/Imagem, Imagem/Texto
- Backgrounds: Gradientes diferentes (light/dark)
- Quotes: Com avatar e texto

### 5. Cashback Section

```html
<section class="cashback-section">
  <div class="section-bg-1" aria-hidden="true"></div>
  <div class="section-bg-2" aria-hidden="true"></div>
  
  <div class="container">
    <div class="section-content">
      <!-- Text -->
      <div class="section-text">
        <h2 data-aos="fade-up" data-aos-delay="100">
          Get cashback rewards on your favourite brands
        </h2>
        <p data-aos="fade-up" data-aos-delay="200">...</p>
        
        <!-- Lists -->
        <div class="brands-lists" data-aos="fade-up" data-aos-delay="300">
          <div class="list-column">
            <h5>Physical Stores</h5>
            <ul>
              <li>
                <svg class="check-icon">...</svg>
                <span>Starbucks</span>
              </li>
              <!-- Mais itens -->
            </ul>
          </div>
          
          <div class="list-column">
            <h5>Online Stores</h5>
            <ul>
              <!-- Mesma estrutura -->
            </ul>
          </div>
        </div>
        
        <div data-aos="fade-up" data-aos-delay="300">
          <a href="/apply" class="btn-secondary">Get your card</a>
        </div>
      </div>
      
      <!-- Image -->
      <div class="section-image">
        <img src="features-04.png" alt="Features" data-aos="fade-up">
      </div>
    </div>
  </div>
</section>
```

**Características:**
- 2 colunas de listas (Physical/Online)
- Checkmarks SVG em cada item
- Background: Múltiplos gradientes sobrepostos

### 6. Get Started Section

```html
<section class="get-started-section">
  <div class="section-bg" aria-hidden="true"></div>
  
  <div class="container">
    <div class="section-content">
      <!-- Header -->
      <div class="section-header" data-aos="fade-up">
        <h2>Get started in minutes...</h2>
        <p>...</p>
      </div>
      
      <!-- Logos -->
      <div class="logos" data-aos="fade-up" data-aos-delay="100">
        <img src="logos-illustration.svg" alt="" aria-hidden="true">
        <img src="logos.png" alt="Partner logos">
      </div>
      
      <!-- Steps -->
      <div class="steps-grid" data-aos="fade-up" data-aos-delay="200">
        <div class="step-card">
          <div class="step-number">1</div>
          <h4>Download the app</h4>
          <p>...</p>
        </div>
        
        <div class="step-card">
          <div class="step-number">2</div>
          <h4>Request your card</h4>
          <p>...</p>
        </div>
        
        <div class="step-card">
          <div class="step-number">3</div>
          <h4>Connect all your account</h4>
          <p>...</p>
        </div>
      </div>
    </div>
  </div>
</section>
```

**Características:**
- Números grandes em círculos com gradiente
- Grid de 3 colunas
- Background: Gradiente azul

### 7. Compliance Section

```html
<section class="compliance-section">
  <div class="section-bg" aria-hidden="true"></div>
  
  <div class="container">
    <div class="section-content">
      <!-- Text -->
      <div class="section-text">
        <h2 data-aos="fade-up" data-aos-delay="100">
          Compliance built card...
        </h2>
        <p data-aos="fade-up" data-aos-delay="200">...</p>
        
        <ul class="features-list" data-aos="fade-up" data-aos-delay="300">
          <li>
            <svg class="check-icon">...</svg>
            <span>Identity verifications</span>
          </li>
          <!-- Mais itens -->
        </ul>
      </div>
      
      <!-- Testimonials Carousel -->
      <div class="testimonials-carousel" data-aos="fade-up">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="testimonial-card">
                <img src="testimonial-01.jpg" alt="Testimonial">
                <div class="testimonial-content">
                  <img src="testimonial-sign-01.svg" alt="Signature">
                  <p>"This card is awesome..."</p>
                  <div class="testimonial-author">
                    <span class="name">Elisa Koeppel</span>
                    <span> - </span>
                    <span class="role">CEO & Co-Founder</span>
                  </div>
                </div>
              </div>
            </div>
            <!-- Mais slides -->
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </div>
</section>
```

**Características:**
- Carousel com Swiper.js
- Modo: Fade
- Cards com gradiente escuro
- Pagination: Bullets

### 8. Pricing Section

```html
<section class="pricing-section">
  <div class="section-bg-1" aria-hidden="true"></div>
  <div class="section-bg-2" aria-hidden="true"></div>
  
  <div class="container">
    <div class="section-content">
      <!-- Header -->
      <div class="section-header" data-aos="fade-up">
        <h2>Get the only custom super card...</h2>
        <p>...</p>
      </div>
      
      <!-- Pricing Cards -->
      <div class="pricing-grid" data-aos="fade-up" data-aos-delay="100">
        <!-- Card Starter -->
        <div class="pricing-card">
          <div class="card-header">
            <div class="card-name">Starter</div>
            <img src="pricing-01.png" alt="Starter card">
          </div>
          <div class="card-price">
            <div class="price">$0/m</div>
            <a href="#0" class="btn-secondary">Get Starter</a>
          </div>
          <div class="card-features">
            <div class="features-label">Features include</div>
            <ul>
              <li>
                <svg class="check-icon">...</svg>
                <span>Contactless payments</span>
              </li>
              <!-- Mais itens -->
            </ul>
          </div>
        </div>
        
        <!-- Card Smart (Popular) -->
        <div class="pricing-card pricing-card-popular">
          <div class="popular-badge">Popular</div>
          <!-- Mesma estrutura -->
        </div>
        
        <!-- Card You -->
        <div class="pricing-card">
          <!-- Mesma estrutura -->
        </div>
        
        <!-- Card Black -->
        <div class="pricing-card">
          <!-- Mesma estrutura -->
        </div>
      </div>
    </div>
  </div>
</section>
```

**Características:**
- Grid: 4 colunas (desktop), 1-2 colunas (mobile)
- Badge "Popular" no card Smart
- Background gradiente no card popular
- Imagem do cartão no topo de cada card

### 9. FAQs Section

```html
<section class="faqs-section">
  <div class="container">
    <div class="faqs-content">
      <!-- Header -->
      <div class="section-header">
        <h2>FAQs</h2>
      </div>
      
      <!-- Columns -->
      <div class="faqs-grid">
        <div class="faqs-column">
          <div class="faq-item">
            <h4>How can I add money to my account?</h4>
            <p>Lorem ipsum dolor sit amet...</p>
          </div>
          <!-- Mais itens -->
        </div>
        
        <div class="faqs-column">
          <!-- Mesma estrutura -->
        </div>
      </div>
    </div>
  </div>
</section>
```

**Características:**
- 2 colunas (desktop)
- Layout simples: Pergunta + Resposta
- Sem accordion (expansível)

### 10. CTA Section

```html
<section class="cta-section">
  <div class="cta-bg" aria-hidden="true"></div>
  
  <div class="container">
    <div class="cta-content">
      <div class="cta-text">
        <p class="cta-label">What are you waiting for?</p>
        <h2>Get the only custom super card</h2>
      </div>
      
      <div class="cta-buttons">
        <a href="/apply" class="btn-secondary">Get your card</a>
        <a href="#0" class="btn-outline">Get in touch</a>
      </div>
    </div>
  </div>
</section>
```

**Características:**
- Background: Gradiente escuro
- 2 botões lado a lado
- Texto centralizado

### 11. Footer

```html
<footer class="site-footer">
  <div class="footer-bg" aria-hidden="true"></div>
  <div class="footer-illustration" aria-hidden="true">
    <img src="footer-illustration.svg" alt="">
  </div>
  
  <div class="container">
    <!-- Blocks -->
    <div class="footer-blocks">
      <!-- Logo Block -->
      <div class="footer-block">
        <a href="/" class="logo">
          <svg>...</svg>
        </a>
      </div>
      
      <!-- Links Blocks -->
      <div class="footer-block">
        <h6>Essentials</h6>
        <ul>
          <li><a href="#0">Payments</a></li>
          <!-- Mais links -->
        </ul>
      </div>
      
      <!-- Mais blocks -->
    </div>
    
    <!-- Bottom Area -->
    <div class="footer-bottom">
      <p>If you would like to find out more...</p>
    </div>
  </div>
</footer>
```

**Características:**
- Background: Gradiente escuro
- Ilustração decorativa no topo
- Múltiplas colunas de links
- Texto legal no rodapé

## 🎨 Classes CSS Principais (Traduzidas)

### Layout
- `.container` - Container principal (max-width, padding)
- `.section-content` - Conteúdo da seção
- `.section-text` - Coluna de texto
- `.section-image` - Coluna de imagem

### Backgrounds
- `.hero-bg` - Background do hero
- `.section-bg` - Background de seção
- `.cta-bg` - Background do CTA
- `.footer-bg` - Background do footer

### Buttons
- `.btn-primary` - Botão primário (dark)
- `.btn-secondary` - Botão secundário (blue)
- `.btn-outline` - Botão outline

### Cards
- `.feature-card` - Card de feature
- `.pricing-card` - Card de preço
- `.testimonial-card` - Card de testimonial
- `.step-card` - Card de passo

### Utilities
- `.highlight` - Destaque de texto
- `.icon-arrow` - Ícone de seta
- `.check-icon` - Ícone de check
- `.step-number` - Número de passo

## 📱 Responsividade

### Breakpoints
- Mobile: `< 768px`
- Tablet: `768px - 1024px`
- Desktop: `> 1024px`

### Comportamento
- Grids: 1 coluna (mobile) → 2-4 colunas (desktop)
- Imagens: Full width (mobile) → Tamanho fixo (desktop)
- Texto: Centralizado (mobile) → Alinhado (desktop)
- Navegação: Hamburger (mobile) → Menu completo (desktop)

