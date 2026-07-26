import { motion } from 'framer-motion'
import { FiDownload, FiMaximize2 } from 'react-icons/fi'
import PageWrapper from '../components/ui/PageWrapper'
import SectionHeader from '../components/ui/SectionHeader'
import { profile } from '../data/profile'

export default function ResumePage() {
  return (
    <PageWrapper>
      <section className="section-padding">
        <div className="container-custom max-w-5xl">
          <SectionHeader
            badge="Resume"
            title={<>My <span className="gradient-text">Resume</span></>}
            subtitle="Full professional background, skills, projects, and achievements."
          />

          {/* Actions */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <a
              href={profile.resumeUrl}
              download="Vaibhav_Agrawal_Resume.pdf"
              className="flex items-center gap-2 px-6 py-3 rounded-xl btn-primary font-medium"
            >
              <FiDownload size={16} /> Download PDF
            </a>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl btn-outline font-medium"
            >
              <FiMaximize2 size={16} /> Open in New Tab
            </a>
          </div>

          {/* PDF Embed */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass border border-blue-500/15 rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/20"
          >
            <div className="bg-[#0a1628] border-b border-blue-500/10 px-4 py-2 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
              <span className="text-slate-600 text-xs ml-2">vaibhav-agrawal-resume.pdf</span>
            </div>
            <iframe
              src={`${profile.resumeUrl}#view=FitH`}
              title="Vaibhav Agrawal Resume"
              className="w-full"
              style={{ height: 'calc(100vh - 200px)', minHeight: '700px' }}
            >
              <div className="p-8 text-center">
                <p className="text-slate-400 mb-4">Unable to display PDF inline.</p>
                <a href={profile.resumeUrl} download className="btn-primary px-6 py-3 rounded-xl">
                  Download Resume
                </a>
              </div>
            </iframe>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  )
}
