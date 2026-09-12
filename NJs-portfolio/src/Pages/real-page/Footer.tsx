export default function Footer() {
  return (
    <footer data-stellar-background-ratio="5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-4">
            <div className="footer-thumb">
              <h4 className="wow fadeInUp" data-wow-delay="0.4s">
                Contact Info
              </h4>
              <p>
                Have questions about our services or need help with your health
                and nutrition? Our team is here to assist you. Feel free to
                reach out to us for more information or to schedule an
                appointment.
              </p>

              <div className="contact-info">
                <p>
                  <i className="fa fa-phone"></i> (233) 55-406-2965
                </p>
                <p>
                  <i className="fa fa-envelope-o"></i>
                  <a href="mailto:sarkwananaadjoa@gmail.com">
                    sarkwananaadjoa@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-4">
            <div className="footer-thumb">
              <h4 className="wow fadeInUp" data-wow-delay="0.4s">
                Latest News
              </h4>
              <div className="latest-stories">
                <div className="stories-image">
                  <a href="#">
                    <img
                      src="images/news-image.jpg"
                      className="img-responsive"
                      alt=""
                    />
                  </a>
                </div>
                <div className="stories-info">
                  <a href="#">
                    <h5>Amazing Technology</h5>
                  </a>
                  <span>March 08, 2018</span>
                </div>
              </div>

              <div className="latest-stories">
                <div className="stories-image">
                  <a href="#">
                    <img
                      src="images/news-image.jpg"
                      className="img-responsive"
                      alt=""
                    />
                  </a>
                </div>
                <div className="stories-info">
                  <a href="#">
                    <h5>New Healing Process</h5>
                  </a>
                  <span>February 20, 2018</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-4">
            <div className="footer-thumb">
              <div className="opening-hours">
                <h4 className="wow fadeInUp" data-wow-delay="0.4s">
                  Opening Hours
                </h4>
                <p>
                  Monday - Friday <span>06:00 AM - 10:00 PM</span>
                </p>
                <p>
                  Saturday <span>09:00 AM - 08:00 PM</span>
                </p>
                <p>
                  Sunday <span>Closed</span>
                </p>
              </div>

              <ul className="social-icon">
                <li>
                  <a
                    href="https://web.facebook.com/NanaAdjoaSarkwa"
                    className="fa fa-facebook-square"
                    title="facebook icon"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/nanaadjoasarkwa?stkn=MW5rYnQ3Y2sxa21qbg=="
                    className="fa fa-instagram"
                    title="instagram icon"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/nana-adjoa-sarkwa/"
                    className="fa fa-linkedin"
                    title="linkedin icon"
                  ></a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-12 col-sm-12 border-top">
            <div className="col-md-4 col-sm-6">
              <div className="copyright-text">
                <p>
                  Copyright &copy; 2018 Your Company | Design:
                  <a
                    rel="nofollow"
                    href="https://www.facebook.com/tooplate"
                    target="_parent"
                  >
                    Tooplate
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-6 col-sm-6">
              <div className="footer-link">
                <a href="#">Laboratory Tests</a>
                <a href="#">Departments</a>
                <a href="#">Insurance Policy</a>
                <a href="#">Careers</a>
              </div>
            </div>
            <div className="col-md-2 col-sm-2 text-align-center">
              <div className="angle-up-btn">
                <a
                  href="#top"
                  className="smoothScroll wow fadeInUp"
                  data-wow-delay="1.2s"
                >
                  <i className="fa fa-angle-up"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
