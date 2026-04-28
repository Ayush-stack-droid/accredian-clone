const edgeItems = [
  {
    icon: '💡',
    title: 'Tailored Solutions',
    desc: "Programs customized to your organization's goals and challenges.",
    position: 'top',
  },
  {
    icon: '⚙️',
    title: 'Innovative Framework',
    desc: 'Proprietary methods for impactful, application-driven results.',
    position: 'top',
  },
  {
    icon: '🌐',
    title: 'Diverse Offerings',
    desc: 'Courses across industries, skill levels, and emerging fields.',
    position: 'top',
  },
  {
    icon: '📦',
    title: 'Flexible Delivery',
    desc: 'Online and offline options tailored to your needs.',
    position: 'top',
  },
  {
    icon: '👩‍🏫',
    title: 'Expert Guidance',
    desc: 'Industry experts delivering real-world insights and mentorship.',
    position: 'bottom',
  },
  {
    icon: '🤖',
    title: 'Advanced Technology',
    desc: 'State-of-the-art LMS and AI-powered learning tools.',
    position: 'bottom',
  },
  {
    icon: '🎯',
    title: 'Proven Impact',
    desc: 'Demonstrated ROI with measurable skill improvement outcomes.',
    position: 'bottom',
  },
]

export default function AccredianEdge() {
  return (
    <section id="edge" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">The <span className="highlight">Accredian Edge</span></h2>
        <p className="section-subtitle">Key Aspects of <span className="highlight font-medium">Our Strategic Training</span></p>

        {/* Timeline / Process */}
        <div className="relative mt-12">
          {/* Top row features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {edgeItems.filter(i => i.position === 'top').map((item, idx) => (
              <div key={item.title} className="flex flex-col items-center text-center">
                <p className="font-semibold text-gray-800 text-sm mb-1">{item.title}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                <div className="mt-3 w-0.5 h-6 bg-primary/30"></div>
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-2xl shadow-md"
                  style={{ background: `hsl(${idx * 30 + 210}, 70%, ${35 + idx * 5}%)` }}
                >
                  {item.icon}
                </div>
              </div>
            ))}
          </div>

          {/* Connector line */}
          <div className="hidden md:flex items-center justify-center gap-0 mx-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex items-center">
                <div className="w-8 h-8 rounded-full border-4 border-primary/20 bg-primary/10 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                {i < 5 && <div className="flex-1 h-0.5 bg-primary/20 w-16"></div>}
              </div>
            ))}
          </div>

          {/* Bottom row features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 max-w-3xl mx-auto">
            {edgeItems.filter(i => i.position === 'bottom').map((item, idx) => (
              <div key={item.title} className="flex flex-col items-center text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-2xl shadow-md mb-3"
                  style={{ background: `hsl(${idx * 30 + 240}, 65%, ${30 + idx * 5}%)` }}
                >
                  {item.icon}
                </div>
                <div className="w-0.5 h-6 bg-primary/30 mb-3"></div>
                <p className="font-semibold text-gray-800 text-sm mb-1">{item.title}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Domain Expertise */}
        <div className="mt-20">
          <h3 className="section-title text-2xl md:text-3xl">Our <span className="highlight">Domain Expertise</span></h3>
          <p className="section-subtitle"><span className="highlight font-medium">Specialized Programs</span> Designed to Fuel Innovation</p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8 max-w-4xl mx-auto">
            {[
              { icon: '💡', label: 'Product & Innovation Hub' },
              { icon: '🧠', label: 'Gen-AI Mastery' },
              { icon: '👥', label: 'Leadership Elevation' },
              { icon: '📊', label: 'Tech & Data Insights' },
              { icon: '⚙️', label: 'Operations Excellence' },
              { icon: '🌐', label: 'Digital Enterprise' },
              { icon: '💳', label: 'Fintech Innovation Lab' },
            ].map((domain) => (
              <div
                key={domain.label}
                className={`card flex flex-col items-center py-8 hover:border-primary/30 hover:-translate-y-1 transition-all duration-200 cursor-pointer ${domain.label === 'Fintech Innovation Lab' ? 'md:col-start-2' : ''}`}
              >
                <span className="text-3xl mb-3">{domain.icon}</span>
                <span className="text-sm font-semibold text-gray-700 text-center">{domain.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Course Segmentation */}
        <div className="mt-20">
          <h3 className="section-title text-2xl md:text-3xl">Tailored <span className="highlight">Course Segmentation</span></h3>
          <p className="section-subtitle">Explore <span className="highlight font-medium">Custom-fit Courses</span> Designed to Address Every Professional Focus</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { label: 'Domain Specific', bg: 'bg-blue-600', desc: 'Deep-dive expertise in your field' },
              { label: 'Industry Specific', bg: 'bg-purple-900', desc: 'Sector-focused knowledge & skills' },
              { label: 'Topic Specific', bg: 'bg-slate-800', desc: 'Targeted skill-building modules' },
              { label: 'Level Specific', bg: 'bg-blue-800', desc: 'Tailored for every career stage' },
            ].map((seg) => (
              <div key={seg.label} className={`${seg.bg} rounded-xl p-5 text-white relative overflow-hidden group cursor-pointer hover:scale-105 transition-transform duration-200`}>
                <div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-colors"></div>
                <h4 className="font-bold text-sm mb-1 relative z-10">{seg.label}</h4>
                <p className="text-xs text-white/70 relative z-10">{seg.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Who Should Join */}
        <div className="mt-20">
          <div className="bg-primary rounded-2xl p-8 md:p-12 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-blue-200 text-sm mb-2">Who Should Join?</p>
                <h3 className="text-2xl md:text-3xl font-black mb-4">Strategic Skill Enhancement</h3>
                <p className="text-blue-100 text-sm">Our programs are designed for professionals at every level who want to lead, innovate, and grow.</p>
              </div>
              <div className="grid grid-cols-2 gap-5">
                {[
                  { icon: '🖥️', title: 'Tech Professionals', desc: 'Enhance expertise, embrace tech, drive innovation.' },
                  { icon: '💼', title: 'Non-Tech Professionals', desc: 'Adapt digitally, collaborate in tech environments.' },
                  { icon: '🎓', title: 'Emerging Professionals', desc: 'Develop powerful skills for rapid career growth.' },
                  { icon: '🗂️', title: 'Senior Professionals', desc: 'Strengthen leadership, enhance strategic decisions.' },
                ].map((item) => (
                  <div key={item.title} className="flex flex-col gap-2">
                    <span className="text-2xl">{item.icon}</span>
                    <h4 className="font-bold text-sm">{item.title}</h4>
                    <p className="text-blue-100 text-xs">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
