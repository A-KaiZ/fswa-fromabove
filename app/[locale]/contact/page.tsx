import React from 'react';
import { ContactContent } from '@/components/pages/contact';

export function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'no' },
  ];
}

export default function ContactPage({ params: { locale } }: { params: { locale: string } }) {
  return <ContactContent locale={locale} />;
}