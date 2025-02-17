import React from 'react';

export function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'no' },
  ];
}

export default function ParentsPage() {
  return (
    <main className="pt-20 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-slate-800 mb-8">Information for Parents</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">Supporting Your Child</h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            As a parent, you play a crucial role in your child&apos;s psychological well-being. We&apos;re here to support you with resources, guidance, and professional care to help your child thrive.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">Our Services for Families</h2>
          <div className="bg-slate-50 p-6 rounded-lg">
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                <div>
                  <h3 className="font-semibold text-slate-800">Family Counseling</h3>
                  <p className="text-slate-600">Joint sessions to strengthen family bonds and improve communication</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                <div>
                  <h3 className="font-semibold text-slate-800">Parent Support Groups</h3>
                  <p className="text-slate-600">Connect with other parents facing similar challenges</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                <div>
                  <h3 className="font-semibold text-slate-800">Educational Workshops</h3>
                  <p className="text-slate-600">Learn strategies to support your child&apos;s emotional development</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                <div>
                  <h3 className="font-semibold text-slate-800">Individual Child Therapy</h3>
                  <p className="text-slate-600">Professional support tailored to your child&apos;s needs</p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">Getting Started</h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            Taking the first step can feel overwhelming, but we&apos;re here to make the process as smooth as possible. Here&apos;s how to begin:
          </p>
          <ol className="list-decimal list-inside space-y-3 text-slate-600 ml-4">
            <li>Contact us to schedule an initial consultation</li>
            <li>Complete our comprehensive assessment</li>
            <li>Meet with our team to discuss your child&apos;s needs</li>
            <li>Develop a personalized care plan</li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">Contact Us</h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            Ready to take the next step? We&apos;re here to answer your questions and help you get started.
          </p>
          <div className="flex gap-4">
            <a 
              href="mailto:fromabove@protonmail.com"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Email Us
            </a>
            <a 
              href="/contact"
              className="inline-block bg-slate-100 text-slate-800 px-6 py-3 rounded-lg hover:bg-slate-200 transition-colors duration-200"
            >
              Contact Form
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}