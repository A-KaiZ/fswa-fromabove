"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/fade-in";
import { getTranslation } from "@/lib/translations";
import type { Locale } from "@/lib/translations";
import { useToast } from "@/hooks/use-toast";

export function ContactContent({ locale }: { locale: string }) {
  const t = (key: string) => getTranslation(locale as Locale, `contact.${key}`);
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast({ title: t('form.required') });
      return;
    }
    setSending(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      if (res.ok) {
        toast({ title: t('success') });
        setForm({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed');
      }
    } catch {
      toast({ title: t('error') });
    } finally {
      setSending(false);
    }
  };

  return (
    <main className="pt-20 min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <FadeIn>
          <h1 className="text-4xl font-bold text-white mb-8">{t('title')}</h1>
        </FadeIn>
        
        <div className="grid md:grid-cols-2 gap-12">
          <section>
            <FadeIn delay={0.1}>
              <h2 className="text-2xl font-semibold text-white mb-4">{t('getInTouch')}</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                {t('helpMessage')}
              </p>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-gray-300 mb-1">
                    {t('form.name')}
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="contact-name"
                    value={form.name}
                    onChange={handleChange}
                    autoComplete="off"
                    spellCheck="false"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg
                             focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all
                             text-white placeholder-gray-400"
                    placeholder={t('form.namePlaceholder')}
                  />
                </div>
                
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-gray-300 mb-1">
                    {t('form.email')}
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="contact-email"
                    value={form.email}
                    onChange={handleChange}
                    autoComplete="off"
                    spellCheck="false"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg
                             focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all
                             text-white placeholder-gray-400"
                    placeholder={t('form.emailPlaceholder')}
                  />
                </div>
                
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-gray-300 mb-1">
                    {t('form.message')}
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    spellCheck="false"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg
                             focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all
                             text-white placeholder-gray-400"
                    placeholder={t('form.messagePlaceholder')}
                  />
                </div>

                <Button type="submit" disabled={sending} className="w-full md:w-auto">
                  {t('form.submit')}
                </Button>
              </form>
            </FadeIn>
          </section>
          
          <section>
            <FadeIn delay={0.3}>
              <div className="bg-gray-800/50 p-8 rounded-lg border border-gray-700">
                <h2 className="text-2xl font-semibold text-white mb-4">{t('otherWays')}</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium text-white mb-1">{t('email')}</h3>
                    <a 
                      href="mailto:fromabove@protonmail.com"
                      className="text-blue-400 hover:text-blue-300"
                    >
                      fromabove@protonmail.com
                    </a>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-white mb-1">{t('hours')}</h3>
                    <p className="text-gray-300">
                      {t('workdays')}<br />
                      {t('workHours')}
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium text-white mb-1">{t('response')}</h3>
                    <p className="text-gray-300">
                      {t('responseTime')}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </section>
        </div>
      </div>
    </main>
  );
}