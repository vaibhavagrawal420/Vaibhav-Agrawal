import { motion } from 'framer-motion'
import { FiExternalLink, FiCode } from 'react-icons/fi'
import { SiLeetcode, SiGeeksforgeeks, SiHackerrank, SiGithub } from 'react-icons/si'
import PageWrapper from '../components/ui/PageWrapper'
import SectionHeader from '../components/ui/SectionHeader'
import { profile } from '../data/profile'

const platforms = [
  {
    name: 'GitHub',
    username: 'vaibhavagrawal420',
    url: profile.github,
    icon: <SiGithub size={32} />,
    color: '#ffffff',
    bg: '#161b22',
    stats: [
      { label: 'Projects', value: '5+' },
      { label: 'Commits', value: '200+' },
    ],
    description: 'Open source projects, contributions and code repositories.',
    badge: 'Dev',
  },
  {
    name: 'LeetCode',
    username: 'vaibhavagrawal420',
    url: profile.leetcode,
    icon: <SiLeetcode size={32} />,
    color: '#FFA116',
    bg: '#1a1a1a',
    stats: [
      { label: 'Problems', value: '300+' },
      { label: 'Badges', value: '15+' },
    ],
    description: 'Consistent algorithmic problem solving across Easy, Medium, and Hard.',
    badge: '15+ Badges',
  },
  {
    name: 'GeeksforGeeks',
    username: 'vaibhavagrawal420',
    url: profile.gfg,
    icon: <SiGeeksforgeeks size={32} />,
    color: '#2F8D46',
    bg: '#0f1a12',
    stats: [
      { label: 'Problems', value: '300+' },
      { label: 'Win', value: 'Backpack Challenge' },
    ],
    description: 'Won the GFG Backpack Challenge. Active DSA problem solver.',
    badge: 'Winner',
  },
  {
    name: 'HackerRank',
    username: 'vaibhavbansalre1',
    url: profile.hackerrank,
    icon: <SiHackerrank size={32} />,
    color: '#00EA64',
    bg: '#0d1117',
    stats: [
      { label: 'C++ Rating', value: '5★' },
      { label: 'Domain', value: 'C++' },
    ],
    description: 'Achieved 5-star C++ rating demonstrating advanced language mastery.',
    badge: '5★ C++',
  },
]

export default function CodingPage() {
  return (
    <PageWrapper>
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            badge="Coding Profiles"
            title={<>Find me <span className="gradient-text">coding</span></>}
            subtitle="Actively solving problems, building projects, and competing across all major coding platforms."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {platforms.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group glass border border-blue-500/10 rounded-2xl overflow-hidden card-hover"
              >
                {/* Header */}
                <div
                  className="p-6 flex items-center justify-between"
                  style={{ background: `linear-gradient(135deg, ${p.color}12, transparent)` }}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                      style={{ background: `${p.color}15`, color: p.color }}
                    >
                      {p.icon}
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg">{p.name}</h3>
                      <p className="text-slate-500 text-sm">@{p.username}</p>
                    </div>
                  </div>
                  <span
                    className="px-3 py-1 rounded-full text-xs font-bold border"
                    style={{ background: `${p.color}15`, color: p.color, borderColor: `${p.color}30` }}
                  >
                    {p.badge}
                  </span>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 divide-x divide-blue-500/10 border-y border-blue-500/10">
                  {p.stats.map((s) => (
                    <div key={s.label} className="p-4 text-center">
                      <div className="font-bold text-white text-lg" style={{ color: p.color }}>{s.value}</div>
                      <div className="text-slate-600 text-xs">{s.label}</div>
                    </div>
                  ))}
                </div>

                {/* Description + Link */}
                <div className="p-6 flex items-center justify-between gap-4">
                  <p className="text-slate-500 text-sm flex-1">{p.description}</p>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium flex-shrink-0 transition-all duration-200 border"
                    style={{
                      background: `${p.color}10`,
                      color: p.color,
                      borderColor: `${p.color}25`,
                    }}
                  >
                    <FiExternalLink size={14} /> Visit
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Summary Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass border border-blue-500/15 rounded-3xl p-8 text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <FiCode className="text-blue-400 text-2xl" />
              <h3 className="text-2xl font-bold text-white">600+ Problems Solved Combined</h3>
            </div>
            <p className="text-slate-400 mb-6 max-w-xl mx-auto">
              Consistent problem-solver across LeetCode and GeeksforGeeks with a focus on Data Structures, Algorithms, and competitive programming.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 rounded-xl glass border border-orange-500/20 text-orange-400 text-sm font-medium">
                🏆 GFG Backpack Challenge Winner
              </span>
              <span className="px-4 py-2 rounded-xl glass border border-green-500/20 text-green-400 text-sm font-medium">
                ⭐ 5★ HackerRank C++
              </span>
              <span className="px-4 py-2 rounded-xl glass border border-yellow-500/20 text-yellow-400 text-sm font-medium">
                🏅 15+ LeetCode Badges
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  )
}
