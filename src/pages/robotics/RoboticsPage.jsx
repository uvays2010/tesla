import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Bot, Cpu, Factory, Brain, ArrowRight } from 'lucide-react'
import './RoboticsPage.css'

export default function RoboticsPage() {
  return (
    <div className="robotics-page">
      <section className="robotics-hero">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="eyebrow">Tesla Optimus</p>
            <h1>Robotics & AI</h1>
            <p className="hero-desc">
              Building general-purpose humanoid robots to help with unsafe, repetitive and boring tasks.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="robotics-feature">
            <div className="robotics-feature-content">
              <h2>Optimus</h2>
              <p>
                Tesla’s humanoid robot is designed to be friendly, helpful and capable of learning 
                new tasks through AI. Powered by the same neural networks and Dojo training 
                infrastructure used in Full Self-Driving.
              </p>
              <ul className="robotics-list">
                <li>Bipedal humanoid form factor</li>
                <li>End-to-end neural net control</li>
                <li>Factory and home applications</li>
                <li>Continuous learning via fleet data</li>
              </ul>
              <Link to="/robotics/optimus" className="btn btn-primary">
                Explore Optimus <ArrowRight size={18} />
              </Link>
            </div>
            <div className="robotics-feature-visual">
              <Bot size={120} strokeWidth={1} />
            </div>
          </div>

          <div className="robotics-cards">
            {[
              { icon: Brain, title: 'Robot Intelligence', desc: 'Shared AI stack with FSD for perception, planning and control.' },
              { icon: Factory, title: 'Future Factories', desc: 'Optimus will help manufacture itself and other Tesla products.' },
              { icon: Cpu, title: 'AI Development', desc: 'Dojo and Tesla AI hardware accelerate robot learning at scale.' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className="robotics-card"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <item.icon size={24} />
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
