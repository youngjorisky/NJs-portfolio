export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-6">
            <div className="about-info">
              <h2 className="wow fadeInUp" data-wow-delay="0.6s">
                Welcome to My{" "}
                <i className="fa-solid fa-p">Professional Space</i>
              </h2>
              <div className="wow fadeInUp about-message" data-wow-delay="0.8s">
                <p>
                  I am a passionate researcher and nutrition professional
                  dedicated to helping students, researchers, and individuals
                  make better use of evidence, knowledge, and practical
                  solutions in nutrition and health. My work goes beyond
                  research and academic services.
                </p>
                <p>
                  Driven by a genuine passion for learning, helping others, I
                  make meaningful contributions through research and nutrition.
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
