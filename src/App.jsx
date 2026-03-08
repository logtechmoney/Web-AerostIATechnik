import React, { useEffect } from 'react';
import './index.css';

const ChevronRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
);

const Shield = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
);

const Plane = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.2-1.1.6L3 8l6 5-3.5 3.5L3 16l-1 1c-.3.3-.4.8-.2 1.1l3 3c.3.2.8.1 1.1-.2l1-1-1.5-2.5L11 14l5 6c.4.3.8.4 1.1.2l1.2-.7c.4-.2.7-.6.6-1.1z"/></svg>
);

const Database = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>
);

const Code = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
);

const Cpu = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>
);

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-up');
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
            AerostAI <span>TECHNIK</span>
          </div>
          <div>
            <a href="#soluciones" className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>
              Nuestras Soluciones
            </a>
          </div>
        </div>
      </nav>

      <section className="hero">
        <div className="container">
          <div className="hero-content fade-in-up">
            <h1 className="hero-title">Ingeniería de Software para Entornos <span>Críticos</span></h1>
            <p className="hero-subtitle">
              Transformamos la complejidad técnica en ventaja estratégica para operaciones aeronáuticas, energéticas y plataformas industriales avanzadas.
            </p>
            <a href="#soluciones" className="btn btn-primary">
              Descubrir Soluciones <ChevronRight />
            </a>
          </div>
        </div>
      </section>

      <section className="section bg-slate-900" id="sobre-nosotros" style={{ background: '#0a0f1d' }}>
        <div className="container">
          <div className="about-grid">
            <div className="text-content animate-on-scroll">
              <div className="section-title">Sobre <span>Nosotros</span></div>
              <p>
                Somos una empresa tecnológica especializada en el desarrollo de soluciones de ingeniería de software para industrias críticas. Nuestro equipo está conformado por Ingenieros Aeronáuticos y Desarrolladores con experiencia directa en entornos industriales. 
              </p>
              <p>
                Esta integración nos permite comprender los desafíos operativos desde la ingeniería y traducirlos en soluciones tecnológicas concretas, sin intermediaciones ni largas etapas de interpretación técnica.
              </p>
              <div className="highlight-box">
                <p style={{ margin: 0, fontWeight: 600, color: '#f8fafc' }}>
                  Con experiencia en los sectores aeronáutico, de petróleo y energético, diseñamos plataformas digitales que integran datos, procesos y sistemas para optimizar operaciones, fortalecer la toma de decisiones y garantizar eficiencia y continuidad operativa.
                </p>
              </div>
            </div>
            
            <div className="grid grid-2 animate-on-scroll delay-200">
              <div className="card">
                <div className="card-icon"><Shield /></div>
                <h3 className="card-title">Misión</h3>
                <p className="card-body">
                  Diseñar y desarrollar soluciones de ingeniería de software para los sectores aeronáutico y Oil & Gas, integrando datos críticos y optimizando procesos para fortalecer la toma de decisiones. Garantizamos seguridad operacional, integridad de la información y continuidad operativa mediante arquitecturas tecnológicas robustas, seguras y escalables.
                </p>
              </div>
              <div className="card">
                <div className="card-icon"><Plane /></div>
                <h3 className="card-title">Visión</h3>
                <p className="card-body">
                  Ser una empresa referente en ingeniería de software aplicada a entornos de alta exigencia técnica, reconocida por desarrollar soluciones precisas, confiables y alineadas con las necesidades reales de la operación. Impulsar operaciones más inteligentes, eficientes y seguras a través de tecnología diseñada con rigor ingenieril.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="especializacion">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <h2 className="section-title">Nuestra <span>Especialización</span></h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto', fontSize: '1.25rem' }}>
              Desarrollamos soluciones escalables, seguras y alineadas con estándares internacionales.
            </p>
          </div>

          <div className="grid grid-3">
            {[
              { title: "Sistemas MRO Aeronáuticos", icon: <Plane /> },
              { title: "Engine Condition Trend Monitoring", icon: <Database /> },
              { title: "Software Crítico Industrial", icon: <Code /> },
              { title: "Plataformas Inteligentes de Datos", icon: <Cpu /> },
              { title: "Plataformas en Servicio de Drones", icon: <Plane /> },
              { title: "Automatización Operativa con IA", icon: <Shield /> }
            ].map((item, idx) => (
              <div className="card animate-on-scroll" key={idx} style={{ animationDelay: `${idx * 100}ms` }}>
                <div className="card-icon">{item.icon}</div>
                <h3 className="card-title">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'linear-gradient(to bottom, transparent, #09090b, transparent)' }}>
        <div className="container">
          <div className="about-grid">
            <div className="text-content animate-on-scroll">
              <h2 className="section-title">Problemas que <span>Resolvemos</span></h2>
              <p>En industrias donde la precisión, la seguridad y el cumplimiento no son opcionales, la tecnología no puede fallar.</p>
              <p>Las organizaciones de la industria aeronáutica, aeroportuaria, aerolíneas, aviación general y sector energético enfrentan desafíos crecientes en entornos altamente regulados y de operación crítica.</p>
            </div>
            
            <div className="animate-on-scroll delay-200">
              <ul style={{ listStyle: 'none', padding: 0 }}>
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
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem', padding: '1rem', background: 'rgba(15, 23, 42, 0.4)', borderRadius: '8px', borderLeft: '2px solid #ef4444' }}>
                    <div style={{ color: '#ef4444' }}>×</div>
                    <span style={{ color: '#cbd5e1' }}>{problem}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="soluciones">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <h2 className="section-title">Nuestras <span>Soluciones</span></h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto', fontSize: '1.25rem' }}>
              Transformamos entornos tecnológicos fragmentados en ecosistemas digitales integrados, seguros y preparados para operar bajo los más altos estándares de exigencia.
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
              <div className="card animate-on-scroll" key={idx} style={{ animationDelay: `${idx * 150}ms`, borderTop: '2px solid var(--primary)' }}>
                <h3 className="card-title" style={{ color: 'var(--primary)', fontSize: '1.5rem', marginBottom: '1rem' }}>{sol.title}</h3>
                <p className="card-body" style={{ fontSize: '1.1rem' }}>{sol.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="brand" style={{ justifyContent: 'center', marginBottom: '1.5rem', fontSize: '2rem' }}>
            AerostAI <span>TECHNIK</span>
          </div>
          <p className="footer-text">
            Convertimos operaciones complejas en ecosistemas digitales integrados, seguros y preparados para crecer.
          </p>
          
          <div className="footer-bottom">
            &copy; {new Date().getFullYear()} AerostAI TECHNIK. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
