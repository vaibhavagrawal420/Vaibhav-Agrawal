import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import {
  SiReact, SiNodedotjs, SiMongodb, SiRedis, SiJavascript,
  SiTailwindcss, SiExpress, SiGit, SiLangchain,
} from 'react-icons/si'
import { TbBrandCpp } from 'react-icons/tb'
import SectionHeader from '../components/ui/SectionHeader'

const coreSkills = [
  { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E', level: 90 },
  { name: 'React.js', icon: <SiReact />, color: '#61DAFB', level: 88 },
  { name: 'Node.js', icon: <SiNodedotjs />, color: '#339933', level: 85 },
  { name: 'Express.js', icon: <SiExpress />, color: '#aaaaaa', level: 85 },
  { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248', level: 85 },
  { name: 'Redis', icon: <SiRedis />, color: '#DC382D', level: 75 },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06B6D4', level: 90 },
  { name: 'Git', icon: <SiGit />, color: '#F05032', level: 88 },
  { name: 'C++', icon: <TbBrandCpp />, color: '#00599C', level: 85 },
  { name: 'LangChain', icon: <SiLangchain />, color: '#34d399', level: 80 },
]

const aiTags = [
  { label: 'LangChain', color: '#34d399' },
  { label: 'LangGraph', color: '#8b5cf6' },
  { label: 'RAG Pipelines', color: '#60a5fa' },
  { label: 'Vector Embeddings', color: '#f59e0b' },
  { label: 'Multi-Agent AI', color: '#f97316' },
  { label: 'LLMs', color: '#a78bfa' },
  { label: 'ChromaDB', color: '#6366f1' },
]

export default function SkillsPreviewSection() {
  return (
    <section className="section-padding relative overflow-hidden bg-[#020818]">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(29,78,216,0.07) 0%, transparent 70%)' }} />

      <div className="container-custom">
        <SectionHeader
          badge="Tech Stack"
          title={<>Skills & <span className="gradient-text">Technologies</span></>}
          subtitle="A versatile toolkit spanning frontend, backend, databases, and cutting-edge AI technologies."
        />

        {/* Core Skills */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-3 mb-10">
          {coreSkills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              whileHover={{ y: -6, scale: 1.06 }}
              className="group flex flex-col items-center gap-2.5 p-4 glass-card border border-blue-500/10 rounded-2xl cursor-default card-hover"
            >
              {/* Icon */}
              <div
                className="text-[26px] transition-all duration-300"
                style={{
                  color: skill.color,
                  filter: `drop-shadow(0 0 8px ${skill.color}50)`,
                }}
              >
                {skill.icon}
              </div>
              <span className="text-[11px] text-slate-400 text-center font-medium leading-tight">{skill.name}</span>

              {/* Progress bar */}
              <div className="w-full h-0.5 bg-slate-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.05 + 0.3 }}
                  className="h-full rounded-full"
                  style={{ background: `linear-gradient(90deg, ${skill.color}60, ${skill.color})` }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* AI Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card border border-indigo-500/15 rounded-2xl p-6 mb-10"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 uppercase tracking-wider">
              AI / ML Technologies
            </span>
          </div>
          <div className="flex flex-wrap gap-3">
            {aiTags.map((tag, i) => (
              <motion.span
                key={tag.label}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium glass border cursor-default transition-all duration-200"
                style={{
                  borderColor: `${tag.color}25`,
                  color: tag.color,
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: tag.color }} />
                {tag.label}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            to="/skills"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl btn-outline text-sm"
          >
            Explore All Skills <FiArrowRight size={15} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
