import React from 'react';
import { Heart, CreditCard, Calendar } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/fade-in";
import { StaggerChildren } from "@/components/animations/stagger-children";
import { getTranslation } from "@/lib/translations";
import type { Locale } from "@/lib/translations";

export function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'no' },
  ];
}

export default function DonatePage({ params: { locale } }: { params: { locale: string } }) {
  const t = (key: string) => getTranslation(locale as Locale, `donate.${key}`);

  return (
    <main className="pt-20 min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <FadeIn>
          <h1 className="text-5xl font-bold text-white mb-8">Support Our Mission</h1>
          <p className="text-xl text-gray-300 mb-12">
            Your donation helps us provide essential psychological support to children and families in need.
            Every contribution makes a difference in creating positive change.
          </p>
        </FadeIn>

        <section className="mb-16">
          <FadeIn delay={0.2}>
            <h2 className="text-3xl font-semibold text-white mb-8">Ways to Give</h2>
          </FadeIn>

          <StaggerChildren delay={0.3} className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-800/50 p-8 rounded-lg border border-gray-700">
              <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mb-4">
                <CreditCard className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">One-Time Donation</h3>
              <p className="text-gray-300 mb-6">
                Make an immediate impact with a single contribution of any amount.
              </p>
              <Button className="w-full">Donate Now</Button>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-lg border border-gray-700">
              <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Monthly Support</h3>
              <p className="text-gray-300 mb-6">
                Join our community of monthly donors and help ensure sustainable support.
              </p>
              <Button className="w-full">Become a Monthly Donor</Button>
            </div>
          </StaggerChildren>
        </section>

        <section className="mb-16">
          <FadeIn delay={0.4}>
            <h2 className="text-3xl font-semibold text-white mb-8">Your Impact</h2>
          </FadeIn>

          <StaggerChildren delay={0.5} className="grid gap-4">
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <div className="flex items-start gap-4">
                <Heart className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                <p className="text-gray-300">
                  Support psychological care for children and families in need
                </p>
              </div>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <div className="flex items-start gap-4">
                <Heart className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                <p className="text-gray-300">
                  Help expand our FRITT SINN program to reach more communities
                </p>
              </div>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <div className="flex items-start gap-4">
                <Heart className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                <p className="text-gray-300">
                  Enable professional training and community outreach initiatives
                </p>
              </div>
            </div>
          </StaggerChildren>
        </section>

        <FadeIn delay={0.6} className="text-center">
          <p className="text-gray-300 mb-4">
            For questions about donations or other ways to support our mission:
          </p>
          <a 
            href="mailto:fromabove@protonmail.com"
            className="text-blue-400 hover:text-blue-300 font-medium text-lg hover:underline"
          >
            fromabove@protonmail.com
          </a>
        </FadeIn>
      </div>
    </main>
  );
}