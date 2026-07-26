import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi'
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si'
import PageWrapper from '../components/ui/PageWrapper'
import SectionHeader from '../components/ui/SectionHeader'
import { profile } from '../data/profile'

const contactInfo = [
  { icon: <FiMail />, label: 'Email', value: profile.email, href: `mailto:${profile.email}`, color: '#3b82f6' },
  { icon: <FiPhone />, label: 'Phone', value: profile.phone, href: `tel:${profile.phone}`, color: '#10b981' },
  { icon: <FiMapPin />, label: 'Location', value: profile.location, href: null, color: '#f59e0b' },
]

const socialLinks = [
  { icon: <FiGithub size={20} />, name: 'GitHub', url: profile.github, color: '#ffffff' },
  { icon: <FiLinkedin size={20} />, name: 'LinkedIn', url: profile.linkedin, color: '#0A66C2' },
  { icon: <SiLeetcode size={18} />, name: 'LeetCode', url: profile.leetcode, color: '#FFA116' },
  { icon: <SiGeeksforgeeks size={20} />, name: 'GFG', url: profile.gfg, color: '#2F8D46' },
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    // NOTE: No backend — opens mailto link
    const mailtoLink = `mailto:${profile.email}?subject=${encodeURIComponent(form.subject || 'Portfolio Contact')}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`
    window.open(mailtoLink, '_blank')
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <PageWrapper>
      <section className="section-padding">
        <div className="container-custom max-w-5xl">
          <SectionHeader
            badge="Contact"
            title={<>Let's <span className="gradient-text">work together</span></>}
            subtitle="Have a project in mind or want to discuss opportunities? I'm always open to interesting conversations."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Get in touch</h3>
                <p className="text-slate-400 leading-relaxed">
                  I'm currently open to internships, full-time roles, and freelance projects. Whether you want to collaborate on a cool AI project or just say hi — feel free to reach out.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {contactInfo.map((c) => (
                  <div
                    key={c.label}
                    className="flex items-center gap-4 glass border border-blue-500/10 rounded-xl p-4 card-hover"
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                      style={{ background: `${c.color}15`, color: c.color }}
                    >
                      {c.icon}
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs uppercase tracking-wider">{c.label}</p>
                      {c.href ? (
                        <a href={c.href} className="text-white text-sm font-medium hover:text-blue-400 transition-colors">
                          {c.value}
                        </a>
                      ) : (
                        <p className="text-white text-sm font-medium">{c.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <p className="text-slate-500 text-xs uppercase tracking-wider mb-4">Social Profiles</p>
                <div className="flex gap-3">
                  {socialLinks.map((s) => (
                    <motion.a
                      key={s.name}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.name}
                      whileHover={{ y: -4, scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 rounded-xl glass border border-blue-500/15 flex items-center justify-center transition-all duration-200 hover:border-blue-500/40"
                      style={{ color: s.color }}
                    >
                      {s.icon}
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="glass border border-green-500/20 rounded-2xl p-5 bg-green-500/5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-green-400 font-semibold text-sm">Available for opportunities</span>
                </div>
                <p className="text-slate-400 text-sm">
                  Open to internships, part-time, and full-time roles in Full Stack Development and AI Engineering.
                </p>
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <form
                onSubmit={handleSubmit}
                className="glass border border-blue-500/15 rounded-2xl p-8 space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-slate-400 text-xs mb-2 uppercase tracking-wider">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full bg-[#0a1628] border border-blue-500/15 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-blue-500/40 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 text-xs mb-2 uppercase tracking-wider">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="w-full bg-[#0a1628] border border-blue-500/15 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-blue-500/40 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-400 text-xs mb-2 uppercase tracking-wider">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Project opportunity, collaboration..."
                    className="w-full bg-[#0a1628] border border-blue-500/15 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-blue-500/40 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 text-xs mb-2 uppercase tracking-wider">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    className="w-full bg-[#0a1628] border border-blue-500/15 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-blue-500/40 transition-colors resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl btn-primary font-semibold text-sm"
                >
                  {sent ? (
                    <span className="text-green-300">✓ Opening your mail client...</span>
                  ) : (
                    <>
                      <FiSend size={16} />
                      Send Message
                    </>
                  )}
                </motion.button>

                <p className="text-slate-600 text-xs text-center">
                  This will open your default mail client with the message pre-filled.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
