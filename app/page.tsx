export default function Home() {
  return (
    <main className="website-bg text-white overflow-x-hidden">

      {/* BACKGROUND EFFECTS */}
      <div className="bg-orb orb-1"></div>
      <div className="bg-orb orb-2"></div>
      <div className="bg-grid"></div>

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="container navbar-content">

          <div className="logo-wrapper">
            <img
              src="/logo-lr.jpeg"
              alt="L&R Solutions"
              className="logo-main"
            />

            <div>
              <h1 className="logo-title">
                L&R Solutions
              </h1>

              <p className="logo-subtitle">
                Solutions intelligentes
              </p>
            </div>
          </div>

          <div className="nav-links">
            <a href="#hero">Accueil</a>
            <a href="#services">Services</a>
            <a href="#flowbiz">FlowBiz</a>
            <a href="#academy">Academy</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="nav-logos">
            <img
              src="/logo-flowbiz.jpeg"
              alt="FlowBiz"
              className="mini-logo"
            />

            <img
              src="/logo-academy.jpeg"
              alt="Academy"
              className="mini-logo"
            />
          </div>

        </div>
      </nav>

      {/* HERO */}
      <section id="hero" className="hero-section">

        <div className="container hero-grid">

          <div className="hero-left fade-up">

            <div className="badge-line">
              <div className="badge-dot"></div>

              <span>
                ÉCOSYSTÈME IA • BUSINESS • FORMATION
              </span>
            </div>

            <h1 className="hero-title">
              SOLUTIONS

              <span className="gradient-text">
                INTELLIGENTES
              </span>

              RÉSULTATS
              <br />
              DURABLES.
            </h1>

            <p className="hero-description">
              Accompagnement stratégique, intelligence artificielle,
              automatisation, digital et formation pour accélérer
              la croissance des entrepreneurs et entreprises modernes.
            </p>

            <div className="hero-buttons">

              <button className="primary-btn">
                Découvrir nos solutions
              </button>

              <button className="secondary-btn">
                Accéder à FlowBiz
              </button>

            </div>

            <div className="hero-stats">

              <div className="small-stat-card">
                <h3>+500</h3>
                <p>Entreprises accompagnées</p>
              </div>

              <div className="small-stat-card">
                <h3>24/7</h3>
                <p>Automatisation IA</p>
              </div>

            </div>

          </div>

          <div className="hero-right fade-up-delay">

            <div className="dashboard-card">

              <div className="dashboard-top">

                <div className="dashboard-mini-card">
                  <span>Chiffre d'affaires</span>
                  <h3>128 540€</h3>
                </div>

                <div className="dashboard-mini-card">
                  <span>Clients actifs</span>
                  <h3>1 248</h3>
                </div>

              </div>

              <div className="dashboard-screen">

                <img
                  src="/logo-flowbiz.jpeg"
                  alt="FlowBiz"
                  className="dashboard-logo"
                />

                <div className="dashboard-bars">
                  <div className="bar"></div>
                  <div className="bar"></div>
                  <div className="bar"></div>
                  <div className="bar"></div>
                </div>

                <p>
                  Dashboard intelligent FlowBiz
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* SERVICES */}
      <section id="services" className="section-spacing">

        <div className="container">

          <div className="section-header">
            <span className="section-tag">
              NOS SERVICES
            </span>

            <h2>
              Un écosystème complet
              <br />
              pour les entrepreneurs.
            </h2>
          </div>

          <div className="services-grid">

            <div className="service-card cyan-glow">
              <h3>L&R Solutions</h3>

              <p>
                Accompagnement stratégique,
                automatisation, IA business,
                création d’entreprise et conseil.
              </p>
            </div>

            <div className="service-card blue-glow">
              <h3>FlowBiz</h3>

              <p>
                CRM, facturation,
                comptabilité, IA,
                gestion d’entreprise tout-en-un.
              </p>
            </div>

            <div className="service-card purple-glow">
              <h3>FlowBiz Academy</h3>

              <p>
                Formations IA,
                entrepreneuriat,
                automatisation et productivité digitale.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* KPI */}
      <section className="section-spacing-small">

        <div className="container">

          <div className="kpi-grid">

            <div className="kpi-card cyan">
              <h3>+500</h3>
              <p>Entrepreneurs accompagnés</p>
            </div>

            <div className="kpi-card blue">
              <h3>24/7</h3>
              <p>Automatisation & IA</p>
            </div>

            <div className="kpi-card purple">
              <h3>+1200</h3>
              <p>Utilisateurs FlowBiz</p>
            </div>

            <div className="kpi-card pink">
              <h3>+50</h3>
              <p>Modules & outils IA</p>
            </div>

          </div>

        </div>

      </section>

      {/* CEO SECTION */}
      <section className="section-spacing border-top">

        <div className="container ceo-grid">

          <div>
            <span className="section-tag">
              EXPÉRIENCE CEO
            </span>

            <h2 className="ceo-title">
              Pensé pour les dirigeants modernes.
            </h2>

            <p className="ceo-text">
              Une plateforme premium conçue pour gagner du temps,
              automatiser les tâches répétitives et piloter son activité
              avec une intelligence artificielle avancée.
            </p>
          </div>

          <div className="ceo-cards">

            <div className="ceo-card">
              <h3>IA Business</h3>
              <p>Assistant intelligent intégré</p>
            </div>

            <div className="ceo-card">
              <h3>Automatisation</h3>
              <p>Réduction du temps administratif</p>
            </div>

            <div className="ceo-card">
              <h3>CRM Premium</h3>
              <p>Gestion complète des clients</p>
            </div>

            <div className="ceo-card">
              <h3>Analytics</h3>
              <p>Suivi des performances en temps réel</p>
            </div>

          </div>

        </div>

      </section>

      {/* FLOWBIZ */}
      <section id="flowbiz" className="section-spacing border-top">

        <div className="container flowbiz-section">

          <div>
            <img
              src="/logo-flowbiz.jpeg"
              alt="FlowBiz"
              className="section-logo"
            />
          </div>

          <div>
            <h2 className="flowbiz-title">
              La plateforme business intelligente.
            </h2>

            <p className="flowbiz-text">
              Gérez votre entreprise depuis une seule plateforme :
              CRM, facturation, comptabilité, IA, automatisation,
              analytics et gestion client.
            </p>

            <div className="feature-list">
              <span>CRM</span>
              <span>Facturation</span>
              <span>IA</span>
              <span>Comptabilité</span>
              <span>Automatisation</span>
              <span>Analytics</span>
            </div>

          </div>

        </div>

      </section>

      {/* ACADEMY */}
      <section id="academy" className="section-spacing border-top">

        <div className="container flowbiz-section">

          <div>
            <img
              src="/logo-academy.jpeg"
              alt="Academy"
              className="section-logo"
            />
          </div>

          <div>
            <h2 className="flowbiz-title">
              Formation nouvelle génération.
            </h2>

            <p className="flowbiz-text">
              Développez vos compétences en intelligence artificielle,
              automatisation, entrepreneuriat et productivité digitale.
            </p>

            <div className="feature-list">
              <span>IA Business</span>
              <span>Marketing Digital</span>
              <span>Automatisation</span>
              <span>Coaching</span>
              <span>Certification</span>
              <span>Business Growth</span>
            </div>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer id="contact" className="footer">

        <div className="container footer-content">

          <div>
            <h2>L&R Solutions</h2>

            <p>
              Solutions intelligentes pour entrepreneurs modernes.
            </p>
          </div>

          <div className="footer-links">
            <a href="#">FlowBiz</a>
            <a href="#">Academy</a>
            <a href="#">Services</a>
            <a href="#">Contact</a>
          </div>

        </div>

      </footer>

    </main>
  )
}
