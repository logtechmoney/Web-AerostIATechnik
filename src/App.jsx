import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Cpu, Cloud, Target, Database, Blocks, Terminal, Menu, X } from 'lucide-react';
import './index.css';

function App() {
  const [activeSection, setActiveSection] = useState('inicio');
  const [activeTab, setActiveTab] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const timerRef = useRef(null);

  const soluciones = [
    { id: "mro", short: "MRO Aeronáutico", title: "Sistemas MRO Aeronáuticos", icon: <Terminal size={40} strokeWidth={1.5} />, desc: "Plataformas seguras e integrales para mantenimiento y control de calidad operativa. Gestión de flotas, trazabilidad de componentes y cumplimiento normativo en tiempo real." },
    { id: "ecm", short: "Engine Monitoring", title: "Engine Condition Monitoring", icon: <Cpu size={40} strokeWidth={1.5} />, desc: "Análisis predictivo en tiempo real y tendencias de confiabilidad para flotas críticas. Monitoreo de parámetros térmicos y vibratorios para maximizar la vida útil del motor." },
    { id: "airport", short: "Gestión Aeroportuaria", title: "Gestión Aeroportuaria", icon: <Blocks size={40} strokeWidth={1.5} />, desc: "Sistemas de coordinación y monitoreo ininterrumpido a nivel infraestructura. Optimización de flujos operativos y seguridad en plataforma." },
    { id: "data", short: "Data Platforms", title: "Plataformas de Datos", icon: <Database size={40} strokeWidth={1.5} />, desc: "Centralización de información estratégica aerocomercial y toma de decisiones masiva. Business Intelligence aplicado a entornos de alta complejidad." },
    { id: "drones", short: "Drones & Energy", title: "Drones & Oil/Gas", icon: <Cloud size={40} strokeWidth={1.5} />, desc: "Software crítico automatizado para inspección industria energética exigiendo máxima precisión. Navegación autónoma en entornos hostiles." },
    { id: "safety", short: "Seguridad & Compliance", title: "Seguridad y Cumplimiento", icon: <Shield size={40} strokeWidth={1.5} />, desc: "Arquitecturas modernas alineadas a los más estrictos estándares de aviación mundial. Ciberseguridad industrial y auditoría técnica automatizada." },
  ];

  // EVITAR SCROLL CUANDO EL MENU ESTA ABIERTO
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  // CAROUSEL AUTOMATICO (FOQUITO QUE PASA SOLO)
  useEffect(() => {
    if (!isHovered) {
      timerRef.current = setInterval(() => {
        setActiveTab((prev) => (prev + 1) % soluciones.length);
      }, 5000); // Cambia cada 5 segundos
    }
    return () => clearInterval(timerRef.current);
  }, [isHovered, soluciones.length]);

  useEffect(() => {
    // FORCE RESET SCROLL TO TOP ON REFRESH
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, {
      // Ajuste de margen para detectar mejor la sección activa al centro de la pantalla
      rootMargin: '-20% 0% -60% 0%',
      threshold: 0
    });

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
        <a href="#inicio" className="nav-brand" onClick={() => setIsMobileMenuOpen(false)}>
          <img src="/logo.png" alt="AerostAI Technik Logo" className="logo" />
          <img src="/nombre.png" alt="AerostAI Technik" className="nombre" />
        </a>

        <button
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menú"
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        <ul className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
          <li><a href="#inicio" onClick={() => setIsMobileMenuOpen(false)} className={activeSection === 'inicio' ? 'active' : ''}>Inicio</a></li>
          <li><a href="#industrias" onClick={() => setIsMobileMenuOpen(false)} className={activeSection === 'industrias' ? 'active' : ''}>Industrias</a></li>
          <li><a href="#especializacion" onClick={() => setIsMobileMenuOpen(false)} className={activeSection === 'especializacion' ? 'active' : ''}>Soluciones</a></li>
          <li><a href="#plataformas" onClick={() => setIsMobileMenuOpen(false)} className={activeSection === 'plataformas' ? 'active' : ''}>Plataformas</a></li>
          <li><a href="#mision-vision" onClick={() => setIsMobileMenuOpen(false)} className={activeSection === 'mision-vision' ? 'active' : ''}>Nosotros</a></li>
          <li><a href="#proyectos" onClick={() => setIsMobileMenuOpen(false)} className={activeSection === 'proyectos' ? 'active' : ''}>Proyectos</a></li>
          <li><a href="#contacto" onClick={() => setIsMobileMenuOpen(false)} className={activeSection === 'contacto' ? 'active' : ''}>Contacto</a></li>
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

      <section className="section" id="industrias" style={{
        backgroundImage: 'url(/Industrias.png)',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundClip: 'padding-box',
        backgroundColor: 'transparent'
      }}>
        <div className="hero-overlay" style={{ background: 'linear-gradient(135deg, rgba(3, 8, 5, 0.9) 0%, rgba(6, 15, 10, 0.75) 100%)' }}></div>
        <div className="section-inner" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-header">
            <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-title-sm">Sectores que Transformamos</motion.h3>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="section-title">Nuestras Industrias</motion.h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', marginTop: '1.5rem', textAlign: 'center' }}>
              [ PRÓXIMAMENTE: Contenido sobre industrias Aeronáutica, Oil & Gas y Energía... ]
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="especializacion" style={{
        backgroundImage: 'url(/Soluciones.png)',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundClip: 'padding-box',
        backgroundColor: 'transparent'
      }}>
        <div className="hero-overlay" style={{ background: 'linear-gradient(135deg, rgba(3, 8, 5, 0.9) 0%, rgba(6, 15, 10, 0.75) 100%)' }}></div>
        <div className="section-inner" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-header">
            <motion.h3
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-150px" }}
              transition={{ duration: 0.3 }}
              className="section-title-sm"
              style={{ fontSize: '0.8rem', letterSpacing: '0.2em', marginBottom: '0.5rem' }}
            >
              Ingeniería de Software para Entornos Críticos
            </motion.h3>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-150px" }}
              transition={{ duration: 0.3, delay: 0.05 }}
              className="section-title"
              style={{ fontSize: '2rem', marginBottom: '1rem' }}
            >
              Soluciones Escalables Inteligentes
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-150px" }}
              transition={{ duration: 0.3, delay: 0.1 }}
              style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.6', maxWidth: '650px', margin: '0 auto', textAlign: 'center' }}
            >
              Transformamos complejidad técnica en ventaja estratégica mediante ecosistemas digitales seguros y procesos centralizados de alto rendimiento.
            </motion.p>
          </div>

          <div
            className="solutions-slider-wrapper"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ marginTop: '2.5rem' }}
          >
            {/* Nav ultra compacta y profesional */}
            <div className="solutions-minimal-nav">
              {soluciones.map((sol, index) => (
                <button
                  key={index}
                  className={`sol-dot-item ${activeTab === index ? 'active' : ''}`}
                  onClick={() => setActiveTab(index)}
                >
                  <span className="dot"></span>
                  <span className="label">{sol.short}</span>
                </button>
              ))}
            </div>

            <div className="solutions-viewport">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, filter: 'blur(8px)' }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="card sol-modern-card"
                >
                  <div className="card-inner-flex">
                    <div className="card-icon" style={{ color: 'rgba(16, 185, 129, 0.6)' }}>{soluciones[activeTab].icon}</div>
                    <div className="card-content">
                      <h3 style={{ fontSize: '1.35rem', marginBottom: '0.75rem', color: '#FAFAFA', fontWeight: '500' }}>{soluciones[activeTab].title}</h3>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.5' }}>
                        {soluciones[activeTab].desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="plataformas">
        <div className="section-inner">
          <div className="section-header">
            <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-150px" }} transition={{ duration: 0.3 }} className="section-title-sm">Tecnología de Vanguardia</motion.h3>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-150px" }} transition={{ delay: 0.05, duration: 0.3 }} className="section-title">Plataformas y Productos</motion.h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', marginTop: '1.5rem', textAlign: 'center' }}>
              [ PRÓXIMAMENTE: Catálogo interactivo de plataformas de monitoreo y software... ]
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="mision-vision" style={{
        backgroundImage: 'url(/Nosotros.png)',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundClip: 'padding-box',
        backgroundColor: 'transparent'
      }}>
        <div className="hero-overlay" style={{ background: 'linear-gradient(135deg, rgba(3, 8, 5, 0.9) 0%, rgba(6, 15, 10, 0.75) 100%)' }}></div>
        <div className="section-inner" style={{ position: 'relative', zIndex: 1 }}>
          <div className="grid-2">
            <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-150px" }} transition={{ duration: 0.3 }} className="mv-box">
              <h3 className="section-title-sm" style={{ color: 'var(--accent)', fontSize: '1.1rem' }}>Nuestra Misión</h3>
              <p style={{ fontSize: '1.25rem', color: 'var(--text-main)', marginTop: '2.5rem', lineHeight: '1.8' }}>
                Diseñar y desarrollar soluciones de ingeniería de software para los sectores aeronáutico y Oil & Gas, integrando datos críticos y optimizando procesos para fortalecer la toma de decisiones.<br /><br />
                <span style={{ color: 'var(--text-muted)' }}>Garantizamos seguridad operacional e integridad mediante arquitecturas tecnológicas robustas, seguras y escalables.</span>
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-150px" }} transition={{ duration: 0.3, delay: 0.1 }} className="mv-box">
              <h3 className="section-title-sm" style={{ color: 'var(--accent)', fontSize: '1.1rem' }}>Nuestra Visión</h3>
              <p style={{ fontSize: '1.25rem', color: 'var(--text-main)', marginTop: '2.5rem', lineHeight: '1.8' }}>
                Ser una empresa referente en ingeniería de software aplicada a entornos de alta exigencia técnica, reconocida por desarrollar soluciones precisas y confiables.<br /><br />
                <span style={{ color: 'var(--text-muted)' }}>Impulsar operaciones más inteligentes, eficientes y seguras a través de tecnología diseñada con el más alto rigor ingenieril.</span>
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section" id="proyectos" style={{
        backgroundImage: 'url(/Proyectos.png)',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundClip: 'padding-box',
        backgroundColor: 'transparent'
      }}>
        <div className="hero-overlay" style={{ background: 'linear-gradient(135deg, rgba(3, 8, 5, 0.9) 0%, rgba(6, 15, 10, 0.75) 100%)' }}></div>
        <div className="section-inner" style={{ position: 'relative', zIndex: 1 }}>
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
