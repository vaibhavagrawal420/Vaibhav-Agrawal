import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiGithub, FiExternalLink, FiArrowRight } from 'react-icons/fi'
import PageWrapper from '../components/ui/PageWrapper'
import SectionHeader from '../components/ui/SectionHeader'
import TechBadge from '../components/ui/TechBadge'
import { projects } from '../data/projects'

export default function ProjectsPage() {
  return (
    <PageWrapper>
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            badge="Projects"
            title={<>Things I've <span className="gradient-text">built</span></>}
            subtitle="Production-grade full-stack applications with AI integrations, real-time features, and scalable architectures."
          />

          <div className="space-y-8">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group glass border border-blue-500/10 rounded-3xl overflow-hidden card-hover"
              >
                <div className="grid grid-cols-1 lg:grid-cols-5">
                  {/* Image */}
                  <div className="lg:col-span-2 relative h-64 lg:h-auto min-h-[260px] overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />
                    <img
                      src={project.coverImage}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => { e.target.style.display = 'none' }}
                    />
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-3 p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-500/15 text-green-400 border border-green-500/20">
                          {project.status}
                        </span>
                      </div>

                      <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h2>
                      <p className="text-blue-400/80 text-sm font-medium mb-3">{project.tagline}</p>
                      <p className="text-slate-400 text-sm leading-relaxed mb-5">
                        {project.shortDesc}
                      </p>

                      {/* Metrics */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
                        {project.metrics.slice(0, 4).map((m) => (
                          <div key={m.label} className="glass border border-blue-500/10 rounded-xl p-3 text-center">
                            <div className="text-blue-400 font-bold text-sm">{m.value}</div>
                            <div className="text-slate-600 text-xs leading-tight mt-0.5">{m.label}</div>
                          </div>
                        ))}
                      </div>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-5">
                        {project.techStack.slice(0, 8).map((tech) => (
                          <TechBadge key={tech} name={tech} />
                        ))}
                        {project.techStack.length > 8 && (
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs text-slate-500 glass border border-blue-500/10">
                            +{project.techStack.length - 8} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-4 flex-wrap">
                      <Link
                        to={`/projects/${project.slug}`}
                        className="flex items-center gap-2 px-5 py-2.5 rounded-xl btn-primary text-sm font-medium"
                      >
                        View Details <FiArrowRight size={14} />
                      </Link>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-xl btn-outline text-sm font-medium"
                      >
                        <FiGithub size={14} /> GitHub
                      </a>
                      {project.liveDemo && (
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-slate-500 hover:text-slate-300 text-sm transition-colors"
                        >
                          <FiExternalLink size={14} /> Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
