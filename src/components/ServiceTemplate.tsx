import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { ServiceData } from '../types';
import { ComparisonSlider } from './ComparisonSlider';
import { SEO } from './SEO';

interface ServiceTemplateProps {
  service: ServiceData;
  onOpenQuote: () => void;
}

export function ServiceTemplate({ service, onOpenQuote }: ServiceTemplateProps) {
  return (
    <div className="bg-white">
      <SEO 
        title={service.title} 
        description={service.metaDescription} 
        keywords={service.keywords} 
      />
      {/* Hero Section */}
      <section className="relative h-[100dvh] lg:h-[80dvh] flex flex-col overflow-hidden bg-brand-dark">
        <div className="absolute inset-0 z-0">
          <img 
            src={service.heroImage} 
            alt={service.title}
            className="w-full h-full object-cover opacity-60"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/60 via-brand-dark/20 to-brand-dark" />
        </div>
        
        <div className="container-custom relative z-10 w-full flex-1 flex flex-col justify-center pt-32 lg:pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="text-brand-orange font-sans text-sm font-bold tracking-[0.4em] uppercase mb-6 block">
              Residential Services
            </span>
            <h1 className="text-5xl md:text-8xl font-display font-bold text-white leading-[0.9] tracking-tighter mb-8 uppercase">
              {service.title.split(' ').map((word, i) => (
                <React.Fragment key={i}>
                  {word}<br />
                </React.Fragment>
              ))}
            </h1>
            <p className="text-white/80 text-xl font-display font-medium tracking-tight mb-10 max-w-2xl leading-snug">
              {service.subtitle}
            </p>
            <button 
              onClick={onOpenQuote}
              className="bg-brand-orange hover:bg-white text-white hover:text-brand-orange px-10 py-5 rounded-sm font-sans font-bold tracking-widest transition-all text-sm flex items-center justify-center w-fit"
            >
              GET A FREE QUOTE <ChevronRight className="w-5 h-5 ml-1" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Contrast Section (Replace vs Refine) */}
      <section className="py-32 bg-white">
        <div className="container-custom">
          <div className="flex flex-col gap-24">
            <div className="grid lg:grid-cols-2 gap-12 items-end">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-brand-orange font-sans text-xs font-bold tracking-[0.4em] uppercase mb-6 block">
                  The Core Problem
                </span>
                <h2 className="text-4xl md:text-7xl font-display font-bold text-black leading-[0.9] mb-8 uppercase">
                  Stop Thinking <br />
                  Replacement.
                </h2>
                <p className="text-brand-dark/60 text-lg md:text-xl leading-snug max-w-lg">
                  {service.problem}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:text-right"
              >
                <div className="h-px w-24 bg-brand-orange mb-8 lg:ml-auto" />
                <p className="text-brand-dark font-display text-[29px] font-bold uppercase leading-tight italic">
                  "{service.solution}"
                </p>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full"
            >
              <ComparisonSlider 
                beforeImage={service.beforeImage}
                afterImage={service.afterImage}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-32 bg-brand-dark text-white overflow-hidden">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24"
          >
            <span className="text-brand-orange font-sans text-xs font-bold tracking-[0.4em] uppercase mb-6 block">
              Why FloorMark?
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white uppercase leading-[0.9]">
              {service.benefitsTitle}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5">
            {service.benefits.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center text-center p-12 lg:border-r last:border-r-0 border-white/20 group hover:bg-white/5 transition-colors"
              >
                <benefit.icon className="w-10 h-10 text-brand-orange mb-8 transition-transform group-hover:scale-110" />
                <h3 className="text-white font-sans text-xs font-bold tracking-widest uppercase mb-4 leading-none">
                  {benefit.title}
                </h3>
                <p className="text-white/40 text-[10px] leading-snug uppercase tracking-wider">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-[#f8f8f8]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            <div className="lg:sticky lg:top-32 mb-12 lg:mb-0">
              <span className="text-brand-orange font-sans text-xs font-bold tracking-[0.4em] uppercase mb-6 block">
                The Methodology
              </span>
              <h2 className="text-4xl md:text-7xl font-display font-bold text-black uppercase leading-[0.9] mb-12">
                Precisely<br />
                <span className="text-brand-orange">Engineered.</span>
              </h2>
              <p className="text-brand-dark/60 text-lg max-w-md mb-12">
                Our refinishing process is a sequence of technical steps designed to create a molecular bond between the old surface and the new finish.
              </p>
              <button 
                onClick={onOpenQuote}
                className="bg-brand-dark text-white hover:bg-brand-orange px-10 py-5 rounded-sm font-sans font-bold tracking-widest transition-all text-sm uppercase"
              >
                GET A FREE QUOTE
              </button>
            </div>

            <div className="flex flex-col gap-1">
              {service.process.map((step, i) => (
                <motion.div 
                  key={step.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="group bg-white p-12 border-b border-brand-dark/5 hover:border-brand-orange transition-all"
                >
                  <div className="flex items-start gap-8">
                    <span className="text-brand-orange font-display text-4xl font-bold opacity-30 group-hover:opacity-100 transition-opacity">
                      0{i + 1}
                    </span>
                    <div>
                      <h4 className="text-black font-display text-2xl font-bold uppercase mb-4 leading-tight">
                        {step.title}
                      </h4>
                      <p className="text-brand-dark/50 leading-snug uppercase text-xs tracking-widest">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Outcome Section */}
      <section className="py-44 bg-brand-orange text-white text-center relative overflow-hidden">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-5xl md:text-8xl font-display font-bold uppercase leading-[0.9] mb-12 text-white">
              "{service.outcomeDescription}"
            </h2>
            <div className="flex flex-col items-center gap-8">
              <div className="h-20 w-px bg-brand-dark/20" />
              <button 
                onClick={onOpenQuote}
                className="bg-brand-dark hover:bg-white text-white hover:text-brand-dark px-10 py-5 rounded-sm font-sans font-bold tracking-widest transition-all text-sm flex items-center justify-center w-fit shadow-2xl"
              >
                GET A FREE QUOTE <ChevronRight className="w-5 h-5 ml-1" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
