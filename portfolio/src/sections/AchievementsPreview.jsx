import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiCode, FiStar, FiAward, FiZap } from 'react-icons/fi'
import SectionHeader from '../components/ui/SectionHeader'

const stats = [
  {
    value: 600, suffix: '+', label: 'DSA Problems Solved',
    desc: 'Across LeetCode & GeeksforGeeks',
    icon: <FiCode size={22} />, color: '#f59e0b',
  },
  {
    value: 5, suffix: '★', label: 'C++ HackerRank Rating',
    desc: 'Advanced C++ proficiency',
    icon: <FiStar size={22} />, color: '#10b981',
  },
  {
    value: 15, suffix: '+', label: 'LeetCode Badges',
    desc: 'Consistent problem solving',
    icon: <FiAward size={22} />, color: '#ef4444',
  },
  {
    value: 1, suffix: '', label: 'Competition Win',
    desc: 'GFG Backpack Challenge',
    icon: <FiZap size={22} />, color: '#8b5cf6',
  },
]

function Counter({ target, suffix }) {
  const [count, setCount] = useState(0)
  const ref = useRef()
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const frames = 80
    const step = target / frames
    const timer = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 16)
    return () => clearInterval(timer)
  }, [inView, target])

  return <span ref={ref}>{count}{suffix}</span>
}

export default function AchievementsPreview() {
  return (
    <section className="section-padding relative overflow-hidden" style={{ background: '#030c1e' }}>
      {/* BG decoration */}
      <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />

      <div className="container-custom relative">
        <SectionHeader
          badge="Achievements"
          title={<>Numbers that <span className="gradient-text">speak</span></>}
          subtitle="Consistent problem-solving, competitive wins, and platform achievements that reflect my dedication."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group glass-card border border-blue-500/10 rounded-2xl p-6 card-hover text-center relative overflow-hidden"
            >
              {/* Background glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(circle at 50% 50%, ${s.color}08, transparent 70%)` }}
              />

              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg"
                style={{
                  background: `${s.color}12`,
                  color: s.color,
                  boxShadow: `0 0 0 0 ${s.color}30`,
                }}
              >
                {s.icon}
              </div>

              {/* Number */}
              <div
                className="text-5xl font-black mb-1 leading-none"
                style={{ color: s.color }}
              >
                <Counter target={s.value} suffix={s.suffix} />
              </div>

              <p className="text-white font-semibold text-sm mb-1">{s.label}</p>
              <p className="text-slate-600 text-xs">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            to="/achievements"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl btn-outline text-sm"
          >
            All Achievements <FiArrowRight size={15} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
