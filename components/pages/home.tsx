"use client";

import Link from "next/link";
import { Heart, Users, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getTranslation } from "@/lib/translations";
import type { Locale } from "@/lib/translations";
import { FadeIn } from "@/components/animations/fade-in";
import { StaggerChildren } from "@/components/animations/stagger-children";

interface HomePageProps {
  locale: string;
}

export function HomePage({ locale }: HomePageProps) {
  const t = (key: string) => getTranslation(locale as Locale, `home.${key}`);

  return (
    <main className="flex flex-col min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?auto=format&fit=crop&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.6)",
          }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/20 via-transparent to-gray-900 z-10" />
        
        <div className="relative z-20 text-center px-6 sm:px-8 lg:px-12 max-w-4xl mx-auto">
          <FadeIn>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight drop-shadow-lg">
              {t('hero.title')}
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto font-light drop-shadow">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/${locale}/donate`}>
                <Button 
                  size="lg"
                  className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white shadow-lg hover:shadow-xl transition-all duration-200 group"
                >
                  {t('hero.donateButton')} <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href={`/${locale}/about`}>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full sm:w-auto bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20 shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  {t('hero.learnMoreButton')}
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
              {t('features.title')}
            </h2>
          </FadeIn>
          
          <StaggerChildren className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-colors">
              <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{t('features.professionalCare.title')}</h3>
              <p className="text-gray-300">{t('features.professionalCare.description')}</p>
            </div>

            <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-colors">
              <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{t('features.communitySupport.title')}</h3>
              <p className="text-gray-300">{t('features.communitySupport.description')}</p>
            </div>

            <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-colors">
              <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{t('features.safeEnvironment.title')}</h3>
              <p className="text-gray-300">{t('features.safeEnvironment.description')}</p>
            </div>
          </StaggerChildren>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
              {t('testimonials.title')}
            </h2>
          </FadeIn>
          
          <StaggerChildren className="grid md:grid-cols-2 gap-8">
            <blockquote className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
              <p className="text-gray-300 italic mb-4">
                {t('testimonials.testimonial1.text')}
              </p>
              <footer className="flex items-center">
                <div className="w-10 h-10 bg-red-500/10 rounded-full flex items-center justify-center">
                  <span className="text-red-400 font-semibold">SM</span>
                </div>
                <div className="ml-3">
                  <cite className="text-white font-medium not-italic">
                    {t('testimonials.testimonial1.author')}
                  </cite>
                </div>
              </footer>
            </blockquote>

            <blockquote className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
              <p className="text-gray-300 italic mb-4">
                {t('testimonials.testimonial2.text')}
              </p>
              <footer className="flex items-center">
                <div className="w-10 h-10 bg-blue-500/10 rounded-full flex items-center justify-center">
                  <span className="text-blue-400 font-semibold">JD</span>
                </div>
                <div className="ml-3">
                  <cite className="text-white font-medium not-italic">
                    {t('testimonials.testimonial2.author')}
                  </cite>
                </div>
              </footer>
            </blockquote>
          </StaggerChildren>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 bg-gray-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <FadeIn>
            <p className="text-gray-300 mb-4">
              {t('contact.needHelp')}
            </p>
            <a 
              href={`mailto:${t('contact.email')}`}
              className="text-blue-400 hover:text-blue-300 font-medium text-lg hover:underline"
            >
              {t('contact.email')}
            </a>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}