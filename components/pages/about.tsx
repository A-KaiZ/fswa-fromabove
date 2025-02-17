"use client";

import React from 'react';
import { FadeIn } from '@/components/animations/fade-in';
import { StaggerChildren } from '@/components/animations/stagger-children';
import { getTranslation } from '@/lib/translations';
import type { Locale } from '@/lib/translations';

export function AboutContent({ locale }: { locale: string }) {
  const t = (key: string) => getTranslation(locale as Locale, `about.${key}`);

  const values = [
    { icon: "🌱", title: t('values.empowerment.title'), description: t('values.empowerment.description') },
    { icon: "💙", title: t('values.empathy.title'), description: t('values.empathy.description') },
    { icon: "📖", title: t('values.quality.title'), description: t('values.quality.description') },
    { icon: "🤝", title: t('values.community.title'), description: t('values.community.description') },
    { icon: "🧠", title: t('values.holistic.title'), description: t('values.holistic.description') },
  ];

  return (
    <main className="pt-20 min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <FadeIn>
          <h1 className="text-5xl font-bold text-white mb-8">{t('title')}</h1>
        </FadeIn>
        
        <section className="mb-16">
          <FadeIn delay={0.2}>
            <h2 className="text-3xl font-semibold text-white mb-6">{t('mission.title')}</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 leading-relaxed">
                {t('mission.description')}
              </p>
            </div>
          </FadeIn>
        </section>

        <section className="mb-16">
          <FadeIn delay={0.3}>
            <h2 className="text-3xl font-semibold text-white mb-6">{t('program.title')}</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              {t('program.description')}
            </p>
          </FadeIn>
          
          <StaggerChildren delay={0.4} className="grid gap-4">
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-3">{t('program.assessment')}</h3>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-3">{t('program.therapy')}</h3>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-3">{t('program.creative')}</h3>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-3">{t('program.skills')}</h3>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-3">{t('program.support')}</h3>
            </div>
          </StaggerChildren>
        </section>

        <section className="mb-16">
          <FadeIn delay={0.4}>
            <h2 className="text-3xl font-semibold text-white mb-6">{t('approach.title')}</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              {t('approach.description')}
            </p>
          </FadeIn>

          <StaggerChildren delay={0.5} className="space-y-4">
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <p className="text-gray-300">{t('approach.point1')}</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <p className="text-gray-300">{t('approach.point2')}</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <p className="text-gray-300">{t('approach.point3')}</p>
            </div>
          </StaggerChildren>
        </section>

        <section>
          <FadeIn delay={0.5}>
            <h2 className="text-3xl font-semibold text-white mb-8">{t('values.title')}</h2>
          </FadeIn>

          <StaggerChildren delay={0.6} className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-colors"
              >
                <div className="flex items-start space-x-4">
                  <span className="text-3xl">{value.icon}</span>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                    <p className="text-gray-300">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </StaggerChildren>
        </section>

        <FadeIn delay={0.7} className="mt-16 text-center">
          <p className="text-gray-300 mb-4">{t('contact.text')}</p>
          <a 
            href="mailto:fromabove@protonmail.com"
            className="text-blue-400 hover:text-blue-300 font-medium text-lg hover:underline"
          >
            fromabove@protonmail.com
          </a>
          <p className="text-blue-400 mt-8 font-medium italic">
            {t('slogan')}
          </p>
        </FadeIn>
      </div>
    </main>
  );
}