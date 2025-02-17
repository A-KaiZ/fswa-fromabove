import React from 'react';
import { ProgramsContent } from '@/components/pages/programs';

export function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'no' },
  ];
}

export default function ProgramsPage({ params: { locale } }: { params: { locale: string } }) {
  return <ProgramsContent locale={locale} />;
}