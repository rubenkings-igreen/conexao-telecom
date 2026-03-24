import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MessageCircle, Zap, Gift, Shield, TrendingUp, Leaf, Globe, Check, Smartphone, Wifi, Lightbulb, ShoppingCart, RotateCw } from "lucide-react";
import { useState } from "react";

/**
 * Design Philosophy: Conexão Telecom
 * - Primary Colors: Green (#1B8A3E) + Blue (#0066CC) + White
 * - Typography: Bold headers with Poppins, readable body with Inter
 * - Layout: Asymmetric, mobile-first with generous spacing
 * - Interaction: Smooth transitions, clear CTAs, accessibility-first
 * - Visual Hierarchy: Large hero image, card-based sections, progressive disclosure
 * - Bilingual: Portuguese (PT) + English (EN)
 * - Icons: Lucide-react (no emojis for better compatibility)
 */

type Language = "pt" | "en";

const translations = {
  pt: {
    tagline: "A Operadora Móvel Virtual da iGreen Energy",
    title: "Conexão Telecom",
    subtitle: "Internet que acumula + Ligações e WhatsApp ilimitados",
    description: "Sem fidelidade, sem perder dados e com +60 mil descontos no iGreen Club. Conectado à maior plataforma de energia solar compartilhada do Brasil.",
    ctaPlan: "Quero meu plano agora",
    ctaWhatsApp: "Falar no WhatsApp",
    discounts: "Descontos iGreen Club",
    coverage: "Cobertura Nacional",
    noFidelity: "Sem Fidelidade",
    howWorks: "Como funciona a Conexão Telecom",
    mvnoDesc: "Somos uma operadora móvel virtual (MVNO) da iGreen Energy. Não temos rede própria: usamos a infraestrutura das maiores operadoras do Brasil (principalmente Vivo), garantindo cobertura 4G e 5G em todo o território nacional.",
    ourPlans: "Nossos Planos",
    choosePlan: "Escolha o plano perfeito para seu consumo",
    withPortability: "Com Portabilidade",
    withoutPortability: "Sem Portabilidade",
    allBenefits: "Todos os planos têm internet acumulada. Se o pagamento não for realizado até o vencimento, os GB acumulados são zerados.",
    exclusiveBenefits: "Benefícios que só a Conexão Telecom oferece",
    faq: "Perguntas Frequentes",
    faqDesc: "Tire suas dúvidas sobre a Conexão Telecom",
    ready: "Pronto para economizar no celular e ainda ajudar o planeta?",
    readyDesc: "Fale comigo no WhatsApp agora e eu te indico o plano perfeito pro seu consumo!",
    footer: "© Página criada para Miqueias Ruben – Licenciado Autorizado iGreen Energy",
    footerRights: "Todos os direitos reservados. Informações oficiais da Conexão Telecom.",
    selectPlan: "Escolher Plano",
    unlimitedCalls: "Ligações ilimitadas",
    unlimitedWhatsApp: "WhatsApp ilimitado",
    accumulatedData: "Internet acumulada",
    freeClub: "iGreen Club grátis",
  },
  en: {
    tagline: "Virtual Mobile Operator of iGreen Energy",
    title: "Conexão Telecom",
    subtitle: "Data that accumulates + Unlimited calls and WhatsApp",
    description: "No commitment, no data loss and +60 thousand discounts on iGreen Club. Connected to Brazil's largest shared solar energy platform.",
    ctaPlan: "Get my plan now",
    ctaWhatsApp: "Chat on WhatsApp",
    discounts: "iGreen Club Discounts",
    coverage: "National Coverage",
    noFidelity: "No Commitment",
    howWorks: "How Conexão Telecom Works",
    mvnoDesc: "We are a virtual mobile operator (MVNO) of iGreen Energy. We don't have our own network: we use the infrastructure of Brazil's largest operators (mainly Vivo), guaranteeing 4G and 5G coverage across the entire country.",
    ourPlans: "Our Plans",
    choosePlan: "Choose the perfect plan for your consumption",
    withPortability: "With Number Portability",
    withoutPortability: "Without Portability",
    allBenefits: "All plans have accumulated data. If payment is not made by the due date, accumulated GB will be reset.",
    exclusiveBenefits: "Benefits only Conexão Telecom offers",
    faq: "Frequently Asked Questions",
    faqDesc: "Get answers about Conexão Telecom",
    ready: "Ready to save on your phone and help the planet?",
    readyDesc: "Chat with me on WhatsApp now and I'll recommend the perfect plan for your needs!",
    footer: "© Page created for Miqueias Ruben – Authorized Licensee iGreen Energy",
    footerRights: "All rights reserved. Official Conexão Telecom information.",
    selectPlan: "Select Plan",
    unlimitedCalls: "Unlimited calls",
    unlimitedWhatsApp: "Unlimited WhatsApp",
    accumulatedData: "Accumulated data",
    freeClub: "Free iGreen Club",
  }
};

export default function Home() {
  const [language, setLanguage] = useState<Language>("pt");
  const t = translations[language];

  const planos = [
    { name: "Start", gb: 6, gbComPortabilidade: 11, priceComPortabilidade: 54.90, priceSem: 59.90 },
    { name: "Mega", gb: 10, gbComPortabilidade: 15, priceComPortabilidade: 59.90, priceSem: 64.90 },
    { name: "Giga", gb: 15, gbComPortabilidade: 20, priceComPortabilidade: 69.90, priceSem: 74.90 },
    { name: "Ultra", gb: 23, gbComPortabilidade: 28, priceComPortabilidade: 79.90, priceSem: 84.90 },
    { name: "Infinity", gb: 45, gbComPortabilidade: 50, priceComPortabilidade: 99.90, priceSem: 104.90 },
  ];

  const beneficios = [
    { icon: TrendingUp, title: language === "pt" ? "Internet Acumulada" : "Accumulated Data", description: language === "pt" ? "O que você não usar no mês vira crédito automático pro mês seguinte" : "Unused data becomes automatic credit for next month" },
    { icon: Phone, title: language === "pt" ? "Ligações Ilimitadas" : "Unlimited Calls", description: language === "pt" ? "Ligações ilimitadas para todo Brasil, sempre conectado" : "Unlimited calls throughout Brazil, always connected" },
    { icon: MessageCircle, title: language === "pt" ? "WhatsApp Ilimitado" : "Unlimited WhatsApp", description: language === "pt" ? "WhatsApp ilimitado sem consumir sua franquia de dados" : "Unlimited WhatsApp without consuming your data allowance" },
    { icon: Shield, title: language === "pt" ? "Sem Fidelidade" : "No Commitment", description: language === "pt" ? "Troque ou cancele quando quiser, sem multa ou compromisso" : "Switch or cancel anytime, no fees or commitment" },
    { icon: Gift, title: language === "pt" ? "+5 GB na Portabilidade" : "+5 GB on Portability", description: language === "pt" ? "Traga seu número atual e ganhe 5 GB extras de brinde" : "Bring your current number and get 5 extra GB as a bonus" },
    { icon: Zap, title: language === "pt" ? "eSIM Instantâneo" : "Instant eSIM", description: language === "pt" ? "Ative seu chip em minutos pelo app, sem esperar" : "Activate your eSIM in minutes via the app" },
  ];

  const diferenciais = [
    { icon: Leaf, title: language === "pt" ? "Energia Solar" : "Solar Energy", text: language === "pt" ? "Conectado à maior plataforma de energia solar compartilhada do Brasil" : "Connected to Brazil's largest shared solar energy platform" },
    { icon: Smartphone, title: language === "pt" ? "App iGreen Club" : "iGreen Club App", text: language === "pt" ? "Gerencie tudo pelo App iGreen Club (consumo, boleto, suporte 24h)" : "Manage everything via iGreen Club App (usage, billing, 24h support)" },
    { icon: RotateCw, title: language === "pt" ? "Troca Fácil" : "Easy Switch", text: language === "pt" ? "Troca de plano a qualquer momento sem taxas" : "Change plans anytime without fees" },
    { icon: Lightbulb, title: language === "pt" ? "Sustentabilidade" : "Sustainability", text: language === "pt" ? "Economia real + sustentabilidade em um único serviço" : "Real savings + sustainability in one service" },
    { icon: ShoppingCart, title: language === "pt" ? "Descontos" : "Discounts", text: language === "pt" ? "+60 mil descontos em farmácias, educação, serviços e muito mais" : "+60 thousand discounts in pharmacies, education, services and more" },
  ];

  const faqs = [
    { 
      pergunta: language === "pt" ? "Qual a cobertura?" : "What is the coverage?", 
      resposta: language === "pt" ? "Cobertura nacional com 4G e 5G em todo o território brasileiro" : "National coverage with 4G and 5G across Brazil" 
    },
    { 
      pergunta: language === "pt" ? "Posso trazer meu número?" : "Can I bring my number?", 
      resposta: language === "pt" ? "Sim! Portabilidade gratuita + 5 GB extras como bônus" : "Yes! Free portability + 5 extra GB as a bonus" 
    },
    { 
      pergunta: language === "pt" ? "Tem fidelidade?" : "Is there a commitment?", 
      resposta: language === "pt" ? "Não. Você é livre para trocar ou cancelar quando quiser" : "No. You're free to switch or cancel anytime" 
    },
    { 
      pergunta: language === "pt" ? "Como ativo o chip?" : "How do I activate?", 
      resposta: language === "pt" ? "Chip físico ou eSIM - ativação em minutos pelo app" : "Physical chip or eSIM - activation in minutes via app" 
    },
    { 
      pergunta: language === "pt" ? "O que acontece com os GB não usados?" : "What happens to unused GB?", 
      resposta: language === "pt" ? "Acumulam automaticamente para o mês seguinte" : "Automatically accumulates for next month" 
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Language Switcher */}
      <div className="fixed top-4 right-4 z-50 flex gap-2 bg-white/90 backdrop-blur px-3 py-2 rounded-lg shadow-lg">
        <button
          onClick={() => setLanguage("pt")}
          className={`px-3 py-1 rounded font-semibold transition-colors ${
            language === "pt" 
              ? "bg-[#1B8A3E] text-white" 
              : "text-slate-600 hover:text-slate-900"
          }`}
        >
          PT
        </button>
        <button
          onClick={() => setLanguage("en")}
          className={`px-3 py-1 rounded font-semibold transition-colors ${
            language === "en" 
              ? "bg-[#0066CC] text-white" 
              : "text-slate-600 hover:text-slate-900"
          }`}
        >
          EN
        </button>
      </div>

      {/* HEADER / HERO - Image Only Section */}
      <section className="relative w-full h-screen md:h-screen overflow-hidden">
        {/* Background Image - Fixed for parallax effect */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663445259424/EZVLwJBgtdZUVxGXLNir8r/hero-conexao-telecom-KGTLxtUvomgVtL3cyqYL6d.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed"
          }}
        >
          <div className="absolute inset-0 bg-black/35"></div>
        </div>

        {/* Content - Positioned at bottom of hero */}
        <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black/60 to-transparent pt-20 pb-12">
          <div className="container">
            <div className="max-w-2xl">
              <div className="space-y-4 text-white">
                <div className="inline-block">
                  <span className="text-xs md:text-sm font-semibold bg-white/20 backdrop-blur px-3 md:px-4 py-2 rounded-full text-white">
                    {t.tagline}
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  {t.title}
                </h1>
                <p className="text-lg md:text-2xl font-light text-white/95">
                  {t.subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>


      </section>

      {/* HERO INFO - Content Section Below Image */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-8">
            {/* Main Description */}
            <div className="space-y-4">
              <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
                {t.description}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary text-base md:text-lg px-6 md:px-8 py-5 md:py-6 h-auto flex-1 sm:flex-none">
                {t.ctaPlan}
              </Button>
              <Button className="btn-secondary text-base md:text-lg px-6 md:px-8 py-5 md:py-6 h-auto flex items-center justify-center gap-2 flex-1 sm:flex-none">
                <MessageCircle size={20} />
                {t.ctaWhatsApp}
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-4 md:gap-8 pt-8 border-t border-slate-200">
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-[#1B8A3E]">+60K</p>
                <p className="text-xs md:text-sm text-slate-600 mt-2">{t.discounts}</p>
              </div>
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-[#0066CC]">4G/5G</p>
                <p className="text-xs md:text-sm text-slate-600 mt-2">{t.coverage}</p>
              </div>
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-slate-900">0%</p>
                <p className="text-xs md:text-sm text-slate-600 mt-2">{t.noFidelity}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-gradient-green">
              {t.howWorks}
            </h2>
            <p className="text-base md:text-lg text-slate-600 leading-relaxed">
              {t.mvnoDesc}
            </p>
          </div>

          {/* Diferenciais Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {beneficios.map((beneficio, idx) => {
              const Icon = beneficio.icon;
              return (
                <Card key={idx} className="card-elevation border-0 bg-white hover:bg-slate-50 transition-colors">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-gradient-green-light flex items-center justify-center mb-4">
                      <Icon size={24} className="text-white" />
                    </div>
                    <CardTitle className="text-lg md:text-xl text-slate-900">{beneficio.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm md:text-base text-slate-600 leading-relaxed">{beneficio.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* NOSSOS PLANOS */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-slate-900">
              {t.ourPlans}
            </h2>
            <p className="text-base md:text-lg text-slate-600">
              {t.choosePlan}
            </p>
          </div>

          {/* Plans Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 mb-6 md:mb-8">
            {planos.map((plano, idx) => (
              <Card key={idx} className={`card-elevation border-0 overflow-hidden transition-transform hover:scale-105 ${idx === 4 ? 'lg:col-span-1 ring-2 ring-[#1B8A3E]' : ''}`}>
                <div className={`h-2 ${idx % 2 === 0 ? 'bg-gradient-green-light' : 'bg-gradient-to-r from-[#0066CC] to-[#00A8E8]'}`}></div>
                <CardHeader>
                  <CardTitle className="text-xl md:text-2xl font-bold text-slate-900">{plano.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 md:space-y-6">
                  {/* Data Display */}
                  <div className="space-y-3">
                    <div className="bg-slate-50 p-3 md:p-4 rounded-lg">
                      <p className="text-xs md:text-sm text-slate-600 mb-1">{t.withPortability}</p>
                      <p className="text-xl md:text-2xl font-bold text-[#1B8A3E]">{plano.gbComPortabilidade} GB</p>
                      <p className="text-xs text-slate-500 mt-1">({plano.gb} + 5 GB)</p>
                    </div>
                    <p className="text-lg md:text-xl font-bold text-slate-900">R$ {plano.priceComPortabilidade.toFixed(2)}</p>
                  </div>

                  {/* Sem Portabilidade */}
                  <div className="bg-blue-50 p-3 md:p-4 rounded-lg">
                    <p className="text-xs md:text-sm text-slate-600 mb-1">{t.withoutPortability}</p>
                    <p className="text-xl md:text-2xl font-bold text-[#0066CC]">{plano.gb} GB</p>
                    <p className="text-lg md:text-xl font-bold text-slate-900 mt-2">R$ {plano.priceSem.toFixed(2)}</p>
                  </div>

                  {/* Benefits */}
                  <div className="space-y-2 border-t pt-4">
                    <div className="flex items-center gap-2 text-xs md:text-sm text-slate-700">
                      <Check size={16} className="text-[#1B8A3E] flex-shrink-0" />
                      <span>{t.unlimitedCalls}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs md:text-sm text-slate-700">
                      <Check size={16} className="text-[#1B8A3E] flex-shrink-0" />
                      <span>{t.unlimitedWhatsApp}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs md:text-sm text-slate-700">
                      <Check size={16} className="text-[#1B8A3E] flex-shrink-0" />
                      <span>{t.accumulatedData}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs md:text-sm text-slate-700">
                      <Check size={16} className="text-[#1B8A3E] flex-shrink-0" />
                      <span>{t.freeClub}</span>
                    </div>
                  </div>

                  <Button className="w-full btn-primary text-sm md:text-base">{t.selectPlan}</Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Nota importante */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 md:p-6 text-center">
            <p className="text-sm md:text-base text-slate-700">
              <strong>{t.allBenefits}</strong>
            </p>
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS EXCLUSIVOS */}
      <section 
        className="py-16 md:py-24 relative overflow-hidden"
        style={{
          backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663445259424/EZVLwJBgtdZUVxGXLNir8r/benefits-pattern-mCLzn3V8DG9perptHyv8jV.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-white/95"></div>
        
        <div className="container relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-slate-900">
              {t.exclusiveBenefits}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
            {diferenciais.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="text-center space-y-3">
                  <div className="w-16 h-16 rounded-lg bg-gradient-green-light flex items-center justify-center mx-auto">
                    <Icon size={32} className="text-white" />
                  </div>
                  <h3 className="font-semibold text-slate-900 text-sm md:text-base">{item.title}</h3>
                  <p className="text-slate-700 text-sm md:text-base leading-relaxed">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-slate-900">
              {t.faq}
            </h2>
            <p className="text-base md:text-lg text-slate-600">
              {t.faqDesc}
            </p>
          </div>

          <div className="max-w-2xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <Card key={idx} className="border-0 card-elevation">
                <CardHeader>
                  <CardTitle className="text-base md:text-lg text-slate-900 flex items-start gap-3">
                    <span className="text-[#1B8A3E] font-bold mt-1 flex-shrink-0">Q{idx + 1}.</span>
                    <span>{faq.pergunta}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm md:text-base text-slate-600 leading-relaxed">{faq.resposta}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section 
        className="py-16 md:py-24 relative overflow-hidden"
        style={{
          backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663445259424/EZVLwJBgtdZUVxGXLNir8r/cta-background-nbGZwm5WnYtnxDTm58pDwz.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="container relative z-10">
          <div className="text-center space-y-6 md:space-y-8 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              {t.ready}
            </h2>
            <p className="text-lg md:text-xl text-white/90">
              {t.readyDesc}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 md:pt-8">
              <Button className="btn-primary text-base md:text-lg px-6 md:px-8 py-5 md:py-6 h-auto">
                {t.ctaPlan}
              </Button>
              <Button className="btn-secondary text-base md:text-lg px-6 md:px-8 py-5 md:py-6 h-auto flex items-center justify-center gap-2">
                <MessageCircle size={20} />
                {t.ctaWhatsApp}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-white py-8 md:py-12">
        <div className="container">
          <div className="border-t border-slate-700 pt-6 md:pt-8">
            <p className="text-center text-slate-400 text-xs md:text-sm">
              {t.footer}
            </p>
            <p className="text-center text-slate-500 text-xs mt-3 md:mt-4">
              {t.footerRights}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
