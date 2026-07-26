import { motion } from 'framer-motion'
import { FiMapPin, FiMail, FiPhone, FiCalendar, FiBook, FiCode, FiTrendingUp } from 'react-icons/fi'
import { SiReact, SiNodedotjs, SiMongodb, SiLangchain } from 'react-icons/si'
import PageWrapper from '../components/ui/PageWrapper'
import SectionHeader from '../components/ui/SectionHeader'
import { profile } from '../data/profile'
import { education } from '../data/education'
import { fadeUp } from '../animations/variants'

const interests = [
  { emoji: '🤖', text: 'AI & Machine Learning' },
  { emoji: '🧠', text: 'LLMs & Agent Systems' },
  { emoji: '⚙️', text: 'System Design' },
  { emoji: '📊', text: 'Data Structures & Algo' },
  { emoji: '🔐', text: 'Web Security' },
  { emoji: '🌐', text: 'Full Stack Development' },
  { emoji: '📦', text: 'Open Source' },
  { emoji: '🎯', text: 'Competitive Programming' },
]

const softSkills = [
  { name: 'Problem Solving', level: 92 },
  { name: 'System Design Thinking', level: 76 },
  { name: 'Team Collaboration', level: 88 },
  { name: 'Adaptability & Learning', level: 95 },
  { name: 'Technical Communication', level: 82 },
]

const currentFocus = [
  { icon: <SiReact className="text-cyan-400" />, text: 'Building production AI-powered MERN apps' },
  { icon: <SiLangchain className="text-green-400" />, text: 'Deepening LangGraph & multi-agent expertise' },
  { icon: <FiTrendingUp className="text-blue-400" />, text: 'Mastering system design & architecture patterns' },
  { icon: <FiCode className="text-purple-400" />, text: 'Competitive programming on LeetCode & GFG' },
]

export default function AboutPage() {
  return (
    <PageWrapper>
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            badge="About Me"
            title={<>The person <span className="gradient-text">behind the code</span></>}
            subtitle="A passionate developer who loves building intelligent systems and solving complex problems."
          />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-24">
            {/* Left: Photo + Contact */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-2 flex flex-col items-center lg:items-start gap-6"
            >
              {/* Photo */}
              <div className="relative">
                <div className="absolute inset-0 rounded-3xl"
                  style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.15), transparent 70%)', filter: 'blur(30px)', transform: 'scale(1.15)' }} />
                <div className="relative w-72 h-80 rounded-3xl overflow-hidden border border-blue-500/20 shadow-2xl shadow-blue-900/30">
                  <img
                    src="/images/profile.jpg"
                    alt="Vaibhav Agrawal"
                    className="w-full h-full object-cover object-center"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.parentElement.style.background = 'linear-gradient(135deg, #1e3a8a, #1d4ed8)'
                      e.target.parentElement.innerHTML = '<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:5rem;font-weight:900;color:white">VA</div>'
                    }}
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020818]/50 to-transparent" />
                </div>

                {/* CGPA float */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -bottom-4 -right-4 glass-bright border border-blue-500/25 px-4 py-3 rounded-2xl text-center shadow-xl"
                >
                  <p className="text-2xl font-black gradient-text-blue leading-none">7.9</p>
                  <p className="text-slate-500 text-xs mt-0.5">CGPA</p>
                </motion.div>
              </div>

              {/* Contact Info */}
              <div className="w-full space-y-3 pt-6">
                <p className="text-slate-500 text-xs uppercase tracking-widest mb-3">Contact</p>
                {[
                  { icon: <FiMapPin size={14} />, text: profile.location, href: null },
                  { icon: <FiMail size={14} />, text: profile.email, href: `mailto:${profile.email}` },
                  { icon: <FiPhone size={14} />, text: profile.phone, href: `tel:${profile.phone}` },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg glass border border-blue-500/12 flex items-center justify-center text-blue-400 flex-shrink-0">
                      {item.icon}
                    </div>
                    {item.href ? (
                      <a href={item.href} className="text-slate-400 text-sm hover:text-blue-400 transition-colors">{item.text}</a>
                    ) : (
                      <span className="text-slate-400 text-sm">{item.text}</span>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: Bio + Skills + Focus */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              className="lg:col-span-3 space-y-7"
            >
              <div>
                <h3 className="text-2xl font-black text-white mb-3">Full Stack Developer & AI Engineer</h3>
                <div className="space-y-3 text-slate-400 text-[15px] leading-relaxed">
                  <p>I'm Vaibhav Agrawal, a BTech student in Information Technology at NIET, Greater Noida. I specialize in building full-stack web applications with intelligent AI integrations.</p>
                  <p>My passion lies at the intersection of software engineering and AI — specifically building RAG pipelines, multi-agent systems, and LLM-powered applications that solve real-world problems at scale.</p>
                  <p>When I'm not coding, I'm solving DSA problems on LeetCode and GFG, exploring AI research, or architecting the next ambitious project.</p>
                </div>
              </div>

              {/* Current Focus */}
              <div className="glass-card border border-blue-500/12 rounded-2xl p-5">
                <h4 className="text-white font-bold mb-4 flex items-center gap-2 text-sm uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  Currently focused on
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentFocus.map((f, i) => (
                    <div key={i} className="flex items-center gap-3 text-slate-400 text-sm">
                      <div className="text-base flex-shrink-0">{f.icon}</div>
                      {f.text}
                    </div>
                  ))}
                </div>
              </div>

              {/* Soft Skills */}
              <div>
                <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Soft Skills</h4>
                <div className="space-y-3">
                  {softSkills.map((skill, i) => (
                    <div key={skill.name}>
                      <div className="flex justify-between text-sm mb-1.5">
                        <span className="text-slate-400">{skill.name}</span>
                        <span className="text-blue-400 font-semibold">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 bg-slate-800/80 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, ease: 'easeOut', delay: i * 0.1 }}
                          className="h-full rounded-full bg-gradient-to-r from-blue-700 to-blue-400"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Education Timeline */}
          <div className="mb-24">
            <SectionHeader
              badge="Education"
              title={<>Academic <span className="gradient-text">Journey</span></>}
            />
            {education.map((edu, i) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="relative pl-10 border-l-2 border-blue-500/20"
              >
                {/* Dot */}
                <div className="absolute -left-[11px] top-1.5 w-5 h-5 rounded-full bg-blue-500 border-4 border-[#020818] shadow-lg shadow-blue-500/40" />
                <div className="glass-card border border-blue-500/12 rounded-2xl p-7 card-hover">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-black text-white mb-1">{edu.institution}</h3>
                      <p className="text-blue-400 font-semibold">{edu.degree}</p>
                      <p className="text-slate-500 text-sm mt-0.5">{edu.location}</p>
                    </div>
                    <div className="text-right flex flex-col items-end gap-2">
                      <div className="flex items-center gap-1.5 text-slate-500 text-sm">
                        <FiCalendar size={12} /> {edu.duration}
                      </div>
                      <span className="px-4 py-1.5 rounded-xl text-xs font-black bg-blue-500/10 text-blue-400 border border-blue-500/20">
                        CGPA: {edu.cgpa}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs bg-green-500/10 text-green-400 border border-green-500/20">
                        {edu.status}
                      </span>
                    </div>
                  </div>
                  <p className="text-slate-400 text-sm mb-4 leading-relaxed">{edu.description}</p>
                  <div>
                    <p className="text-slate-600 text-xs mb-2.5 flex items-center gap-1.5">
                      <FiBook size={11} /> Relevant Coursework
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((c) => (
                        <span key={c} className="px-3 py-1 rounded-lg glass border border-blue-500/10 text-xs text-slate-400 hover:text-blue-400 transition-colors">
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Interests */}
          <div>
            <SectionHeader badge="Interests" title={<>What <span className="gradient-text">excites me</span></>} />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {interests.map((interest, i) => (
                <motion.div
                  key={interest.text}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                  whileHover={{ y: -4 }}
                  className="glass-card border border-blue-500/10 rounded-2xl p-4 text-center card-hover cursor-default"
                >
                  <div className="text-2xl mb-2">{interest.emoji}</div>
                  <p className="text-slate-300 text-sm font-medium leading-tight">{interest.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
