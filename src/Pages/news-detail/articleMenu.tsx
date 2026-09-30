import { useState } from "react";
import MobileDrawer, { type DrawerLink } from "../components/MobileDrawer";

const links: DrawerLink[] = [
  { label: "Home", href: "/#top", icon: "fa fa-home" },
  { label: "About", href: "/#about", icon: "fa fa-user" },
  { label: "Skills", href: "/#team", icon: "fa fa-star" },
  { label: "News", href: "/#news", icon: "fa fa-newspaper-o" },
  { label: "Contact", href: "/#google-map", icon: "fa fa-map-marker" },
  {
    label: "Make an appointment",
    href: "/#appointment",
    icon: "fa fa-calendar-plus-o",
    className: "drawer-appointment",
  },
];

export default function ArticleMenu() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <section
        className="navbar navbar-default navbar-static-top"
        role="navigation"
      >
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle drawer-toggle"
              aria-label="Open menu"
              aria-expanded={drawerOpen}
              onClick={() => setDrawerOpen(true)}
            >
              <span className="icon icon-bar" />
              <span className="icon icon-bar" />
              <span className="icon icon-bar" />
            </button>

            {/* <!-- lOGO TEXT HERE --> */}
            <a href="/" className="navbar-brand">
              <i className="fa fa-stethoscope" />
              <span className="brand-n">N</span>
              <span className="green-text">ana Adjoa Sarkwa</span>
            </a>
          </div>

          {/* <!-- MENU LINKS --> */}
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="/#top" className="smoothScroll">
                  Home
                </a>
              </li>
              <li>
                <a href="/#about" className="smoothScroll">
                  About
                </a>
              </li>
              <li>
                <a href="/#team" className="smoothScroll">
                  Skills
                </a>
              </li>
              <li>
                <a href="/#news" className="smoothScroll">
                  News
                </a>
              </li>
              <li>
                <a href="/#google-map" className="smoothScroll">
                  Contact
                </a>
              </li>
              <li className="appointment-btn">
                <a href="/#appointment">Make an appointment</a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <MobileDrawer links={links} brand={{ icon: "fa fa-stethoscope", name: "Nana Adjoa Sarkwa" }} />
    </>
  );
}
