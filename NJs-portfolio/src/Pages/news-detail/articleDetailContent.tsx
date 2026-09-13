import { useEffect, useState } from "react";

type FoodNewsStory = {
  image: string;
  category: string;
  date: string;
  title: string;
  summary: string;
  quote: string;
  detail: string;
  points: string[];
};

const foodNewsStories: FoodNewsStory[] = [
  {
    image: "/images/news-image1.jpg",
    category: "Food Systems",
    date: "September 2026",
    title: "Whole Food, Better Health",
    summary:
      "Food systems are moving toward more plant-forward, minimally processed meals that support prevention and long-term wellness.",
    quote:
      "Nutrition is being re-designed around everyday food habits, not just isolated supplements.",
    detail:
      "Nutrition experts are increasingly linking daily food choices, food quality, and food access to improved public health outcomes across communities.",
    points: [
      "Whole grains, legumes, vegetables, and fruit are returning to the center of healthy eating.",
      "Consumers are choosing dietary patterns that combine affordability with evi dence-based nutrition.",
      "Public health campaigns are connecting food variety with disease prevention and meal planning.",
    ],
  },
  {
    image: "/images/news-image2.jpg",
    category: "Personalized Nutrition",
    date: "September 2026",
    title: "Personalized Nutrition Grows",
    summary:
      "Dietary advice is shifting from one-size-fits-all plans to personal nutrition that considers age, culture, health status, and lifestyle.",
    quote:
      "The best nutrition advice should be practical, flexible, and tied to real life.",
    detail:
      "Growing demand for nutrition coaching is encouraging practitioners to connect food trends with personalized health advice and family-centered education.",
    points: [
      "Nutrition services are increasingly focused on sustainable behavior change.",
      "Food education emphasizes practical cooking skills and home meal strategies.",
      "Nutrition professionals are using data to improve individual dietary recommendations.",
    ],
  },
  {
    image: "/images/news-image3.jpg",
    category: "Nutrition & Climate",
    date: "September 2026",
    title: "Climate-Friendly Food Choices",
    summary:
      "Food and nutrition trends are also being shaped by sustainability, local food systems, and more climate-conscious eating.",
    quote:
      "Healthy food choices are increasingly connected to environmental wellbeing and food resilience.",
    detail:
      "Many nutrition professionals are exploring how seasonal produce, less food waste, and more balanced meal planning can support both human health and the environment.",
    points: [
      "Local foods and seasonal produce are gaining more attention.",
      "Nutrition messaging now includes reducing food waste and improving meal planning.",
      "Sustainable diets are being framed as practical, culturally grounded food choices.",
    ],
  },
  {
    image: "/images/news-image.jpg",
    category: "Gut Health",
    date: "October 2026",
    title: "Fermented and Functional Foods",
    summary:
      "Interest in fermented foods, fiber-rich diets, and gut health continues to influence everyday food choices.",
    quote:
      "Gut health is becoming a practical nutrition story that starts with balanced meals and daily habits.",
    detail:
      "Nutrition leaders are combining gut health education with food literacy, encouraging consumers to choose whole foods and useful fermented products with care.",
    points: [
      "Fermented foods such as yogurt, kimchi, and traditional foods are being explored more widely.",
      "Dietary fiber, legumes, grains, and vegetables remain central to gut-friendly eating.",
      "Evidence-based recommendations stress balance over extremes.",
    ],
  },
  {
    image: "/images/news-image1.jpg",
    category: "Child Nutrition",
    date: "October 2026",
    title: "Food Literacy for Better Families",
    summary:
      "Schools, families, and health educators are improving food literacy through practical learning and healthier food environments.",
    quote:
      "Healthy habits begin with knowledge, access, and the confidence to prepare balanced meals.",
    detail:
      "Nutrition trends are increasingly focused on food education, reducing ultra-processed products, and creating healthy routines for families and communities.",
    points: [
      "Nutrition education is being integrated into school and community programs.",
      "Food literacy helps families build realistic shopping and meal planning routines.",
      "Healthy food environments are being supported through better meal design and access.",
    ],
  },
  {
    image: "/images/news-image2.jpg",
    category: "Public Health Nutrition",
    date: "October 2026",
    title: "Nutrition Policy and Access",
    summary:
      "Food security, affordability, and nutrition access remain central public health priorities in food and nutrition conversations.",
    quote:
      "Good nutrition requires access, education, and practical policy support.",
    detail:
      "Nutrition experts are highlighting the importance of equitable food access, culturally relevant nutrition programs, and household food planning.",
    points: [
      "Food policy discussions are prioritizing affordability and healthy choices.",
      "Public health nutrition combines community awareness with food environment improvements.",
      "Nutrition education is being linked to community health and prevention strategies.",
    ],
  },
];

export default function ArticleDetailContent() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setOffset((current) => (current + 3) % foodNewsStories.length);
    }, 5000);

    return () => {
      window.clearInterval(timer);
    };
  }, []);

  const visibleNews = Array.from({ length: 3 }, (_, index) => {
    return foodNewsStories[(offset + index) % foodNewsStories.length];
  });

  return (
    <section id="news-detail" data-stellar-background-ratio="0.5">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-7">
            <div className="news-detail-thumb">
              {visibleNews.map((story, index) => (
                <article className="food-news-story" key={story.title}>
                  <div className="news-image">
                    <img src={story.image} className="img-responsive" alt="" />
                  </div>

                  <div className="news-meta">
                    <span className="news-category">{story.category}</span>
                    <span className="news-date">{story.date}</span>
                  </div>

                  <h3>{story.title}</h3>
                  <p>{story.summary}</p>

                  <blockquote>{story.quote}</blockquote>

                  <p>{story.detail}</p>

                  <ul>
                    {story.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>

                  {index < visibleNews.length - 1 && (
                    <hr className="food-news-divider" />
                  )}
                </article>
              ))}

              <div className="news-social-share">
                <h4>Share this update</h4>
                <a
                  href="https://www.facebook.com/sharer/sharer.php?u=https://example.com/news-food-nutrition"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  <i className="fa fa-facebook"></i>Facebook
                </a>
                <a
                  href="https://twitter.com/intent/tweet?text=Food%20and%20Nutrition%20Trends&url=https://example.com/news-food-nutrition"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-success"
                >
                  <i className="fa fa-twitter"></i>Twitter
                </a>
                <a
                  href="https://plus.google.com/share?url=https://example.com/news-food-nutrition"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-danger"
                >
                  <i className="fa fa-google-plus"></i>Google+
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-5">
            <div className="news-sidebar">
              <div className="news-author">
                <h4>Nutrition Update</h4>
                <p>
                  Food systems, public health, and personalized nutrition are
                  shaping the next generation of healthier, more practical food
                  habits.
                </p>
              </div>

              <div className="recent-post">
                <h4>Recent Food Trends</h4>

                <div className="media">
                  <div className="media-object pull-left">
                    <a href="#">
                      <img
                        src="/images/news-image1.jpg"
                        className="img-responsive"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="media-body">
                    <h4 className="media-heading">
                      <a href="#">Whole Food Health</a>
                    </h4>
                  </div>
                </div>

                <div className="media">
                  <div className="media-object pull-left">
                    <a href="#">
                      <img
                        src="/images/news-image2.jpg"
                        className="img-responsive"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="media-body">
                    <h4 className="media-heading">
                      <a href="#">Personalized Nutrition</a>
                    </h4>
                  </div>
                </div>
              </div>

              <div className="news-categories">
                <h4>Categories</h4>
                <li>
                  <a href="#">
                    <i className="fa fa-angle-right"></i> Food Systems
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-angle-right"></i> Public Health
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-angle-right"></i> Nutrition
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-angle-right"></i> Wellness
                  </a>
                </li>
              </div>

              <div className="news-ads sidebar-ads">
                <h4>Food & Nutrition Brief</h4>
              </div>

              <div className="news-tags">
                <h4>Tags</h4>
                <li>
                  <a href="#">Food Trends</a>
                </li>
                <li>
                  <a href="#">Nutrition</a>
                </li>
                <li>
                  <a href="#">Gut Health</a>
                </li>
                <li>
                  <a href="#">Plant-Based</a>
                </li>
                <li>
                  <a href="#">Public Health</a>
                </li>
                <li>
                  <a href="#">Food Security</a>
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
