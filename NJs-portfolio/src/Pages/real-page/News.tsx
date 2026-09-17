import { Link } from "react-router-dom";

export default function News() {
  return (
    <section id="news" data-stellar-background-ratio="2.5">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12">
            {/* SECTION TITLE */}
            <div className="section-title wow fadeInUp" data-wow-delay="0.1s">
              <h2>Latest News</h2>
            </div>
          </div>

          <div className="col-md-4 col-sm-6">
            {/* NEWS THUMB */}
            <div className="news-thumb wow fadeInUp" data-wow-delay="0.4s">
              <Link to="/news-detail">
                <img
                  src="/images/news-image1.jpg"
                  className="img-responsive"
                  alt=""
                />
              </Link>
              <div className="news-info">
                <span>September 2026</span>
                <h3>
                  <Link to="/news-detail">Whole Food, Better Health</Link>
                </h3>
                <p>
                  Food systems are moving toward plant-rich, minimally processed
                  meals that improve prevention and wellbeing.
                </p>
                <div className="author">
                  <img
                    src="/images/profile-image.png"
                    className="img-responsive"
                    alt=""
                  />
                  <div className="author-info">
                    <h5>Nana Adjoa Sarkwa</h5>
                    <p>Nutrition Research</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6">
            {/* NEWS THUMB */}
            <div className="news-thumb wow fadeInUp" data-wow-delay="0.6s">
              <Link to="/news-detail">
                <img
                  src="/images/news-image2.jpg"
                  className="img-responsive"
                  alt=""
                />
              </Link>
              <div className="news-info">
                <span>September 2026</span>
                <h3>
                  <Link to="/news-detail">Personalized Nutrition Grows</Link>
                </h3>
                <p>
                  Nutrition advice is shifting toward personal, culturally
                  relevant choices that fit real daily routines.
                </p>
                <div className="author">
                  <img
                    src="/images/profile-image.png"
                    className="img-responsive"
                    alt=""
                  />
                  <div className="author-info">
                    <h5>Nana Adjoa Sarkwa</h5>
                    <p>Public Health Nutrition</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6">
            {/* NEWS THUMB */}
            <div className="news-thumb wow fadeInUp" data-wow-delay="0.8s">
              <Link to="/news-detail">
                <img
                  src="/images/news-image3.jpg"
                  className="img-responsive"
                  alt=""
                />
              </Link>
              <div className="news-info">
                <span>September 2026</span>
                <h3>
                  <Link to="/news-detail">Climate-Friendly Food Choices</Link>
                </h3>
                <p>
                  Local food systems and sustainable meal choices are becoming
                  central to healthier eating conversations.
                </p>
                <div className="author">
                  <img
                    src="/images/profile-image.png"
                    className="img-responsive"
                    alt=""
                  />
                  <div className="author-info">
                    <h5>Nana Adjoa Sarkwa</h5>
                    <p>Food & Nutrition</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
