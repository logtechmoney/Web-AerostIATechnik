import React, { useEffect } from 'react';
import { Target, Eye, XCircle } from 'lucide-react';
import './index.css';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className="brand">
            <img src="/logo.png" alt="AerostAI Technik Logo" className="logo" />
            <img src="/nombre.png" alt="AerostAI Technik" className="nombre" />
          </div>
          <div>
            <a href="#soluciones" className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>
              Descubrir Nuestras Soluciones
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section uses taller01.png as background */}
      <section className="hero">
        <div className="container">
          <div className="hero-content fade-in">
            <img src="/logo.png" alt="AerostAI Technik Logo" style={{ height: '180px', width: 'auto', marginBottom: '1rem', filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.3))' }} />
            <img src="/nombre.png" alt="AerostAI Technik" style={{ maxWidth: '100%', height: 'auto', filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.5))' }} />
          </div>
        </div>
      </section>

      {/* Sobre Nosotros - light grey with gradient/background */}
      <section className="section" id="sobre-nosotros" style={{ background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(8px)' }}>
        <div className="container animate-on-scroll">
          <div className="section-header" style={{ marginBottom: '3rem' }}>
            <h2 className="section-title">Sobre Nosotros</h2>
          </div>

          <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center', fontSize: '1.125rem' }}>
            <p style={{ marginBottom: '1.5rem' }}>
              Somos una empresa tecnológica especializada en el desarrollo de soluciones de ingeniería de software para industrias críticas. Nuestro equipo está conformado por Ingenieros Aeronáuticos y Desarrolladores con experiencia directa en entornos industriales. Esta integración nos permite comprender los desafíos operativos desde la ingeniería y traducirlos en soluciones tecnológicas concretas, sin intermediaciones ni largas etapas de interpretación técnica.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              Con experiencia en los sectores aeronáutico, de petroleo y energético, diseñamos plataformas digitales que integran datos, procesos y sistemas para optimizar operaciones, fortalecer la toma de decisiones y garantizar eficiencia y continuidad operativa.
            </p>
            <p style={{ marginBottom: '3rem', fontWeight: 600 }}>
              Desarrollamos soluciones escalables, seguras y alineadas con estándares internacionales, transformando la complejidad técnica en ventaja estratégica.
            </p>
          </div>

          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <h3 style={{ fontSize: '1.125rem', marginBottom: '1.5rem', fontWeight: '400' }}>Nos especializamos en:</h3>
            <div className="pills-container">
              {[
                { title: "Sistemas MRO aeronáuticos", bg: "#cbd5e1", color: "#1e293b" },
                { title: "Engine Condition Trend Monitoring", bg: "#94a3b8", color: "#1e293b" },
                { title: "Software crítico industrial", bg: "#64748b", color: "#f8fafc" },
                { title: "Plataformas inteligentes de datos", bg: "#475569", color: "#f8fafc" },
                { title: "Plataformas inteligentes en servicio de Drones", bg: "#334155", color: "#f8fafc" },
                { title: "Automatización operativa con IA", bg: "#1e293b", color: "#f8fafc" }
              ].map((item, idx) => (
                <div className="pill animate-on-scroll" key={idx} style={{ animationDelay: `${idx * 100}ms`, backgroundColor: item.bg, color: item.color }}>
                  {item.title}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Misión y Visión Split */}
      <section className="split-section" id="mision-vision">
        <div className="split-left animate-on-scroll">
          <h2 className="section-title" style={{ textAlign: 'center' }}>Misión</h2>
          <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem', textAlign: 'justify' }}>
            Diseñar y desarrollar soluciones de ingeniería de software para los sectores aeronáutico y Oil & Gas, integrando datos críticos y optimizando procesos para fortalecer la toma de decisiones.
          </p>
          <p style={{ fontSize: '1.125rem', textAlign: 'justify' }}>
            Garantizamos seguridad operacional, integridad de la información y continuidad operativa mediante arquitecturas tecnológicas robustas, seguras y escalables.
          </p>
          <div className="split-icon">
            <Target size={64} color="#334155" strokeWidth={1} />
          </div>
        </div>

        <div className="split-right animate-on-scroll delay-200">
          <h2 className="section-title light" style={{ textAlign: 'center' }}>Visión</h2>
          <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem', textAlign: 'justify' }}>
            Ser una empresa referente en ingeniería de software aplicada a entornos de alta exigencia técnica, reconocida por desarrollar soluciones precisas, confiables y alineadas con las necesidades reales de la operación.
          </p>
          <p style={{ fontSize: '1.125rem', textAlign: 'justify' }}>
            Impulsar operaciones más inteligentes, eficientes y seguras a través de tecnología diseñada con rigor ingenieril.
          </p>
          <div className="split-icon">
            <Eye size={64} color="#f8fafc" strokeWidth={1} />
          </div>
        </div>
      </section>

      {/* Problemas que Resolvemos */}
      <section className="section" style={{ background: 'rgba(255,255,255,0.9)' }}>
        <div className="container animate-on-scroll">
          <div className="section-header">
            <h2 className="section-title">Problemas que Resolvemos</h2>
            <p style={{ fontSize: '1.125rem', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
              En industrias donde la precisión, la seguridad y el cumplimiento no son opcionales, la tecnología no puede fallar. Las organizaciones de la industria aeronáutica, aeroportuaria, aerolíneas, aviación general y sector energético enfrentan desafíos crecientes en entornos altamente regulados y de operación crítica.
            </p>
          </div>

          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h3 style={{ textAlign: 'center', marginBottom: '2rem', fontWeight: 600 }}>Por lo que identificamos y resolvemos problemáticas como:</h3>
            <ul className="problems-list">
              {[
                "Falta de integración entre sistemas críticos",
                "Dependencia de procesos manuales",
                "Riesgos regulatorios y de cumplimiento",
                "Baja visibilidad en tiempo real",
                "Limitaciones de sistemas heredados",
                "Limitaciones en Seguridad operacional",
                "Limitaciones en ciberseguridad",
                "Falta de análisis predictivo"
              ].map((problem, idx) => (
                <li key={idx} className="animate-on-scroll" style={{ animationDelay: `${idx * 100}ms` }}>
                  <XCircle color="#ef4444" size={24} />
                  <span>{problem}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Nuestras Soluciones */}
      <section className="section" id="soluciones" style={{ paddingBottom: '8rem' }}>
        <div className="container animate-on-scroll">
          <div className="section-header">
            <h2 className="section-title">Nuestras Soluciones</h2>
            <p style={{ fontSize: '1.125rem', maxWidth: '800px', margin: '0 auto' }}>
              Desarrollamos soluciones digitales diseñadas para entornos donde la seguridad, la continuidad operativa y el cumplimiento normativo son factores estratégicos.
            </p>
          </div>

          <div className="grid grid-2">
            {[
              {
                title: "Desarrollo de Software a Medida",
                desc: "Diseñamos plataformas escalables e integradas con los sistemas existentes, automatizando procesos críticos y centralizando la información operativa."
              },
              {
                title: "Sistemas de Gestión Aeroportuaria",
                desc: "Soluciones para la planificación, coordinación y monitoreo en tiempo real de operaciones aeroportuarias."
              },
              {
                title: "Plataformas para Aerolíneas",
                desc: "Sistemas orientados a planificación, mantenimiento, logística y gestión de datos críticos de operación."
              },
              {
                title: "Soluciones para Aviación General",
                desc: "Digitalización y profesionalización de operaciones, mantenimiento y gestión administrativa."
              },
              {
                title: "Software para Industria Petrolera, Energética y Drones",
                desc: "Sistemas para gestión de activos, mantenimiento, logística y monitoreo en entornos de alta exigencia."
              }
            ].map((sol, idx) => (
              <div className="card animate-on-scroll" key={idx} style={{ animationDelay: `${idx * 150}ms` }}>
                <h3 className="card-title">{sol.title}</h3>
                <p className="card-body">{sol.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer using taller02 as background with dark overlay */}
      <footer className="footer" style={{
        backgroundImage: 'url("/taller02.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative'
      }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(15, 23, 42, 0.92)' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '2rem' }}>
            <img src="/logo.png" alt="AerostAI Logo" style={{ height: '80px', marginBottom: '1rem', filter: 'none' }} />
            <img src="/nombre.png" alt="AerostAI Technik" style={{ height: '30px', filter: 'brightness(0) invert(1)' }} />
          </div>

          <p className="footer-text" style={{ fontSize: '1.125rem' }}>
            Convertimos operaciones complejas en ecosistemas digitales integrados, seguros y preparados para crecer.
          </p>

          <div className="footer-contact">
            Contacto: <a href="mailto:info-support@aerostaitechnik.com" style={{ color: '#38bdf8', textDecoration: 'underline' }}>info-support@aerostaitechnik.com</a>
          </div>

          <div className="footer-bottom">
            &copy; {new Date().getFullYear()} AerostAI TECHNIK. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
