export default function Vacancy() {
  return (
    <>
      <header className="v-page-header">
        <div className="container v-header-content fade-in appear">
          <div className="v-badge"><i className="fa-brands fa-whatsapp"></i> WhatsApp Updates</div>
          <h1>Job Vacancies & Alerts</h1>
          <p className="v-header-sub">Stay updated with the latest government and private job openings in Rajasthan.</p>
        </div>
      </header>
      <section className="section-padding">
        <div className="container">
          <div className="v-feed fade-in appear">
            <div className="v-post">
              <div className="v-post-body">
                <h3>Check back soon for new updates!</h3>
                <p>We regularly post new job openings here.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
