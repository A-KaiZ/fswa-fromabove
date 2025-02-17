import React from 'react';
import { ServicesContent } from '@/components/pages/services';

export function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'no' },
  ];
}

export default function ServicesPage({ params: { locale } }: { params: { locale: string } }) {
  return <ServicesContent locale={locale} />;
}