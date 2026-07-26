import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiExternalLink, FiAward, FiX, FiMaximize2, FiDownload, FiCalendar } from 'react-icons/fi'
import PageWrapper from '../components/ui/PageWrapper'
import SectionHeader from '../components/ui/SectionHeader'
import { certificates } from '../data/certificates'

// Issuer logos (text-based, styled)
function IssuerBadge({ issuer, color }) {
  const map = {
    'Infosys Springboard': 'Infosys',
    'GeeksForGeeks': 'GFG',
    'Cisco Networking Academy': 'Cisco',
  }
  return (
    <span
      className="text-xs font-bold px-2 py-0.5 rounded"
      style={{ background: `${color}20`, color }}
    >
      {map[issuer] || issuer}
    </span>
  )
}

// PDF preview modal
function CertModal({ cert, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl glass-bright border border-blue-500/20 rounded-2xl overflow-hidden shadow-2xl"
        style={{ maxHeight: '90vh' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-blue-500/10 bg-[#0a1628]">
          <div>
            <h3 className="text-white font-bold text-sm">{cert.title}</h3>
            <p className="text-slate-500 text-xs">{cert.issuer}</p>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={cert.credentialUrl}
              download
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass border border-blue-500/20 text-slate-400 hover:text-white text-xs transition-colors"
            >
              <FiDownload size={12} /> Download
            </a>
            <a
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass border border-blue-500/20 text-slate-400 hover:text-white text-xs transition-colors"
            >
              <FiMaximize2 size={12} /> Full screen
            </a>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-lg glass border border-blue-500/15 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
            >
              <FiX size={16} />
            </button>
          </div>
        </div>

        {/* PDF embed */}
        <iframe
          src={`${cert.credentialUrl}#view=FitH&toolbar=0`}
          title={cert.title}
          className="w-full"
          style={{ height: '70vh' }}
        />
      </motion.div>
    </motion.div>
  )
}

export default function CertificatesPage() {
  const [activeCert, setActiveCert] = useState(null)

  return (
    <PageWrapper>
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            badge="Certifications"
            title={<>My <span className="gradient-text">Credentials</span></>}
            subtitle="Professional certifications from GeeksForGeeks, Infosys Springboard, and Cisco Networking Academy."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certificates.map((cert, i) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group glass border border-blue-500/10 rounded-2xl overflow-hidden card-hover"
              >
                {/* Preview area — click to open PDF */}
                <button
                  onClick={() => setActiveCert(cert)}
                  className="w-full text-left"
                >
                  <div
                    className="h-44 flex flex-col items-center justify-center relative overflow-hidden cursor-pointer"
                    style={{ background: `linear-gradient(135deg, ${cert.color}12, ${cert.color}04)` }}
                  >
                    {/* Pattern */}
                    <div className="absolute inset-0"
                      style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, ${cert.color}15 1px, transparent 0)`,
                        backgroundSize: '28px 28px',
                      }}
                    />
                    {/* Glow */}
                    <div className="absolute inset-0"
                      style={{ background: `radial-gradient(circle at 50% 50%, ${cert.color}10, transparent 65%)` }} />

                    {/* Icon */}
                    <div
                      className="relative w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-3 transition-transform duration-300 group-hover:scale-110 shadow-lg"
                      style={{ background: `${cert.color}20`, color: cert.color, boxShadow: `0 8px 24px ${cert.color}25` }}
                    >
                      <FiAward />
                    </div>

                    {/* Hover prompt */}
                    <span className="relative text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      style={{ color: cert.color }}>
                      Click to view certificate →
                    </span>

                    {/* Date badge */}
                    <div className="absolute top-3 right-3">
                      <span
                        className="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium border"
                        style={{ background: `${cert.color}15`, color: cert.color, borderColor: `${cert.color}30` }}
                      >
                        <FiCalendar size={10} /> {cert.date}
                      </span>
                    </div>

                    {/* Issuer badge */}
                    <div className="absolute top-3 left-3">
                      <IssuerBadge issuer={cert.issuer} color={cert.color} />
                    </div>
                  </div>
                </button>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-white font-bold text-sm mb-1 leading-snug group-hover:text-blue-400 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="font-semibold text-xs mb-3" style={{ color: cert.color }}>
                    {cert.issuer}
                  </p>
                  <p className="text-slate-500 text-xs leading-relaxed mb-4">
                    {cert.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {cert.skills.map((s) => (
                      <span
                        key={s}
                        className="px-2 py-0.5 rounded-md text-[11px] border"
                        style={{ borderColor: `${cert.color}20`, color: `${cert.color}cc`, background: `${cert.color}08` }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3 pt-3 border-t border-blue-500/8">
                    <button
                      onClick={() => setActiveCert(cert)}
                      className="flex items-center gap-1.5 text-xs font-medium transition-colors"
                      style={{ color: cert.color }}
                    >
                      <FiMaximize2 size={11} /> View Certificate
                    </button>
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-slate-600 hover:text-slate-300 text-xs transition-colors ml-auto"
                    >
                      <FiExternalLink size={11} /> Open
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate Modal */}
      <AnimatePresence>
        {activeCert && (
          <CertModal cert={activeCert} onClose={() => setActiveCert(null)} />
        )}
      </AnimatePresence>
    </PageWrapper>
  )
}
