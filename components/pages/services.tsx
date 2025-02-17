"use client";

import React from 'react';
import { FadeIn } from '@/components/animations/fade-in';
import { StaggerChildren } from '@/components/animations/stagger-children';
import { getTranslation } from '@/lib/translations';
import type { Locale } from '@/lib/translations';
import { Shield, Users, Palette, GraduationCap } from 'lucide-react';

export function ServicesContent({ locale }: { locale: string }) {
  const t = (key: string) => getTranslation(locale as Locale, `services.${key}`);

  const services = [
    {
      icon: <Shield className="w-6 h-6 text-blue-400" />,
      items: [
        t('psychological.evaluations'),
        t('psychological.carePlans'),
        t('psychological.crisis')
      ]
    },
    {
      icon: <Users className="w-6 h-6 text-purple-400" />,
      items: [
        t('family.parental'),
        t('family.sibling'),
        t('family.group')
      ]
    },
    {
      icon: <Palette className="w-6 h-6 text-pink-400" />,
      items: [
        t('creative.art'),
        t('creative.social'),
        t('creative.group')
      ]
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-green-400" />,
      items: [
        t('professional.workshops'),
        t('professional.community'),
        t('professional.resources')
      ]
    }
  ];

  return (
    <main className="pt-20 min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <FadeIn>
          <h1 className="text-5xl font-bold text-white mb-8">{t('title')}</h1>
        </FadeIn>

        <section className="mb-16">
          <FadeIn delay={0.2}>
            <h2 className="text-3xl font-semibold text-white mb-6">{t('psychological.title')}</h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              {t('psychological.description')}
            </p>
          </FadeIn>

          <StaggerChildren className="grid gap-4" delay={0.3}>
            {services[0].items.map((item, index) => (
              <div 
                key={index}
                className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-blue-500/50 
                         transition-all duration-300 group"
              >
                <div className="flex items-center space-x-4">
                  {services[0].icon}
                  <p className="text-gray-300 group-hover:text-white transition-colors">{item}</p>
                </div>
              </div>
            ))}
          </StaggerChildren>
        </section>

        <section className="mb-16">
          <FadeIn delay={0.4}>
            <h2 className="text-3xl font-semibold text-white mb-6">{t('family.title')}</h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              {t('family.description')}
            </p>
          </FadeIn>

          <StaggerChildren className="grid gap-4" delay={0.5}>
            {services[1].items.map((item, index) => (
              <div 
                key={index}
                className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-purple-500/50 
                         transition-all duration-300 group"
              >
                <div className="flex items-center space-x-4">
                  {services[1].icon}
                  <p className="text-gray-300 group-hover:text-white transition-colors">{item}</p>
                </div>
              </div>
            ))}
          </StaggerChildren>
        </section>

        <section className="mb-16">
          <FadeIn delay={0.6}>
            <h2 className="text-3xl font-semibold text-white mb-6">{t('creative.title')}</h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              {t('creative.description')}
            </p>
          </FadeIn>

          <StaggerChildren className="grid gap-4" delay={0.7}>
            {services[2].items.map((item, index) => (
              <div 
                key={index}
                className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-pink-500/50 
                         transition-all duration-300 group"
              >
                <div className="flex items-center space-x-4">
                  {services[2].icon}
                  <p className="text-gray-300 group-hover:text-white transition-colors">{item}</p>
                </div>
              </div>
            ))}
          </StaggerChildren>
        </section>

        <section className="mb-16">
          <FadeIn delay={0.8}>
            <h2 className="text-3xl font-semibold text-white mb-6">{t('professional.title')}</h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              {t('professional.description')}
            </p>
          </FadeIn>

          <StaggerChildren className="grid gap-4" delay={0.9}>
            {services[3].items.map((item, index) => (
              <div 
                key={index}
                className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-green-500/50 
                         transition-all duration-300 group"
              >
                <div className="flex items-center space-x-4">
                  {services[3].icon}
                  <p className="text-gray-300 group-hover:text-white transition-colors">{item}</p>
                </div>
              </div>
            ))}
          </StaggerChildren>
        </section>

        <FadeIn delay={1} className="mt-16 text-center">
          <p className="text-gray-300 mb-4">{t('contact.text')}</p>
          <a 
            href="mailto:fromabove@protonmail.com"
            className="text-blue-400 hover:text-blue-300 font-medium text-lg hover:underline"
          >
            {t('contact.email')}
          </a>
        </FadeIn>
      </div>
    </main>
  );
}