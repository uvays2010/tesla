import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Cpu, Eye, Brain, Wifi, Shield, ArrowRight } from 'lucide-react'
import './TechnologyPage.css'

const topics = [
  { id: 'autopilot', icon: Eye, title: 'Autopilot', desc: 'Advanced driver assistance with adaptive cruise, autosteer and more.' },
  { id: 'fsd', icon: Brain, title: 'Full Self-Driving', desc: 'Neural networks trained on billions of miles for supervised autonomy.' },
  { id: 'ai', icon: Cpu, title: 'AI & Computing', desc: 'Dojo supercomputer and custom AI inference hardware in every vehicle.' },
  { id: 'battery', icon: Shield, title: 'Battery Engineering', desc: '4680 cells, structural packs and industry-leading energy density.' },
  { id: 'ota', icon: Wifi, title: 'OTA Updates', desc: 'Continuous improvement of software, features and performance over the air.' },
  { id: 'safety', icon: Shield, title: 'Safety Systems', desc: '5-star safety ratings and active collision avoidance technologies.' },
]

export default function TechnologyPage() {
  return (
    <div className="tech-page">
      <section className="tech-hero">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="eyebrow">Innovation</p>
            <h1>Technology</h1>
            <p className="hero-desc">
              From neural nets to battery chemistry — the systems that power Tesla vehicles and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="tech-grid">
            {topics.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <Link to={`/technology/${t.id}`} className="tech-card">
                  <div className="tech-icon"><t.icon size={24} /></div>
                  <h3>{t.title}</h3>
                  <p>{t.desc}</p>
                  <span className="tech-link">Explore <ArrowRight size={14} /></span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
