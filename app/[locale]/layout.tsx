import { Navbar } from "@/components/layout/navbar";

export function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'no' },
  ];
}

export default function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}