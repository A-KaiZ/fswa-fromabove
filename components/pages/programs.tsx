"use client";

import React from 'react';
import { FadeIn } from '@/components/animations/fade-in';
import { StaggerChildren } from '@/components/animations/stagger-children';
import { getTranslation } from '@/lib/translations';
import type { Locale } from '@/lib/translations';
import { CheckCircle2, Users, GraduationCap, Brain } from 'lucide-react';

export function ProgramsContent({ locale }: { locale: string }) {
  const t = (key: string) => getTranslation(locale as Locale, `programs.${key}`);

  // Ensure we have an array for tools list
  const toolsList = t('frittSinn.tools.list');
  const tools = Array.isArray(toolsList) ? toolsList : [];

  return (
    <main className="pt-20 min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <FadeIn>
          <h1 className="text-5xl font-bold text-white mb-8">{t('title')}</h1>
        </FadeIn>

        {/* FRITT SINN Program Section */}
        <section className="mb-16">
          <FadeIn delay={0.2}>
            <h2 className="text-3xl font-semibold text-white mb-6">{t('frittSinn.title')}</h2>
            <div className="prose prose-invert max-w-none mb-8">
              <p className="text-gray-300 leading-relaxed">
                {t('frittSinn.description')}
              </p>
            </div>
          </FadeIn>

          {/* Core Objectives */}
          <div className="mb-12">
            <FadeIn delay={0.3}>
              <h3 className="text-2xl font-semibold text-white mb-6">{t('frittSinn.objectives.title')}</h3>
            </FadeIn>
            
            <StaggerChildren delay={0.4} className="grid gap-4">
              {['selfReeducation', 'socialDevelopment', 'emotionalMastery', 'professionalGrowth'].map((objective) => (
                <div key={objective} className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <p className="text-gray-300">{t(`frittSinn.objectives.${objective}`)}</p>
                  </div>
                </div>
              ))}
            </StaggerChildren>
          </div>

          {/* 12 Multifocal Tools */}
          <div className="mb-12">
            <FadeIn delay={0.5}>
              <h3 className="text-2xl font-semibold text-white mb-4">{t('frittSinn.tools.title')}</h3>
              <p className="text-gray-300 mb-6">{t('frittSinn.tools.description')}</p>
            </FadeIn>

            <StaggerChildren delay={0.6} className="grid md:grid-cols-2 gap-4">
              {tools.map((tool: string, index: number) => (
                <div key={index} className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-blue-500/10 rounded-full flex items-center justify-center">
                      <span className="text-blue-400 font-semibold">{index + 1}</span>
                    </div>
                    <p className="text-gray-300">{tool}</p>
                  </div>
                </div>
              ))}
            </StaggerChildren>

            <FadeIn delay={0.7}>
              <p className="text-gray-400 mt-6 italic">{t('frittSinn.tools.note')}</p>
            </FadeIn>
          </div>
        </section>

        {/* Support Groups Section */}
        <section className="mb-16">
          <FadeIn delay={0.8}>
            <h2 className="text-3xl font-semibold text-white mb-6 flex items-center gap-3">
              <Users className="w-8 h-8 text-purple-400" />
              {t('supportGroups.title')}
            </h2>
            <p className="text-gray-300 mb-6">{t('supportGroups.description')}</p>
          </FadeIn>

          <StaggerChildren delay={0.9} className="grid gap-4">
            {(t('supportGroups.benefits') || []).map((benefit: string, index: number) => (
              <div key={index} className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <p className="text-gray-300">{benefit}</p>
              </div>
            ))}
          </StaggerChildren>
        </section>

        {/* Educational Workshops Section */}
        <section className="mb-16">
          <FadeIn delay={1.0}>
            <h2 className="text-3xl font-semibold text-white mb-6 flex items-center gap-3">
              <GraduationCap className="w-8 h-8 text-yellow-400" />
              {t('workshops.title')}
            </h2>
            <p className="text-gray-300 mb-6">{t('workshops.description')}</p>
          </FadeIn>

          <StaggerChildren delay={1.1} className="grid gap-4">
            {Object.values(t('workshops.audiences') || {}).map((audience: string, index: number) => (
              <div key={index} className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <p className="text-gray-300">{audience}</p>
              </div>
            ))}
          </StaggerChildren>
        </section>

        {/* Commitment and Contact */}
        <FadeIn delay={1.2}>
          <div className="text-center">
            <p className="text-gray-300 mb-8 italic text-lg">
              {t('commitment')}
            </p>
            <div className="bg-gray-800/50 p-8 rounded-lg border border-gray-700 inline-block">
              <p className="text-gray-300 mb-4">{t('contact.text')}</p>
              <a 
                href={`mailto:${t('contact.email')}`}
                className="text-blue-400 hover:text-blue-300 font-medium text-lg hover:underline"
              >
                {t('contact.email')}
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}