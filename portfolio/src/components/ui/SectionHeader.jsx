import { motion } from 'framer-motion'

export default function SectionHeader({ badge, title, subtitle, center = true, align = 'center' }) {
  const isCenter = center && align !== 'left'

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6 }}
      className={`mb-14 ${isCenter ? 'text-center' : ''}`}
    >
      {badge && (
        <div className={`flex items-center gap-2 mb-4 ${isCenter ? 'justify-center' : ''}`}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wide uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            {badge}
          </div>
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4 tracking-tight">
        {title}
      </h2>

      {subtitle && (
        <p className={`text-slate-400 text-base sm:text-lg leading-relaxed ${isCenter ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}>
          {subtitle}
        </p>
      )}

      {!isCenter && (
        <div className="mt-4 w-14 h-0.5 rounded-full bg-gradient-to-r from-blue-500 to-transparent" />
      )}
    </motion.div>
  )
}
