import React from 'react';
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <main className="pt-20 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-slate-800 mb-8">Contact Us</h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          <section>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Get in Touch</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              We're here to help. Send us a message and we'll respond as soon as possible.
            </p>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="How can we help?"
                />
              </div>
              
              <Button type="submit" className="w-full md:w-auto">
                Send Message
              </Button>
            </form>
          </section>
          
          <section className="bg-slate-50 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Other Ways to Reach Us</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-slate-800 mb-1">Email</h3>
                <a 
                  href="mailto:fromabove@protonmail.com"
                  className="text-blue-600 hover:text-blue-700"
                >
                  fromabove@protonmail.com
                </a>
              </div>
              
              <div>
                <h3 className="font-medium text-slate-800 mb-1">Hours</h3>
                <p className="text-slate-600">
                  Monday - Friday<br />
                  9:00 AM - 5:00 PM CET
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}