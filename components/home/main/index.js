import styles from "./styles.module.scss";
import MainSwiper from "../swiper/swiper";
import { Image } from "react-bootstrap";

export default function Main() {
  return (
    <>
      {/* <div className={styles.main}>
        <div className={styles.header}>
          Our Origins and the story behind casa blossom
        </div>
        <div className={styles.story}>
          Once upon a time, in the bustling city of Miami, there was a small
          flower shop nestled on a quaint street corner. The shop was run by a
          woman named Maria, who had inherited it from her mother. Maria was a
          skilled florist, and her shop was filled with the most beautiful
          flowers from all over the world. The scent of roses, lilies, and
          orchids wafted out onto the street, enticing passersby to step inside.
          Despite the hot and humid weather of Miami, Maria's flowers thrived.
          Her secret was the special blend of soil she used, which kept the
          flowers healthy and vibrant. One day, a young couple came into the
          shop. They were looking for the perfect bouquet for their wedding,
          which was just a few days away.Maria listened carefully to their
          requests, and with her expertise, she created a stunning arrangement
          that perfectly matched the theme of their wedding.
        </div>
        <div className={styles.story}>
          The couple was overjoyed with the flowers, and they recommended
          Maria's shop to all their friends. Soon, Maria's flower shop became
          the go-to spot for weddings and special events in Miami. As the years
          went by, Maria's reputation grew, and her shop became a beloved
          fixture in the community. People would often stop by just to admire
          the flowers and chat with Maria. Despite the challenges that came with
          running a small business, Maria never lost her love for flowers or her
          passion for making people happy. She knew that her shop was more than
          just a place to buy flowers; it was a place where memories were made
          and dreams came true. And so, Maria continued to tend to her flowers
          and serve her customers with a smile, knowing that her little flower
          shop in Miami was a special place that would always hold a special
          place in the hearts of her community.
        </div>
        <img
          className={styles.user}
          src="https://cdn.pixabay.com/photo/2020/07/09/06/13/garden-5385995_960_720.jpg"
        ></img>
      </div>
      <div className={styles.container}></div>
      <div className={styles.main_two}>
        <div className={styles.header}>Weddings are Our Specialty</div>
        <div className={styles.story}>
          Congratulations on your upcoming wedding! I would love to take this
          opportunity to share with you why I am the most experienced choice for
          your special day. With years of experience in the wedding industry, I
          have planned and executed countless weddings, ranging from small
          intimate affairs to grand celebrations with hundreds of guests. I have
          honed my skills in all aspects of wedding planning, including vendor
          coordination, venue selection, decor design, and timeline management.
          My extensive knowledge and experience enable me to create
          custom-tailored weddings that truly reflect the unique personalities
          and preferences of my clients.
        </div>
        <div className={styles.story}>
          From the moment we begin working together, I will be there to guide
          you through every step of the planning process, ensuring that your
          wedding day is a flawless and unforgettable experience. But don't just
          take my word for it - my past clients have consistently praised my
          exceptional attention to detail, creativity, and professionalism. I am
          confident that my experience, combined with my passion for creating
          beautiful weddings, will make your special day truly extraordinary.
          So, if you're looking for a wedding planner who has the expertise and
          experience to bring your vision to life, look no further. I would be
          honored to work with you and help make your dream wedding a reality.
        </div>
        <img className={styles.user} src={`../../../images/swiper/3.jpg`}></img>
      </div> */}
      <div className="container marketing">
        <h1 className="featurette-heading fw-normal lh-1">Testimonials </h1>
        {/* Three columns of text below the carousel */}
        <div className="row">
          <div className="col-lg-4">
            <svg
              className="bd-placeholder-img rounded-circle"
              width={140}
              height={140}
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: 140x140"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#777" />
              <image
                x="-140"
                y="-10"
                width="400"
                height="200"
                href="https://htmlstream.com/preview/unify-v2.6/assets/img-temp/400x450/img5.jpg"
              />
            </svg>
            <h2 className="fw-normal">John Smith</h2>
            <p>
              CasaBlossom provided exceptional service, creating beautiful
              arrangements that perfectly suited the occasion and exceeded our
              expectations.
            </p>
          </div>
          {/* /.col-lg-4 */}
          <div className="col-lg-4">
            <svg
              className="bd-placeholder-img rounded-circle"
              width={140}
              height={140}
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: 140x140"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#777" />
              <image
                x="-240"
                y="0"
                width="600"
                height="250"
                href="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              />
            </svg>
            <h2 className="fw-normal">Ruby Jane</h2>
            <p>
              I highly recommend this CasaBlossom for their creativity,
              attention to detail, and dedication to using fresh and
              high-quality flowers in all their arrangements.
            </p>
          </div>
          {/* /.col-lg-4 */}
          <div className="col-lg-4">
            <svg
              className="bd-placeholder-img rounded-circle"
              width={140}
              height={140}
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: 140x140"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#777" />
              <image
                x="-140"
                y="-20"
                width="400"
                height="300"
                href="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              />
            </svg>
            <h2 className="fw-normal">Laurey Jackson</h2>
            <p>
              CasaBlossom offers a wide selection of unique and stunning floral
              designs, making it easy to find the perfect bouquet or centerpiece
              for any event.
            </p>
          </div>
          {/* /.col-lg-4 */}
        </div>
        {/* /.row */}
        {/* START THE FEATURETTES */}
        <hr className="featurette-divider" />
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading fw-normal lh-1">
              Oh yeah, it’s that good.{" "}
              <span className="text-muted">See for yourself.</span>
            </h2>
            <p className="lead">
              Discover the magic of CasaBlossom, Miami's number one florist,
              where each exquisite arrangement is a personalized work of art
              crafted just for you. Experience the warmth and genuine connection
              of our family-owned shop, as we bring your floral dreams to life
              with our unparalleled attention to detail, passion for beauty, and
              commitment to celebrating life's most precious moments. Choose
              CasaBlossom and become part of a community that cherishes the
              enchanting power of flowers.
            </p>
            <a className="btn btn-outline-secondary" href="/browse">
              Shop Now
            </a>
          </div>
          <div className="col-md-5">
            <svg
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width={500}
              height={500}
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: 500x500"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#eee" />
              <image
                x="0"
                y="0"
                width="500"
                height="500"
                href="../../../images/home/sizes.png"
              />
            </svg>
          </div>
        </div>
        <hr className="featurette-divider" />
        <div className="row featurette">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading fw-normal lh-1">
              Event Ahead <span className="text-muted">Contact Us Today.</span>
            </h2>
            <p className="lead">
              Contact CasaBlossom for an unforgettable floral experience that
              goes beyond the ordinary. As a customer-focused, family-owned
              business, we prioritize your happiness and satisfaction, creating
              bespoke arrangements tailored to your unique preferences and
              vision. Our dedicated and skilled team is here to provide expert
              guidance, ensuring that your floral needs are met with creativity,
              elegance, and a personal touch. By choosing CasaBlossom, you are
              not just buying flowers; you are joining a community that values
              the beauty of nature and the joy it brings to every occasion.
              Contact us today and let us help you celebrate life's moments with
              the perfect floral expression.
            </p>
            <a className="btn btn-outline-secondary" href="/contact">
              Contact Us
            </a>
          </div>
          <div className="col-md-5 order-md-1">
            <svg
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width={500}
              height={500}
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: 500x500"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#eee" />
              <image
                x="0"
                y="0"
                width="500"
                height="500"
                href="https://quiltable.com/wp-content/uploads/2021/01/Paper-Airplane-Meander-WPa.jpg"
              />
            </svg>
          </div>
        </div>
        <hr className="featurette-divider" />
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading fw-normal lh-1">
              And lastly, this one.{" "}
              <span className="text-muted">Checkmate.</span>
            </h2>
            <p className="lead">
              Against all odds, the small, family-owned CasaBlossom florist
              shop, led by the passionate Maria, overcame fierce competition and
              adversity to become the number one florist in Miami through its
              unique, personalized offerings and deep connection with the
              community.
            </p>
            <a className="btn btn-outline-secondary" href="/about">
              Read More
            </a>
          </div>
          <div className="col-md-5">
            <svg
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width={500}
              height={500}
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: 500x500"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#eee" />
              <image
                x="0"
                y="0"
                width="500"
                height="500"
                href="../../../images/home/house.jpg"
              />
            </svg>
          </div>
        </div>
        <hr className="featurette-divider" />
      </div>
    </>
  );
}
