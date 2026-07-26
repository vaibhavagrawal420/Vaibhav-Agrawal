import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi'
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si'
import { profile } from '../../data/profile'
import { siteConfig } from '../../data/siteConfig'

const socials = [
  { icon: <FiGithub size={17} />, url: profile.github, label: 'GitHub' },
  { icon: <FiLinkedin size={17} />, url: profile.linkedin, label: 'LinkedIn' },
  { icon: <SiLeetcode size={15} />, url: profile.leetcode, label: 'LeetCode' },
  { icon: <SiGeeksforgeeks size={17} />, url: profile.gfg, label: 'GFG' },
  { icon: <FiMail size={17} />, url: `mailto:${profile.email}`, label: 'Email' },
]

const navGroups = [
  {
    label: 'Navigation',
    links: siteConfig.navLinks.slice(0, 5),
  },
  {
    label: 'More',
    links: siteConfig.navLinks.slice(5),
  },
]

export default function Footer() {
  return (
    <footer className="relative bg-[#020818]">
      {/* Top gradient line */}
      <div className="h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

      <div className="container-custom py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="sm:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-4 w-fit">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-black text-xs shadow-lg shadow-blue-500/25">
                VA
              </div>
              <span className="text-lg font-bold text-white">Vaibhav Agrawal<span className="text-blue-400">.</span></span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs mb-6">
              Full Stack Developer & AI Engineer building intelligent applications at the intersection of software and AI.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-2">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.url}
                  target={s.url.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="w-9 h-9 rounded-xl glass border border-blue-500/10 flex items-center justify-center text-slate-600 hover:text-blue-400 hover:border-blue-500/30 transition-all duration-200"
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Nav groups */}
          {navGroups.map((group) => (
            <div key={group.label}>
              <h3 className="text-slate-300 font-semibold text-xs uppercase tracking-widest mb-4">{group.label}</h3>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-slate-500 hover:text-blue-400 text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-blue-500/8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-600 text-xs flex items-center gap-1.5">
            © {new Date().getFullYear()} Vaibhav Agrawal · Built with
            <FiHeart size={11} className="text-red-500/70" />
            using React, Tailwind & Framer Motion
          </p>
          <p className="text-slate-700 text-xs">
            Greater Noida, India 🇮🇳
          </p>
        </div>
      </div>
    </footer>
  )
}
