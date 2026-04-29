/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef, MouseEvent, TouchEvent, ReactNode } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronRight,
  ChevronLeft, 
  ChevronDown,
  Menu, 
  X, 
  Shield,
  Construction, 
  Wrench, 
  ClipboardCheck, 
  ShieldCheck, 
  Droplets,
  Zap,
  Brush,
  Warehouse,
  Building2,
  Users, 
  Clock, 
  Award, 
  TrendingUp,
  Instagram,
  Linkedin,
  ArrowUpRight,
  Search,
  Settings,
  Truck,
  Sparkles,
  Hammer,
  Layers,
  LayoutGrid,
  Grid,
  Upload,
  Camera,
  ArrowRight
} from 'lucide-react';

import { ServiceTemplate } from './components/ServiceTemplate';
import { SERVICES as SERVICES_DATA } from './data/services';
import { ComparisonSlider } from './components/ComparisonSlider';
import { SEO } from './components/SEO';

// --- Constants & Data ---

const NAVIGATION = [
  { 
    name: 'RESIDENTIAL', 
    href: '#',
    items: [
      { name: 'BATHTUB REFINISHING', href: '/residential/bathtub-refinishing' },
      { name: 'CERAMIC TILE', href: '/residential/ceramic-tile' },
      { name: 'COUNTERTOP', href: '/residential/countertop' },
      { name: 'TILE SHOWER', href: '/residential/tile-shower' },
      { name: 'BATHROOM VANITY', href: '/residential/bathroom-vanity' },
      { name: 'TILE FLOOR', href: '/residential/tile-floor' },
      { name: 'FIBERGLASS BATHTUB', href: '/residential/fiberglass-bathtub' },
      { name: 'CABINET REFINISHING', href: '/residential/cabinet-refinishing' }
    ]
  },
  { name: 'PROCESS', href: '/#process' },
  { name: 'PROJECTS', href: '/#projects' },
  { name: 'ABOUT', href: '/#about' },
  { name: 'CONTACT', href: '/#contact' },
];

const SERVICES = [
  {
    title: 'GARAGE FLOOR COATINGS',
    description: 'Transform your garage with a clean, durable epoxy coating system designed to protect concrete, improve appearance, and make the space easier to maintain.',
    icon: <Warehouse className="w-8 h-8 text-brand-orange" />,
    link: '#services'
  },
  {
    title: 'COMMERCIAL FLOOR COATINGS',
    description: 'Upgrade your business space with a strong, professional floor coating built for daily use, easier cleaning, and a polished commercial appearance.',
    icon: <Building2 className="w-8 h-8 text-brand-orange" />,
    link: '#services'
  },
  {
    title: 'DECORATIVE FLOOR FINISHES',
    description: 'Choose from flake, quartz, and metallic finish options to create a custom surface with visual depth, texture, and long-lasting visual appeal.',
    icon: <Sparkles className="w-8 h-8 text-brand-orange" />,
    link: '#services'
  },
  {
    title: 'CONCRETE REPAIR & RESURFACING',
    description: 'Prepare damaged or worn concrete with crack repair and resurfacing work that helps create a stronger base and a cleaner final finish.',
    icon: <Wrench className="w-8 h-8 text-brand-orange" />,
    link: '#services'
  },
  {
    title: 'CERAMIC TILE REFINISHING',
    description: 'Transform outdated tiles into a modern, seamless surface without the mess of demolition. A cost-effective alternative to full replacement.',
    icon: <Sparkles className="w-8 h-8 text-brand-orange" />,
    link: '/residential/ceramic-tile'
  },
  {
    title: 'COUNTERTOP REFINISHING',
    description: 'Professional transformation for kitchen and bathroom surfaces. Achieve a high-end look without the cost and disruption of replacement.',
    icon: <LayoutGrid className="w-8 h-8 text-brand-orange" />,
    link: '/residential/countertop'
  },
  {
    title: 'TILE SHOWER REFINISHING',
    description: 'Restore your shower to a like-new condition. We seal grout lines and refinish surfaces to eliminate mold issues and outdated looks.',
    icon: <ShieldCheck className="w-8 h-8 text-brand-orange" />,
    link: '/residential/tile-shower'
  },
  {
    title: 'BATHROOM VANITY REFINISHING',
    description: 'Modernize your bathroom vanity and sink without plumbing changes or demolition. A seamless transformation for a clean, updated look.',
    icon: <Droplets className="w-8 h-8 text-brand-orange" />,
    link: '/residential/bathroom-vanity'
  },
  {
    title: 'TILE FLOOR REFINISHING',
    description: 'Breathe new life into your tile floors. Our process restores luster, seals grout lines, and creates a durable, easy-to-clean surface.',
    icon: <Grid className="w-8 h-8 text-brand-orange" />,
    link: '/residential/tile-floor'
  },
  {
    title: 'FIBERGLASS BATHTUB REPAIR',
    description: 'Specialized repair and refinishing for fiberglass tubs and showers. We fix cracks, reinforce weak bottoms, and restore the surface to a like-new finish.',
    icon: <Hammer className="w-8 h-8 text-brand-orange" />,
    link: '/residential/fiberglass-bathtub'
  },
  {
    title: 'CABINET REFINISHING',
    description: 'Transform your kitchen or bathroom cabinets without the mess of demolition. We offer professional refinishing and refacing for a completely new look.',
    icon: <Layers className="w-8 h-8 text-brand-orange" />,
    link: '/residential/cabinet-refinishing'
  }
];

const PROCESS_STEPS = [
  {
    id: '01',
    title: 'CONSULTATION',
    description: 'We understand your needs and evaluate the project.',
    icon: <Search className="w-6 h-6" />
  },
  {
    id: '02',
    title: 'PREPARATION',
    description: 'Surface preparation and repairs to create the perfect base.',
    icon: <Wrench className="w-6 h-6" />
  },
  {
    id: '03',
    title: 'INSTALLATION',
    description: 'Expert application using premium materials.',
    icon: <Layers className="w-6 h-6" />
  },
  {
    id: '04',
    title: 'QUALITY CONTROL',
    description: 'Rigorous inspection to ensure every detail meets our standards.',
    icon: <ClipboardCheck className="w-6 h-6" />
  },
  {
    id: '05',
    title: 'DELIVERY',
    description: 'On-time delivery with results that are built to last.',
    icon: <Truck className="w-6 h-6" />
  }
];

const PROJECTS = [
  {
    title: 'WAREHOUSE FACILITY',
    size: '120,000 SQ FT',
    type: 'EPOXY FLOORING SYSTEM',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'MANUFACTURING PLANT',
    size: '85,000 SQ FT',
    type: 'POLYASPARTIC COATING',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'DISTRIBUTION CENTER',
    size: '200,000 SQ FT',
    type: 'CONCRETE RESURFACING',
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'COMMERCIAL KITCHEN',
    size: '15,000 SQ FT',
    type: 'EPOXY FLOORING SYSTEM',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800'
  }
];

const STATS = [
  { label: 'BUILT FOR DURABILITY', icon: <ShieldCheck className="w-6 h-6 text-brand-orange" /> },
  { label: 'EASY TO CLEAN LOW MAINTENANCE', icon: <Sparkles className="w-6 h-6 text-brand-orange" /> },
  { label: 'PROFESSIONAL QUALITY FINISH', icon: <Award className="w-6 h-6 text-brand-orange" /> },
  { label: 'RESIDENTIAL FOCUSED', icon: <Warehouse className="w-6 h-6 text-brand-orange" /> },
];

const WHY_US = [
  { title: 'EXPERIENCED TEAM', description: 'Skilled professionals with years of hands-on experience.', icon: <Users className="w-8 h-8 text-brand-orange" /> },
  { title: 'PREMIUM MATERIALS', description: 'High-performance products for long-lasting results.', icon: <Wrench className="w-8 h-8 text-brand-orange" /> },
  { title: 'ON-TIME DELIVERY', description: 'We respect your time and deliver on every commitment.', icon: <Clock className="w-8 h-8 text-brand-orange" /> },
  { title: 'CLIENT FOCUSED', description: 'We build relationships based on trust, quality and communication.', icon: <Users className="w-8 h-8 text-brand-orange" /> },
];

// --- Components ---

function Nav({ onOpenQuote }: { onOpenQuote: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [residentialOpen, setResidentialOpen] = useState(false);
  const [mobileResidentialOpen, setMobileResidentialOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const Logo = () => (
    <Link to="/" className="flex items-center gap-2">
      <img src="/logo.png" alt="FloorMark Surfaces Logo" className="h-10 w-auto object-contain" referrerPolicy="no-referrer" />
    </Link>
  );

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-brand-dark/95 backdrop-blur-sm py-3 border-b border-white/10' : 'bg-transparent py-3'}`}>
      <div className="container-custom flex items-center justify-between">
        <Logo />

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {NAVIGATION.map((item) => (
            item.items ? (
              <div 
                key={item.name}
                className="relative"
                onMouseEnter={() => setResidentialOpen(true)}
                onMouseLeave={() => setResidentialOpen(false)}
              >
                <button 
                  className="text-white/80 hover:text-brand-orange font-sans text-xs font-bold tracking-widest transition-colors flex items-center gap-1 uppercase"
                >
                  {item.name} <ChevronDown className={`w-3 h-3 transition-transform ${residentialOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {residentialOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-56 bg-brand-dark border border-white/10 shadow-2xl py-2 z-50"
                    >
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block px-6 py-3 text-white/70 hover:text-brand-orange hover:bg-white/5 font-sans text-[10px] font-bold tracking-widest transition-colors uppercase"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
                item.href.startsWith('#') || (item.href.startsWith('/#') && location.pathname === '/') ? (
                <a 
                  key={item.name} 
                  href={item.href} 
                  className="text-white/80 hover:text-brand-orange font-sans text-xs font-bold tracking-widest transition-colors uppercase"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-white/80 hover:text-brand-orange font-sans text-xs font-bold tracking-widest transition-colors uppercase"
                >
                  {item.name}
                </Link>
              )
            )
          ))}
          <button 
            onClick={onOpenQuote}
            className="bg-brand-orange hover:bg-white text-white hover:text-brand-orange px-6 py-2.5 rounded-sm font-sans font-bold text-xs tracking-widest transition-all duration-300"
          >
            GET A QUOTE <ChevronRight className="inline w-4 h-4 ml-1" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(true)}>
          <Menu />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 bg-brand-dark z-[60] flex flex-col"
          >
            <div className="py-4 md:py-6 border-b border-white/5">
              <div className="container-custom flex items-center justify-between">
                <Logo />
                <button className="text-white" onClick={() => setMobileMenuOpen(false)}><X className="w-8 h-8" /></button>
              </div>
            </div>
            
            <div className="container-custom flex flex-col gap-6 pt-12 overflow-y-auto pb-12">
              {NAVIGATION.map((item) => (
                item.items ? (
                  <div key={item.name} className="flex flex-col gap-4">
                    <button 
                      onClick={() => setMobileResidentialOpen(!mobileResidentialOpen)}
                      className="text-3xl text-white font-display font-bold flex items-center justify-between"
                    >
                      {item.name} <ChevronDown className={`w-6 h-6 transition-transform ${mobileResidentialOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {mobileResidentialOpen && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="flex flex-col gap-4 pl-4 overflow-hidden"
                        >
                          {item.items.map((subItem) => (
                            <Link 
                              key={subItem.name} 
                              to={subItem.href}
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setMobileResidentialOpen(false);
                              }}
                              className="text-xl text-white/60 font-display font-bold uppercase"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  item.href.startsWith('#') || (item.href.startsWith('/#') && location.pathname === '/') ? (
                    <a 
                      key={item.name} 
                      href={item.href} 
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-3xl text-white font-display font-bold uppercase"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-3xl text-white font-display font-bold uppercase"
                    >
                      {item.name}
                    </Link>
                  )
                )
              ))}
              <button 
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="bg-brand-orange text-white w-full py-4 rounded-sm font-sans font-bold tracking-widest mt-8"
              >
                GET A QUOTE
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function Hero({ onOpenQuote }: { onOpenQuote: () => void }) {
  const statsContent = (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="flex flex-col lg:flex-row items-center lg:justify-end gap-12"
    >
      {STATS.map((stat, idx) => (
        <div key={idx} className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12 w-full lg:w-auto">
          <div className="flex items-center gap-4 group">
            <div className="text-brand-orange shrink-0">
              {stat.icon}
            </div>
            <span className="text-white font-sans text-[10px] font-bold tracking-widest text-left max-w-[120px] uppercase leading-tight">
              {stat.label}
            </span>
          </div>
          {idx < STATS.length - 1 && <div className="h-[1px] w-24 lg:h-8 lg:w-[1px] bg-white/20 mx-auto lg:mx-0 shrink-0" />}
        </div>
      ))}
    </motion.div>
  );

  return (
    <>
      <section className="relative h-[100dvh] lg:h-screen flex flex-col overflow-hidden bg-brand-dark">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 flex">
            {/* Left side remains dark for text readability */}
            <div className="hidden lg:block w-1/3 bg-brand-dark" />
            <div className="w-full lg:w-2/3 relative h-full">
              <img 
                src="/regenerated_image_1777477925461.png" 
                alt="Expert Epoxy Garage Floor"
                className="mt-0 w-full h-full object-cover opacity-90 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              {/* Soft blend from the image to the dark background */}
              <div className="hidden lg:block absolute inset-y-0 -left-1 w-96 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-transparent" />
            </div>
          </div>
          {/* Global overlay to ensure text contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/60 lg:via-brand-dark/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/30 via-transparent to-brand-dark" />
        </div>

        <div className="container-custom relative z-10 w-full flex-1 flex flex-col justify-center pt-32 lg:pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-[2.5rem] sm:text-6xl md:text-7xl lg:text-9xl font-display font-bold text-white leading-[0.85] tracking-tighter mb-8 uppercase">
              Expert<br />
              Resurfacing.<br />
              <div className="text-brand-orange inline-block whitespace-nowrap">Better Floors.</div>
            </h1>
            <p className="text-white/60 text-base md:text-xl max-w-xl mb-10 leading-snug">
              Specializing in high-performance epoxy systems and custom architectural resurfacing that outlasts and outshines the standard. Experience the premium FloorMark edge for your garage, business, or outdoor living space.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-20 lg:mb-0">
              <button 
                onClick={onOpenQuote}
                className="bg-brand-orange hover:bg-white text-white hover:text-brand-orange px-10 py-4 rounded-sm font-sans font-bold tracking-widest transition-all text-sm flex items-center justify-center"
              >
                GET A FREE QUOTE <ChevronRight className="w-5 h-5 ml-1" />
              </button>
              <a href="#services" className="border border-white/20 hover:border-white text-white px-10 py-4 rounded-sm font-sans font-bold tracking-widest transition-all text-sm flex items-center justify-center">
                OUR SERVICES
              </a>
            </div>
          </motion.div>
        </div>

        {/* Hero Stats - Desktop */}
        <div className="hidden lg:block absolute bottom-12 left-0 w-full z-10">
          <div className="container-custom">
            <div className="border-t border-white/10 pt-12">
              {statsContent}
            </div>
          </div>
        </div>
      </section>

      {/* Hero Stats - Mobile (Second Section) */}
      <div className="lg:hidden bg-brand-dark py-24 border-t border-white/5">
        <div className="container-custom">
          {statsContent}
        </div>
      </div>
    </>
  );
}

function SectionHeading({ subtitle, title, dark = false, align = 'left' }: { subtitle: string, title: string, dark?: boolean, align?: 'left' | 'center' }) {
  return (
    <div className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <span className="text-brand-orange font-sans text-xs font-bold tracking-[0.4em] uppercase mb-4 block">
        {subtitle}
      </span>
      <h2 className={`text-4xl md:text-5xl font-display font-bold leading-[0.9] tracking-tight ${dark ? 'text-white' : 'text-black'}`}>
        {title}
      </h2>
    </div>
  );
}

function ComparisonSection() {
  return (
    <section className="py-24 bg-[#f8f8f8]">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-end mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-orange font-sans text-xs font-bold tracking-[0.2em] mb-4 block uppercase leading-relaxed">
              BUILT FOR MORE THAN LOOKS
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-black leading-[0.9] uppercase">
              STRONGER SURFACES.<br />BETTER EVERYDAY.
            </h2>
            <div className="w-12 h-1 bg-brand-orange mt-8" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-brand-dark/70 text-lg leading-relaxed max-w-xl"
          >
            <p className="mb-6">
              Your concrete floor should never hold your space back. At FloorMark Surfaces, we transform ordinary concrete into a clean, professional surface that's built to handle real life—day after day.
            </p>
            <p className="font-medium text-brand-dark uppercase tracking-wide text-sm bg-brand-dark/5 inline-block px-4 py-2 border-l-2 border-brand-orange">
              Proper preparation. Quality materials. A finish that lasts.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mt-12"
        >
          <ComparisonSlider 
            beforeImage="/regenerated_image_1777477836289.png"
            afterImage="/regenerated_image_1777477846583.png"
          />
        </motion.div>

        {/* Second Headline & Comparison slider */}
        <div className="mt-24 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold text-black uppercase leading-[0.9]">
              We don't replace your surfaces.<br />
              <span className="text-brand-orange">We bring them back to life.</span>
            </h2>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative mt-12"
        >
          <ComparisonSlider 
            beforeImage="/regenerated_image_1777480830623.png"
            afterImage="/regenerated_image_1777480831872.png"
          />
        </motion.div>
      </div>
    </section>
  );
}

function BenefitHighlights() {
  const BENEFITS = [
    {
      icon: <Droplets className="w-10 h-10" />,
      label: "Stained or worn concrete"
    },
    {
      icon: <Zap className="w-10 h-10" />,
      label: "Cracks and surface damage"
    },
    {
      icon: <Brush className="w-10 h-10" />,
      label: "Dusty or hard-to-clean floors"
    },
    {
      icon: <Warehouse className="w-10 h-10" />,
      label: "Outdated garage floors"
    },
    {
      icon: <Building2 className="w-10 h-10" />,
      label: "Commercial spaces that need a professional appearance"
    },
    {
      icon: <ShieldCheck className="w-10 h-10" />,
      label: "Floors that need better durability and easier maintenance"
    }
  ];

  return (
    <section className="py-24 bg-[#0a0a0a] border-y border-white/5">
      <div className="container-custom">
        <div className="text-center mb-20">
          <span className="text-brand-orange font-sans text-xs font-bold tracking-[0.2em] mb-4 block uppercase">
            CONCRETE SURFACES
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white max-w-4xl mx-auto leading-[0.9]">
            MADE <span className="text-brand-orange">CLEAN, STRONG,</span><br className="hidden md:block" />
            AND EASY TO MAINTAIN.
          </h2>
          <div className="w-12 h-1 bg-brand-orange mx-auto mt-8" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6">
          {BENEFITS.map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-center text-center p-8 lg:border-r last:border-r-0 border-white/20 group hover:bg-white/5 transition-all"
            >
              <div className="text-brand-orange mb-8 transition-transform duration-300 group-hover:scale-110">
                {benefit.icon}
              </div>
              <p className="text-white/60 font-sans text-[10px] font-bold tracking-widest leading-snug uppercase max-w-[140px]">
                {benefit.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services({ onOpenQuote }: { onOpenQuote: () => void }) {
  return (
    <section id="services" className="section-spacing bg-white">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-end"
        >
          <SectionHeading subtitle="OUR SERVICES" title="COMPLETE SURFACE SOLUTIONS" />
          <p className="text-brand-dark/60 mb-16 text-lg leading-relaxed">
            From preparation to protection, we deliver durable, high-performance surfaces that stand the test of time.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-10 border border-brand-dark/5 bg-brand-dark/[0.02] flex flex-col items-start gap-6 group hover:bg-brand-dark hover:text-white transition-all duration-500"
            >
              {service.icon}
              <h3 className="font-display font-bold text-xl tracking-tight leading-tight">
                {service.title}
              </h3>
              <p className="text-sm opacity-60 leading-relaxed mb-4">
                {service.description}
              </p>
              <button 
                onClick={onOpenQuote}
                className="flex items-center gap-2 text-brand-orange font-sans text-xs font-bold tracking-widest mt-auto group-hover:text-white"
              >
                LEARN MORE <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="section-spacing bg-black overflow-hidden">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-end mb-20"
        >
          <SectionHeading subtitle="OUR PROCESS" title="A PROVEN PROCESS. CONSISTENT RESULTS." dark />
          <p className="text-white/40 mb-16 text-lg leading-relaxed">
            Our systematic approach ensures every project is delivered with precision, on time and to the highest standards.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-0 relative">
          {PROCESS_STEPS.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative group"
            >
              <div className="p-8 border-l border-white/10 h-full flex flex-col">
                <div className="mb-6 text-brand-orange flex items-center gap-3">
                  <span className="font-display font-bold text-lg">{step.id}</span>
                  <div className="h-[1px] flex-1 bg-white/10 group-hover:bg-brand-orange transition-all duration-500" />
                </div>
                <h3 className="text-white font-display font-bold text-lg mb-4 tracking-tight leading-none">
                  {step.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section-spacing bg-white">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-end mb-20"
        >
          <SectionHeading subtitle="PROJECTS / RESULTS" title="REAL PROJECTS. REAL RESULTS." />
          <p className="text-brand-dark/60 mb-16 text-lg leading-relaxed">
            We take pride in the work we deliver and the lasting impact it creates.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {PROJECTS.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ scale: 0.98 }}
              className="group relative h-[500px] overflow-hidden bg-brand-dark"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 opacity-60"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <h3 className="text-white font-display font-bold text-xl mb-1 tracking-tight leading-none">
                  {project.title}
                </h3>
                <div className="flex items-center gap-3 text-white/50 text-[10px] font-sans font-bold tracking-[0.2em] mb-4">
                  <span>{project.size}</span>
                  <div className="w-1 h-1 rounded-full bg-brand-orange" />
                  <span>{project.type}</span>
                </div>
                <div className="h-0.5 w-0 bg-brand-orange group-hover:w-full transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <button className="border border-brand-dark/20 hover:border-brand-orange hover:bg-brand-orange hover:text-white px-10 py-4 rounded-sm font-sans font-bold tracking-widest transition-all text-xs">
            VIEW ALL PROJECTS <ChevronRight className="inline w-4 h-4 ml-1" />
          </button>
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section id="about" className="section-spacing bg-brand-dark overflow-hidden">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-end mb-24"
        >
          <SectionHeading subtitle="WHY CHOOSE US" title="BUILT ON EXPERIENCE. FOCUSED ON QUALITY." dark />
          <p className="text-white/40 mb-16 text-lg leading-relaxed">
            We combine expertise, premium materials and a commitment to excellence in every project we deliver.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {WHY_US.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex flex-col gap-6 p-8 border-l border-white/5 hover:border-brand-orange transition-all duration-500"
            >              {item.icon}
              <h3 className="text-white font-display font-bold text-xl tracking-tight leading-none">
                {item.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA({ onOpenQuote }: { onOpenQuote: () => void }) {
  return (
    <section className="bg-brand-orange py-44 relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container-custom flex flex-col md:flex-row items-center justify-between gap-12 relative z-10"
      >
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight leading-none mb-6">
            READY TO START<br />YOUR PROJECT?
          </h2>
          <p className="text-white/80 max-w-md leading-relaxed">
            Let's build a surface that performs. Contact us today for a free consultation and project estimate.
          </p>
        </div>
        
        <div className="h-[1px] md:h-24 w-full md:w-[1px] bg-white/20" />
        
        <button 
          onClick={onOpenQuote}
          className="bg-brand-dark hover:bg-white text-white hover:text-brand-dark px-12 py-5 rounded-sm font-sans font-bold tracking-widest text-sm transition-all whitespace-nowrap shadow-xl"
        >
          GET A FREE QUOTE <ChevronRight className="inline w-5 h-5 ml-1" />
        </button>
      </motion.div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="bg-black pt-32 pb-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-24 mb-24">
          <div className="col-span-1">
            <a href="#" className="flex items-center gap-2 mb-8">
              <img src="/logo.png" alt="FloorMark Surfaces Logo" className="h-12 w-auto object-contain" referrerPolicy="no-referrer" />
            </a>
            <p className="text-white/40 mb-8 max-w-sm">
              ENGINEERED SURFACES.<br />
              <span className="text-brand-orange">MEASURED</span> EXECUTION.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-brand-orange hover:border-brand-orange transition-all"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-brand-orange hover:border-brand-orange transition-all"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-12 col-span-2">
            <div>
              <h4 className="text-white font-sans text-xs font-bold tracking-widest mb-10">SERVICES</h4>
              <ul className="flex flex-col gap-4 text-white/50 text-sm font-medium">
                <li><a href="#" className="hover:text-brand-orange transition-colors">EPOXY COATINGS</a></li>
                <li><a href="#" className="hover:text-brand-orange transition-colors">CONCRETE RESURFACING</a></li>
                <li><a href="#" className="hover:text-brand-orange transition-colors">SURFACE SOLUTIONS</a></li>
                <li><a href="#" className="hover:text-brand-orange transition-colors">SURFACE PREPARATION</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-sans text-xs font-bold tracking-widest mb-10">COMPANY</h4>
              <ul className="flex flex-col gap-4 text-white/50 text-sm font-medium">
                <li><a href="#" className="hover:text-brand-orange transition-colors">PROCESS</a></li>
                <li><a href="#" className="hover:text-brand-orange transition-colors">PROJECTS</a></li>
                <li><a href="#" className="hover:text-brand-orange transition-colors">ABOUT</a></li>
                <li><a href="#" className="hover:text-brand-orange transition-colors">CONTACT</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/20 text-xs">
            © {new Date().getFullYear()} Floormark Surfaces. All rights reserved.
          </p>
          <div className="flex gap-8 text-white/20 text-xs">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function QuoteForm({ onClose }: { onClose: () => void }) {
  const [currentStep, setCurrentStep] = useState('START');
  const [history, setHistory] = useState<string[]>([]);
  const [direction, setDirection] = useState(1);
  const [formData, setFormData] = useState<any>({
    project_type: null,
    residential_space_type: null,
    commercial_space_type: null,
    other_space_description: '',
    surface_condition: null,
    repair_details: null,
    old_coating_type: null,
    desired_finish: null,
    main_priority: null,
    garage_size: null,
    project_size: null,
    timeline: null,
    city: '',
    zip_code: '',
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    preferred_contact_method: null,
    uploaded_photos: [],
    lead_priority: null
  });

  const getNextStep = (step: string, data: any) => {
    switch (step) {
      case 'START':
        return 'PROJECT_TYPE';
      case 'PROJECT_TYPE':
        if (data.project_type === 'Residential') return 'RESIDENTIAL_SPACE';
        if (data.project_type === 'Commercial') return 'COMMERCIAL_SPACE';
        return null;
      case 'RESIDENTIAL_SPACE':
        return 'SURFACE_CONDITION';
      case 'COMMERCIAL_SPACE':
        return 'SURFACE_CONDITION';
      case 'SURFACE_CONDITION':
        if (data.surface_condition === 'Cracked or damaged') return 'REPAIR_DETAILS';
        if (data.surface_condition === 'Old coating needs removal') return 'OLD_COATING_DETAILS';
        return 'DESIRED_FINISH';
      case 'REPAIR_DETAILS':
        return 'DESIRED_FINISH';
      case 'OLD_COATING_DETAILS':
        return 'DESIRED_FINISH';
      case 'DESIRED_FINISH':
        return 'MAIN_PRIORITY';
      case 'MAIN_PRIORITY':
        if (data.project_type === 'Residential' && data.residential_space_type === 'Garage') {
          return 'GARAGE_SIZE';
        }
        return 'PROJECT_SIZE';
      case 'GARAGE_SIZE':
        return 'TIMELINE';
      case 'PROJECT_SIZE':
        return 'TIMELINE';
      case 'TIMELINE':
        return 'LOCATION';
      case 'LOCATION':
        return 'CONTACT_INFO';
      case 'CONTACT_INFO':
        return 'PREFERRED_CONTACT';
      case 'PREFERRED_CONTACT':
        return 'PHOTO_UPLOAD';
      case 'PHOTO_UPLOAD':
        return 'CONFIRMATION';
      default:
        return null;
    }
  };

  const cleanupInvalidBranchData = (data: any, changedField: string) => {
    const updated = { ...data };
    if (changedField === 'project_type') {
      if (updated.project_type === 'Residential') {
        updated.commercial_space_type = null;
      }
      if (updated.project_type === 'Commercial') {
        updated.residential_space_type = null;
        updated.garage_size = null;
      }
    }
    if (changedField === 'residential_space_type') {
      if (updated.residential_space_type !== 'Garage') {
        updated.garage_size = null;
      }
    }
    if (changedField === 'surface_condition') {
      if (updated.surface_condition !== 'Cracked or damaged') {
        updated.repair_details = null;
      }
      if (updated.surface_condition !== 'Old coating needs removal') {
        updated.old_coating_type = null;
      }
    }
    return updated;
  };

  const handleNext = (data?: any) => {
    let newFormData = formData;
    if (data) {
      const field = Object.keys(data)[0];
      newFormData = cleanupInvalidBranchData({ ...formData, ...data }, field);
      setFormData(newFormData);
    }
    
    const next = getNextStep(currentStep, newFormData);
    if (next) {
      setDirection(1);
      setHistory(prev => [...prev, currentStep]);
      setCurrentStep(next);
    }
  };

  const handlePrev = () => {
    if (history.length > 0) {
      setDirection(-1);
      const prev = history[history.length - 1];
      setHistory(prev => prev.slice(0, -1));
      setCurrentStep(prev);
    }
  };

  const calculateLeadPriority = (data: any) => {
    if (
      data.timeline === 'As soon as possible' ||
      data.project_type === 'Commercial' ||
      data.project_size === '1,000–2,500 sq ft' ||
      data.project_size === 'Over 2,500 sq ft' ||
      data.surface_condition === 'Cracked or damaged' ||
      data.surface_condition === 'Old coating needs removal'
    ) return 'High';

    if (
      data.timeline === 'Within 2 weeks' ||
      data.timeline === 'Within 30 days' ||
      data.garage_size === '2-car garage' ||
      data.garage_size === '3-car garage' ||
      data.project_size === '500–1,000 sq ft'
    ) return 'Medium';

    if (
      data.timeline === 'Just researching' ||
      data.project_size === 'Under 250 sq ft'
    ) return 'Low';

    return 'Medium';
  };

  const submitForm = () => {
    const finalData = {
      ...formData,
      lead_priority: calculateLeadPriority(formData),
      timestamp: new Date().toISOString()
    };
    console.log('Submission:', finalData);
    handleNext();
  };

  useEffect(() => {
    if (currentStep === 'CONFIRMATION') {
      // Small delay to simulate processing before confirmation shown if final review was a real step
      // But based on reqs, CONFIRMATION is the final step
    }
  }, [currentStep]);

  const renderStep = () => {
    switch (currentStep) {
      case 'START':
        return (
          <StepWrapper title="Get a Free FloorMark Quote" description="Answer a few quick questions so we can understand your project and recommend the right surface solution.">
            <button 
              onClick={() => handleNext()}
              className="bg-brand-orange text-white px-12 py-5 rounded-sm font-sans font-bold tracking-widest text-sm hover:bg-brand-dark transition-all"
            >
              START MY QUOTE
            </button>
          </StepWrapper>
        );

      case 'PROJECT_TYPE':
        return (
          <StepWrapper title="What type of project is this?">
            <div className="grid sm:grid-cols-2 gap-4">
              {['Residential', 'Commercial'].map(opt => (
                <OptionCard key={opt} label={opt} onClick={() => handleNext({ project_type: opt })} />
              ))}
            </div>
          </StepWrapper>
        );

      case 'RESIDENTIAL_SPACE':
        return (
          <StepWrapper title="Where do you need the coating installed?">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {['Garage', 'Basement', 'Patio / Outdoor Area', 'Workshop', 'Other'].map(opt => (
                <OptionCard key={opt} label={opt} onClick={() => {
                  if (opt === 'Other') {
                    // Logic for text field if needed, but per prompt it's an optional text field
                    // I'll keep it simple for now or show text field inline
                  }
                  handleNext({ residential_space_type: opt });
                }} />
              ))}
            </div>
            {formData.residential_space_type === 'Other' && (
              <div className="mt-8">
                <textarea 
                  className="w-full bg-brand-dark/[0.02] border border-brand-dark/10 p-4 text-brand-dark font-sans focus:outline-none focus:border-brand-orange min-h-[120px]"
                  placeholder="Tell us about the space (Optional)"
                  value={formData.other_space_description}
                  onChange={(e) => setFormData({...formData, other_space_description: e.target.value})}
                />
              </div>
            )}
          </StepWrapper>
        );

      case 'COMMERCIAL_SPACE':
        return (
          <StepWrapper title="What type of commercial space is it?">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {['Retail Store', 'Restaurant', 'Office', 'Workshop / Garage', 'Warehouse', 'Showroom', 'Other'].map(opt => (
                <OptionCard key={opt} label={opt} onClick={() => handleNext({ commercial_space_type: opt })} />
              ))}
            </div>
            {formData.commercial_space_type === 'Other' && (
              <div className="mt-8">
                <textarea 
                  className="w-full bg-brand-dark/[0.02] border border-brand-dark/10 p-4 text-brand-dark font-sans focus:outline-none focus:border-brand-orange min-h-[120px]"
                  placeholder="Tell us about the space (Optional)"
                  value={formData.other_space_description}
                  onChange={(e) => setFormData({...formData, other_space_description: e.target.value})}
                />
              </div>
            )}
          </StepWrapper>
        );

      case 'SURFACE_CONDITION':
        return (
          <StepWrapper title="What condition is the concrete in?">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {['New concrete', 'Good condition', 'Stained or worn', 'Cracked or damaged', 'Old coating needs removal', 'Not sure'].map(opt => (
                <OptionCard key={opt} label={opt} onClick={() => handleNext({ surface_condition: opt })} />
              ))}
            </div>
          </StepWrapper>
        );

      case 'REPAIR_DETAILS':
        return (
          <StepWrapper title="What kind of damage do you see?">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {['Small cracks', 'Large cracks', 'Chipping or pitting', 'Uneven areas', 'Moisture issues', 'Not sure'].map(opt => (
                <OptionCard key={opt} label={opt} onClick={() => handleNext({ repair_details: opt })} />
              ))}
            </div>
          </StepWrapper>
        );

      case 'OLD_COATING_DETAILS':
        return (
          <StepWrapper title="What type of old coating is currently on the floor?">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {['Paint', 'Epoxy', 'Sealer', 'Tile or glue residue', 'Not sure'].map(opt => (
                <OptionCard key={opt} label={opt} onClick={() => handleNext({ old_coating_type: opt })} />
              ))}
            </div>
          </StepWrapper>
        );

      case 'DESIRED_FINISH':
        return (
          <StepWrapper title="What kind of finish are you interested in?">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {['Flake finish', 'Metallic finish', 'Quartz finish', 'Solid color', 'Not sure yet'].map(opt => (
                <OptionCard key={opt} label={opt} onClick={() => handleNext({ desired_finish: opt })} />
              ))}
            </div>
          </StepWrapper>
        );

      case 'MAIN_PRIORITY':
        return (
          <StepWrapper title="What matters most for this project?">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {['Durability', 'Easy cleaning', 'Better appearance', 'Slip resistance', 'Property value', 'Not sure'].map(opt => (
                <OptionCard key={opt} label={opt} onClick={() => handleNext({ main_priority: opt })} />
              ))}
            </div>
          </StepWrapper>
        );

      case 'GARAGE_SIZE':
        return (
          <StepWrapper title="What size is your garage?">
            <div className="grid sm:grid-cols-2 gap-4">
              {['1-car garage', '2-car garage', '3-car garage', 'Larger than 3-car garage', 'Not sure'].map(opt => (
                <OptionCard key={opt} label={opt} onClick={() => handleNext({ garage_size: opt })} />
              ))}
            </div>
          </StepWrapper>
        );

      case 'PROJECT_SIZE':
        return (
          <StepWrapper title="About how large is the area?">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {['Under 250 sq ft', '250–500 sq ft', '500–1,000 sq ft', '1,000–2,500 sq ft', 'Over 2,500 sq ft', 'Not sure'].map(opt => (
                <OptionCard key={opt} label={opt} onClick={() => handleNext({ project_size: opt })} />
              ))}
            </div>
          </StepWrapper>
        );

      case 'TIMELINE':
        return (
          <StepWrapper title="When would you like to start?">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {['As soon as possible', 'Within 2 weeks', 'Within 30 days', '1–3 months', 'Just researching'].map(opt => (
                <OptionCard key={opt} label={opt} onClick={() => handleNext({ timeline: opt })} />
              ))}
            </div>
          </StepWrapper>
        );

      case 'LOCATION':
        return (
          <StepWrapper title="Where is the project located?">
            <div className="space-y-4 max-w-sm">
              <Input label="City" required value={formData.city} onChange={(e) => setFormData({...formData, city: e.target.value})} />
              <Input label="ZIP Code" required value={formData.zip_code} onChange={(e) => setFormData({...formData, zip_code: e.target.value})} />
              <button 
                disabled={!formData.city || !formData.zip_code}
                onClick={() => handleNext()}
                className="w-full bg-brand-orange text-white py-4 font-bold tracking-widest disabled:opacity-50 hover:bg-brand-dark transition-all"
              >
                CONTINUE
              </button>
            </div>
          </StepWrapper>
        );

      case 'CONTACT_INFO':
        return (
          <StepWrapper title="Where should we send your quote?" description="We’ll use this information to follow up about your project. No spam.">
            <div className="grid sm:grid-cols-2 gap-4 max-w-xl">
              <Input label="First Name" required value={formData.first_name} onChange={(e) => setFormData({...formData, first_name: e.target.value})} />
              <Input label="Last Name" value={formData.last_name} onChange={(e) => setFormData({...formData, last_name: e.target.value})} />
              <Input label="Email" type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
              <Input label="Phone Number" type="tel" required value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
              <button 
                disabled={!formData.first_name || !formData.email || !formData.phone}
                onClick={() => handleNext()}
                className="col-span-full bg-brand-orange text-white py-4 font-bold tracking-widest disabled:opacity-50 hover:bg-brand-dark transition-all"
              >
                CONTINUE
              </button>
            </div>
          </StepWrapper>
        );

      case 'PREFERRED_CONTACT':
        return (
          <StepWrapper title="How would you prefer we contact you?">
            <div className="grid sm:grid-cols-3 gap-4">
              {['Call', 'Text', 'Email'].map(opt => (
                <OptionCard key={opt} label={opt} onClick={() => handleNext({ preferred_contact_method: opt })} />
              ))}
            </div>
          </StepWrapper>
        );

      case 'PHOTO_UPLOAD':
        return (
          <StepWrapper title="Want to upload photos of the floor?" description="Photos help us understand the condition of the concrete and give you a more accurate estimate.">
            <div className="flex flex-col gap-4 max-w-sm">
              <label className="border-2 border-dashed border-brand-dark/10 p-8 rounded-sm text-center cursor-pointer hover:border-brand-orange transition-colors">
                <Upload className="w-8 h-8 text-brand-orange mx-auto mb-4" />
                <span className="text-brand-dark/60 font-bold uppercase tracking-widest text-xs">Choose Files</span>
                <input 
                  type="file" 
                  multiple 
                  accept=".jpg,.jpeg,.png,.webp,.heic"
                  className="hidden" 
                  onChange={(e) => {
                    const files = e.target.files ? Array.from(e.target.files) : [];
                    setFormData({...formData, uploaded_photos: files});
                    // In a real app we'd wait for upload or just continue
                  }} 
                />
              </label>
              <button 
                onClick={() => submitForm()} 
                className="bg-brand-orange text-white py-4 font-bold tracking-widest uppercase hover:bg-brand-dark transition-colors"
              >
                {formData.uploaded_photos.length > 0 ? `UPLOAD ${formData.uploaded_photos.length} PHOTOS & SUBMIT` : 'CONTINUE'}
              </button>
              <button onClick={() => submitForm()} className="text-brand-dark/40 font-bold text-xs tracking-widest uppercase hover:text-brand-dark transition-colors">
                Skip for now
              </button>
            </div>
          </StepWrapper>
        );

      case 'CONFIRMATION':
        return (
          <StepWrapper title="Thanks — we received your quote request." description="A FloorMark team member will review your project details and contact you soon with the next step.">
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button 
                onClick={onClose}
                className="bg-brand-orange text-white px-8 py-4 rounded-sm font-bold tracking-widest text-xs hover:bg-brand-dark transition-all"
              >
                BACK TO HOME
              </button>
              <button className="border border-brand-dark/20 text-brand-dark px-8 py-4 rounded-sm font-bold tracking-widest text-xs hover:border-brand-dark transition-all">
                VIEW GALLERY
              </button>
            </div>
          </StepWrapper>
        );

      default:
        return null;
    }
  };

  // Improved progress calculation based on typical path
  const progressSteps = ['START', 'PROJECT_TYPE', 'SPACE_STEP', 'SURFACE_CONDITION', 'FINISH_OR_DETAILS', 'DESIRED_FINISH', 'MAIN_PRIORITY', 'SIZE_STEP', 'TIMELINE', 'LOCATION', 'CONTACT_INFO', 'CONFIRMATION'];
  const currentProgressIndex = progressSteps.indexOf(currentStep) === -1 ? 5 : progressSteps.indexOf(currentStep);
  const progress = (currentProgressIndex / (progressSteps.length - 1)) * 100;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-white flex flex-col"
    >
      {/* Header */}
      <div className="py-6 bg-brand-dark border-b border-white/5">
        <div className="container-custom flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Layers className="w-6 h-6 text-brand-orange transform rotate-45" />
            <span className="text-white font-display font-bold text-lg tracking-tighter">FLOORMARK</span>
          </div>
          <button onClick={onClose} className="text-white/60 hover:text-white transition-colors">
            <X className="w-8 h-8" />
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      {currentStep !== 'CONFIRMATION' && (
        <div className="h-1 bg-brand-dark/5 w-full">
          <motion.div 
            className="h-full bg-brand-orange" 
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
          />
        </div>
      )}

      {/* Content */}
      <div className="flex-1 overflow-y-auto pt-20 pb-32">
        <div className="container-custom max-w-4xl">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentStep}
              custom={direction}
              variants={{
                enter: (direction: number) => ({
                  x: direction > 0 ? 50 : -50,
                  opacity: 0
                }),
                center: {
                  x: 0,
                  opacity: 1
                },
                exit: (direction: number) => ({
                  x: direction < 0 ? 50 : -50,
                  opacity: 0
                })
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
              {renderStep()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Footer Navigation */}
      {currentStep !== 'START' && currentStep !== 'CONFIRMATION' && (
        <div className="fixed bottom-0 left-0 w-full p-8 border-t border-brand-dark/5 bg-white z-20">
          <div className="container-custom flex justify-between items-center max-w-4xl mx-auto">
            <button 
              onClick={handlePrev}
              className="text-brand-dark/40 hover:text-brand-dark font-bold text-xs tracking-widest uppercase flex items-center gap-2 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" /> Back
            </button>
            <div className="text-[10px] text-brand-dark/20 font-bold tracking-[0.2em] uppercase">
              {currentStep.replace('_', ' ')}
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}

function StepWrapper({ title, description, children }: { title: string, description?: string, children: ReactNode }) {
  return (
    <div className="flex flex-col">
      <h2 className="text-3xl sm:text-5xl font-display font-bold text-brand-dark mb-4 leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-brand-dark/50 text-lg sm:text-xl mb-12 max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
      <div className="mt-4">
        {children}
      </div>
    </div>
  );
}

function OptionCard({ label, onClick }: { label: string, onClick: () => void, key?: any }) {
  return (
    <div className="h-full">
      <button 
        onClick={onClick}
        className="p-8 border border-brand-dark/10 bg-brand-dark/[0.02] hover:bg-brand-orange hover:border-brand-orange text-brand-dark hover:text-white text-left transition-all group flex flex-col justify-between items-start gap-8 rounded-sm h-full w-full min-h-[140px] md:min-h-[180px]"
      >
        <span className="font-sans font-bold text-[10px] tracking-[0.2em] uppercase opacity-40 group-hover:opacity-100 transition-opacity">Select</span>
        <span className="text-xl sm:text-2xl font-display font-bold leading-tight uppercase">{label}</span>
      </button>
    </div>
  );
}

function Input({ label, type = 'text', required = false, value, onChange }: { label: string, type?: string, required?: boolean, value: string, onChange: (e: any) => void }) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="text-[10px] font-bold text-brand-dark/40 tracking-widest uppercase">
        {label} {required && <span className="text-brand-orange">*</span>}
      </label>
      <input 
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        className="bg-brand-dark/[0.02] border border-brand-dark/10 p-4 text-brand-dark font-sans focus:outline-none focus:border-brand-orange w-full"
      />
    </div>
  );
}

export default function App() {
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen selection:bg-brand-orange selection:text-white">
        <Nav onOpenQuote={() => setIsQuoteFormOpen(true)} />
        
        <Routes>
          <Route path="/" element={<Home onOpenQuote={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/residential/bathtub-refinishing" element={<ServiceTemplate service={SERVICES_DATA['bathtub-refinishing']} onOpenQuote={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/residential/ceramic-tile" element={<ServiceTemplate service={SERVICES_DATA['ceramic-tile']} onOpenQuote={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/residential/countertop" element={<ServiceTemplate service={SERVICES_DATA['countertop']} onOpenQuote={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/residential/tile-shower" element={<ServiceTemplate service={SERVICES_DATA['tile-shower']} onOpenQuote={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/residential/bathroom-vanity" element={<ServiceTemplate service={SERVICES_DATA['bathroom-vanity']} onOpenQuote={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/residential/tile-floor" element={<ServiceTemplate service={SERVICES_DATA['tile-floor']} onOpenQuote={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/residential/fiberglass-bathtub" element={<ServiceTemplate service={SERVICES_DATA['fiberglass-bathtub']} onOpenQuote={() => setIsQuoteFormOpen(true)} />} />
          <Route path="/residential/cabinet-refinishing" element={<ServiceTemplate service={SERVICES_DATA['cabinet-refinishing']} onOpenQuote={() => setIsQuoteFormOpen(true)} />} />
        </Routes>

        <Footer />
        
        <AnimatePresence>
          {isQuoteFormOpen && (
            <QuoteForm onClose={() => setIsQuoteFormOpen(false)} />
          )}
        </AnimatePresence>
      </div>
    </BrowserRouter>
  );
}

function Home({ onOpenQuote }: { onOpenQuote: () => void }) {
  return (
    <>
      <SEO 
        title="Premium Surface Refinishing" 
        description="Elite surface transformation for bathtubs, tiles, countertops and floors. FloorMark Surfaces deliver high-performance resurfacing with a clean, professional edge." 
      />
      <Hero onOpenQuote={onOpenQuote} />
      <ComparisonSection />
      <BenefitHighlights />
      <Services onOpenQuote={onOpenQuote} />
      <Process />
      <Projects />
      <WhyUs />
      <CTA onOpenQuote={onOpenQuote} />
    </>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
