import React from 'react';
import { getTranslation } from "@/lib/translations";
import type { Locale } from "@/lib/translations";

export function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'no' },
  ];
}

export default function ParentsPage({ params: { locale } }: { params: { locale: string } }) {
  const t = (key: string) => getTranslation(locale as Locale, `parents.${key}`);
  return (
    <main className="pt-20 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-slate-800 mb-8">{t('title')}</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">{t('supportingChild.title')}</h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            {t('supportingChild.text')}
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">{t('services.title')}</h2>
          <div className="bg-slate-50 p-6 rounded-lg">
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                <div>
                  <h3 className="font-semibold text-slate-800">{t('services.familyCounseling')}</h3>
                  <p className="text-slate-600">{t('services.familyCounselingDesc')}</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                <div>
                  <h3 className="font-semibold text-slate-800">{t('services.parentGroups')}</h3>
                  <p className="text-slate-600">{t('services.parentGroupsDesc')}</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                <div>
                  <h3 className="font-semibold text-slate-800">{t('services.workshops')}</h3>
                  <p className="text-slate-600">{t('services.workshopsDesc')}</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                <div>
                  <h3 className="font-semibold text-slate-800">{t('services.individual')}</h3>
                  <p className="text-slate-600">{t('services.individualDesc')}</p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">{t('gettingStarted.title')}</h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            {t('gettingStarted.intro')}
          </p>
          <ol className="list-decimal list-inside space-y-3 text-slate-600 ml-4">
            {((t('gettingStarted.steps') as unknown) as string[]).map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">{t('contact.title')}</h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            {t('contact.text')}
          </p>
          <div className="flex gap-4">
            <a 
              href="mailto:fromabove@protonmail.com"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              {t('contact.emailButton')}
            </a>
            <a 
              href="/contact"
              className="inline-block bg-slate-100 text-slate-800 px-6 py-3 rounded-lg hover:bg-slate-200 transition-colors duration-200"
            >
              {t('contact.formButton')}
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}