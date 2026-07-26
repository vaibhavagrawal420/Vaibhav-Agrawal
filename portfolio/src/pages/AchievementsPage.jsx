import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiCode, FiStar, FiAward, FiZap, FiExternalLink } from 'react-icons/fi'
import { SiLeetcode, SiGeeksforgeeks, SiHackerrank } from 'react-icons/si'
import PageWrapper from '../components/ui/PageWrapper'
import SectionHeader from '../components/ui/SectionHeader'
import { achievements, codingStats } from '../data/achievements'
import { profile } from '../data/profile'

const iconMap = { code: <FiCode />, star: <FiStar />, trophy: <FiAward />, badge: <FiZap /> }

const platformIcons = {
  LeetCode: <SiLeetcode className="text-[#FFA116]" size={22} />,
  GeeksforGeeks: <SiGeeksforgeeks className="text-[#2F8D46]" size={22} />,
  HackerRank: <SiHackerrank className="text-[#00EA64]" size={22} />,
}

function Counter({ target, suffix, duration = 2 }) {
  const [count, setCount] = useState(0)
  const ref = useRef()
  const inView = useInView(ref, { once: true })
  useEffect(() => {
    if (!inView) return
    let start = 0
    const step = target / (duration * 60)
    const timer = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 1000 / 60)
    return () => clearInterval(timer)
  }, [inView, target, duration])
  return <span ref={ref}>{count}{suffix}</span>
}

export default function AchievementsPage() {
  return (
    <PageWrapper>
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            badge="Achievements"
            title={<>My <span className="gradient-text">Accomplishments</span></>}
            subtitle="Recognition earned through consistent effort, competitive programming, and technical excellence."
          />

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {[
              { value: 600, suffix: '+', label: 'DSA Problems', icon: <FiCode />, color: '#f59e0b' },
              { value: 5, suffix: '★', label: 'C++ HackerRank', icon: <FiStar />, color: '#10b981' },
              { value: 15, suffix: '+', label: 'LeetCode Badges', icon: <FiAward />, color: '#ef4444' },
              { value: 4, suffix: '', label: 'Certifications', icon: <FiZap />, color: '#6366f1' },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass border border-blue-500/10 rounded-2xl p-6 text-center card-hover"
              >
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4"
                  style={{ background: `${s.color}15`, color: s.color, boxShadow: `0 0 20px ${s.color}20` }}>
                  {s.icon}
                </div>
                <div className="text-4xl font-bold mb-1" style={{ color: s.color }}>
                  <Counter target={s.value} suffix={s.suffix} />
                </div>
                <p className="text-slate-500 text-sm">{s.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Achievement Cards */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((a, i) => (
                <motion.div
                  key={a.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass border border-blue-500/10 rounded-2xl p-6 card-hover"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                      style={{ background: `${a.color}15`, color: a.color, boxShadow: `0 0 15px ${a.color}20` }}>
                      {iconMap[a.icon]}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-white font-semibold">{a.title}</h3>
                      </div>
                      <p className="text-slate-400 text-sm leading-relaxed mb-3">{a.description}</p>
                      <div className="flex gap-2">
                        {a.platforms.map((p) => (
                          <span key={p} className="px-2.5 py-1 rounded-lg glass border border-blue-500/10 text-xs text-slate-500">
                            {p}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Coding Profiles Quick View */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Coding Profiles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {codingStats.map((p, i) => (
                <motion.a
                  key={p.platform}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="glass border border-blue-500/15 rounded-2xl p-6 card-hover group"
                >
                  <div className="flex items-center justify-between mb-4">
                    {platformIcons[p.platform]}
                    <FiExternalLink size={14} className="text-slate-600 group-hover:text-blue-400 transition-colors" />
                  </div>
                  <h3 className="text-white font-semibold mb-1">{p.platform}</h3>
                  <p className="text-slate-500 text-sm mb-4">@{p.username}</p>
                  <div className="space-y-1">
                    {p.problems && (
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-500">Problems</span>
                        <span className="text-blue-400 font-medium">{p.problems}</span>
                      </div>
                    )}
                    {p.rating && (
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-500">Rating</span>
                        <span className="text-green-400 font-medium">{p.rating}</span>
                      </div>
                    )}
                    {p.badges && (
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-500">Badges</span>
                        <span className="text-orange-400 font-medium">{p.badges}</span>
                      </div>
                    )}
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
