import '../styles/landing-bootstrap.css';
import { ArrowRight, Zap, TrendingUp, BarChart3, Clock, Printer, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface LandingProps {
  // ✨ Corrección: Cambiamos 'any' por 'unknown' para tipado seguro
  user: unknown;
}

export default function Landing({ user }: LandingProps) {
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  const navigate = useNavigate();

  const features = [
    {
      icon: <Zap size={24} />,
      title: 'Predicción en Tiempo Real',
      desc: 'IA que predice tiempos de producción con 92% de precisión',
      bg: '#e0f2fe',
      fg: '#0284c7',
    },
    {
      icon: <TrendingUp size={24} />,
      title: 'Optimización Automática',
      desc: 'Mejora continua con Machine Learning a partir de tus datos',
      bg: '#d1fae5',
      fg: '#059669',
    },
    {
      icon: <BarChart3 size={24} />,
      title: 'Análisis Profundo',
      desc: 'Reportes y dashboards con métricas clave del negocio',
      bg: '#fef3c7',
      fg: '#d97706',
    },
    {
      icon: <Clock size={24} />,
      title: 'Gestión de Tiempos',
      desc: 'Controla cada etapa del proceso de producción',
      bg: '#ede9fe',
      fg: '#7c3aed',
    },
  ];

  const benefits = [
    { number: '35%', label: 'Reducción de retrasos', icon: '📉' },
    { number: '50h/mes', label: 'Tiempo ahorrado', icon: '⏱️' },
    { number: '92%', label: 'Precisión del ML', icon: '🎯' },
    { number: '10x', label: 'ROI en 6 meses', icon: '💰' },
  ];

  const testimonials = [
    {
      name: 'Carlos Mendez',
      role: 'Gerente de Producción',
      company: 'PrintFlow Solutions',
      text: 'La clínica redujo nuestros retrasos en 40%. El ML predice con increíble precisión.',
      avatar: '👤',
    },
    {
      name: 'Maria Garcia',
      role: 'CEO',
      company: 'Gráficos Premium',
      text: 'Es como tener un experto en planificación 24/7. Ha transformado nuestra operación.',
      avatar: '👩‍💼',
    },
    {
      name: 'Roberto Silva',
      role: 'Director Operativo',
      company: 'Industrial Print Co',
      text: 'La mejor inversión que hicimos. Ya no tenemos sorpresas con los tiempos.',
      avatar: '👨‍💼',
    },
  ];

  const faqItems = [
    {
      q: '¿Cómo funciona la predicción de ML?',
      a: 'Nuestro modelo Random Forest analiza 4 variables clave: tipo de impresión, tamaño, cantidad y material. Con tus datos históricos mejora constantemente.',
    },
    {
      q: '¿Qué nivel de precisión tiene?',
      a: 'Con datos de entrenamiento típicos alcanzamos 85-95% de precisión. Mejora más con datos históricos de tu empresa.',
    },
    {
      q: '¿Se integra con mi sistema actual?',
      a: 'Sí, ofrecemos APIs REST y webhooks para integración con cualquier sistema. También exporta reportes en PDF y Excel.',
    },
    {
      q: '¿Qué soporte ofrecen?',
      a: 'Soporte 24/7, documentación completa, webinars de capacitación y consultoría gratuita para planes Enterprise.',
    },
  ];

  const plans = [
    {
      name: 'Starter',
      price: 'Gratis',
      desc: 'Perfecto para probar',
      features: ['Hasta 100 pedidos/mes', 'Dashboard básico', 'Email support', 'Modelo ML estándar'],
      cta: 'Comenzar gratis',
      highlight: false,
    },
    {
      name: 'Professional',
      price: 'S/ 99', // <-- ¡AQUÍ SE CAMBIÓ LA MONEDA A SOLES!
      desc: '/mes - Lo más popular',
      features: [
        'Pedidos ilimitados',
        'Reportes avanzados',
        'API access',
        'ML personalizado',
        'Soporte prioritario',
        'Webhooks',
      ],
      cta: 'Comenzar ahora',
      highlight: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      desc: 'Solución personalizada',
      features: [
        'Todo en Professional',
        'Consultoría dedicada',
        'Integración custom',
        'SLA garantizado',
        'Single sign-on',
        'Capacitación ilimitada',
      ],
      cta: 'Contactar ventas',
      highlight: false,
    },
  ];

  return (
    <div className="landing-page">

      {/* ══════════════════════════════
          HERO
      ══════════════════════════════ */}
      <header
        style={{
          background: 'linear-gradient(135deg, #f0f9ff 0%, #ffffff 50%, #ecfdf5 100%)',
          paddingTop: '5rem',
          paddingBottom: '6rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Blobs decorativos */}
        <div style={{
          position: 'absolute', top: '-60px', right: '-60px',
          width: '380px', height: '380px',
          background: 'rgba(125,211,252,0.25)',
          borderRadius: '50%', filter: 'blur(60px)', zIndex: 0, pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: '-60px', left: '-60px',
          width: '380px', height: '380px',
          background: 'rgba(110,231,183,0.25)',
          borderRadius: '50%', filter: 'blur(60px)', zIndex: 0, pointerEvents: 'none',
        }} />

        <div className="container px-4" style={{ position: 'relative', zIndex: 1 }}>
          <div className="row justify-content-center">
            <div className="col-12 col-lg-9 text-center">

              {/* Badge — usa d-inline-flex para alinear ícono y texto */}
              <div className="mb-4">
                <span
                  className="d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill fw-semibold"
                  style={{
                    background: 'rgba(224,242,254,0.9)',
                    color: '#0284c7',
                    border: '1px solid rgba(125,211,252,0.5)',
                    fontSize: '0.9rem',
                  }}
                >
                  <Zap size={14} />
                  Nuevo: Integraciones con Zapier 🚀
                </span>
              </div>

              {/* Heading */}
              <h1
                className="fw-black mb-4"
                style={{ color: '#111827', lineHeight: 1.1, fontSize: 'clamp(2.4rem, 6vw, 4.5rem)' }}
              >
                Predice Tiempos de{' '}
                <span style={{
                  background: 'linear-gradient(90deg,#0284c7,#059669)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>
                  Producción con IA
                </span>
              </h1>

              {/* Subheading */}
              <p
                className="mb-5 mx-auto"
                style={{ maxWidth: '580px', fontSize: '1.15rem', color: '#4b5563', lineHeight: 1.7 }}
              >
                Sistema inteligente basado en Machine Learning para optimizar tu clínica.
                Reduce retrasos, mejora la planificación y aumenta la rentabilidad.
              </p>

              {/* CTAs */}
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center mb-4">
                {user ? (
                  <button
                    onClick={() => navigate('/dashboard')}
                    className="btn btn-lg fw-bold d-inline-flex align-items-center justify-content-center gap-2 shadow"
                    style={{
                      background: 'linear-gradient(135deg,#0284c7,#0369a1)',
                      color: '#fff', borderRadius: '12px', border: 'none',
                      transition: 'transform .2s, box-shadow .2s',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.boxShadow = '0 12px 30px rgba(2,132,199,0.4)'; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = ''; }}
                  >
                    Ir al Dashboard <ArrowRight size={20} />
                  </button>
                ) : (
                  <>
                    <button
                      onClick={() => navigate('/auth')}
                      className="btn btn-lg fw-bold d-inline-flex align-items-center justify-content-center gap-2 shadow"
                      style={{
                        background: 'linear-gradient(135deg,#0284c7,#0369a1)',
                        color: '#fff', borderRadius: '12px', border: 'none',
                        transition: 'transform .2s, box-shadow .2s',
                      }}
                      onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.boxShadow = '0 12px 30px rgba(2,132,199,0.4)'; }}
                      onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = ''; }}
                    >
                      Comenzar Gratis <ArrowRight size={20} />
                    </button>
                    <button
                      className="btn btn-lg fw-bold d-inline-flex align-items-center justify-content-center gap-2"
                      style={{
                        borderRadius: '12px',
                        border: '2px solid #d1d5db',
                        color: '#374151',
                        background: 'transparent',
                        transition: 'all .2s',
                      }}
                      onMouseEnter={e => { e.currentTarget.style.background = '#f9fafb'; e.currentTarget.style.borderColor = '#9ca3af'; }}
                      onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = '#d1d5db'; }}
                    >
                      Ver Demo
                    </button>
                  </>
                )}
              </div>

              <p className="text-muted small mb-0">Sin tarjeta de crédito. Acceso instantáneo.</p>
            </div>
          </div>
        </div>
      </header>

      {/* ══════════════════════════════
          FEATURES
      ══════════════════════════════ */}
      <section className="py-5 px-0" style={{ background: 'rgba(255,255,255,0.85)' }}>
        <div className="container px-4">
          <h2 className="text-center fw-bold mb-5" style={{ color: '#111827', fontSize: '2rem' }}>
            Características Principales
          </h2>

          <div className="row g-4">
            {features.map((feature, i) => (
              <div key={i} className="col-12 col-sm-6 col-xl-3">
                <div
                  className="card h-100 border-0 shadow-sm p-4"
                  style={{ borderRadius: '16px', transition: 'transform .3s, box-shadow .3s', cursor: 'default' }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)';
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 20px 40px rgba(0,0,0,0.12)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                    (e.currentTarget as HTMLElement).style.boxShadow = '';
                  }}
                >
                  <div
                    className="mb-3 d-inline-flex align-items-center justify-content-center p-3 rounded-3"
                    style={{ background: feature.bg, color: feature.fg, width: '52px', height: '52px' }}
                  >
                    {feature.icon}
                  </div>
                  <h5 className="fw-bold mb-2" style={{ color: '#111827' }}>{feature.title}</h5>
                  <p className="text-muted small mb-0">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          BENEFITS
      ══════════════════════════════ */}
      <section className="py-5">
        <div className="container px-4">
          <h2 className="text-center fw-bold mb-5" style={{ color: '#111827', fontSize: '2rem' }}>
            Resultados Probados
          </h2>

          <div className="row g-4">
            {benefits.map((b, i) => (
              <div key={i} className="col-6 col-lg-3">
                <div
                  className="card text-center p-4 h-100 border"
                  style={{
                    borderRadius: '16px',
                    background: 'linear-gradient(135deg,#f9fafb,#f3f4f6)',
                    borderColor: '#e5e7eb',
                    transition: 'box-shadow .2s, transform .2s',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.boxShadow = '';
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                  }}
                >
                  <div style={{ fontSize: '2.5rem', lineHeight: 1, marginBottom: '0.5rem' }}>{b.icon}</div>
                  <div className="fw-black mb-1" style={{ fontSize: '2.2rem', color: '#0284c7' }}>{b.number}</div>
                  <div className="fw-medium small" style={{ color: '#6b7280' }}>{b.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          TESTIMONIALS
      ══════════════════════════════ */}
      <section className="py-5" style={{ background: 'linear-gradient(135deg,#f0f9ff,#ecfdf5)' }}>
        <div className="container px-4">
          <h2 className="text-center fw-bold mb-5" style={{ color: '#111827', fontSize: '2rem' }}>
            Lo que dicen nuestros clientes
          </h2>

          <div className="row g-4">
            {testimonials.map((t, i) => (
              <div key={i} className="col-12 col-md-4">
                <div
                  className="card border h-100 p-4"
                  style={{
                    borderRadius: '16px',
                    borderColor: '#e5e7eb',
                    background: '#fff',
                    transition: 'box-shadow .3s, transform .3s',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 20px 40px rgba(0,0,0,0.12)';
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.boxShadow = '';
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                  }}
                >
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center fs-4 flex-shrink-0"
                      style={{ width: '48px', height: '48px', background: '#e0f2fe' }}
                    >
                      {t.avatar}
                    </div>
                    <div>
                      <div className="fw-bold" style={{ color: '#111827' }}>{t.name}</div>
                      <div style={{ fontSize: '0.75rem', color: '#9ca3af' }}>
                        {t.role} @ {t.company}
                      </div>
                    </div>
                  </div>
                  <p className="fst-italic mb-3" style={{ color: '#4b5563' }}>"{t.text}"</p>
                  <div className="d-flex gap-1 mt-auto">
                    {[...Array(5)].map((_, j) => (
                      <span key={j} style={{ color: '#fbbf24', fontSize: '1rem' }}>⭐</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          PRICING
      ══════════════════════════════ */}
      <section className="py-5">
        <div className="container px-4">
          <h2 className="text-center fw-bold mb-5" style={{ color: '#111827', fontSize: '2rem' }}>
            Planes para Todos los Tamaños
          </h2>

          {/* py-3 en el row para dar espacio al card destacado sin overflow */}
          <div className="row g-4 justify-content-center align-items-center py-3">
            {plans.map((plan, i) => (
              <div key={i} className="col-12 col-md-4">
                <div
                  className="card h-100 p-4"
                  style={{
                    borderRadius: '20px',
                    border: plan.highlight ? 'none' : '1px solid #e5e7eb',
                    background: plan.highlight
                      ? 'linear-gradient(135deg,#0284c7,#0369a1)'
                      : '#fff',
                    color: plan.highlight ? '#fff' : '#111827',
                    /* Elevación via shadow en vez de scale para no romper el layout */
                    boxShadow: plan.highlight
                      ? '0 25px 50px rgba(2,132,199,0.35)'
                      : '0 1px 4px rgba(0,0,0,0.06)',
                    transition: 'box-shadow .3s, transform .3s',
                  }}
                  onMouseEnter={e => {
                    if (!plan.highlight) {
                      (e.currentTarget as HTMLElement).style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
                      (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
                    }
                  }}
                  onMouseLeave={e => {
                    if (!plan.highlight) {
                      (e.currentTarget as HTMLElement).style.boxShadow = '0 1px 4px rgba(0,0,0,0.06)';
                      (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                    }
                  }}
                >
                  {plan.highlight && (
                    <div className="text-center mb-3">
                      <span
                        className="badge rounded-pill px-3 py-1 fw-semibold"
                        style={{ background: 'rgba(255,255,255,0.2)', color: '#fff', fontSize: '0.75rem' }}
                      >
                        ⭐ Más Popular
                      </span>
                    </div>
                  )}

                  <h4 className="fw-bold mb-1">{plan.name}</h4>
                  <p className="small mb-4" style={{ color: plan.highlight ? '#bae6fd' : '#6b7280' }}>
                    {plan.desc}
                  </p>

                  <div className="mb-4">
                    <span className="fw-black" style={{ fontSize: '2.5rem' }}>{plan.price}</span>
                  </div>

                  <button
                    className="btn fw-bold w-100 mb-4"
                    style={{
                      borderRadius: '12px',
                      padding: '12px',
                      background: plan.highlight ? '#fff' : '#0284c7',
                      color: plan.highlight ? '#0284c7' : '#fff',
                      border: 'none',
                      transition: 'opacity .2s',
                    }}
                    onMouseEnter={e => ((e.currentTarget as HTMLElement).style.opacity = '0.85')}
                    onMouseLeave={e => ((e.currentTarget as HTMLElement).style.opacity = '1')}
                  >
                    {plan.cta}
                  </button>

                  <ul className="list-unstyled mb-0">
                    {plan.features.map((f, j) => (
                      <li key={j} className="d-flex align-items-start gap-2 mb-2 small">
                        <span className="fw-bold flex-shrink-0" style={{ color: plan.highlight ? '#7dd3fc' : '#059669' }}>✓</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          FAQ
      ══════════════════════════════ */}
      <section className="py-5" style={{ background: '#f9fafb' }}>
        <div className="container px-4">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8">
              <h2 className="text-center fw-bold mb-5" style={{ color: '#111827', fontSize: '2rem' }}>
                Preguntas Frecuentes
              </h2>

              <div className="d-flex flex-column gap-3">
                {faqItems.map((item, i) => (
                  <div
                    key={i}
                    className="card border overflow-hidden"
                    style={{
                      borderRadius: '14px',
                      borderColor: '#e5e7eb',
                      transition: 'box-shadow .2s',
                    }}
                    onMouseEnter={e => ((e.currentTarget as HTMLElement).style.boxShadow = '0 4px 16px rgba(0,0,0,0.08)')}
                    onMouseLeave={e => ((e.currentTarget as HTMLElement).style.boxShadow = '')}
                  >
                    <button
                      className="btn w-100 text-start d-flex justify-content-between align-items-center px-4 py-3"
                      style={{ background: '#fff', border: 'none', fontWeight: 700, color: '#111827', borderRadius: 0 }}
                      onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                    >
                      <span className="me-3">{item.q}</span>
                      <ChevronDown
                        size={20}
                        style={{
                          color: '#6b7280',
                          transition: 'transform .3s',
                          transform: faqOpen === i ? 'rotate(180deg)' : 'rotate(0deg)',
                          flexShrink: 0,
                        }}
                      />
                    </button>
                    {faqOpen === i && (
                      <div
                        className="px-4 py-3"
                        style={{ background: '#f8fafc', borderTop: '1px solid #f1f5f9' }}
                      >
                        <p className="mb-0" style={{ color: '#4b5563' }}>{item.a}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          CTA FINAL
      ══════════════════════════════ */}
      <section
        className="text-white text-center"
        style={{
          background: 'linear-gradient(135deg,#0284c7,#059669)',
          padding: '5rem 1.5rem',
        }}
      >
        <div className="mx-auto" style={{ maxWidth: '700px' }}>
          <h2 className="fw-black mb-3" style={{ fontSize: 'clamp(1.8rem,5vw,3rem)' }}>
            ¿Listo para transformar tu producción?
          </h2>
          <p className="mb-5" style={{ fontSize: '1.15rem', color: '#bae6fd' }}>
            Únete a 500+ empresas que ya optimizan con Impresiones Express
          </p>
          <button
            onClick={() => navigate('/auth')}
            className="btn btn-lg fw-bold d-inline-flex align-items-center gap-2 shadow-lg"
            style={{
              background: '#fff',
              color: '#0284c7',
              borderRadius: '12px',
              border: 'none',
              padding: '14px 32px',
              transition: 'transform .2s, box-shadow .2s',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.transform = 'scale(1.05)';
              (e.currentTarget as HTMLElement).style.boxShadow = '0 16px 40px rgba(0,0,0,0.2)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
              (e.currentTarget as HTMLElement).style.boxShadow = '';
            }}
          >
            Comenzar Gratis Hoy <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* ══════════════════════════════
          FOOTER
      ══════════════════════════════ */}
      <footer className="py-5" style={{ background: '#111827', color: '#d1d5db' }}>
        <div className="container px-4">
          <div className="row g-4 mb-4">
            {/* Brand */}
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="d-flex align-items-center gap-2 mb-3">
                <Printer size={20} style={{ color: '#38bdf8' }} />
                <span className="fw-bold text-white">Impresiones Express</span>
              </div>
              <p className="small mb-0" style={{ color: '#9ca3af' }}>
                Optimización de producción con IA
              </p>
            </div>

            {/* Link columns */}
            {['Producto', 'Empresa', 'Legal'].map((col) => (
              <div key={col} className="col-6 col-sm-6 col-md-4 col-lg-3">
                <h6 className="fw-bold text-white mb-3">{col}</h6>
                <ul className="list-unstyled small mb-0">
                  {['Características', 'Precios', 'Blog'].map((link) => (
                    <li key={link} className="mb-2">
                      <a
                        href="#"
                        className="text-decoration-none"
                        style={{ color: '#9ca3af', transition: 'color .2s' }}
                        onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = '#38bdf8')}
                        onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = '#9ca3af')}
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <hr style={{ borderColor: '#1f2937', opacity: 1 }} />

          <p className="text-center small mb-0" style={{ color: '#6b7280' }}>
            &copy; 2026 Impresiones Express. Todos los derechos reservados.
          </p>
        </div>
      </footer>

    </div>
  );
}