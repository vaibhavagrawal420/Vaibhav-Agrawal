import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiGithub, FiExternalLink, FiArrowRight } from 'react-icons/fi'
import { projects } from '../data/projects'
import SectionHeader from '../components/ui/SectionHeader'
import TechBadge from '../components/ui/TechBadge'

export default function FeaturedProjectsSection() {
  return (
    <section className="section-padding relative overflow-hidden" style={{ background: '#030c1e' }}>
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(circle at 100% 0%, rgba(99,102,241,0.05) 0%, transparent 60%)' }} />

      <div className="container-custom">
        <SectionHeader
          badge="Featured Work"
          title={<>Projects that <span className="gradient-text">define me</span></>}
          subtitle="Production-grade applications built with intelligent AI integrations, real-time systems, and scalable architectures."
        />

        <div className="space-y-6 mb-12">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: 'easeOut' }}
              className="group glass-card border border-blue-500/10 rounded-3xl overflow-hidden card-hover"
            >
              <div className="grid grid-cols-1 md:grid-cols-5 min-h-[280px]">
                {/* Image */}
                <div className={`md:col-span-2 relative overflow-hidden bg-[#040d1e] ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-70 z-10`} />

                  {/* Pattern overlay */}
                  <div className="absolute inset-0 z-20"
                    style={{
                      backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.04) 1px, transparent 0)`,
                      backgroundSize: '24px 24px'
                    }} />

                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 absolute inset-0"
                    onError={(e) => { e.target.style.display = 'none' }}
                  />

                  {/* Action links */}
                  <div className="absolute top-4 right-4 z-30 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="w-9 h-9 rounded-xl glass border border-white/10 flex items-center justify-center text-white hover:text-blue-400 hover:border-blue-400/30 transition-colors"
                    >
                      <FiGithub size={15} />
                    </a>
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="w-9 h-9 rounded-xl glass border border-white/10 flex items-center justify-center text-white hover:text-green-400 hover:border-green-400/30 transition-colors"
                      >
                        <FiExternalLink size={15} />
                      </a>
                    )}
                  </div>

                  {/* Year tag removed */}
                </div>

                {/* Content */}
                <div className={`md:col-span-3 p-7 sm:p-8 flex flex-col justify-between ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                  <div>
                    {/* Status */}
                    <div className="flex items-center gap-3 mb-3">
                      <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                        {project.status}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-black text-white mb-1 group-hover:text-blue-300 transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="text-sm font-semibold mb-3" style={{ color: project.color }}>
                      {project.tagline}
                    </p>
                    <p className="text-slate-400 text-sm leading-relaxed mb-5 line-clamp-2">
                      {project.shortDesc}
                    </p>

                    {/* Metrics */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-5">
                      {project.metrics.slice(0, 4).map((m) => (
                        <div key={m.label} className="glass border border-blue-500/10 rounded-xl p-2.5 text-center">
                          <div className="font-bold text-sm" style={{ color: project.color }}>{m.value}</div>
                          <div className="text-slate-600 text-[10px] leading-tight mt-0.5">{m.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Tech */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.techStack.slice(0, 7).map((tech) => (
                        <TechBadge key={tech} name={tech} />
                      ))}
                      {project.techStack.length > 7 && (
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs text-slate-600 glass border border-blue-500/10">
                          +{project.techStack.length - 7}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-blue-500/10">
                    <Link
                      to={`/projects/${project.slug}`}
                      className="flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-semibold transition-colors group/link"
                    >
                      Case Study
                      <FiArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-slate-600 hover:text-slate-300 text-xs transition-colors"
                    >
                      <FiGithub size={13} /> View Source
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl btn-outline text-sm"
          >
            All Projects <FiArrowRight size={15} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
