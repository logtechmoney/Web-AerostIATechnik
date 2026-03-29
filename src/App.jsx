import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Cpu, Cloud, Target, Eye, Database, Blocks, Terminal, Menu, X, ChevronLeft, ChevronRight, Plane, Fuel, TowerControl, Hexagon, Layers, Zap, Settings, Lock, Headphones, Award } from 'lucide-react';
import './index.css';

function App() {
  const [activeSection, setActiveSection] = useState('inicio');
  const [activeTab, setActiveTab] = useState(0);
  const [activeProject, setActiveProject] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isProjectHovered, setIsProjectHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [contactForm, setContactForm] = useState({ type: 'formal', name: '', email: '', company: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const timerRef = useRef(null);

  const soluciones = [
    { id: "mro", short: "MRO Aeronáutico", title: "Sistemas MRO Aeronáuticos", image: "/MRO.png?v=2", icon: <Terminal size={40} strokeWidth={1.5} />, desc: "Plataformas seguras e integrales para mantenimiento y control de calidad operativa. Gestión de flotas, trazabilidad de componentes y cumplimiento normativo en tiempo real." },
    { id: "ectm", short: "Engine Trend Monitoring", title: "Engine Condition Trend Monitoring", image: "/ECTM.png?v=2", icon: <Cpu size={40} strokeWidth={1.5} />, desc: "Análisis predictivo en tiempo real y tendencias de confiabilidad para flotas críticas. Monitoreo de parámetros térmicos y vibratorios para maximizar la vida útil del motor." },
    { id: "airport", short: "Gestión Aeroportuaria", title: "Gestión Aeroportuaria", image: "/GA.png?v=2", icon: <Blocks size={40} strokeWidth={1.5} />, desc: "Sistemas de coordinación y monitoreo ininterrumpido a nivel infraestructura. Optimización de flujos operativos y seguridad en plataforma." },
    { id: "data", short: "Data Platforms", title: "Plataformas de Datos", image: "/DB.png?v=2", icon: <Database size={40} strokeWidth={1.5} />, desc: "Centralización de información estratégica aerocomercial y toma de decisiones masiva. Business Intelligence aplicado a entornos de alta complejidad." },
    { id: "drones", short: "Drones & Energy", title: "Drones & Oil/Gas", image: "/OG.png?v=2", icon: <Cloud size={40} strokeWidth={1.5} />, desc: "Software crítico automatizado para inspección industria energética exigiendo máxima precisión. Navegación autónoma en entornos hostiles." },
    { id: "safety", short: "Seguridad & Compliance", title: "Seguridad y Cumplimiento", image: "/Seg.png?v=2", icon: <Shield size={40} strokeWidth={1.5} />, desc: "Arquitecturas modernas alineadas a los más estrictos estándares de aviación mundial. Ciberseguridad industrial y auditoría técnica automatizada." },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const subject = contactForm.type === 'formal' 
        ? `🚀 Contacto AerostAI - ${contactForm.name} (${contactForm.company})`
        : `💬 Comentario AerostAI - ${contactForm.name}`;
      
      const formData = new FormData();
      formData.append('name', contactForm.name);
      formData.append('email', contactForm.email);
      formData.append('subject', subject);
      formData.append('_subject', `🚀 Nuevo Contacto - AerostAI Technik`);
      formData.append('message', `🚀 NUEVO CONTACTO - AEROSTAI TECHNIK 🚀

📋 TIPO DE CONTACTO: ${contactForm.type === 'formal' ? 'Contacto Formal' : 'Comentario/Retroalimentación'}

👤 DATOS DEL CONTACTO:
• Nombre: ${contactForm.name}
• Email: ${contactForm.email}
• Empresa: ${contactForm.company || 'No especificada'}
• Teléfono: ${contactForm.phone || 'No especificado'}

💬 MENSAJE:
${contactForm.message}

---
Este mensaje fue enviado desde el formulario de contacto oficial de AerostAI Technik
Sitio web: https://aerostaitechnik.com
Fecha: ${new Date().toLocaleString('es-AR', { timeZone: 'America/Argentina/Buenos_Aires' })}`);
      formData.append('_replyto', contactForm.email);
      formData.append('_template', 'table');

      // Enviar a través de FormSubmit con el ID del formulario activado
      const response = await fetch('https://formsubmit.co/120085292c06d9bb848f67d232c8d1eb', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        setSubmitStatus('✅ Mensaje enviado correctamente. Nos pondremos en contacto pronto.');
        setTimeout(() => {
          setContactForm({ type: 'formal', name: '', email: '', company: '', phone: '', message: '' });
          setSubmitStatus('');
        }, 3000);
      } else {
        setSubmitStatus('❌ Error al enviar. Por favor intenta nuevamente.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('❌ Error de conexión. Por favor intenta nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
      }, 7500); // Cambia cada 7.5 segundos
    }
    return () => clearInterval(timerRef.current);
  }, [isHovered, soluciones.length]);

  // Timer para carrusel de proyectos
  useEffect(() => {
    if (!isProjectHovered) {
      timerRef.current = setInterval(() => {
        setActiveProject((prev) => (prev + 1) % 3); // 3 proyectos
      }, 8000); // Cambia cada 8 segundos
    }
    return () => clearInterval(timerRef.current);
  }, [isProjectHovered]);

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
        backgroundColor: 'transparent',
        minHeight: '100vh',
        maxHeight: '100vh',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '2rem 4rem'
      }}>
        <div className="hero-overlay" style={{ background: 'linear-gradient(135deg, rgba(3, 8, 5, 0.92) 0%, rgba(6, 15, 10, 0.88) 100%)' }}></div>
        <div className="section-inner" style={{ position: 'relative', zIndex: 1, maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
          <div className="section-header" style={{ marginBottom: '1.5rem' }}>
            <motion.h3 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-title-sm" style={{ fontSize: '0.8rem', marginBottom: '0.5rem' }}>Sectores que Transformamos</motion.h3>
            <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="section-title" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Nuestras Industrias</motion.h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem', marginBottom: '1rem' }}>
            {/* Aeronáutica y MRO */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, margin: "-50px" }} 
              transition={{ duration: 0.3 }}
              style={{ 
                background: 'rgba(255,255,255,0.04)', 
                backdropFilter: 'blur(10px)', 
                border: '1px solid rgba(255,255,255,0.12)', 
                borderRadius: '12px', 
                padding: '1.25rem',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{ 
                position: 'absolute', 
                top: 0, 
                left: 0, 
                right: 0, 
                height: '2px', 
                background: 'linear-gradient(90deg, transparent, rgba(5, 150, 105, 0.5), transparent)' 
              }}></div>
              <div style={{ width: '48px', height: '48px', background: 'rgba(5, 150, 105, 0.1)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem', border: '1px solid rgba(5, 150, 105, 0.2)' }}>
                <Plane size={24} strokeWidth={1.5} style={{ color: '#E8E4D9' }} />
              </div>
              <h3 style={{ color: '#fff', fontSize: '0.9rem', marginBottom: '0.5rem', fontWeight: '600', lineHeight: '1.3' }}>Gestión de Mantenimiento y Aeronavegabilidad</h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: '1.5', marginBottom: '0.75rem' }}>
                Elevamos estándares de seguridad en talleres aeronáuticos (MRO). Automatización de Capability Lists y trazabilidad de componentes.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                <span style={{ fontSize: '0.65rem', color: 'rgba(5, 150, 105, 0.9)', background: 'rgba(5, 150, 105, 0.1)', padding: '0.2rem 0.5rem', borderRadius: '12px', border: '1px solid rgba(5, 150, 105, 0.2)' }}>Reducción de TAT</span>
                <span style={{ fontSize: '0.65rem', color: 'rgba(5, 150, 105, 0.9)', background: 'rgba(5, 150, 105, 0.1)', padding: '0.2rem 0.5rem', borderRadius: '12px', border: '1px solid rgba(5, 150, 105, 0.2)' }}>ANAC/EASA/FAA</span>
              </div>
            </motion.div>

            {/* Oil & Gas */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, margin: "-50px" }} 
              transition={{ duration: 0.3, delay: 0.05 }}
              style={{ 
                background: 'rgba(255,255,255,0.04)', 
                backdropFilter: 'blur(10px)', 
                border: '1px solid rgba(255,255,255,0.12)', 
                borderRadius: '12px', 
                padding: '1.25rem',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{ 
                position: 'absolute', 
                top: 0, 
                left: 0, 
                right: 0, 
                height: '2px', 
                background: 'linear-gradient(90deg, transparent, rgba(5, 150, 105, 0.5), transparent)' 
              }}></div>
              <div style={{ width: '48px', height: '48px', background: 'rgba(5, 150, 105, 0.1)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem', border: '1px solid rgba(5, 150, 105, 0.2)' }}>
                <Fuel size={24} strokeWidth={1.5} style={{ color: '#E8E4D9' }} />
              </div>
              <h3 style={{ color: '#fff', fontSize: '0.9rem', marginBottom: '0.5rem', fontWeight: '600', lineHeight: '1.3' }}>Operaciones de Energía en Entornos Críticos</h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: '1.5', marginBottom: '0.75rem' }}>
                Transformamos gestión de activos energéticos. Digitalización de inspección y mantenimiento preventivo con monitoreo 24/7.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                <span style={{ fontSize: '0.65rem', color: 'rgba(5, 150, 105, 0.9)', background: 'rgba(5, 150, 105, 0.1)', padding: '0.2rem 0.5rem', borderRadius: '12px', border: '1px solid rgba(5, 150, 105, 0.2)' }}>Monitoreo 24/7</span>
                <span style={{ fontSize: '0.65rem', color: 'rgba(5, 150, 105, 0.9)', background: 'rgba(5, 150, 105, 0.1)', padding: '0.2rem 0.5rem', borderRadius: '12px', border: '1px solid rgba(5, 150, 105, 0.2)' }}>Zonas remotas</span>
              </div>
            </motion.div>

            {/* Operaciones Aeroportuarias */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, margin: "-50px" }} 
              transition={{ duration: 0.3, delay: 0.1 }}
              style={{ 
                background: 'rgba(255,255,255,0.04)', 
                backdropFilter: 'blur(10px)', 
                border: '1px solid rgba(255,255,255,0.12)', 
                borderRadius: '12px', 
                padding: '1.25rem',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{ 
                position: 'absolute', 
                top: 0, 
                left: 0, 
                right: 0, 
                height: '2px', 
                background: 'linear-gradient(90deg, transparent, rgba(5, 150, 105, 0.5), transparent)' 
              }}></div>
              <div style={{ width: '48px', height: '48px', background: 'rgba(5, 150, 105, 0.1)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem', border: '1px solid rgba(5, 150, 105, 0.2)' }}>
                <TowerControl size={24} strokeWidth={1.5} style={{ color: '#E8E4D9' }} />
              </div>
              <h3 style={{ color: '#fff', fontSize: '0.9rem', marginBottom: '0.5rem', fontWeight: '600', lineHeight: '1.3' }}>Infraestructura y Seguridad de Lado Aire</h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: '1.5', marginBottom: '0.75rem' }}>
                Optimizamos ecosistemas aeroportuarios. Integración de datos críticos para análisis de interferencias y servicios de rampa.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                <span style={{ fontSize: '0.65rem', color: 'rgba(5, 150, 105, 0.9)', background: 'rgba(5, 150, 105, 0.1)', padding: '0.2rem 0.5rem', borderRadius: '12px', border: '1px solid rgba(5, 150, 105, 0.2)' }}>Datos en tiempo real</span>
                <span style={{ fontSize: '0.65rem', color: 'rgba(5, 150, 105, 0.9)', background: 'rgba(5, 150, 105, 0.1)', padding: '0.2rem 0.5rem', borderRadius: '12px', border: '1px solid rgba(5, 150, 105, 0.2)' }}>Seguridad</span>
              </div>
            </motion.div>

            {/* Sistemas No Tripulados (Drones) */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, margin: "-50px" }} 
              transition={{ duration: 0.3, delay: 0.15 }}
              style={{ 
                background: 'rgba(255,255,255,0.04)', 
                backdropFilter: 'blur(10px)', 
                border: '1px solid rgba(255,255,255,0.12)', 
                borderRadius: '12px', 
                padding: '1.25rem',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{ 
                position: 'absolute', 
                top: 0, 
                left: 0, 
                right: 0, 
                height: '2px', 
                background: 'linear-gradient(90deg, transparent, rgba(5, 150, 105, 0.5), transparent)' 
              }}></div>
              <div style={{ width: '48px', height: '48px', background: 'rgba(5, 150, 105, 0.1)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem', border: '1px solid rgba(5, 150, 105, 0.2)' }}>
                <Hexagon size={24} strokeWidth={1.5} style={{ color: '#E8E4D9' }} />
              </div>
              <h3 style={{ color: '#fff', fontSize: '0.9rem', marginBottom: '0.5rem', fontWeight: '600', lineHeight: '1.3' }}>Inteligencia de Datos y Gestión de Flotas</h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: '1.5', marginBottom: '0.75rem' }}>
                Software especializado para procesamiento de datos de drones. Logbooks digitales y análisis predictivo para escalar operaciones.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                <span style={{ fontSize: '0.65rem', color: 'rgba(5, 150, 105, 0.9)', background: 'rgba(5, 150, 105, 0.1)', padding: '0.2rem 0.5rem', borderRadius: '12px', border: '1px solid rgba(5, 150, 105, 0.2)' }}>Análisis predictivo</span>
                <span style={{ fontSize: '0.65rem', color: 'rgba(5, 150, 105, 0.9)', background: 'rgba(5, 150, 105, 0.1)', padding: '0.2rem 0.5rem', borderRadius: '12px', border: '1px solid rgba(5, 150, 105, 0.2)' }}>Escalabilidad</span>
              </div>
            </motion.div>
          </div>

          {/* CTA Compacto */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.3, delay: 0.2 }}
            style={{ 
              textAlign: 'center',
              background: 'rgba(255,255,255,0.03)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '12px',
              padding: '1.25rem',
              maxWidth: '700px',
              margin: '0 auto'
            }}
          >
            <p style={{ color: '#fff', fontSize: '1rem', marginBottom: '0.75rem', fontWeight: '500' }}>
              ¿Tu industria requiere soluciones de software a medida?
            </p>
            <a 
              href="#contacto"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
              }}
              style={{
                display: 'inline-block',
                padding: '0.6rem 1.5rem',
                background: 'var(--accent)',
                color: '#fff',
                textDecoration: 'none',
                borderRadius: '25px',
                fontWeight: '600',
                fontSize: '0.9rem',
                transition: 'all 0.3s ease',
                border: '1px solid var(--accent)'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.color = 'var(--accent)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'var(--accent)';
                e.target.style.color = '#fff';
              }}
            >
              Consultar con un Especialista
            </a>
          </motion.div>
        </div>
      </section>

      <section className="section" id="especializacion" style={{ background: 'linear-gradient(180deg, rgba(3, 8, 5, 0.98) 0%, rgba(6, 20, 12, 0.96) 100%)', minHeight: '100vh', maxHeight: '100vh', overflow: 'hidden', padding: '2rem 0', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        {/* Líneas decorativas de fondo - más sutiles */}
        <div style={{ position: 'absolute', top: '45%', left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.08), transparent)' }}></div>
        
        <div className="section-inner" style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div className="section-header" style={{ marginBottom: '2rem', textAlign: 'center', flexShrink: 0 }}>
            <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-title-sm" style={{ color: 'var(--accent)' }}>Arquitectura de Software</motion.h3>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="section-title" style={{ fontSize: '2.2rem', margin: '0.5rem 0' }}>Soluciones Tecnológicas</motion.h2>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: '550px', margin: '0.5rem auto 0' }}>
              Ecosistema integrado de <span style={{ color: 'var(--accent)' }}>inteligencia artificial</span> aplicada a operaciones críticas
            </motion.p>
          </div>

          {/* Layout tipo "Ecosistema" */}
          <div style={{ position: 'relative', height: '450px', width: '100%', maxWidth: '1200px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            
            {/* Centro - Núcleo del ecosistema */}
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                position: 'absolute',
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(5, 150, 105, 0.2) 0%, rgba(5, 150, 105, 0.08) 50%, transparent 70%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid rgba(5, 150, 105, 0.3)',
                boxShadow: '0 0 40px rgba(5, 150, 105, 0.15)',
                zIndex: 10
              }}
            >
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.8rem', fontWeight: '700', color: '#fff' }}>AI</div>
                <div style={{ fontSize: '0.6rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>Core</div>
              </div>
            </motion.div>

            {/* Solución 1 - Arriba izquierda */}
            <motion.div 
              initial={{ opacity: 0, x: -30, y: -30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{ position: 'absolute', top: '5%', left: '5%', maxWidth: '260px' }}
            >
              {/* Línea conectora */}
              <svg style={{ position: 'absolute', top: '100%', left: '50%', width: '60px', height: '60px', pointerEvents: 'none' }}>
                <line x1="0" y1="0" x2="50" y2="40" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" strokeDasharray="3 3"/>
              </svg>
              
              <div style={{ 
                background: 'rgba(255, 255, 255, 0.03)', 
                backdropFilter: 'blur(12px)', 
                border: '1px solid rgba(255, 255, 255, 0.1)', 
                borderRadius: '16px', 
                padding: '1.5rem',
                position: 'relative'
              }}>
                <div style={{ 
                  position: 'absolute', 
                  top: '-20px', 
                  left: '50%', 
                  transform: 'translateX(-50%)',
                  width: '48px', 
                  height: '48px', 
                  background: 'linear-gradient(135deg, rgba(232, 228, 217, 0.9), rgba(232, 228, 217, 0.5))', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  border: '1px solid rgba(255,255,255,0.3)',
                  boxShadow: '0 2px 15px rgba(0, 0, 0, 0.3)'
                }}>
                  <Layers size={22} strokeWidth={1.5} style={{ color: '#1a1a1a' }} />
                </div>
                <h3 style={{ color: '#fff', fontSize: '0.95rem', marginTop: '1.3rem', marginBottom: '0.5rem', fontWeight: '600', textAlign: 'center' }}>Ecosistemas a Medida</h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: '1.5', textAlign: 'center' }}>
                  Plataformas que <span style={{ color: 'var(--accent)' }}>automatizan flujos críticos</span> e integran sistemas heredados.
                </p>
              </div>
            </motion.div>

            {/* Solución 2 - Arriba derecha */}
            <motion.div 
              initial={{ opacity: 0, x: 30, y: -30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{ position: 'absolute', top: '5%', right: '5%', maxWidth: '260px' }}
            >
              <svg style={{ position: 'absolute', top: '100%', right: '50%', width: '70px', height: '70px', pointerEvents: 'none' }}>
                <line x1="70" y1="0" x2="15" y2="45" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" strokeDasharray="3 3"/>
              </svg>
              
              <div style={{ 
                background: 'rgba(255, 255, 255, 0.03)', 
                backdropFilter: 'blur(12px)', 
                border: '1px solid rgba(255, 255, 255, 0.1)', 
                borderRadius: '16px', 
                padding: '1.5rem',
                position: 'relative'
              }}>
                <div style={{ 
                  position: 'absolute', 
                  top: '-20px', 
                  left: '50%', 
                  transform: 'translateX(-50%)',
                  width: '48px', 
                  height: '48px', 
                  background: 'linear-gradient(135deg, rgba(232, 228, 217, 0.9), rgba(232, 228, 217, 0.5))', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  border: '1px solid rgba(255,255,255,0.3)',
                  boxShadow: '0 2px 15px rgba(0, 0, 0, 0.3)'
                }}>
                  <TowerControl size={22} strokeWidth={1.5} style={{ color: '#1a1a1a' }} />
                </div>
                <h3 style={{ color: '#fff', fontSize: '0.95rem', marginTop: '1.3rem', marginBottom: '0.5rem', fontWeight: '600', textAlign: 'center' }}>Smart Airport</h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: '1.5', textAlign: 'center' }}>
                  <span style={{ color: 'var(--accent)' }}>Monitoreo en tiempo real</span> de operaciones aeroportuarias integrado.
                </p>
              </div>
            </motion.div>

            {/* Solución 3 - Abajo izquierda */}
            <motion.div 
              initial={{ opacity: 0, x: -30, y: 30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              style={{ position: 'absolute', bottom: '5%', left: '5%', maxWidth: '260px' }}
            >
              <svg style={{ position: 'absolute', bottom: '100%', left: '50%', width: '70px', height: '60px', pointerEvents: 'none' }}>
                <line x1="0" y1="60" x2="55" y2="10" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" strokeDasharray="3 3"/>
              </svg>
              
              <div style={{ 
                background: 'rgba(255, 255, 255, 0.03)', 
                backdropFilter: 'blur(12px)', 
                border: '1px solid rgba(255, 255, 255, 0.1)', 
                borderRadius: '16px', 
                padding: '1.5rem',
                position: 'relative'
              }}>
                <div style={{ 
                  position: 'absolute', 
                  top: '-20px', 
                  left: '50%', 
                  transform: 'translateX(-50%)',
                  width: '48px', 
                  height: '48px', 
                  background: 'linear-gradient(135deg, rgba(232, 228, 217, 0.9), rgba(232, 228, 217, 0.5))', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  border: '1px solid rgba(255,255,255,0.3)',
                  boxShadow: '0 2px 15px rgba(0, 0, 0, 0.3)'
                }}>
                  <Plane size={22} strokeWidth={1.5} style={{ color: '#1a1a1a' }} />
                </div>
                <h3 style={{ color: '#fff', fontSize: '0.95rem', marginTop: '1.3rem', marginBottom: '0.5rem', fontWeight: '600', textAlign: 'center' }}>Aerolíneas</h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: '1.5', textAlign: 'center' }}>
                  Digitalización de <span style={{ color: 'var(--accent)' }}>datos críticos de vuelo</span> y gestión de flotas.
                </p>
              </div>
            </motion.div>

            {/* Solución 4 - Abajo derecha */}
            <motion.div 
              initial={{ opacity: 0, x: 30, y: 30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              style={{ position: 'absolute', bottom: '5%', right: '5%', maxWidth: '260px' }}
            >
              <svg style={{ position: 'absolute', bottom: '100%', right: '50%', width: '70px', height: '60px', pointerEvents: 'none' }}>
                <line x1="70" y1="60" x2="15" y2="10" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" strokeDasharray="3 3"/>
              </svg>
              
              <div style={{ 
                background: 'rgba(255, 255, 255, 0.03)', 
                backdropFilter: 'blur(12px)', 
                border: '1px solid rgba(255, 255, 255, 0.1)', 
                borderRadius: '16px', 
                padding: '1.5rem',
                position: 'relative'
              }}>
                <div style={{ 
                  position: 'absolute', 
                  top: '-20px', 
                  left: '50%', 
                  transform: 'translateX(-50%)',
                  width: '48px', 
                  height: '48px', 
                  background: 'linear-gradient(135deg, rgba(232, 228, 217, 0.9), rgba(232, 228, 217, 0.5))', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  border: '1px solid rgba(255,255,255,0.3)',
                  boxShadow: '0 2px 15px rgba(0, 0, 0, 0.3)'
                }}>
                  <Zap size={22} strokeWidth={1.5} style={{ color: '#1a1a1a' }} />
                </div>
                <h3 style={{ color: '#fff', fontSize: '0.95rem', marginTop: '1.3rem', marginBottom: '0.5rem', fontWeight: '600', textAlign: 'center' }}>Energía & Drones</h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: '1.5', textAlign: 'center' }}>
                  <span style={{ color: 'var(--accent)' }}>Análisis predictivo</span> para Oil & Gas y operaciones autónomas.
                </p>
              </div>
            </motion.div>

          </div>

          {/* Características - Chips flotantes */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            style={{ 
              display: 'flex',
              justifyContent: 'center',
              gap: '1rem',
              flexWrap: 'wrap',
              marginTop: '1.5rem',
              flexShrink: 0
            }}
          >
            {['Encriptación de grado militar', 'Soporte 24/7', 'Cumplimiento Normativo ISO', 'Equipo Especializado'].map((item, index) => (
              <div key={index} style={{ 
                background: 'rgba(255,255,255,0.05)', 
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255,255,255,0.1)', 
                borderRadius: '25px', 
                padding: '0.5rem 1.2rem',
                fontSize: '0.75rem',
                color: 'var(--text-muted)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <div style={{ width: '6px', height: '6px', background: 'var(--accent)', borderRadius: '50%' }}></div>
                {item}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section" id="plataformas" style={{
        backgroundImage: 'url(/Soluciones.png)',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundClip: 'padding-box',
        backgroundColor: 'transparent',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <div className="hero-overlay" style={{ background: 'linear-gradient(135deg, rgba(3, 8, 5, 0.95) 0%, rgba(6, 15, 10, 0.85) 100%)' }}></div>
        <div className="section-inner" style={{ position: 'relative', zIndex: 1, maxWidth: '1300px', width: '100%' }}>

          <div className="catalog-top-bar">
            <div className="catalog-text-content">
              <motion.h3
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-150px" }}
                transition={{ duration: 0.3 }}
                className="section-title-sm"
                style={{ textAlign: 'left', fontSize: '0.8rem', letterSpacing: '0.15em', marginBottom: '0.75rem', color: 'var(--accent)' }}
              >
                Ingeniería de Software para Entornos Críticos
              </motion.h3>
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-150px" }}
                transition={{ duration: 0.3, delay: 0.05 }}
                className="section-title"
                style={{ textAlign: 'left', fontSize: '2rem', marginBottom: '1.2rem', marginTop: 0, fontWeight: 500, color: '#fff', letterSpacing: '-0.01em' }}
              >
                Plataformas de Software Crítico
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-150px" }}
                transition={{ duration: 0.3, delay: 0.1 }}
                style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.7', maxWidth: '650px', textAlign: 'left', margin: 0, opacity: 0.9 }}
              >
                Transformamos complejidad técnica en ventaja estratégica mediante ecosistemas digitales seguros y procesos centralizados de alto rendimiento.
              </motion.p>
            </div>

            <div className="catalog-controls">
              <button
                className="catalog-btn"
                onClick={() => setActiveTab((prev) => (prev === 0 ? soluciones.length - 1 : prev - 1))}
                aria-label="Anterior"
              >
                <ChevronLeft size={24} />
              </button>
              <div className="catalog-indicators">
                {soluciones.map((_, index) => (
                  <span key={index} className={`catalog-dot ${activeTab === index ? 'active' : ''}`} />
                ))}
              </div>
              <button
                className="catalog-btn"
                onClick={() => setActiveTab((prev) => (prev + 1) % soluciones.length)}
                aria-label="Siguiente"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <div
            className="solutions-slider-wrapper"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ marginTop: '1.5rem' }}
          >

            <div className="solutions-viewport">
              <div
                key={activeTab}
                className="card sol-modern-card animate-fade-in"
              >
                <div className={`card-inner-flex ${soluciones[activeTab].image ? 'has-image' : ''}`}>
                  {soluciones[activeTab].image ? (
                    <div className="card-image-container">
                      <div className="image-overlay-scanline"></div>
                      <img src={soluciones[activeTab].image} alt={soluciones[activeTab].title} className="card-image" />
                      <div className="image-glow-accent"></div>
                    </div>
                  ) : (
                    <div className="card-image-placeholder">
                      <div className="placeholder-icon">{soluciones[activeTab].icon}</div>
                      <span>Imagen en preparación</span>
                    </div>
                  )}
                  <div className="card-content">
                    <div className="card-title-row">
                      <div className="card-icon" style={{ color: 'var(--accent)' }}>{soluciones[activeTab].icon}</div>
                      <h3 style={{ fontSize: '1.8rem', color: '#FAFAFA', fontWeight: '600', letterSpacing: '-0.02em' }}>{soluciones[activeTab].title}</h3>
                    </div>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', lineHeight: '1.8', marginTop: '1.5rem' }}>
                      {soluciones[activeTab].desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
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
        backgroundColor: 'transparent',
        minHeight: '100vh',
        maxHeight: '100vh',
        overflow: 'hidden'
      }}>
        <div className="hero-overlay" style={{ background: 'linear-gradient(135deg, rgba(3, 8, 5, 0.9) 0%, rgba(6, 15, 10, 0.75) 100%)' }}></div>
        <div className="section-inner" style={{ position: 'relative', zIndex: 1, padding: '0', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
            <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-title-sm" style={{ color: 'var(--accent)' }}>Nuestra Identidad</motion.h3>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="section-title">Nosotros</motion.h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', maxWidth: '1240px', margin: '0 auto' }}>
            <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-150px" }} transition={{ duration: 0.3 }} style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '14px', padding: '2.2rem 1.8rem', textAlign: 'center', minHeight: '340px' }}>
              <div style={{ width: '72px', height: '72px', background: 'rgba(5, 150, 105, 0.1)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', border: '1px solid rgba(5, 150, 105, 0.2)' }}>
                <img src="/logo.png" alt="AerostAI" style={{ width: '42px', height: '42px', objectFit: 'contain', filter: 'brightness(0) saturate(100%) invert(58%) sepia(84%) saturate(376%) hue-rotate(92deg) brightness(95%) contrast(92%)' }} />
              </div>
              <h3 style={{ color: 'var(--accent)', fontSize: '1.1rem', marginBottom: '0.9rem', fontWeight: '600' }}>Quienes Somos</h3>
              <p style={{ fontSize: '1rem', color: 'var(--text-main)', lineHeight: '1.65' }}>
                Somos AerostAI TECHNIK, empresa argentina especializada en ingeniería de software crítico para industrias de alta exigencia. Combinamos experiencia técnica con innovación para desarrollar soluciones que marcan la diferencia en operaciones críticas del sector aeronáutico y energético.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-150px" }} transition={{ duration: 0.3, delay: 0.1 }} style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '14px', padding: '2.2rem 1.8rem', textAlign: 'center', minHeight: '340px' }}>
              <div style={{ width: '72px', height: '72px', background: 'rgba(5, 150, 105, 0.1)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', border: '1px solid rgba(5, 150, 105, 0.2)' }}>
                <Target size={42} strokeWidth={1.7} style={{ color: 'rgba(5, 150, 105, 0.8)' }} />
              </div>
              <h3 style={{ color: 'var(--accent)', fontSize: '1.1rem', marginBottom: '0.9rem', fontWeight: '600' }}>Nuestra Misión</h3>
              <p style={{ fontSize: '1rem', color: 'var(--text-main)', lineHeight: '1.65' }}>
                Diseñar y desarrollar soluciones de ingeniería de software para sectores aeronáutico y Oil & Gas, integrando datos críticos y optimizando procesos para fortalecer la toma de decisiones con seguridad operacional.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-150px" }} transition={{ duration: 0.3, delay: 0.2 }} style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '14px', padding: '2.2rem 1.8rem', textAlign: 'center', minHeight: '340px' }}>
              <div style={{ width: '72px', height: '72px', background: 'rgba(5, 150, 105, 0.1)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', border: '1px solid rgba(5, 150, 105, 0.2)' }}>
                <Eye size={42} strokeWidth={1.7} style={{ color: 'rgba(5, 150, 105, 0.8)' }} />
              </div>
              <h3 style={{ color: 'var(--accent)', fontSize: '1.1rem', marginBottom: '0.9rem', fontWeight: '600' }}>Nuestra Visión</h3>
              <p style={{ fontSize: '1rem', color: 'var(--text-main)', lineHeight: '1.65' }}>
                Ser referentes en ingeniería de software aplicada a entornos de alta exigencia, reconocidos por desarrollar soluciones precisas y confiables que impulsen operaciones más inteligentes y seguras.
              </p>
            </motion.div>
          </div>

          {/* Stats Section - Métricas de la empresa */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{ 
              marginTop: '2rem',
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '1.5rem',
              maxWidth: '1000px',
              margin: '2rem auto 0',
              padding: '0 2rem'
            }}
          >
            <div style={{ 
              textAlign: 'center', 
              padding: '1.2rem',
              background: 'rgba(5, 150, 105, 0.08)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(5, 150, 105, 0.2)',
              borderRadius: '12px'
            }}>
              <div style={{ fontSize: '1.8rem', fontWeight: '700', color: '#E8E4D9', marginBottom: '0.3rem' }}>6+</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Años de Trayectoria</div>
            </div>
            <div style={{ 
              textAlign: 'center', 
              padding: '1.2rem',
              background: 'rgba(5, 150, 105, 0.08)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(5, 150, 105, 0.2)',
              borderRadius: '12px'
            }}>
              <div style={{ fontSize: '1.8rem', fontWeight: '700', color: '#E8E4D9', marginBottom: '0.3rem' }}>30+</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Proyectos Acumulados</div>
            </div>
            <div style={{ 
              textAlign: 'center', 
              padding: '1.2rem',
              background: 'rgba(5, 150, 105, 0.08)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(5, 150, 105, 0.2)',
              borderRadius: '12px'
            }}>
              <div style={{ fontSize: '1.8rem', fontWeight: '700', color: '#E8E4D9', marginBottom: '0.3rem' }}>4</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Industrias Atendidas</div>
            </div>
            <div style={{ 
              textAlign: 'center', 
              padding: '1.2rem',
              background: 'rgba(5, 150, 105, 0.08)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(5, 150, 105, 0.2)',
              borderRadius: '12px'
            }}>
              <div style={{ fontSize: '1.8rem', fontWeight: '700', color: '#E8E4D9', marginBottom: '0.3rem' }}>24/7</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Soporte Técnico</div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section" id="proyectos" style={{
        backgroundImage: 'url(/Proyectos.png)',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundClip: 'padding-box',
        backgroundColor: 'transparent',
        minHeight: '100vh',
        maxHeight: '100vh',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}>
        <div className="hero-overlay" style={{ background: 'linear-gradient(135deg, rgba(3, 8, 5, 0.92) 0%, rgba(6, 15, 10, 0.88) 100%)' }}></div>
        <div className="section-inner" style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', width: '100%' }}>
          
          {/* Header compacto */}
          <div className="section-header" style={{ marginBottom: '0.5rem', textAlign: 'center' }}>
            <motion.h3 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-title-sm" style={{ color: 'var(--accent)', fontSize: '0.75rem' }}>Ejecución con Precisión</motion.h3>
            <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="section-title" style={{ fontSize: '1.8rem', margin: '0.3rem 0' }}>Casos de Éxito</motion.h2>
          </div>

          {/* Contenedor de cartas apiladas */}
          <div 
            style={{ 
              position: 'relative', 
              height: '580px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              perspective: '1200px',
              width: '100%',
              maxWidth: '1400px',
              margin: '0 auto'
            }}
            onMouseEnter={() => setIsProjectHovered(true)}
            onMouseLeave={() => setIsProjectHovered(false)}
          >
            {/* Carta 3 - Más atrás */}
            <motion.div
              animate={{
                x: activeProject === 2 ? 0 : activeProject === 0 ? -156 : 156,
                y: activeProject === 2 ? 0 : -39,
                scale: activeProject === 2 ? 1 : 0.8,
                zIndex: activeProject === 2 ? 30 : 10,
                rotateY: activeProject === 2 ? 0 : activeProject === 0 ? 20 : -20,
                opacity: activeProject === 2 ? 1 : 0.5
              }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              onClick={() => setActiveProject(2)}
              style={{
                position: 'absolute',
                width: '600px',
                background: 'rgba(18, 28, 22, 0.92)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '24px',
                padding: '2rem',
                cursor: 'pointer',
                boxShadow: activeProject === 2 ? '0 25px 50px rgba(0,0,0,0.4)' : '0 10px 30px rgba(0,0,0,0.2)',
                transformStyle: 'preserve-3d'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.1rem', marginBottom: '1.2rem' }}>
                <div style={{ width: '56px', height: '56px', background: 'rgba(255, 255, 255, 0.08)', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255, 255, 255, 0.15)' }}>
                  <Plane size={28} strokeWidth={1.5} style={{ color: '#94A3B8' }} />
                </div>
                <div>
                  <h3 style={{ color: '#fff', fontSize: '1.35rem', fontWeight: '600', margin: 0 }}>Digitalización MRO</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', margin: '0.15rem 0 0', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Sistema de Trazabilidad Aeronáutica</p>
                </div>
              </div>

              {/* Ficha Técnica */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.6rem', marginBottom: '1.2rem', padding: '0.85rem', background: 'rgba(255, 255, 255, 0.04)', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <div>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.6rem', margin: '0 0 0.25rem', textTransform: 'uppercase', fontWeight: '600' }}>Cliente</p>
                  <p style={{ color: '#fff', fontSize: '0.75rem', margin: 0, fontWeight: '500' }}>Taller MRO</p>
                </div>
                <div>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.6rem', margin: '0 0 0.25rem', textTransform: 'uppercase', fontWeight: '600' }}>Tecnologías</p>
                  <p style={{ color: '#fff', fontSize: '0.75rem', margin: 0, fontWeight: '500' }}>Python, React</p>
                </div>
                <div>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.6rem', margin: '0 0 0.25rem', textTransform: 'uppercase', fontWeight: '600' }}>Status</p>
                  <p style={{ color: 'var(--accent)', fontSize: '0.75rem', margin: 0, fontWeight: '600' }}>● Operativo</p>
                </div>
                <div>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.6rem', margin: '0 0 0.25rem', textTransform: 'uppercase', fontWeight: '600' }}>Impacto</p>
                  <p style={{ color: '#fff', fontSize: '0.75rem', margin: 0, fontWeight: '600' }}>-25% TAT</p>
                </div>
              </div>

              <div style={{ marginBottom: '0.85rem' }}>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.7rem', margin: '0 0 0.3rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>El Desafío</p>
                <p style={{ color: '#fff', fontSize: '0.88rem', lineHeight: '1.55', margin: 0 }}>Un taller aeronáutico dependía de procesos manuales y registros en papel para la gestión de mantenimiento, generando riesgos de cumplimiento normativo, pérdida de trazabilidad y demoras en el despacho de aeronaves.</p>
              </div>

              <div style={{ marginBottom: '0.85rem' }}>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.7rem', margin: '0 0 0.3rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Nuestra Solución</p>
                <p style={{ color: '#fff', fontSize: '0.88rem', lineHeight: '1.55', margin: 0 }}>Ecosistema digital integral para gestión MRO: control de herramientas calibradas con alertas automáticas, gestión digital de Capability Lists y trazabilidad completa de componentes.</p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.6rem', marginBottom: '0.85rem' }}>
                <div style={{ textAlign: 'center', padding: '0.6rem', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <p style={{ color: 'var(--accent)', fontSize: '1.15rem', margin: '0 0 0.15rem', fontWeight: '700' }}>25%</p>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.6rem', margin: 0, textTransform: 'uppercase' }}>Reducción TAT</p>
                </div>
                <div style={{ textAlign: 'center', padding: '0.6rem', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <p style={{ color: 'var(--accent)', fontSize: '1.15rem', margin: '0 0 0.15rem', fontWeight: '700' }}>100%</p>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.6rem', margin: 0, textTransform: 'uppercase' }}>Trazabilidad</p>
                </div>
                <div style={{ textAlign: 'center', padding: '0.6rem', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <p style={{ color: 'var(--accent)', fontSize: '1.15rem', margin: '0 0 0.15rem', fontWeight: '700' }}>0</p>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.6rem', margin: 0, textTransform: 'uppercase' }}>No Conformid.</p>
                </div>
              </div>

              <div style={{ padding: '0.85rem', background: 'rgba(255, 255, 255, 0.06)', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <p style={{ color: '#fff', fontSize: '0.85rem', margin: 0, fontWeight: '600' }}>Resultado: Reducción del 25% en tiempo de liberación y garantía total ante auditorías ANAC/EASA.</p>
              </div>
            </motion.div>

            {/* Carta 2 - En medio */}
            <motion.div
              animate={{
                x: activeProject === 1 ? 0 : activeProject === 2 ? -156 : 156,
                y: activeProject === 1 ? 0 : -39,
                scale: activeProject === 1 ? 1 : 0.8,
                zIndex: activeProject === 1 ? 30 : 20,
                rotateY: activeProject === 1 ? 0 : activeProject === 2 ? 20 : -20,
                opacity: activeProject === 1 ? 1 : 0.65
              }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              onClick={() => setActiveProject(1)}
              style={{
                position: 'absolute',
                width: '600px',
                background: 'rgba(18, 28, 22, 0.92)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '24px',
                padding: '2rem',
                cursor: 'pointer',
                boxShadow: activeProject === 1 ? '0 25px 50px rgba(0,0,0,0.4)' : '0 10px 30px rgba(0,0,0,0.2)',
                transformStyle: 'preserve-3d'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.1rem', marginBottom: '1.2rem' }}>
                <div style={{ width: '56px', height: '56px', background: 'rgba(255, 255, 255, 0.08)', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255, 255, 255, 0.15)' }}>
                  <Cpu size={28} strokeWidth={1.5} style={{ color: '#94A3B8' }} />
                </div>
                <div>
                  <h3 style={{ color: '#fff', fontSize: '1.35rem', fontWeight: '600', margin: 0 }}>ECTM Avanzado</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', margin: '0.15rem 0 0', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Engine Condition Trend Monitoring</p>
                </div>
              </div>

              {/* Ficha Técnica */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.6rem', marginBottom: '1.2rem', padding: '0.85rem', background: 'rgba(255, 255, 255, 0.04)', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <div>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.6rem', margin: '0 0 0.25rem', textTransform: 'uppercase', fontWeight: '600' }}>Cliente</p>
                  <p style={{ color: '#fff', fontSize: '0.75rem', margin: 0, fontWeight: '500' }}>Operador O&G</p>
                </div>
                <div>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.6rem', margin: '0 0 0.25rem', textTransform: 'uppercase', fontWeight: '600' }}>Tecnologías</p>
                  <p style={{ color: '#fff', fontSize: '0.75rem', margin: 0, fontWeight: '500' }}>Python, ML, AWS</p>
                </div>
                <div>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.6rem', margin: '0 0 0.25rem', textTransform: 'uppercase', fontWeight: '600' }}>Status</p>
                  <p style={{ color: 'var(--accent)', fontSize: '0.75rem', margin: 0, fontWeight: '600' }}>● Operativo</p>
                </div>
                <div>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.6rem', margin: '0 0 0.25rem', textTransform: 'uppercase', fontWeight: '600' }}>Impacto</p>
                  <p style={{ color: '#fff', fontSize: '0.75rem', margin: 0, fontWeight: '600' }}>0 Fallas</p>
                </div>
              </div>

              <div style={{ marginBottom: '0.85rem' }}>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.7rem', margin: '0 0 0.3rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>El Desafío</p>
                <p style={{ color: '#fff', fontSize: '0.88rem', lineHeight: '1.55', margin: 0 }}>Necesidad crítica de predecir fallas catastróficas en motores de alta potencia para evitar paradas no programadas en operaciones de alta intensidad.</p>
              </div>

              <div style={{ marginBottom: '0.85rem' }}>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.7rem', margin: '0 0 0.3rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Nuestra Solución</p>
                <p style={{ color: '#fff', fontSize: '0.88rem', lineHeight: '1.55', margin: 0 }}>Algoritmos de Machine Learning para análisis de tendencias EGT, N1, N2 y vibraciones. Sistema en tiempo real con alertas predictivas de desviaciones térmicas.</p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.6rem', marginBottom: '0.85rem' }}>
                <div style={{ textAlign: 'center', padding: '0.6rem', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <p style={{ color: 'var(--accent)', fontSize: '1.15rem', margin: '0 0 0.15rem', fontWeight: '700' }}>0</p>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.6rem', margin: 0, textTransform: 'uppercase' }}>Fallas</p>
                </div>
                <div style={{ textAlign: 'center', padding: '0.6rem', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <p style={{ color: 'var(--accent)', fontSize: '1.15rem', margin: '0 0 0.15rem', fontWeight: '700' }}>-35%</p>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.6rem', margin: 0, textTransform: 'uppercase' }}>Mantenimiento</p>
                </div>
                <div style={{ textAlign: 'center', padding: '0.6rem', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <p style={{ color: 'var(--accent)', fontSize: '1.15rem', margin: '0 0 0.15rem', fontWeight: '700' }}>99.7%</p>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.6rem', margin: 0, textTransform: 'uppercase' }}>Precisión ML</p>
                </div>
              </div>

              <div style={{ padding: '0.85rem', background: 'rgba(255, 255, 255, 0.06)', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <p style={{ color: '#fff', fontSize: '0.85rem', margin: 0, fontWeight: '600' }}>Resultado: Ahorro significativo en costos de mantenimiento mayor y cero incidentes por fallas imprevistas.</p>
              </div>
            </motion.div>

            {/* Carta 1 - Al frente */}
            <motion.div
              animate={{
                x: activeProject === 0 ? 0 : activeProject === 1 ? -156 : 156,
                y: activeProject === 0 ? 0 : -39,
                scale: activeProject === 0 ? 1 : 0.8,
                zIndex: activeProject === 0 ? 30 : activeProject === 1 ? 20 : 10,
                rotateY: activeProject === 0 ? 0 : activeProject === 1 ? 20 : -20,
                opacity: activeProject === 0 ? 1 : 0.5
              }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              onClick={() => setActiveProject(0)}
              style={{
                position: 'absolute',
                width: '600px',
                background: 'rgba(18, 28, 22, 0.92)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '24px',
                padding: '2rem',
                cursor: 'pointer',
                boxShadow: activeProject === 0 ? '0 25px 50px rgba(0,0,0,0.4)' : '0 10px 30px rgba(0,0,0,0.2)',
                transformStyle: 'preserve-3d'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.1rem', marginBottom: '1.2rem' }}>
                <div style={{ width: '56px', height: '56px', background: 'rgba(255, 255, 255, 0.08)', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255, 255, 255, 0.15)' }}>
                  <TowerControl size={28} strokeWidth={1.5} style={{ color: '#94A3B8' }} />
                </div>
                <div>
                  <h3 style={{ color: '#fff', fontSize: '1.35rem', fontWeight: '600', margin: 0 }}>Gestión Aeroportuaria</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', margin: '0.15rem 0 0', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Sistema de Inteligencia Operativa</p>
                </div>
              </div>

              {/* Ficha Técnica */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.6rem', marginBottom: '1.2rem', padding: '0.85rem', background: 'rgba(255, 255, 255, 0.04)', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <div>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.6rem', margin: '0 0 0.25rem', textTransform: 'uppercase', fontWeight: '600' }}>Cliente</p>
                  <p style={{ color: '#fff', fontSize: '0.75rem', margin: 0, fontWeight: '500' }}>Aeropuerto Regional</p>
                </div>
                <div>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.6rem', margin: '0 0 0.25rem', textTransform: 'uppercase', fontWeight: '600' }}>Tecnologías</p>
                  <p style={{ color: '#fff', fontSize: '0.75rem', margin: 0, fontWeight: '500' }}>React, Node.js, IoT</p>
                </div>
                <div>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.6rem', margin: '0 0 0.25rem', textTransform: 'uppercase', fontWeight: '600' }}>Status</p>
                  <p style={{ color: 'var(--accent)', fontSize: '0.75rem', margin: 0, fontWeight: '600' }}>● En Prod.</p>
                </div>
                <div>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.6rem', margin: '0 0 0.25rem', textTransform: 'uppercase', fontWeight: '600' }}>Impacto</p>
                  <p style={{ color: '#fff', fontSize: '0.75rem', margin: 0, fontWeight: '600' }}>+15% Efic.</p>
                </div>
              </div>

              <div style={{ marginBottom: '0.85rem' }}>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.7rem', margin: '0 0 0.3rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>El Desafío</p>
                <p style={{ color: '#fff', fontSize: '0.88rem', lineHeight: '1.55', margin: 0 }}>Falta de visibilidad centralizada de operaciones de rampa y servicios de handling, causando cuellos de botella logísticos, retrasos en turnos y subutilización de equipos de tierra.</p>
              </div>

              <div style={{ marginBottom: '0.85rem' }}>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.7rem', margin: '0 0 0.3rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Nuestra Solución</p>
                <p style={{ color: '#fff', fontSize: '0.88rem', lineHeight: '1.55', margin: 0 }}>Plataforma de inteligencia operativa integrando datos de rampa, control de vuelos y recursos en visualización unificada del CCO con dashboards en tiempo real.</p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.6rem', marginBottom: '0.85rem' }}>
                <div style={{ textAlign: 'center', padding: '0.6rem', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <p style={{ color: 'var(--accent)', fontSize: '1.15rem', margin: '0 0 0.15rem', fontWeight: '700' }}>15%</p>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.6rem', margin: 0, textTransform: 'uppercase' }}>Eficiencia</p>
                </div>
                <div style={{ textAlign: 'center', padding: '0.6rem', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <p style={{ color: 'var(--accent)', fontSize: '1.15rem', margin: '0 0 0.15rem', fontWeight: '700' }}>-20%</p>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.6rem', margin: 0, textTransform: 'uppercase' }}>Tiempos Espera</p>
                </div>
                <div style={{ textAlign: 'center', padding: '0.6rem', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <p style={{ color: 'var(--accent)', fontSize: '1.15rem', margin: '0 0 0.15rem', fontWeight: '700' }}>Real</p>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.6rem', margin: 0, textTransform: 'uppercase' }}>Integración</p>
                </div>
              </div>

              <div style={{ padding: '0.85rem', background: 'rgba(255, 255, 255, 0.06)', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <p style={{ color: '#fff', fontSize: '0.85rem', margin: 0, fontWeight: '600' }}>Resultado: Mejora del 15% en eficiencia de servicios de rampa y optimización del flujo de pasajeros.</p>
              </div>
            </motion.div>
          </div>

          {/* Controles */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1rem' }}>
            <button
              onClick={() => setActiveProject((prev) => (prev === 0 ? 2 : prev - 1))}
              style={{
                padding: '0.5rem 1.5rem',
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '20px',
                color: '#fff',
                cursor: 'pointer',
                fontSize: '0.8rem',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'var(--accent)';
                e.target.style.borderColor = 'var(--accent)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(255,255,255,0.1)';
                e.target.style.borderColor = 'rgba(255,255,255,0.2)';
              }}
            >
              ← Anterior
            </button>
            <button
              onClick={() => setActiveProject((prev) => (prev + 1) % 3)}
              style={{
                padding: '0.5rem 1.5rem',
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '20px',
                color: '#fff',
                cursor: 'pointer',
                fontSize: '0.8rem',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'var(--accent)';
                e.target.style.borderColor = 'var(--accent)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(255,255,255,0.1)';
                e.target.style.borderColor = 'rgba(255,255,255,0.2)';
              }}
            >
              Siguiente →
            </button>
          </div>

          {/* Indicadores */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '0.75rem' }}>
            {[0, 1, 2].map((index) => (
              <button
                key={index}
                onClick={() => setActiveProject(index)}
                style={{
                  width: activeProject === index ? '24px' : '8px',
                  height: '8px',
                  borderRadius: activeProject === index ? '4px' : '50%',
                  background: activeProject === index ? 'var(--accent)' : 'rgba(255,255,255,0.3)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="contacto" style={{
        backgroundImage: 'url(/Contacto.png)',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundClip: 'padding-box',
        backgroundColor: 'transparent',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <div className="hero-overlay" style={{ background: 'linear-gradient(135deg, rgba(3, 8, 5, 0.9) 0%, rgba(6, 15, 10, 0.75) 100%)' }}></div>
        <div className="section-inner" style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: '1400px', padding: '0 2rem' }}>
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-title-sm" style={{ color: 'var(--accent)' }}>Conecta con Nosotros</motion.h3>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="section-title">Contacto</motion.h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginTop: '1rem', textAlign: 'center', maxWidth: '500px', margin: '1rem auto 0' }}>
              Estamos listos para transformar tus desafíos técnicos en soluciones estratégicas.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '2.5rem', alignItems: 'start', maxWidth: '1200px', margin: '0 auto' }}>
            
            {/* Columna izquierda: Formulario */}
            <div>
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', justifyContent: 'flex-start' }}>
                <button
                  type="button"
                  onClick={() => setContactForm(prev => ({ ...prev, type: 'formal' }))}
                  style={{
                    padding: '0.5rem 1.5rem',
                    background: contactForm.type === 'formal' ? 'var(--accent)' : 'transparent',
                    border: contactForm.type === 'formal' ? '1px solid var(--accent)' : '1px solid rgba(255,255,255,0.3)',
                    color: '#fff',
                    borderRadius: '20px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    fontSize: '0.9rem'
                  }}
                >
                  Contacto Formal
                </button>
                <button
                  type="button"
                  onClick={() => setContactForm(prev => ({ ...prev, type: 'feedback' }))}
                  style={{
                    padding: '0.5rem 1.5rem',
                    background: contactForm.type === 'feedback' ? 'var(--accent)' : 'transparent',
                    border: contactForm.type === 'feedback' ? '1px solid var(--accent)' : '1px solid rgba(255,255,255,0.3)',
                    color: '#fff',
                    borderRadius: '20px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    fontSize: '0.9rem'
                  }}
                >
                  Comentarios
                </button>
              </div>

              <motion.form
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                onSubmit={handleSubmit}
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  borderRadius: '12px',
                  padding: '2rem',
                  width: '100%',
                  height: 'fit-content',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.2)'
                }}
              >
                <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: contactForm.type === 'formal' ? '1fr 1fr' : '1fr' }}>
                  <div style={{ gridColumn: contactForm.type === 'formal' ? 'span 1' : 'span 2' }}>
                    <label style={{ display: 'block', marginBottom: '0.3rem', color: '#fff', fontSize: '0.85rem', fontWeight: '500' }}>
                      Nombre *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={contactForm.name}
                      onChange={handleInputChange}
                      required
                      style={{
                        width: '100%',
                        padding: '0.5rem',
                        background: 'rgba(255,255,255,0.1)',
                        border: '1px solid rgba(255,255,255,0.2)',
                        borderRadius: '6px',
                        color: '#fff',
                        fontSize: '0.9rem',
                        transition: 'all 0.3s ease'
                      }}
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div style={{ gridColumn: contactForm.type === 'formal' ? 'span 1' : 'span 2' }}>
                    <label style={{ display: 'block', marginBottom: '0.3rem', color: '#fff', fontSize: '0.85rem', fontWeight: '500' }}>
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={contactForm.email}
                      onChange={handleInputChange}
                      required
                      style={{
                        width: '100%',
                        padding: '0.5rem',
                        background: 'rgba(255,255,255,0.1)',
                        border: '1px solid rgba(255,255,255,0.2)',
                        borderRadius: '6px',
                        color: '#fff',
                        fontSize: '0.9rem',
                        transition: 'all 0.3s ease'
                      }}
                      placeholder="tu@email.com"
                    />
                  </div>

                  {contactForm.type === 'formal' && (
                    <>
                      <div>
                        <label style={{ display: 'block', marginBottom: '0.3rem', color: '#fff', fontSize: '0.85rem', fontWeight: '500' }}>
                          Empresa
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={contactForm.company}
                          onChange={handleInputChange}
                          style={{
                            width: '100%',
                            padding: '0.5rem',
                            background: 'rgba(255,255,255,0.1)',
                            border: '1px solid rgba(255,255,255,0.2)',
                            borderRadius: '6px',
                            color: '#fff',
                            fontSize: '0.9rem',
                            transition: 'all 0.3s ease'
                          }}
                          placeholder="Empresa"
                        />
                      </div>

                      <div>
                        <label style={{ display: 'block', marginBottom: '0.3rem', color: '#fff', fontSize: '0.85rem', fontWeight: '500' }}>
                          Teléfono
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={contactForm.phone}
                          onChange={handleInputChange}
                          style={{
                            width: '100%',
                            padding: '0.5rem',
                            background: 'rgba(255,255,255,0.1)',
                            border: '1px solid rgba(255,255,255,0.2)',
                            borderRadius: '6px',
                            color: '#fff',
                            fontSize: '0.9rem',
                            transition: 'all 0.3s ease'
                          }}
                          placeholder="Teléfono"
                        />
                      </div>
                    </>
                  )}

                  <div style={{ gridColumn: 'span 2' }}>
                    <label style={{ display: 'block', marginBottom: '0.3rem', color: '#fff', fontSize: '0.85rem', fontWeight: '500' }}>
                      {contactForm.type === 'formal' ? 'Mensaje *' : 'Comentario *'}
                    </label>
                    <textarea
                      name="message"
                      value={contactForm.message}
                      onChange={handleInputChange}
                      required
                      rows={3}
                      style={{
                        width: '100%',
                        padding: '0.5rem',
                        background: 'rgba(255,255,255,0.1)',
                        border: '1px solid rgba(255,255,255,0.2)',
                        borderRadius: '6px',
                        color: '#fff',
                        fontSize: '0.9rem',
                        transition: 'all 0.3s ease',
                        resize: 'vertical',
                        fontFamily: 'inherit'
                      }}
                      placeholder={contactForm.type === 'formal' 
                        ? 'Describe tu proyecto...' 
                        : 'Tu comentario...'}
                    />
                  </div>
                </div>

                {submitStatus && (
                  <div style={{
                    marginTop: '0.5rem',
                    padding: '0.5rem',
                    background: submitStatus.includes('Error') ? 'rgba(239, 68, 68, 0.2)' : 'rgba(34, 197, 94, 0.2)',
                    border: `1px solid ${submitStatus.includes('Error') ? '#ef4444' : '#22c55e'}`,
                    borderRadius: '6px',
                    color: '#fff',
                    textAlign: 'center',
                    fontSize: '0.8rem'
                  }}>
                    {submitStatus}
                  </div>
                )}

                <div style={{ textAlign: 'left', marginTop: '1.5rem' }}>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                      padding: '0.5rem 2rem',
                      background: 'var(--accent)',
                      border: 'none',
                      borderRadius: '20px',
                      color: '#fff',
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      cursor: isSubmitting ? 'not-allowed' : 'pointer',
                      transition: 'all 0.3s ease',
                      opacity: isSubmitting ? 0.7 : 1
                    }}
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar'}
                  </button>
                </div>
              </motion.form>
            </div>

            {/* Columna derecha: Información de contacto */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
              <div style={{
                background: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '12px',
                padding: '2rem',
                textAlign: 'center',
                height: 'fit-content'
              }}>
                <img src="/nombre.png" alt="AerostAI Technik" style={{ height: '30px', opacity: 0.8, marginBottom: '1.5rem' }} />
                
                <h3 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '1.2rem', fontWeight: '600' }}>
                  Información de Contacto
                </h3>
                
                <div style={{ marginBottom: '1.5rem' }}>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
                    Correos electrónicos:
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    <a href="mailto:info-support@aerostaitechnik.com" style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '0.9rem' }}>
                      info-support@aerostaitechnik.com
                    </a>
                    <a href="mailto:info@aerostaitechnik.com.ar" style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '0.9rem' }}>
                      info@aerostaitechnik.com.ar
                    </a>
                  </div>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
                    Tiempo de respuesta:
                  </p>
                  <p style={{ color: '#fff', fontSize: '0.9rem' }}>
                    24-48 horas hábiles
                  </p>
                </div>

                <div style={{ 
                  padding: '1rem 0', 
                  borderTop: '1px solid rgba(255,255,255,0.1)',
                  marginTop: 'auto'
                }}>
                  <p style={{ opacity: 0.4, fontSize: '0.7rem', marginBottom: '0.3rem' }}>
                    &copy; 2025 AerostAI TECHNIK
                  </p>
                  <p style={{ opacity: 0.4, fontSize: '0.7rem' }}>
                    Todos los derechos reservados
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
