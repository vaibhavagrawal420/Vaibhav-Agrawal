import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  SiReact, SiNodedotjs, SiMongodb, SiRedis, SiJavascript, SiTailwindcss,
  SiExpress, SiGit, SiGithub, SiPostman, SiMysql,
  SiHtml5, SiRedux, SiSocketdotio, SiLangchain,
} from 'react-icons/si'
import { TbBrandCpp } from 'react-icons/tb'
import { FiDatabase, FiCpu, FiCode } from 'react-icons/fi'
import PageWrapper from '../components/ui/PageWrapper'
import SectionHeader from '../components/ui/SectionHeader'
import { skills, skillCategories } from '../data/skills'

const iconMap = {
  'C': <TbBrandCpp />, 'C++': <TbBrandCpp />, 'JavaScript': <SiJavascript />,
  'HTML5': <SiHtml5 />, 'CSS3': <FiCode />, 'React.js': <SiReact />,
  'Redux Toolkit': <SiRedux />, 'Tailwind CSS': <SiTailwindcss />,
  'Node.js': <SiNodedotjs />, 'Express.js': <SiExpress />,
  'REST APIs': <FiDatabase />, 'JWT Auth': <FiCode />, 'Socket.IO': <SiSocketdotio />,
  'MongoDB': <SiMongodb />, 'Redis': <SiRedis />, 'MySQL': <SiMysql />,
  'ChromaDB': <FiDatabase />, 'LangChain': <SiLangchain />, 'LangGraph': <FiCpu />,
  'RAG': <FiCpu />, 'LLMs': <FiCpu />, 'Vector Embeddings': <FiCpu />,
  'AI Agents': <FiCpu />, 'Git': <SiGit />, 'GitHub': <SiGithub />,
  'Postman': <SiPostman />, 'VS Code': <FiCode />,
  'DSA': <FiCode />, 'OOP': <FiCode />, 'DBMS': <FiDatabase />,
}

const colorMap = {
  'C': '#A8B9CC', 'C++': '#00599C', 'JavaScript': '#F7DF1E',
  'HTML5': '#E34F26', 'CSS3': '#1572B6', 'React.js': '#61DAFB',
  'Redux Toolkit': '#764ABC', 'Tailwind CSS': '#06B6D4',
  'Node.js': '#339933', 'Express.js': '#aaaaaa', 'REST APIs': '#FF6C37',
  'JWT Auth': '#9ca3af', 'Socket.IO': '#010101',
  'MongoDB': '#47A248', 'Redis': '#DC382D', 'MySQL': '#4479A1',
  'ChromaDB': '#6366f1', 'LangChain': '#1C3C3C', 'LangGraph': '#4f46e5',
  'RAG': '#8b5cf6', 'LLMs': '#10b981', 'Vector Embeddings': '#06b6d4',
  'AI Agents': '#34d399', 'Git': '#F05032', 'GitHub': '#ffffff',
  'Postman': '#FF6C37', 'VS Code': '#007ACC',
  'DSA': '#f59e0b', 'OOP': '#6366f1', 'DBMS': '#3b82f6',
}

export default function SkillsPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? skills
    : skills.filter(s => s.category === activeCategory)

  return (
    <PageWrapper>
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            badge="Skills"
            title={<>My Technical <span className="gradient-text">Arsenal</span></>}
            subtitle="Technologies and tools I use to build fast, scalable, and intelligent applications."
          />

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {skillCategories.map((cat) => (
              <motion.button
                key={cat}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 border ${
                  activeCategory === cat
                    ? 'bg-blue-500/20 text-blue-400 border-blue-500/40'
                    : 'glass border-blue-500/10 text-slate-400 hover:text-white hover:border-blue-500/25'
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>

          {/* Skills Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4"
            >
              {filtered.map((skill, i) => {
                const color = colorMap[skill.name] || '#3b82f6'
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.4 }}
                    whileHover={{ y: -5, scale: 1.03 }}
                    className="group glass border border-blue-500/10 rounded-2xl p-5 flex flex-col items-center gap-3 card-hover cursor-default"
                  >
                    {/* Icon */}
                    <div
                      className="text-3xl transition-all duration-300 group-hover:scale-110"
                      style={{
                        color,
                        filter: `drop-shadow(0 0 10px ${color}40)`,
                      }}
                    >
                      {iconMap[skill.name] || <FiCode />}
                    </div>

                    {/* Name */}
                    <span className="text-sm font-medium text-slate-300 text-center leading-tight">
                      {skill.name}
                    </span>

                    {/* Category */}
                    <span className="text-xs text-slate-600 capitalize">{skill.category}</span>

                    {/* Progress */}
                    <div className="w-full">
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-slate-600">Proficiency</span>
                        <span style={{ color }}>{skill.level}%</span>
                      </div>
                      <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: 'easeOut', delay: i * 0.03 }}
                          className="h-full rounded-full"
                          style={{ background: `linear-gradient(90deg, ${color}70, ${color})` }}
                        />
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </PageWrapper>
  )
}
