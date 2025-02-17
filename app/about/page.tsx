import React from 'react';

export default function AboutPage() {
  return (
    <main className="pt-20 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-slate-800 mb-8">About From Above</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">Our Mission</h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            From Above is dedicated to supporting children and families through comprehensive psychological care and our innovative FRITT SINN program. We believe every child deserves the opportunity to heal, grow, and thrive in a supportive environment.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">The FRITT SINN Program</h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            FRITT SINN is our specialized approach to child psychological care that combines evidence-based practices with compassionate support. Our program focuses on:
          </p>
          <ul className="list-disc list-inside space-y-3 text-slate-600 ml-4">
            <li>Individual psychological assessment and care planning</li>
            <li>Family-centered therapy sessions</li>
            <li>Creative expression and play therapy</li>
            <li>Social skills development</li>
            <li>Educational support and advocacy</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">Our Approach</h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            We understand that every child&apos;s journey is unique. Our team of experienced professionals works closely with families to create personalized care plans that address each child&apos;s specific needs and circumstances.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">Get Started</h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            If you&apos;re interested in learning more about how we can help your family, please don&apos;t hesitate to reach out. Our team is here to support you every step of the way.
          </p>
          <a 
            href="mailto:fromabove@protonmail.com"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Us Today
          </a>
        </section>
      </div>
    </main>
  );
}