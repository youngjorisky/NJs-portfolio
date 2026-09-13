export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-6">
            <div className="about-info">
              <h2 className="wow fadeInUp" data-wow-delay="0.6s">
                Welcome to My <i className="fa-solid fa-p">Professional Space</i>
              </h2>
              <div className="wow fadeInUp about-message" data-wow-delay="0.8s">
                <p>
                  I am a nutrition and public health professional with
                  experience in academic research, research support, teaching,
                  and health-related projects. My work is focused on public
                  health, health research, nutrition, and improving health
                  outcomes through evidence-based approaches.
                </p>
                <p>
                  I provide research support and academic services tailored to
                  the needs of students, researchers, and organizations
                  working across health, nutrition, and public health.
                </p>
              </div>
              <figure className="profile wow fadeInUp" data-wow-delay="1s">
                <img
                  src="/images/author-image.jpg"
                  className="img-responsive"
                  alt=""
                />
                <figcaption>
                  <h3>RD. Nana Adjoa Sarkwa</h3>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
