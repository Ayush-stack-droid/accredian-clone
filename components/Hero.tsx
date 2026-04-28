'use client'

export default function Hero() {
  const scrollToContact = () => {
    const el = document.querySelector('#contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="pt-20 pb-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 rounded-3xl overflow-hidden min-h-[420px] flex items-center">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 px-8 md:px-16 py-12 w-full items-center">
            {/* Text content */}
            <div className="animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-4">
                Next-Gen<br />
                <span className="text-primary">Expertise</span> For<br />
                Your <span className="text-primary">Enterprise</span>
              </h1>
              <p className="text-gray-600 text-lg mb-6 max-w-md">
                Cultivate high-performance teams through expert learning.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                {['Tailored Solutions', 'Industry Insights', 'Expert Guidance'].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-gray-700">
                    <div className="w-5 h-5 rounded-full border-2 border-primary flex items-center justify-center">
                      <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    {item}
                  </div>
                ))}
              </div>
              <button onClick={scrollToContact} className="btn-primary text-base px-8 py-3 shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-200">
                Enquire Now
              </button>
            </div>

            {/* Image / Illustration */}
            <div className="relative flex justify-center lg:justify-end animate-fade-in-up animate-delay-200">
              <div className="relative">
                {/* Placeholder professional image */}
                <div className="w-72 h-80 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-end justify-center overflow-hidden relative">
                  {/* Silhouette of professionals */}
                  <svg viewBox="0 0 300 320" className="w-full h-full" fill="none">
                    {/* Background */}
                    <rect width="300" height="320" fill="url(#heroGrad)" />
                    <defs>
                      <linearGradient id="heroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#DBEAFE" />
                        <stop offset="100%" stopColor="#BFDBFE" />
                      </linearGradient>
                    </defs>
                    {/* Person 1 - female */}
                    <ellipse cx="105" cy="95" rx="28" ry="28" fill="#F3D5B5" />
                    <rect x="70" y="120" width="70" height="120" rx="10" fill="#1D4ED8" />
                    <rect x="75" y="125" width="60" height="60" rx="5" fill="#2563EB" />
                    {/* Person 2 - male */}
                    <ellipse cx="195" cy="100" rx="26" ry="26" fill="#E8C49A" />
                    <rect x="163" y="123" width="64" height="115" rx="10" fill="#1E3A5F" />
                    {/* Laptop */}
                    <rect x="80" y="200" width="55" height="35" rx="4" fill="#94A3B8" />
                    <rect x="82" y="202" width="51" height="30" rx="2" fill="#CBD5E1" />
                    {/* Decorative dots */}
                    <circle cx="240" cy="60" r="6" fill="#93C5FD" opacity="0.7" />
                    <circle cx="60" cy="270" r="8" fill="#93C5FD" opacity="0.5" />
                    <circle cx="260" cy="250" r="5" fill="#60A5FA" opacity="0.6" />
                  </svg>
                </div>

                {/* Floating stat card */}
                <div className="absolute -bottom-4 -left-6 bg-white rounded-xl shadow-lg p-3 border border-gray-100">
                  <div className="text-primary font-black text-xl">10K+</div>
                  <div className="text-gray-500 text-xs">Professionals Trained</div>
                </div>
                <div className="absolute -top-4 -right-4 bg-primary rounded-xl shadow-lg p-3">
                  <div className="text-white font-black text-xl">200+</div>
                  <div className="text-blue-100 text-xs">Sessions Delivered</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
