import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MessageCircle, Zap, Gift, Shield, TrendingUp, Users, Leaf, Check } from "lucide-react";

/**
 * Design Philosophy: Conexão Telecom
 * - Primary Colors: Green (#1B8A3E) + Blue (#0066CC) + White
 * - Typography: Bold headers with Poppins, readable body with Inter
 * - Layout: Asymmetric, mobile-first with generous spacing
 * - Interaction: Smooth transitions, clear CTAs, accessibility-first
 * - Visual Hierarchy: Large hero, card-based sections, progressive disclosure
 */

export default function Home() {
  const planos = [
    { name: "Start", gb: 6, gbComPortabilidade: 11, priceComPortabilidade: 54.90, priceSem: 59.90 },
    { name: "Mega", gb: 10, gbComPortabilidade: 15, priceComPortabilidade: 59.90, priceSem: 64.90 },
    { name: "Giga", gb: 15, gbComPortabilidade: 20, priceComPortabilidade: 69.90, priceSem: 74.90 },
    { name: "Ultra", gb: 23, gbComPortabilidade: 28, priceComPortabilidade: 79.90, priceSem: 84.90 },
    { name: "Infinity", gb: 45, gbComPortabilidade: 50, priceComPortabilidade: 99.90, priceSem: 104.90 },
  ];

  const beneficios = [
    { icon: TrendingUp, title: "Internet Acumulada", description: "O que você não usar no mês vira crédito automático pro mês seguinte" },
    { icon: Phone, title: "Ligações Ilimitadas", description: "Ligações ilimitadas para todo Brasil, sempre conectado" },
    { icon: MessageCircle, title: "WhatsApp Ilimitado", description: "WhatsApp ilimitado sem consumir sua franquia de dados" },
    { icon: Shield, title: "Sem Fidelidade", description: "Troque ou cancele quando quiser, sem multa ou compromisso" },
    { icon: Gift, title: "+5 GB na Portabilidade", description: "Traga seu número atual e ganhe 5 GB extras de brinde" },
    { icon: Zap, title: "eSIM Instantâneo", description: "Ative seu chip em minutos pelo app, sem esperar" },
  ];

  const diferenciais = [
    { emoji: "🌱", text: "Conectado à maior plataforma de energia solar compartilhada do Brasil" },
    { emoji: "📱", text: "Gerencie tudo pelo App iGreen Club (consumo, boleto, suporte 24h)" },
    { emoji: "🔄", text: "Troca de plano a qualquer momento sem taxas" },
    { emoji: "💰", text: "Economia real + sustentabilidade em um único serviço" },
    { emoji: "🛒", text: "+60 mil descontos em farmácias, educação, serviços e muito mais" },
  ];

  const faqs = [
    { pergunta: "Qual a cobertura?", resposta: "Cobertura nacional com 4G e 5G em todo o território brasileiro" },
    { pergunta: "Posso trazer meu número?", resposta: "Sim! Portabilidade gratuita + 5 GB extras como bônus" },
    { pergunta: "Tem fidelidade?", resposta: "Não. Você é livre para trocar ou cancelar quando quiser" },
    { pergunta: "Como ativo o chip?", resposta: "Chip físico ou eSIM - ativação em minutos pelo app" },
    { pergunta: "O que acontece com os GB não usados?", resposta: "Acumulam automaticamente para o mês seguinte" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* HEADER / HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663445259424/EZVLwJBgtdZUVxGXLNir8r/hero-conexao-telecom-KGTLxtUvomgVtL3cyqYL6d.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed"
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content */}
        <div className="container relative z-10 py-20 md:py-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left - Text Content */}
            <div className="text-white space-y-8">
              <div className="space-y-4">
                <div className="inline-block">
                  <span className="text-sm font-semibold bg-white/20 backdrop-blur px-4 py-2 rounded-full text-white">
                    🚀 A Operadora Móvel Virtual da iGreen Energy
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  Conexão Telecom
                </h1>
                <p className="text-xl md:text-2xl font-light text-white/90">
                  Internet que acumula + Ligações e WhatsApp ilimitados
                </p>
              </div>

              <p className="text-lg text-white/80 leading-relaxed max-w-xl">
                Sem fidelidade, sem perder dados e com +60 mil descontos no iGreen Club. Conectado à maior plataforma de energia solar compartilhada do Brasil.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button className="btn-primary text-lg px-8 py-6 h-auto">
                  Quero meu plano agora
                </Button>
                <Button className="btn-secondary text-lg px-8 py-6 h-auto flex items-center gap-2">
                  <MessageCircle size={20} />
                  Falar no WhatsApp
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-6 pt-8 border-t border-white/20">
                <div>
                  <p className="text-2xl font-bold">+60K</p>
                  <p className="text-sm text-white/70">Descontos iGreen Club</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">4G/5G</p>
                  <p className="text-sm text-white/70">Cobertura Nacional</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">0%</p>
                  <p className="text-sm text-white/70">Sem Fidelidade</p>
                </div>
              </div>
            </div>

            {/* Right - Visual (spacing for background image) */}
            <div className="hidden md:block"></div>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-white to-slate-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient-green">
              Como funciona a Conexão Telecom
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Somos uma <strong>operadora móvel virtual (MVNO)</strong> da iGreen Energy. Não temos rede própria: usamos a infraestrutura das maiores operadoras do Brasil (principalmente Vivo), garantindo <strong>cobertura 4G e 5G em todo o território nacional</strong>.
            </p>
          </div>

          {/* Diferenciais Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {beneficios.map((beneficio, idx) => {
              const Icon = beneficio.icon;
              return (
                <Card key={idx} className="card-elevation border-0 bg-white hover:bg-slate-50 transition-colors">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-gradient-green-light flex items-center justify-center mb-4">
                      <Icon size={24} className="text-white" />
                    </div>
                    <CardTitle className="text-xl text-slate-900">{beneficio.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 leading-relaxed">{beneficio.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* NOSSOS PLANOS */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
              Nossos Planos
            </h2>
            <p className="text-lg text-slate-600">
              Escolha o plano perfeito para seu consumo
            </p>
          </div>

          {/* Plans Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
            {planos.map((plano, idx) => (
              <Card key={idx} className={`card-elevation border-0 overflow-hidden transition-transform hover:scale-105 ${idx === 4 ? 'lg:col-span-1 ring-2 ring-[#1B8A3E]' : ''}`}>
                <div className={`h-2 ${idx % 2 === 0 ? 'bg-gradient-green-light' : 'bg-gradient-to-r from-[#0066CC] to-[#00A8E8]'}`}></div>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-slate-900">{plano.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Data Display */}
                  <div className="space-y-3">
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <p className="text-sm text-slate-600 mb-1">Com Portabilidade</p>
                      <p className="text-2xl font-bold text-[#1B8A3E]">{plano.gbComPortabilidade} GB</p>
                      <p className="text-xs text-slate-500 mt-1">({plano.gb} + 5 GB)</p>
                    </div>
                    <p className="text-xl font-bold text-slate-900">R$ {plano.priceComPortabilidade.toFixed(2)}</p>
                  </div>

                  {/* Sem Portabilidade */}
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-slate-600 mb-1">Sem Portabilidade</p>
                    <p className="text-2xl font-bold text-[#0066CC]">{plano.gb} GB</p>
                    <p className="text-xl font-bold text-slate-900 mt-2">R$ {plano.priceSem.toFixed(2)}</p>
                  </div>

                  {/* Benefits */}
                  <div className="space-y-2 border-t pt-4">
                    <div className="flex items-center gap-2 text-sm text-slate-700">
                      <Check size={16} className="text-[#1B8A3E] flex-shrink-0" />
                      <span>Ligações ilimitadas</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-700">
                      <Check size={16} className="text-[#1B8A3E] flex-shrink-0" />
                      <span>WhatsApp ilimitado</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-700">
                      <Check size={16} className="text-[#1B8A3E] flex-shrink-0" />
                      <span>Internet acumulada</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-700">
                      <Check size={16} className="text-[#1B8A3E] flex-shrink-0" />
                      <span>iGreen Club grátis</span>
                    </div>
                  </div>

                  <Button className="w-full btn-primary">Escolher Plano</Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Nota importante */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
            <p className="text-slate-700">
              <strong>Todos os planos têm internet acumulada.</strong> Se o pagamento não for realizado até o vencimento, os GB acumulados são zerados.
            </p>
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS EXCLUSIVOS */}
      <section 
        className="py-20 md:py-32 relative overflow-hidden"
        style={{
          backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663445259424/EZVLwJBgtdZUVxGXLNir8r/benefits-pattern-mCLzn3V8DG9perptHyv8jV.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-white/95"></div>
        
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
              Benefícios que só a Conexão Telecom oferece
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
            {diferenciais.map((item, idx) => (
              <div key={idx} className="text-center space-y-3">
                <div className="text-5xl">{item.emoji}</div>
                <p className="text-slate-700 font-medium leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-32 bg-slate-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
              Perguntas Frequentes
            </h2>
            <p className="text-lg text-slate-600">
              Tire suas dúvidas sobre a Conexão Telecom
            </p>
          </div>

          <div className="max-w-2xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <Card key={idx} className="border-0 card-elevation">
                <CardHeader>
                  <CardTitle className="text-lg text-slate-900 flex items-start gap-3">
                    <span className="text-[#1B8A3E] font-bold mt-1">Q{idx + 1}.</span>
                    {faq.pergunta}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 leading-relaxed">{faq.resposta}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section 
        className="py-20 md:py-32 relative overflow-hidden"
        style={{
          backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663445259424/EZVLwJBgtdZUVxGXLNir8r/cta-background-nbGZwm5WnYtnxDTm58pDwz.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="container relative z-10">
          <div className="text-center space-y-8 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Pronto para economizar no celular e ainda ajudar o planeta?
            </h2>
            <p className="text-xl text-white/90">
              Fale comigo no WhatsApp agora e eu te indico o plano perfeito pro seu consumo!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button className="btn-primary text-lg px-8 py-6 h-auto">
                Quero meu plano agora
              </Button>
              <Button className="btn-secondary text-lg px-8 py-6 h-auto flex items-center justify-center gap-2">
                <MessageCircle size={20} />
                Falar no WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container">
          <div className="border-t border-slate-700 pt-8">
            <p className="text-center text-slate-400 text-sm">
              © Página criada para <strong>Miqueias Ruben</strong> – Licenciado Autorizado iGreen Energy
            </p>
            <p className="text-center text-slate-500 text-xs mt-4">
              Todos os direitos reservados. Informações oficiais da Conexão Telecom.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
