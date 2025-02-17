import { Metadata } from 'next';
import { HomePage } from '@/components/pages/home';

export const metadata: Metadata = {
  title: 'From Above - Home',
  description: 'Supporting children and families through psychological care and the FRITT SINN program',
};

// Generate static pages for each locale
export function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'no' },
  ];
}

export default function Page({ params: { locale } }: { params: { locale: string } }) {
  return <HomePage locale={locale} />;
}