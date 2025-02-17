export default function ServicesPage() {
  return (
    <main className="pt-20 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-slate-800 mb-8">Our Services</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">Psychological Care</h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            Professional psychological support tailored to each child's unique needs and circumstances.
          </p>
          <div className="bg-slate-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-slate-800 mb-3">Available Services</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                <p className="text-slate-600">Individual therapy sessions</p>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                <p className="text-slate-600">Family counseling</p>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                <p className="text-slate-600">Group therapy</p>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                <p className="text-slate-600">Crisis intervention</p>
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">Assessment Services</h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            Comprehensive psychological assessments to understand each child's needs and develop effective care plans.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">Consultation Services</h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            Professional consultation for schools, healthcare providers, and organizations working with children.
          </p>
        </section>
      </div>
    </main>
  );
}