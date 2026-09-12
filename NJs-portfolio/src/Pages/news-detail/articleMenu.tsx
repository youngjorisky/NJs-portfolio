export default function ArticleMenu() {
  return (
    <section
      className="navbar navbar-default navbar-static-top"
      role="navigation"
    >
      <div className="container">
        <div className="navbar-header">
          <button
            className="navbar-toggle"
            data-toggle="collapse"
            data-target=".navbar-collapse"
          >
            <span className="icon icon-bar"></span>
            <span className="icon icon-bar"></span>
            <span className="icon icon-bar"></span>
          </button>

          {/* <!-- lOGO TEXT HERE --> */}
          <a href="index.html" className="navbar-brand">
            <i className="fa fa-h-square"></i>ealth Center
          </a>
        </div>

        {/* <!-- MENU LINKS --> */}
        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="index.html#top" className="smoothScroll">
                Home
              </a>
            </li>
            <li>
              <a href="index.html#about" className="smoothScroll">
                About Us
              </a>
            </li>
            <li>
              <a href="index.html#team" className="smoothScroll">
                Our Staff
              </a>
            </li>
            <li>
              <a href="index.html#news" className="smoothScroll">
                News
              </a>
            </li>
            <li>
              <a href="index.html#google-map" className="smoothScroll">
                Contact
              </a>
            </li>
            <li className="appointment-btn">
              <a href="index.html#appointment">Make an appointment</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
