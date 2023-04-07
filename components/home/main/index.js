import styles from "./styles.module.scss";
import MainSwiper from "../swiper/swiper";
import Link from "next/link";

export default function Main() {
  return (
    <>
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
              Oh yeah, it&apos;s that good.{" "}
              <span className="text-muted">See for yourself.</span>
            </h2>
            <p className="lead">
              Discover the magic of CasaBlossom, Miami&apos;s number one
              florist, where each exquisite arrangement is a personalized work
              of art crafted just for you. Experience the warmth and genuine
              connection of our family-owned shop, as we bring your floral
              dreams to life with our unparalleled attention to detail, passion
              for beauty, and commitment to celebrating life&apos;s most
              precious moments. Choose CasaBlossom and become part of a
              community that cherishes the enchanting power of flowers.
            </p>
            <Link className="btn btn-outline-secondary" href="/browse">
              Shop Now
            </Link>
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
              Contact us today and let us help you celebrate life&apos;s moments
              with the perfect floral expression.
            </p>
            <Link className="btn btn-outline-secondary" href="/contact">
              Contact Us
            </Link>
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
            <Link className="btn btn-outline-secondary" href="/about">
              Read More
            </Link>
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
