import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Cpu, Cloud, Target, Database, Blocks, Terminal } from 'lucide-react';
import './index.css';

function App() {
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.3 }); // Activa cuando el 30% está en pantalla

    const sections = ['inicio', 'industrias', 'especializacion', 'plataformas', 'mision-vision', 'proyectos', 'contacto'];
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <nav className="navbar">
        <a href="#inicio" className="nav-brand">
          <img src="/logo.png" alt="AerostAI Technik Logo" className="logo" />
          <img src="/nombre.png" alt="AerostAI Technik" className="nombre" />
        </a>
        <ul className="nav-links">
          <li><a href="#inicio" className={activeSection === 'inicio' ? 'active' : ''}>Inicio</a></li>
          <li><a href="#industrias" className={activeSection === 'industrias' ? 'active' : ''}>Industrias</a></li>
          <li><a href="#especializacion" className={activeSection === 'especializacion' ? 'active' : ''}>Soluciones</a></li>
          <li><a href="#plataformas" className={activeSection === 'plataformas' ? 'active' : ''}>Plataformas</a></li>
          <li><a href="#mision-vision" className={activeSection === 'mision-vision' ? 'active' : ''}>Nosotros</a></li>
          <li><a href="#proyectos" className={activeSection === 'proyectos' ? 'active' : ''}>Proyectos</a></li>
          <li><a href="#contacto" className={activeSection === 'contacto' ? 'active' : ''}>Contacto</a></li>
        </ul>
      </nav>

      {/* SECCION HERO TOTALMENTE CENTRADA E IMPONENTE */}
      <section className="hero-section" id="inicio">
        {/* El fondo ESTATICO ahora está configurado sobre la etiqueta BODY global para el parallax puro */}
        <div className="hero-overlay"></div>

        <div className="hero-lockup">
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            src="/logo.png"
            alt="Logo"
            className="logo"
          />
          <motion.img
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            src="/nombre.png"
            alt="Nombre"
            className="nombre"
          />
        </div>
      </section>

      {/* CONTENIDO QUE SUBE SOBRE EL FONDO ESTATICO */}

      <section className="section" id="industrias">
        <div className="section-inner">
          <div className="section-header">
            <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-title-sm">Sectores que Transformamos</motion.h3>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="section-title">Nuestras Industrias</motion.h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', marginTop: '1.5rem', textAlign: 'center' }}>
              [ PRÓXIMAMENTE: Contenido sobre industrias Aeronáutica, Oil & Gas y Energía... ]
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="especializacion">
        <div className="section-inner">
          <div className="section-header">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-title-sm"
            >
              Ingeniería de Software para Entornos Críticos
            </motion.h3>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="section-title"
            >
              Soluciones Escalables Inteligentes
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              style={{ color: 'var(--text-muted)', fontSize: '1.25rem', marginTop: '1.5rem', maxWidth: '850px', margin: '1.5rem auto 0 auto', textAlign: 'center' }}
            >
              Transformamos la complejidad técnica en ventaja estratégica. Desarrollamos ecosistemas digitales seguros, alineados con protocolos internacionales y transformando entornos aislados en procesos centralizados.
            </motion.p>
          </div>

          <div className="grid-3">
            {[
              { title: "Sistemas MRO Aeronáuticos", icon: <Terminal size={48} strokeWidth={1.5} />, desc: "Plataformas seguras e integrales para mantenimiento y control de calidad operativa." },
              { title: "Engine Condition Monitoring", icon: <Cpu size={48} strokeWidth={1.5} />, desc: "Análisis predictivo en tiempo real y tendencias de confiabilidad para flotas críticas." },
              { title: "Gestión Aeroportuaria", icon: <Blocks size={48} strokeWidth={1.5} />, desc: "Sistemas de coordinación y monitoreo ininterrumpido a nivel infraestructura." },
              { title: "Plataformas de Datos", icon: <Database size={48} strokeWidth={1.5} />, desc: "Centralización de información estratégica aerocomercial y toma de decisiones." },
              { title: "Drones & Oil/Gas", icon: <Cloud size={48} strokeWidth={1.5} />, desc: "Software crítico automatizado para industria energética exigiendo máxima precisión." },
              { title: "Seguridad y Cumplimiento", icon: <Shield size={48} strokeWidth={1.5} />, desc: "Arquitecturas modernas alineadas a los más estrictos estándares de aviación mundial." },
            ].map((item, i) => (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="card" key={i}
              >
                <div className="card-icon">{item.icon}</div>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', color: '#FAFAFA' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.7' }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="plataformas">
        <div className="section-inner">
          <div className="section-header">
            <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-title-sm">Tecnología de Vanguardia</motion.h3>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="section-title">Plataformas y Productos</motion.h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', marginTop: '1.5rem', textAlign: 'center' }}>
              [ PRÓXIMAMENTE: Catálogo interactivo de plataformas de monitoreo y software... ]
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="mision-vision">
        <div className="section-inner">
          <div className="grid-2">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mv-box">
              <h3 className="section-title-sm" style={{ color: 'var(--accent)', fontSize: '1.1rem' }}>Nuestra Misión</h3>
              <p style={{ fontSize: '1.25rem', color: 'var(--text-main)', marginTop: '2.5rem', lineHeight: '1.8' }}>
                Diseñar y desarrollar soluciones de ingeniería de software para los sectores aeronáutico y Oil & Gas, integrando datos críticos y optimizando procesos para fortalecer la toma de decisiones.<br /><br />
                <span style={{ color: 'var(--text-muted)' }}>Garantizamos seguridad operacional e integridad mediante arquitecturas tecnológicas robustas, seguras y escalables.</span>
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="mv-box">
              <h3 className="section-title-sm" style={{ color: 'var(--accent)', fontSize: '1.1rem' }}>Nuestra Visión</h3>
              <p style={{ fontSize: '1.25rem', color: 'var(--text-main)', marginTop: '2.5rem', lineHeight: '1.8' }}>
                Ser una empresa referente en ingeniería de software aplicada a entornos de alta exigencia técnica, reconocida por desarrollar soluciones precisas y confiables.<br /><br />
                <span style={{ color: 'var(--text-muted)' }}>Impulsar operaciones más inteligentes, eficientes y seguras a través de tecnología diseñada con el más alto rigor ingenieril.</span>
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section" id="proyectos">
        <div className="section-inner">
          <div className="section-header">
            <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-title-sm">Ejecución con Precisión</motion.h3>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="section-title">Casos de Éxito</motion.h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', marginTop: '1.5rem', textAlign: 'center' }}>
              [ PRÓXIMAMENTE: Registro de proyectos implementados y casos de estudio... ]
            </p>
          </div>
        </div>
      </section>

      <footer className="footer" id="contacto">
        <img src="/nombre.png" alt="AerostAI Technik" style={{ height: '35px', opacity: 0.6 }} />
        <p style={{ marginTop: '2rem', fontSize: '1.2rem', color: '#E5E5E5' }}>Contacto Corporativo: <a href="mailto:info-support@aerostaitechnik.com" style={{ color: 'var(--accent)', marginLeft: '0.8rem', fontWeight: 600 }}>info-support@aerostaitechnik.com</a></p>
        <p style={{ marginTop: '3.5rem', opacity: 0.4, fontSize: '0.95rem' }}>&copy; {new Date().getFullYear()} AerostAI TECHNIK. Todos los derechos reservados.</p>
      </footer>
    </>
  );
}

export default App;
