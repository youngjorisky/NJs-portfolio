export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <div className="about-info">
              <div className="left-section">
                <h2 className="wow fadeInUp" data-wow-delay="0.6s">
                  <span className="typing-heading">
                    Welcome to My Professional Space
                  </span>
                </h2>
                <div
                  className="wow fadeInUp about-message"
                  data-wow-delay="0.8s"
                >
                  <h3>
                    I am a nutrition and public health professional with
                    experience in academic research, research support, teaching,
                    and health-related projects. My work is focused on public
                    health, health research, nutrition, and improving health
                    outcomes through evidence-based approaches.
                  </h3>
                  <i className="fa-solid fa-tablets"></i>
                  <i className=" leaf fa-solid fa-leaf"></i>
                  <i className="comment fa-solid fa-comment-medical"></i>
                  <h3>
                    I provide research support and academic services tailored to
                    the needs of students, researchers, and organizations
                    working across health, nutrition, and public health.
                  </h3>
                </div>
              </div>
              <figure className="profile wow fadeInUp" data-wow-delay="1s">
                <img
                  src="/images/profile-image.png"
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
