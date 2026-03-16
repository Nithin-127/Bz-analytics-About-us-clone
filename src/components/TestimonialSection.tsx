"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function TestimonialSection() {
  return (
    <>
      <section className="slider-text-one">
        <div className="slider-text-one__animate-text">
          <span>
            &nbsp;Our fulfilled <span>&amp;</span> engaged workforce.&nbsp;&nbsp;
          </span>
          <span>
            &nbsp;Our fulfilled <span>&amp;</span> engaged workforce.&nbsp;&nbsp;
          </span>
        </div>
      </section>

      <section className="testimonial-three">
        <div className="container">
          <div className="section-title">
            <h5 className="section-title__tagline section-title__tagline--has-dots">
              our Team feedback
            </h5>
            <h2 className="section-title__title">
              Employee perspectives on
              <br /> our workplace
            </h2>
          </div>

          <div
            className="testimonial-three__carousel ogency-owl__carousel owl-theme owl-carousel"
            data-owl-options='{
              "items": 2,
              "margin": 30,
              "smartSpeed": 700,
              "loop": true,
              "autoplay": true,
              "nav": true,
              "dots": false,
              "navText": ["<span class=\"icon-left-arrow\"></span>", "<span class=\"icon-right-arrow\"></span>"],
              "responsive": {
                "0": {
                  "items": 1,
                  "margin": 0
                },
                "992": {
                  "items": 2
                }
              }
            }'
          >
            <div className="testimonial-three__item">
              <div className="testimonial-three__item__border"></div>

              <h3 className="testimonial-three__item__name">
                Rejinsha Shahudeen
              </h3>

              <div className="testimonial-three__item__quote">
                We tailor the winning business strategies for the entrepreneurs
                with our digital marketing strategies, business automation,
                product and services provides you hazzle-free ride all the way
                along.
              </div>

              <div className="testimonial-three__item__meta">
                <div className="testimonial-three__item__meta__ratings">
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                </div>

                <div className="testimonial-three__item__meta__reviews">
                  4.9 Reviews
                </div>
              </div>
            </div>

            <div className="testimonial-three__item">
              <div className="testimonial-three__item__border"></div>

              <h3 className="testimonial-three__item__name">
                Vaishak Karthikeyan
              </h3>

              <div className="testimonial-three__item__quote">
                Our idea is to infuse the concept of Blockchain,the
                Metaverse,to deliver an enriched experience.
              </div>

              <div className="testimonial-three__item__meta">
                <div className="testimonial-three__item__meta__ratings">
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                </div>

                <div className="testimonial-three__item__meta__reviews">
                  4.9 Reviews
                </div>
              </div>
            </div>

            <div className="testimonial-three__item">
              <div className="testimonial-three__item__border"></div>

              <h3 className="testimonial-three__item__name">
                Sulthana Shafi
              </h3>

              <div className="testimonial-three__item__quote">
                We support businesses wherever they are on their modernisation
                journey and give them unmatched flexibility and choice.
              </div>

              <div className="testimonial-three__item__meta">
                <div className="testimonial-three__item__meta__ratings">
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                </div>

                <div className="testimonial-three__item__meta__reviews">
                  4.9 Reviews
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}