import React from 'react';
import { AboutContent } from '@/components/pages/about';

export function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'no' },
  ];
}

export default function AboutPage({ params: { locale } }: { params: { locale: string } }) {
  return <AboutContent locale={locale} />;
}