/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef } from 'react';
import { 
  Bus, 
  Car, 
  Users, 
  Music, 
  Briefcase, 
  GraduationCap, 
  MapPin, 
  Phone, 
  Instagram, 
  CheckCircle2, 
  ArrowRight,
  Menu,
  X,
  Clock,
  ShieldCheck,
  Star
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Helper for tailwind classes
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Header scroll effect
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
      if (headerRef.current) {
        if (scrolled) {
          headerRef.current.classList.add('glass', 'py-3', 'shadow-sm');
          headerRef.current.classList.remove('py-5');
        } else {
          headerRef.current.classList.remove('glass', 'py-3', 'shadow-sm');
          headerRef.current.classList.add('py-5');
        }
      }
    };
    window.addEventListener('scroll', handleScroll);

    // GSAP Animations
    const ctx = gsap.context(() => {
      // Hero Entrance
      gsap.from('.hero-content > *', {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
      });

      // Scroll Reveals
      const revealElements = document.querySelectorAll('.reveal');
      revealElements.forEach((el) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none'
          },
          y: 40,
          opacity: 0,
          duration: 1,
          ease: 'power2.out'
        });
      });

      // Bento Grid Stagger
      gsap.from('.bento-item', {
        scrollTrigger: {
          trigger: '.bento-grid',
          start: 'top 80%'
        },
        scale: 0.9,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'back.out(1.7)'
      });
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      ctx.revert();
    };
  }, []);

  const services = [
    {
      title: 'Fretamento Artístico',
      description: 'Logística completa para shows e eventos, atendendo equipes técnicas e artistas com pontualidade.',
      icon: <Music className="w-6 h-6" />,
      image: 'https://drive.google.com/thumbnail?id=1D8orfeMx2WPaJRfql-60YShTzB-gCJ-Z&sz=w800'
    },
    {
      title: 'Transporte Executivo',
      description: 'Vans e carros de alto padrão para traslados empresariais e viagens de negócios.',
      icon: <Briefcase className="w-6 h-6" />,
      image: 'https://drive.google.com/thumbnail?id=1PCIWayhhT4BZPgTOKjCmRgcxINZ6UJgs&sz=w800'
    },
    {
      title: 'Fretamento Estudantil',
      description: 'Transporte seguro para Unip, USF, IASP, UNASP e principais colégios da região.',
      icon: <GraduationCap className="w-6 h-6" />,
      image: 'https://drive.google.com/thumbnail?id=12iV90q2p-QQ8Mo6fRPaixSTb9A57wKBV&sz=w800'
    },
    {
      title: 'Excursões e Turismo',
      description: 'Viagens personalizadas para grupos, garantindo conforto e segurança em cada quilômetro.',
      icon: <Users className="w-6 h-6" />,
      image: 'https://drive.google.com/thumbnail?id=1gITxW1eG39XAjmI_96-MxZEa5r9pSh-K&sz=w800'
    }
  ];

  const stats = [
    { label: 'Anos de Estrada', value: '13+' },
    { label: 'Clientes Satisfeitos', value: '5k+' },
    { label: 'Viagens Realizadas', value: '10k+' },
    { label: 'Frota Moderna', value: '100%' }
  ];

  return (
    <div className="min-h-screen selection:bg-orange-100 selection:text-orange-600">
      {/* Header */}
      <header 
        ref={headerRef}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-5"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img 
                src="https://drive.google.com/thumbnail?id=1aYmWdOvI61CkCbuXQqnKptfSFUmJTAXP&sz=w500" 
                alt="TONIAZO Logo" 
                className={cn("h-10 w-auto transition-all duration-300", !isScrolled && "brightness-0 invert")}
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#inicio" className={cn("text-sm font-medium transition-colors hover:text-orange-500", isScrolled ? "text-slate-900" : "text-white")}>Início</a>
              <a href="#servicos" className={cn("text-sm font-medium transition-colors hover:text-orange-500", isScrolled ? "text-slate-900" : "text-white")}>Serviços</a>
              <a href="#diferenciais" className={cn("text-sm font-medium transition-colors hover:text-orange-500", isScrolled ? "text-slate-900" : "text-white")}>Diferenciais</a>
              <a href="#sobre" className={cn("text-sm font-medium transition-colors hover:text-orange-500", isScrolled ? "text-slate-900" : "text-white")}>Sobre</a>
              <a 
                href="https://wa.me/5519999778789" 
                target="_blank"
                className="bg-orange-500 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-orange-600 transition-all shadow-lg shadow-orange-200"
              >
                Solicitar Orçamento
              </a>
            </div>

            {/* Mobile Toggle */}
            <button 
              className={cn("md:hidden p-2 transition-colors", isScrolled ? "text-slate-700" : "text-white")}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </nav>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 glass border-t border-slate-100 p-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4">
            <a href="#inicio" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Início</a>
            <a href="#servicos" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Serviços</a>
            <a href="#diferenciais" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Diferenciais</a>
            <a href="#sobre" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Sobre</a>
            <a 
              href="https://wa.me/5519999778789" 
              className="bg-orange-500 text-white px-6 py-3 rounded-xl text-center font-bold"
            >
              WhatsApp
            </a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://drive.google.com/thumbnail?id=19gIb4naQPejX0l5xAAgkPk9q76fLOYdc&sz=w2000" 
            alt="Transporte de Luxo"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl hero-content pt-24 md:pt-28">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              13 Anos de Excelência
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-[1.1]">
              Sua Viagem com o <span className="text-orange-500">Conforto</span> que Você Merece.
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-xl leading-relaxed">
              Especialistas em transporte executivo, fretamento artístico e turismo em Hortolândia e região. Segurança e pontualidade em cada destino.
            </p>
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <a 
                href="https://wa.me/5519999778789"
                className="group bg-orange-500 text-white px-6 py-2.5 rounded-full font-bold text-base flex items-center justify-center gap-2 hover:bg-orange-600 transition-all shadow-xl shadow-orange-500/20 w-full sm:w-auto"
              >
                Falar no WhatsApp
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#servicos"
                className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-6 py-2.5 rounded-full font-bold text-base flex items-center justify-center hover:bg-white/20 transition-all w-full sm:w-auto"
              >
                Nossos Serviços
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Authority Section */}
      <section className="py-12 bg-orange-100 border-y border-orange-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center reveal">
                <div className="text-3xl md:text-4xl font-display font-bold text-orange-500 mb-1">{stat.value}</div>
                <div className="text-sm text-slate-500 font-medium uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal">
            <h2 className="text-3xl md:text-4xl mb-4">Soluções Completas em Transporte</h2>
            <p className="text-slate-600 text-lg">Oferecemos uma frota diversificada e motoristas treinados para atender todas as suas necessidades logísticas.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <div 
                key={idx} 
                className="group relative overflow-hidden rounded-2xl bg-slate-100 reveal h-full flex flex-col"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-orange-500 shadow-sm mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl mb-2">{service.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bento Grid Diferenciais */}
      <section id="diferenciais" className="py-16 md:py-24 bg-slate-900 text-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 reveal">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl mb-4">Por que escolher a <span className="text-orange-500">TONIAZO</span>?</h2>
              <p className="text-slate-400">Mais que transporte, entregamos tranquilidade e compromisso com o seu tempo.</p>
            </div>
            <a href="https://wa.me/5519999778789" className="text-orange-500 font-bold flex items-center gap-2 hover:gap-3 transition-all">
              Ver todos os diferenciais <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 h-auto md:h-[480px] bento-grid">
            {/* Main Feature */}
            <div className="md:col-span-2 md:row-span-2 bg-orange-500 rounded-3xl p-5 md:p-6 flex flex-col justify-between relative overflow-hidden bento-item group">
              <div className="relative z-10">
                <ShieldCheck className="w-10 h-10 mb-4 text-white/80" />
                <h3 className="text-2xl md:text-3xl mb-3 leading-tight">Segurança Certificada e Frota Própria</h3>
                <p className="text-white/90 text-base max-w-md">
                  Nossos veículos passam por manutenções rigorosas e possuem todos os registros necessários para viagens intermunicipais e interestaduais.
                </p>
              </div>
              <div className="relative z-10 mt-6 flex flex-wrap gap-2">
                <span className="px-3 py-1.5 bg-white/20 rounded-full text-xs font-medium">Vans Executivas</span>
                <span className="px-3 py-1.5 bg-white/20 rounded-full text-xs font-medium">Carros Sedã</span>
                <span className="px-3 py-1.5 bg-white/20 rounded-full text-xs font-medium">Seguro Passageiro</span>
              </div>
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-white/20 transition-all duration-700" />
            </div>

            {/* Feature 2 */}
            <div className="bg-slate-800 rounded-3xl p-5 md:p-6 bento-item hover:bg-slate-700 transition-colors">
              <Clock className="w-8 h-8 mb-3 text-orange-500" />
              <h3 className="text-lg mb-1.5 font-bold">Pontualidade Britânica</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Sabemos que seu tempo é valioso. Planejamos rotas estratégicas para garantir que você chegue sempre no horário.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-slate-800 rounded-3xl p-5 md:p-6 bento-item hover:bg-slate-700 transition-colors">
              <MapPin className="w-8 h-8 mb-3 text-orange-500" />
              <h3 className="text-lg mb-1.5 font-bold">Base em Hortolândia</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Localização estratégica para atender toda a RMC (Região Metropolitana de Campinas) com agilidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative reveal">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://drive.google.com/thumbnail?id=1Z1PTB595uZBtryKlw1XhUnS5xkuQKLK3&sz=w1000" 
                  alt="Equipe Toniazo"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-orange-500 p-8 rounded-3xl text-white hidden md:block shadow-xl">
                <div className="text-4xl font-bold mb-1">13</div>
                <div className="text-sm font-medium uppercase tracking-widest">Anos de História</div>
              </div>
            </div>

            <div className="reveal">
              <h2 className="text-3xl md:text-4xl mb-6">Tradição e Modernidade em <span className="text-orange-500">Movimento</span></h2>
              <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                <p>
                  Fundada há 13 anos em Hortolândia, a TONIAZO Transportes nasceu com o propósito de elevar o padrão do transporte de passageiros na região.
                </p>
                <p>
                  Atuamos com foco total na experiência do cliente, seja em um simples traslado executivo ou na complexa logística de grandes shows e eventos. Nossa equipe é formada por profissionais experientes e apaixonados pelo que fazem.
                </p>
                <p>
                  Hoje, somos referência em fretamento para estudantes das principais universidades (Unip, USF, IASP) e parceiros estratégicos de diversas empresas que buscam eficiência e segurança para seus colaboradores.
                </p>
              </div>
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-orange-500 w-5 h-5" />
                  <span className="font-medium">Motoristas Treinados</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-orange-500 w-5 h-5" />
                  <span className="font-medium">Atendimento 24h</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-orange-500 w-5 h-5" />
                  <span className="font-medium">Veículos Higienizados</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-orange-500 w-5 h-5" />
                  <span className="font-medium">Monitoramento GPS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 md:py-24 bg-orange-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl md:text-4xl mb-4">O que dizem nossos clientes</h2>
            <div className="flex justify-center gap-1 text-orange-500">
              <Star className="fill-current w-5 h-5" />
              <Star className="fill-current w-5 h-5" />
              <Star className="fill-current w-5 h-5" />
              <Star className="fill-current w-5 h-5" />
              <Star className="fill-current w-5 h-5" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Ricardo Santos",
                role: "Gerente de Logística",
                text: "A Toniazo é nossa parceira há 5 anos. A pontualidade no fretamento empresarial é impecável. Recomendo fortemente."
              },
              {
                name: "Mariana Oliveira",
                role: "Estudante UNIP",
                text: "Melhor transporte universitário da região. Vans sempre limpas, ar condicionado funcionando e motoristas muito educados."
              },
              {
                name: "André Luiz",
                role: "Produtor de Eventos",
                text: "Trabalhamos com a Toniazo em diversos shows. A flexibilidade e o profissionalismo da equipe técnica são diferenciais raros."
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 reveal">
                <p className="text-slate-600 italic mb-6">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">{testimonial.name}</div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-orange-500 z-0" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-orange-600 skew-x-12 translate-x-1/4 z-0" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl text-white mb-8 max-w-3xl mx-auto">
            Pronto para viajar com quem entende de <span className="underline decoration-white/30 underline-offset-8">transporte</span>?
          </h2>
          <p className="text-white/90 text-xl mb-12 max-w-2xl mx-auto">
            Solicite agora um orçamento personalizado para sua empresa, evento ou viagem particular. Atendimento imediato via WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="https://wa.me/5519999778789"
              className="bg-white text-orange-500 px-10 py-5 rounded-full font-bold text-xl hover:bg-slate-50 transition-all shadow-2xl flex items-center gap-3"
            >
              <Phone className="w-6 h-6" />
              (19) 99977-8789
            </a>
            <a 
              href="https://www.instagram.com/toniazotransportes"
              target="_blank"
              className="text-white font-bold flex items-center gap-2 hover:opacity-80 transition-all"
            >
              <Instagram className="w-6 h-6" />
              Siga no Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-10 md:py-16 border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:grid md:grid-cols-4 gap-8 md:gap-12 mb-10 items-center md:items-start text-center md:text-left">
            <div className="md:col-span-2 flex flex-col items-center md:items-start">
              <div className="flex items-center gap-2 text-white mb-4">
                <img 
                  src="https://drive.google.com/thumbnail?id=1aYmWdOvI61CkCbuXQqnKptfSFUmJTAXP&sz=w500" 
                  alt="TONIAZO Logo" 
                  className="h-10 w-auto brightness-0 invert"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="max-w-sm mb-6 text-sm md:text-base">
                Referência em transporte executivo e fretamento em Hortolândia/SP. Segurança, conforto e pontualidade há mais de uma década.
              </p>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/toniazotransportes" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://wa.me/5519999778789" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all">
                  <Phone className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="hidden md:flex flex-col items-center md:items-start">
              <h4 className="text-white text-xs uppercase tracking-widest mb-4">Links Rápidos</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#inicio" className="hover:text-orange-500 transition-colors">Início</a></li>
                <li><a href="#servicos" className="hover:text-orange-500 transition-colors">Serviços</a></li>
                <li><a href="#diferenciais" className="hover:text-orange-500 transition-colors">Diferenciais</a></li>
                <li><a href="#sobre" className="hover:text-orange-500 transition-colors">Sobre Nós</a></li>
              </ul>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <h4 className="text-white text-xs uppercase tracking-widest mb-4">Contato</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-3">
                  <MapPin className="w-4 h-4 text-orange-500 shrink-0" />
                  <span>Hortolândia, SP</span>
                </li>
                <li className="flex items-center gap-2 md:gap-3">
                  <Phone className="w-4 h-4 text-orange-500 shrink-0" />
                  <span>(19) 99977-8789</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 text-center text-[10px] md:text-xs">
            <p>Copyright © 2026 - TONIAZO Transportes. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
