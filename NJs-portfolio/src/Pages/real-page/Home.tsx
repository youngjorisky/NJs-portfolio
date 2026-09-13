import { useEffect, useRef } from "react";

export default function Home() {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const $ = window.jQuery;

    if (!$ || !carouselRef.current) {
      return undefined;
    }

    const $carousel = $(carouselRef.current);

    $carousel.owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      animateOut: "fadeOut",
    });

    return () => {
      $carousel.trigger("destroy.owl.carousel");
    };
  }, []);

  return (
    <section id="home" className="slider" data-stellar-background-ratio="0.5">
      <div className="container">
        <div className="row">
          <div className="owl-carousel owl-theme" ref={carouselRef}>
            <div className="item item-first">
              <div className="caption">
                <div className="col-md-offset-1 col-md-10">
                  <h3>Let's make your life happier</h3>
                  <h1>Healthy Living</h1>
                  <a
                    href="#team"
                    className="section-btn btn btn-default smoothScroll"
                  >
                    Talk to me
                  </a>
                </div>
              </div>
            </div>

            <div className="item item-second">
              <div className="caption">
                <div className="col-md-offset-1 col-md-10">
                  <h3>Beyond Research</h3>
                  <h1>New Lifestyle</h1>
                  <a
                    href="#about"
                    className="section-btn btn btn-default btn-gray smoothScroll"
                  >
                    More Info
                  </a>
                </div>
              </div>
            </div>

            <div className="item item-third">
              <div className="caption">
                <div className="col-md-offset-1 col-md-10">
                  <h3>Stories and Publications</h3>
                  <h1>Your Health Benefits</h1>
                  <a
                    href="#news"
                    className="section-btn btn btn-default btn-blue smoothScroll"
                  >
                    Read Stories
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
