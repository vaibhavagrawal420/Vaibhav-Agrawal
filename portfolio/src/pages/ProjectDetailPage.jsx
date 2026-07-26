import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink, FiArrowLeft, FiCheck, FiTarget, FiZap, FiTrendingUp } from 'react-icons/fi'
import PageWrapper from '../components/ui/PageWrapper'
import TechBadge from '../components/ui/TechBadge'
import { projects } from '../data/projects'

export default function ProjectDetailPage() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <PageWrapper>
        <div className="container-custom section-padding text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Project not found</h1>
          <Link to="/projects" className="btn-primary px-6 py-3 rounded-xl">Back to Projects</Link>
        </div>
      </PageWrapper>
    )
  }

  return (
    <PageWrapper>
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[340px] overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60`} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020818] via-[#020818]/60 to-transparent" />
        <img
          src={project.coverImage}
          alt={project.title}
          className="w-full h-full object-cover"
          onError={(e) => { e.target.style.display = 'none' }}
        />
        <div className="absolute inset-0 flex items-end">
          <div className="container-custom pb-10">
            <motion.button
              onClick={() => navigate(-1)}
              whileHover={{ x: -4 }}
              className="flex items-center gap-2 text-slate-400 hover:text-white text-sm mb-4 transition-colors"
            >
              <FiArrowLeft size={16} /> Back to Projects
            </motion.button>
            <div className="flex items-center gap-3 mb-2">
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400 border border-green-500/20">
                {project.status}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{project.title}</h1>
            <p className="text-blue-400 text-lg font-medium">{project.tagline}</p>
          </div>
        </div>
      </div>

      <div className="container-custom py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-10">
            {/* Overview */}
            <Section title="Overview" icon={<FiTarget />}>
              <p className="text-slate-400 leading-relaxed">{project.description}</p>
            </Section>

            {/* Features */}
            <Section title="Key Features" icon={<FiZap />}>
              <ul className="space-y-2">
                {project.features.map((f, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-start gap-3 text-slate-400 text-sm"
                  >
                    <FiCheck className="text-green-400 mt-0.5 flex-shrink-0" size={14} />
                    {f}
                  </motion.li>
                ))}
              </ul>
            </Section>

            {/* Architecture */}
            <Section title="Architecture" icon={<FiTrendingUp />}>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                {project.architecture.description}
              </p>
              {project.architecture.agents && (
                <div>
                  <p className="text-slate-500 text-xs mb-3 uppercase tracking-wider">AI Agents</p>
                  <div className="flex flex-wrap gap-3">
                    {project.architecture.agents.map((agent) => (
                      <div
                        key={agent}
                        className="flex items-center gap-2 px-4 py-2 glass border border-indigo-500/20 rounded-xl text-sm text-indigo-300"
                      >
                        <span className="w-2 h-2 rounded-full bg-indigo-400" />
                        {agent}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </Section>

            {/* Challenges */}
            <Section title="Challenges" icon={<FiTarget />}>
              <ul className="space-y-3">
                {project.challenges.map((c, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-400 text-sm">
                    <span className="text-orange-400 font-bold mt-0.5">→</span>
                    {c}
                  </li>
                ))}
              </ul>
            </Section>

            {/* Learnings */}
            <Section title="Key Learnings" icon={<FiZap />}>
              <ul className="space-y-3">
                {project.learnings.map((l, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-400 text-sm">
                    <span className="text-blue-400 font-bold mt-0.5">✦</span>
                    {l}
                  </li>
                ))}
              </ul>
            </Section>

            {/* Future Scope */}
            <Section title="Future Improvements" icon={<FiTrendingUp />}>
              <ul className="space-y-2">
                {project.futureScope.map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-400 text-sm">
                    <span className="text-purple-400 mt-0.5">◈</span>
                    {f}
                  </li>
                ))}
              </ul>
            </Section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Actions */}
            <div className="glass border border-blue-500/15 rounded-2xl p-6 space-y-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl btn-outline text-sm font-medium"
              >
                <FiGithub size={16} /> View on GitHub
              </a>
              {project.liveDemo ? (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl btn-primary text-sm font-medium"
                >
                  <FiExternalLink size={16} /> Live Demo
                </a>
              ) : (
                <button
                  disabled
                  className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl glass border border-slate-700 text-slate-600 text-sm font-medium cursor-not-allowed"
                >
                  <FiExternalLink size={16} /> Live Demo (Coming Soon)
                </button>
              )}
            </div>

            {/* Metrics */}
            <div className="glass border border-blue-500/15 rounded-2xl p-6">
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Metrics</h3>
              <div className="space-y-3">
                {project.metrics.map((m) => (
                  <div key={m.label} className="flex items-center justify-between">
                    <span className="text-slate-500 text-sm">{m.label}</span>
                    <span className="text-blue-400 font-bold text-sm">{m.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="glass border border-blue-500/15 rounded-2xl p-6">
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <TechBadge key={tech} name={tech} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}

function Section({ title, icon, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="flex items-center gap-2 text-lg font-bold text-white mb-4">
        <span className="text-blue-400">{icon}</span>
        {title}
      </h2>
      {children}
    </motion.div>
  )
}
