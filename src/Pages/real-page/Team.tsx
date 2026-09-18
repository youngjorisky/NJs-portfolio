export default function Team() {
  return (
    <section id="team" data-stellar-background-ratio="1">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-6">
            <div className="about-info">
              <h2 className="wow fadeInUp" data-wow-delay="0.1s">
                Areas of Specialization
              </h2>
            </div>
          </div>

          <div className="clearfix"></div>

          <div className="col-md-4 col-sm-6">
            <div className="team-thumb wow fadeInUp" data-wow-delay="0.2s">
              <img
                src="/images/public-health-picture.jpeg"
                className="img-responsive"
                alt=""
              />

              <div className="team-info">
                <h3>Public Health Nutrition</h3>
                <p>Nutrition and Public Health</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6">
            <div className="team-thumb wow fadeInUp" data-wow-delay="0.4s">
              <img
                src="/images/research-picture.jpeg"
                className="img-responsive"
                alt=""
              />

              <div className="team-info">
                <h3>Research & Academic Support</h3>
                <p>Research and Health Data</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6">
            <div className="team-thumb wow fadeInUp" data-wow-delay="0.6s">
              <img
                src="/images/community-service-picture.jpeg"
                className="img-responsive"
                alt=""
              />

              <div className="team-info">
                <h3>Community Health</h3>
                <p>Community Health</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
