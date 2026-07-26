import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowLeft } from 'react-icons/fi'
import PageWrapper from '../components/ui/PageWrapper'

export default function NotFoundPage() {
  return (
    <PageWrapper>
      <div className="min-h-screen flex items-center justify-center section-padding">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-[160px] font-black leading-none gradient-text-blue opacity-20 select-none mb-4">
              404
            </div>
            <h1 className="text-3xl font-bold text-white mb-3">Page not found</h1>
            <p className="text-slate-400 mb-8 max-w-md mx-auto">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl btn-primary text-sm"
            >
              <FiArrowLeft size={15} /> Back to Home
            </Link>
          </motion.div>
        </div>
      </div>
    </PageWrapper>
  )
}
