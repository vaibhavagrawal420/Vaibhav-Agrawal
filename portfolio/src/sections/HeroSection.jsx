import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiDownload, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si'
import { profile } from '../data/profile'

const roles = profile.roles

// Animated typing
function TypewriterText({ texts }) {
  const [index, setIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const timeout = useRef(null)

  useEffect(() => {
    const current = texts[index]
    const speed = isDeleting ? 35 : 75

    timeout.current = setTimeout(() => {
      if (!isDeleting) {
        const next = current.slice(0, displayed.length + 1)
        setDisplayed(next)
        if (next === current) setTimeout(() => setIsDeleting(true), 2000)
      } else {
        const next = current.slice(0, displayed.length - 1)
        setDisplayed(next)
        if (next === '') {
          setIsDeleting(false)
          setIndex((i) => (i + 1) % texts.length)
        }
      }
    }, speed)

    return () => clearTimeout(timeout.current)
  }, [displayed, isDeleting, index, texts])

  return (
    <span className="gradient-text">
      {displayed}
      <span className="inline-block w-0.5 h-7 bg-blue-400 ml-1 animate-pulse align-middle" />
    </span>
  )
}

// Floating particles
function Particles() {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 5,
    duration: Math.random() * 10 + 8,
  }))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-blue-400/20"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.1, 0.5, 0.1],
            scale: [1, 1.5, 1],
          }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  )
}

const socials = [
  { icon: <FiGithub size={19} />, url: profile.github, label: 'GitHub' },
  { icon: <FiLinkedin size={19} />, url: profile.linkedin, label: 'LinkedIn' },
  { icon: <SiLeetcode size={17} />, url: profile.leetcode, label: 'LeetCode' },
  { icon: <SiGeeksforgeeks size={19} />, url: profile.gfg, label: 'GFG' },
  { icon: <FiMail size={19} />, url: `mailto:${profile.email}`, label: 'Email' },
]

const stats = [
  { value: '2+', label: 'Projects' },
  { value: '600+', label: 'DSA Problems' },
  { value: '30+', label: 'Skills' },
  { value: '4', label: 'Certificates' },
]

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* ── Background ── */}
      <div className="absolute inset-0 -z-10 bg-[#020818]">
        {/* Grid */}
        <div className="absolute inset-0 bg-grid opacity-100" />
        {/* Radial glow center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(29,78,216,0.08) 0%, transparent 65%)' }} />
        {/* Corner glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px]"
          style={{ background: 'radial-gradient(circle at 100% 0%, rgba(99,102,241,0.07) 0%, transparent 60%)' }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px]"
          style={{ background: 'radial-gradient(circle at 0% 100%, rgba(59,130,246,0.06) 0%, transparent 60%)' }} />
        {/* Particles */}
        <Particles />
      </div>

      <div className="container-custom w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center min-h-[calc(100vh-4rem)] py-24 lg:py-20">

          {/* ── Left: Content ── */}
          <div className="order-2 lg:order-1">
            {/* Available badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass border border-blue-500/20 text-sm mb-7"
            >
              <span className="flex items-center gap-1.5 text-green-400 font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
                </span>
                Available for opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight mb-3">
                Hi, I'm
                <br />
                <span className="gradient-text-blue">Vaibhav</span>
              </h1>
            </motion.div>

            {/* Typewriter role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="text-xl sm:text-2xl font-bold mb-5 h-9 flex items-center"
            >
              <TypewriterText texts={roles} />
            </motion.div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.5 }}
              className="text-slate-400 text-base sm:text-lg leading-relaxed mb-8 max-w-[520px]"
            >
              {profile.bio}
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.5 }}
              className="flex flex-wrap gap-4 mb-9"
            >
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl btn-primary text-sm"
              >
                View My Work <FiArrowRight size={15} />
              </Link>
              <a
                href={profile.resumeUrl}
                download="Vaibhav_Agrawal_Resume.pdf"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl btn-outline text-sm"
              >
                <FiDownload size={15} /> Resume
              </a>
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65, duration: 0.5 }}
              className="flex items-center gap-3"
            >
              <span className="text-slate-600 text-sm mr-1">Find me —</span>
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.url}
                  target={s.url.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  whileHover={{ y: -3, scale: 1.12 }}
                  whileTap={{ scale: 0.93 }}
                  className="w-10 h-10 rounded-xl glass border border-blue-500/12 flex items-center justify-center text-slate-500 hover:text-blue-400 hover:border-blue-500/35 transition-colors duration-200"
                >
                  {s.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Photo + Stats ── */}
          <div className="order-1 lg:order-2 flex flex-col items-center lg:items-end gap-8">
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
              className="relative"
            >
              {/* Outer animated ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-[-12px] rounded-full border border-dashed border-blue-500/20"
              />
              {/* Glow */}
              <div className="absolute inset-0 rounded-full"
                style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 70%)', filter: 'blur(20px)', transform: 'scale(1.2)' }} />

              {/* Photo frame */}
              <div className="relative w-60 h-60 sm:w-72 sm:h-72 lg:w-[320px] lg:h-[320px] rounded-full overflow-hidden border-[3px] border-blue-500/25 shadow-2xl shadow-blue-900/40">
                <img
                  src="/images/profile.jpg"
                  alt="Vaibhav Agrawal — Full Stack & AI Engineer"
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.parentElement.style.background = 'linear-gradient(135deg, #1e3a8a, #1d4ed8, #3b82f6)'
                    e.target.parentElement.innerHTML =
                      '<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:5rem;font-weight:900;color:white;letter-spacing:-2px">VA</div>'
                  }}
                />
              </div>

              {/* College badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9, type: 'spring', stiffness: 200 }}
                className="absolute -bottom-3 -left-2 glass-bright border border-blue-500/25 px-3.5 py-2 rounded-2xl shadow-xl"
              >
                <p className="text-slate-500 text-[10px] leading-none mb-0.5">Studying at</p>
                <p className="text-white font-bold text-xs">NIET, Greater Noida</p>
              </motion.div>

              {/* CGPA badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.0, type: 'spring', stiffness: 200 }}
                className="absolute -top-2 -right-4 glass-bright border border-blue-500/25 px-3.5 py-2.5 rounded-2xl shadow-xl text-center"
              >
                <p className="text-blue-400 font-black text-xl leading-none">7.9</p>
                <p className="text-slate-500 text-[10px]">CGPA</p>
              </motion.div>
            </motion.div>

            {/* Stats grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="grid grid-cols-2 gap-3 w-full max-w-[300px] sm:max-w-[340px]"
            >
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + i * 0.08, type: 'spring', stiffness: 200 }}
                  className="glass border border-blue-500/12 rounded-2xl p-4 text-center card-hover cursor-default"
                >
                  <div className="text-2xl font-black gradient-text-blue mb-0.5">{s.value}</div>
                  <div className="text-slate-500 text-xs">{s.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border border-slate-700 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-blue-400/70" />
        </motion.div>
        <span className="text-slate-700 text-[10px] tracking-widest uppercase">scroll</span>
      </motion.div>
    </section>
  )
}
