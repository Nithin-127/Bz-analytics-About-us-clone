"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer
        className="main-footer"
        style={{
          backgroundImage:
            "url(/assets/images/backgrounds/footer-bg-1.png)",
        }}
      >
        <div className="container_footer">

          {/* FIRST SECTION */}
          <div className="child_container1st">

            {/* LEFT EMAIL SECTION */}
            <div className="container1st_footer1st_child1st">
              <div className="main-footer__about">
                <p className="footer-widget__text">
                  Let’s start working together
                </p>

                <a href="mailto:hello@bzanalytics.ai">
                  hello@bzanalytics.ai
                </a>
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="container1st_footer2st_child2nd">

              {/* LOGO + SOCIAL */}
              <div className="footer2nd_child2nd_content_footer1st">
                <div className="footer2st_child2nd_image_footer">

                  <div
                    className="main-footer__top wow fadeInUp animated"
                    data-wow-delay="100ms"
                  >
                    <Link href="/home" className="main-footer__logo">

                      <Image
                        src="/assets/bz/bq.png"
                        alt="BzAnalytics logo"
                        width={220}
                        height={92}
                      />

                    </Link>
                  </div>
                </div>

                {/* SOCIAL LINKS */}
                <div className="main-footer__social">

                  <a href="https://www.linkedin.com/company/bzanalytics/">
                    <i className="fab fa-linkedin"></i>
                  </a>

                  <a href="https://twitter.com/Bzanalytics_AI">
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>

                  <a href="https://www.facebook.com/BzAnalytics-Private-Limited-108397978722176">
                    <i className="fab fa-facebook"></i>
                  </a>

                  <a href="https://www.instagram.com/bzanalytics/">
                    <i className="fab fa-instagram"></i>
                  </a>

                  <a href="https://www.youtube.com/@bzanalytics8849">
                    <i className="fab fa-youtube"></i>
                  </a>

                </div>
              </div>

              {/* NAVIGATION LINKS */}
              <div className="footer2nd_child2nd_content_footer2nd">

                <div className="main-footer__navmenu_two">

                  <div className="main-footer__navmenu">
                    <ul>

                      <li>
                        <Link href="/home">Home</Link>
                      </li>

                      <li>
                        <Link href="/about">About Us</Link>
                      </li>

                      <li>
                        <Link href="/services">Services</Link>
                      </li>

                      <li>
                        <Link href="/portfolio">Success Stories</Link>
                      </li>

                    </ul>
                  </div>

                </div>

                <div className="main-footer__navmenu">
                  <ul>

                    <li>
                      <Link href="/blogs">Blogs</Link>
                    </li>

                    <li>
                      <Link href="/careers">Careers</Link>
                    </li>

                    <li>
                      <Link href="/contact">Contact Us</Link>
                    </li>

                  </ul>
                </div>

              </div>
            </div>
          </div>

          {/* SUBSCRIBE SECTION */}
          <div className="child_container2nd">

            <div className="card-dm-new">

              <form id="subscribe-form">

                <Image
                  src="/assets/images/digital-marketing/dm-external/footer-logo-new.png"
                  alt="BzAnalytics logo"
                  width={120}
                  height={120}
                  className="card-dm-new-image"
                />

                <p className="card-dm-new-text-header">
                  Subscribe now
                </p>

                <p className="card-dm-new-text">
                  Empower Every Mind
                </p>

                <div className="email-input-container">

                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    id="subscription-email"
                    className="email-dm-new-input"
                    required
                  />

                  <div className="email-validation-message"></div>

                </div>

                <button
                  type="submit"
                  className="subscribe-dm-new-button"
                  id="subscription-submit"
                >
                  Submit
                </button>

              </form>

            </div>

          </div>

          {/* TOAST MESSAGE */}
          <div id="toast-notification" className="toast-notification">

            <div className="toast-icon">
              <i className="fas fa-check-circle" id="toast-icon-success"></i>
              <i className="fas fa-exclamation-circle" id="toast-icon-error"></i>
            </div>

            <div className="toast-message"></div>

            <div className="toast-close">×</div>

          </div>


        </div>
      </footer>
    </>
  );
}