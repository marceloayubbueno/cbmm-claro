# 📋 PLANO DE MIGRAÇÃO DE CONTEÚDO - Por Fases

**Objetivo:** Adaptar conteúdo do site-cdg para nosso projeto mantendo e melhorando o design atual.

**Regras:**
- ✅ Manter design atual e melhorá-lo
- ✅ NÃO trazer imagens do outro projeto
- ✅ Adaptar no nosso layout
- ✅ Hero NÃO será alterado por enquanto
- ⏸️ **VALIDAÇÃO OBRIGATÓRIA** após cada fase antes de prosseguir

---

## 📌 ESTRUTURA ATUAL DO PROJETO

**Seções existentes:**
- Hero ✅ (mantido sem alterações)
- Features (será transformado)
- SectionAlternate (pode ser reutilizado)
- Cashback (será removido)
- GetStarted (será removido)
- Compliance (será substituído)
- Pricing (será removido)
- FAQs (será removido)
- CTA (será removido)
- Footer (será adaptado)

---

## 🎯 FASE 1: Features → Cards do Ciclo de Gente

### 📝 Conteúdo a Migrar:
1. **Card 1: Avaliação de Metas**
   - Título: "Avaliação de Metas"
   - Link: `/avaliacao-de-metas`
   - Botão: "SAIBA MAIS"

2. **Card 2: Avaliação de Competências**
   - Título: "Avaliação de Competências"
   - Link: `/avaliacao-de-competencias`
   - Botão: "SAIBA MAIS"

3. **Card 3: Gestão de Desenvolvimento**
   - Título: "Gestão de Desenvolvimento"
   - Link: `/gestao-de-desenvolvimento`
   - Botão: "SAIBA MAIS"

### 🎨 Melhorias de Design:
- ✅ Criar ícones SVG personalizados e sofisticados para cada card
- ✅ Efeitos hover com scale + shadow + glow
- ✅ Gradientes animados nos backgrounds
- ✅ Stagger animations na entrada
- ✅ Glassmorphism ou efeitos de profundidade
- ✅ Animações suaves de transição

### 📦 Arquivo: `components/sections/Features.tsx`

### ✅ Critérios de Validação:
- [ ] 3 cards exibindo corretamente
- [ ] Ícones personalizados e sofisticados
- [ ] Efeitos hover funcionando
- [ ] Links corretos para cada página
- [ ] Responsividade OK (mobile/tablet/desktop)
- [ ] Animações suaves e profissionais

**⏸️ PARE AQUI E AGUARDE VALIDAÇÃO ANTES DE PROSSEGUIR**

---

## 🎯 FASE 2: Seção "Quem participa do Ciclo de Gente?"

### 📝 Conteúdo a Migrar:
**Título:** "Quem participa do Ciclo de Gente?"

**Textos:**
- "Os colaboradores participantes do Ciclo de Gente são selecionados anualmente de acordo com as diretrizes estratégicas da CBMM."
- "Atualmente, os seguintes grupos de cargos/atividades estão contemplados:"
- "Colaboradores admitidos ou movimentados de posição, até 30 de setembro."
- "Colaborados com cargos de Presidente, Diretores, Gerentes Executivos, Gerentes, Especialistas, Coordenadores e equipes ligadas aos gestores dos cargos descritos, exceto o público Técnico e Operacional da CBMM."

### 🎨 Layout:
- Layout alternado: Texto à esquerda (70%) + Espaço para imagem/visual à direita (30%)
- Usar SectionAlternate ou criar novo componente Participation.tsx
- Não usar imagem real do outro projeto, criar visual com gradientes/efeitos

### 🎨 Melhorias de Design:
- ✅ Ícone/logo do Ciclo de Gente no topo
- ✅ Linha decorativa com gradiente (cyan-blue-purple)
- ✅ Background com gradientes sofisticados
- ✅ Efeitos de luz/glow no background
- ✅ Animações de entrada suaves
- ✅ Layout responsivo (mobile: texto em cima, desktop: lado a lado)

### 📦 Arquivo: Criar `components/sections/Participation.tsx` OU adaptar `SectionAlternate.tsx`

### ✅ Critérios de Validação:
- [ ] Texto completo e formatado corretamente
- [ ] Layout alternado funcionando (desktop)
- [ ] Layout vertical no mobile
- [ ] Ícone/visual do Ciclo de Gente presente
- [ ] Efeitos visuais profissionais
- [ ] Responsividade OK

**⏸️ PARE AQUI E AGUARDE VALIDAÇÃO ANTES DE PROSSEGUIR**

---

## 🎯 FASE 3: Seção de Contatos

### 📝 Conteúdo a Migrar:

**Card 1:**
- Título: "CICLO DE GENTE / SISTEMA SUCCESS FACTORS"
- Andréa Affonso
- andrea.affonso@cbmm.com
- Dora Mirabeau
- dora.reis@cbmm.com

**Card 2:**
- Título: "GESTÃO DE METAS / SISTEMA STRATWSONE"
- Osvaldo Martins Neto
- gestaodemetas@cbmm.com

**Card 3:**
- Título: "Os comunicados sobre o Ciclo de Gente são enviados periodicamente via Comunicação Geral."

### 🎨 Layout:
- Grid de 3 colunas (desktop)
- Stack vertical (mobile)
- Cards com glassmorphism

### 🎨 Melhorias de Design:
- ✅ Ícones de email/contato em cada card
- ✅ Glassmorphism (backdrop-blur + bg-white/5)
- ✅ Borders sutis e elegantes
- ✅ Hover effects com translate-y + shadow
- ✅ Stagger animations
- ✅ Background dark com gradientes

### 📦 Arquivo: Criar `components/sections/Contacts.tsx` OU substituir `Compliance.tsx`

### ✅ Critérios de Validação:
- [ ] 3 cards de contato exibindo corretamente
- [ ] Informações de contato formatadas
- [ ] Ícones de email presentes
- [ ] Efeitos glassmorphism funcionando
- [ ] Hover effects suaves
- [ ] Responsividade OK

**⏸️ PARE AQUI E AGUARDE VALIDAÇÃO ANTES DE PROSSEGUIR**

---

## 🎯 FASE 4: Adaptar Footer

### 📝 Conteúdo a Migrar:
- Logo CBMM (SVG ou texto)
- Link para `https://cbmm.com`
- Imagem "Nossos Valores CBMM" (se disponível, caso contrário criar visual alternativo)

### 🎨 Melhorias de Design:
- ✅ Manter estrutura atual do Footer
- ✅ Adicionar logo CBMM
- ✅ Adicionar link cbmm.com
- ✅ Espaço para valores da CBMM
- ✅ Manter efeitos de gradiente atuais

### 📦 Arquivo: `components/Footer.tsx`

### ✅ Critérios de Validação:
- [ ] Logo CBMM presente
- [ ] Link cbmm.com funcionando
- [ ] Layout mantido e melhorado
- [ ] Responsividade OK

**⏸️ PARE AQUI E AGUARDE VALIDAÇÃO ANTES DE PROSSEGUIR**

---

## 🎯 FASE 5: Reorganizar Estrutura da Página

### 📝 Mudanças:
**Manter:**
- Hero (sem alterações)
- Features → Cards (Fase 1)
- Participation (Fase 2)
- Contacts (Fase 3)
- Footer (Fase 4)

**Remover:**
- SectionAlternate (se não foi usado)
- Cashback
- GetStarted
- Compliance (substituído por Contacts)
- Pricing
- FAQs
- CTA

### 📦 Arquivo: `app/page.tsx`

### ✅ Critérios de Validação:
- [ ] Apenas seções necessárias na página
- [ ] Ordem correta: Hero → Cards → Participação → Contatos → Footer
- [ ] Nenhuma seção genérica restante
- [ ] Fluxo visual coeso

**⏸️ PARE AQUI E AGUARDE VALIDAÇÃO ANTES DE PROSSEGUIR**

---

## 🎯 FASE 6: Ajustes Finais e Polish

### 📝 Tarefas:
- ✅ Revisar todas as animações
- ✅ Ajustar timing das transições
- ✅ Melhorar efeitos visuais globais
- ✅ Testar responsividade completa
- ✅ Verificar micro-interações
- ✅ Otimizar performance
- ✅ Ajustar espaçamentos e alinhamentos

### ✅ Critérios de Validação:
- [ ] Todas as animações suaves
- [ ] Efeitos visuais consistentes
- [ ] Responsividade perfeita em todos os breakpoints
- [ ] Performance otimizada
- [ ] Sem bugs visuais

**✅ FINALIZAÇÃO - Projeto completo e validado**

---

## 📋 RESUMO DAS FASES

1. ✅ **FASE 1:** Features → Cards do Ciclo de Gente
2. ✅ **FASE 2:** Seção "Quem participa"
3. ✅ **FASE 3:** Seção de Contatos
4. ✅ **FASE 4:** Adaptar Footer
5. ✅ **FASE 5:** Reorganizar page.tsx
6. ✅ **FASE 6:** Ajustes finais

---

**🚀 Pronto para começar pela FASE 1?**
**Aguardo sua confirmação para iniciar a implementação!**

