export default function ProgramsPage() {
  return (
    <main className="pt-20 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-slate-800 mb-8">Our Programs</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">FRITT SINN Program</h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            Our flagship program combines evidence-based psychological care with innovative approaches to support children's emotional well-being and development.
          </p>
          <div className="bg-slate-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-slate-800 mb-3">Key Components</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                <p className="text-slate-600">Individual psychological assessment and personalized care plans</p>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                <p className="text-slate-600">Family-centered therapy sessions</p>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                <p className="text-slate-600">Creative expression and play therapy</p>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                <p className="text-slate-600">Social skills development workshops</p>
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">Support Groups</h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            Regular support groups provide a safe space for children and families to connect, share experiences, and build community.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">Educational Workshops</h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            We offer workshops for parents, caregivers, and educators to better understand and support children's psychological needs.
          </p>
        </section>
      </div>
    </main>
  );
}