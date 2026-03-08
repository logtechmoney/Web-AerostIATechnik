import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Cpu, Cloud, Target, Database, Blocks, Terminal } from 'lucide-react';
import './index.css';

function App() {
  return (
    <>
      <nav className="navbar">
        <a href="#" className="nav-brand">
          <img src="/logo.png" alt="AerostAI Technik Logo" className="logo" />
          <img src="/nombre.png" alt="AerostAI Technik" className="nombre" />
        </a>
        <ul className="nav-links">
          <li><a href="#soluciones">Soluciones</a></li>
          <li><a href="#mision-vision">Nosotros</a></li>
          <li><a href="mailto:info-support@aerostaitechnik.com">Contacto</a></li>
        </ul>
      </nav>

      <section className="hero-section">
        <div className="hero-bg"></div>
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-lockup"
          >
            <img src="/logo.png" alt="Logo" className="logo" />
            <img src="/nombre.png" alt="Nombre" className="nombre" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-title"
          >
            Ingeniería de Software para <span style={{ color: "var(--accent)" }}>Entornos Críticos</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hero-subtitle"
          >
            Transformamos la complejidad técnica en ventaja estratégica.
            Soluciones aeroespaciales, monitorización de motores y sistemas operacionales avanzados diseñados sin margen de error.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a href="#soluciones" className="btn-primary">Descubrir Plataformas</a>
            <div style={{ marginTop: '2.5rem', display: 'flex', alignItems: 'center', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              <div className="pulse-dot"></div> Sistemas aeronáuticos y operativos en línea
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section" id="especializacion" style={{ background: '#000' }}>
        <div className="section-inner">
          <div className="section-header">
            <h3 className="section-title-sm">Especialización Técnica</h3>
            <h2 className="section-title">Soluciones Escalables Inteligentes</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginTop: '1rem', maxWidth: '700px' }}>Desarrollamos ecosistemas digitales seguros, alineados con protocolos internacionales y transformando entornos aislados en procesos centralizados.</p>
          </div>

          <div className="grid-3">
            {[
              { title: "Sistemas MRO Aeronáuticos", icon: <Terminal size={36} />, desc: "Plataformas seguras e integrales para mantenimiento y control de calidad operativa." },
              { title: "Engine Condition Monitoring", icon: <Cpu size={36} />, desc: "Análisis predictivo en tiempo real y tendencias de confiabilidad para flotas críticas." },
              { title: "Gestión Aeroportuaria", icon: <Blocks size={36} />, desc: "Sistemas de coordinación y monitoreo ininterrumpido a nivel infraestructura." },
              { title: "Plataformas de Datos", icon: <Database size={36} />, desc: "Centralización de información estratégica aerocomercial y toma de decisiones." },
              { title: "Drones & Oil/Gas", icon: <Cloud size={36} />, desc: "Software crítico automatizado para industria energética exigiendo máxima precisión." },
              { title: "Seguridad y Cumplimiento", icon: <Shield size={36} />, desc: "Arquitecturas modernas alineadas a los más estrictos estándares de aviación mundial." },
            ].map((item, i) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card" key={i}
              >
                <div className="card-icon">{item.icon}</div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#FAFAFA' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="mision-vision" style={{ background: '#050505' }}>
        <div className="section-inner">
          <div className="grid-2">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mv-box">
              <h3 className="section-title-sm" style={{ color: '#FAFAFA' }}>Nuestra Misión</h3>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginTop: '1.5rem', lineHeight: '1.8' }}>
                Diseñar y desarrollar soluciones de ingeniería de software para los sectores aeronáutico y Oil & Gas, integrando datos críticos y optimizando procesos para fortalecer la toma de decisiones.<br /><br />
                Garantizamos seguridad operacional e integridad mediante arquitecturas tecnológicas robustas, seguras y escalables.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="mv-box">
              <h3 className="section-title-sm" style={{ color: '#FAFAFA' }}>Nuestra Visión</h3>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginTop: '1.5rem', lineHeight: '1.8' }}>
                Ser una empresa referente en ingeniería de software aplicada a entornos de alta exigencia técnica, reconocida por desarrollar soluciones precisas, confiables y alineadas con las necesidades reales de la operación operativa.<br /><br />
                Impulsar operaciones más inteligentes, eficientes y seguras a través de tecnología diseñada con el más alto rigor ingenieril.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <img src="/nombre.png" alt="AerostAI Technik" />
        <p>Contacto Corporativo Directo: <a href="mailto:info-support@aerostaitechnik.com">info-support@aerostaitechnik.com</a></p>
        <p>&copy; {new Date().getFullYear()} AerostAI TECHNIK. Todos los derechos reservados.</p>
      </footer>
    </>
  );
}

export default App;
