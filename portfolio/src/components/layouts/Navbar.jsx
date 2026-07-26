import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiDownload } from 'react-icons/fi'
import { siteConfig } from '../../data/siteConfig'
import { profile } from '../../data/profile'

const navLinks = siteConfig.navLinks

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    document.body.style.overflow = ''
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled
            ? 'bg-[#020818]/90 backdrop-blur-xl border-b border-blue-500/10 shadow-xl shadow-blue-900/10'
            : 'bg-transparent'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-black text-xs shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-shadow duration-300"
              >
                VA
              </motion.div>
              <div className="hidden sm:block">
                <span className="font-bold text-white tracking-tight text-sm">Vaibhav Agrawal</span>
                <span className="text-blue-400 font-black text-sm"></span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-0.5">
              {navLinks.slice(0, 8).map((link) => {
                const active = location.pathname === link.path
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`relative px-3.5 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                      active ? 'text-white' : 'text-slate-500 hover:text-slate-200'
                    }`}
                  >
                    {link.label}
                    {active && (
                      <motion.div
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-lg bg-blue-500/10 border border-blue-500/20"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                )
              })}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <motion.a
                href={profile.resumeUrl}
                download="Vaibhav_Agrawal_Resume.pdf"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl btn-primary text-xs font-semibold"
              >
                <FiDownload size={13} /> Resume
              </motion.a>
            </div>

            {/* Mobile toggle */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-9 h-9 rounded-xl glass border border-blue-500/15 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <FiX size={18} /> : <FiMenu size={18} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden"
            />
            <motion.div
              key="drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.28, ease: 'easeInOut' }}
              className="fixed right-0 top-0 bottom-0 z-50 w-72 bg-[#030c1e] border-l border-blue-500/10 lg:hidden flex flex-col shadow-2xl"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 h-16 border-b border-blue-500/10">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-black text-xs">VA</div>
                  <span className="text-white font-bold text-sm">Vaibhav Agrawal<span className="text-blue-400">.</span></span>
                </div>
                <button onClick={() => setMobileOpen(false)} className="text-slate-500 hover:text-white transition-colors">
                  <FiX size={18} />
                </button>
              </div>

              {/* Links */}
              <nav className="flex-1 overflow-y-auto py-4 px-3">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <Link
                      to={link.path}
                      className={`flex items-center px-4 py-3 rounded-xl text-sm font-medium mb-1 transition-all duration-200 ${
                        location.pathname === link.path
                          ? 'text-blue-400 bg-blue-500/10 border border-blue-500/20'
                          : 'text-slate-400 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Resume button */}
              <div className="p-4 border-t border-blue-500/10">
                <a
                  href={profile.resumeUrl}
                  download="Vaibhav_Agrawal_Resume.pdf"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl btn-primary text-sm"
                >
                  <FiDownload size={14} /> Download Resume
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
