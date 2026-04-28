export default function CAT() {
  const catItems = [
    {
      letter: 'C',
      title: 'Concept',
      desc: 'Building a strong theoretical foundation with core principles and frameworks.',
      icon: '📋',
      color: 'border-blue-400',
      bg: 'bg-blue-50',
    },
    {
      letter: 'A',
      title: 'Application',
      desc: 'Real-world application through case studies, simulations, and hands-on projects.',
      icon: '⚡',
      color: 'border-primary',
      bg: 'bg-blue-100',
    },
    {
      letter: 'T',
      title: 'Tools',
      desc: 'Mastering industry-standard tools and technologies for immediate impact.',
      icon: '🔧',
      color: 'border-blue-300',
      bg: 'bg-blue-50',
    },
  ]

  const howWeDeliver = [
    {
      step: 1,
      icon: '📈',
      title: 'Skill Gap Analysis',
      desc: 'Assess team skill gaps and developmental needs.',
    },
    {
      step: 2,
      icon: '🗺️',
      title: 'Customized Training Plan',
      desc: 'Create a tailored roadmap addressing organizational goals.',
    },
    {
      step: 3,
      icon: '🎬',
      title: 'Flexible Program Delivery',
      desc: 'Deliver adaptable programs aligned with industry and organizational needs.',
    },
  ]

  return (
    <section id="cat" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CAT Framework */}
        <h2 className="section-title">The <span className="highlight">CAT Framework</span></h2>
        <p className="section-subtitle">Our Proven Approach to <span className="highlight font-medium">Learning Excellence</span></p>

        <div className="flex flex-col md:flex-row justify-center gap-0 mt-12 max-w-3xl mx-auto">
          {catItems.map((item, idx) => (
            <div key={item.letter} className="flex-1 relative">
              {/* Connector */}
              {idx < catItems.length - 1 && (
                <div className="hidden md:block absolute top-16 right-0 w-1/2 h-0.5 bg-primary/30 z-10"></div>
              )}
              <div className={`${item.bg} border-2 ${item.color} rounded-2xl p-6 text-center mx-2 relative z-20`}>
                <div className="w-16 h-16 rounded-full border-4 border-current mx-auto flex items-center justify-center mb-4" style={{ borderColor: 'currentColor' }}>
                  <span className="text-primary font-black text-2xl">{item.letter}</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* How We Deliver */}
        <div id="how-it-works" className="mt-20">
          <h2 className="section-title">How We <span className="highlight">Deliver Results</span> That Matter?</h2>
          <p className="section-subtitle">A Structured Three-Step Approach to <span className="highlight font-medium">Skill Development</span></p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {howWeDeliver.map((item) => (
              <div key={item.step} className="bg-blue-50 rounded-2xl p-6 border-l-4 border-primary relative overflow-hidden group hover:bg-blue-100 transition-colors duration-200">
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                  {item.step}
                </div>
                <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-2xl mb-4">
                  {item.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
