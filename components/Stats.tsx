'use client'

import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 10000, suffix: '+', label: 'Professionals Trained For Exceptional Career Success', display: '10K+' },
  { value: 200, suffix: '+', label: 'Sessions Delivered With Unmatched Learning Excellence', display: '200+' },
  { value: 5000, suffix: '+', label: 'Active Learners Engaged In Dynamic Courses', display: '5K+' },
]

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return
    let startTime: number
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target, duration, start])

  return count
}

function StatCard({ stat, animate }: { stat: typeof stats[0]; animate: boolean }) {
  const count = useCountUp(stat.value, 2000, animate)
  const display = animate
    ? stat.value >= 1000
      ? `${Math.floor(count / 1000)}K+`
      : `${count}+`
    : stat.display

  return (
    <div className="flex flex-col items-center px-8 py-6">
      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-3">
        <span className="text-primary font-black text-2xl">{display}</span>
      </div>
      <p className="text-gray-600 text-center text-sm max-w-[180px]">{stat.label}</p>
    </div>
  )
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null)
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setAnimate(true); observer.disconnect() } },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="stats" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Our <span className="highlight">Track Record</span></h2>
        <p className="section-subtitle">The Numbers Behind <span className="highlight font-medium">Our Success</span></p>

        <div ref={ref} className="flex flex-col md:flex-row justify-center items-center divide-y md:divide-y-0 md:divide-x divide-gray-200 bg-white rounded-2xl border border-gray-100 shadow-sm">
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} animate={animate} />
          ))}
        </div>
      </div>
    </section>
  )
}
