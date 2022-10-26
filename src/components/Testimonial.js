import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";

const Testimonial = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // appendDots: (dots) => (
    //   <div
    //     style={{
    //       //   backgroundColor: "rgba(0, 0, 0, 0)",
    //       borderRadius: "10px",
    //       padding: "10px",
    //       display: "flex",
    //       alignItems: "flex-end",
    //       color: "orange",
    //     }}
    //   >
    //     <ul style={{ color: "orange" }}> {dots} </ul>
    //   </div>
    // ),
  };
  return (
    <section className="Testimonial-block py-110">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <Slider {...settings}>
                  <div className="carousel-item active">
                    <div className="testimonial-bar text-center">
                      {/* <i

                      aria-hidden="true"
                    ></i> */}
                      <FontAwesomeIcon
                        className="quote-and-name fa fa-quote-left"
                        icon={faQuoteLeft}
                      />
                      <p className="reviewbar">
                        The set one creepeth given air behold bring herb so
                        thing sixth spirit moveth lesser thing air without
                        cattle itself darkness greater.{" "}
                      </p>
                      <h6 className="review-name quote-and-name font-Av">
                        – Javed Harji
                      </h6>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="testimonial-bar text-center">
                      {/* <i
                      className="primary fa fa-quote-left"
                      aria-hidden="true"
                    ></i> */}
                      <FontAwesomeIcon
                        className="quote-and-name fa fa-quote-left"
                        icon={faQuoteLeft}
                      />
                      <p className="reviewbar">
                        The set one creepeth given air behold bring herb so
                        thing sixth spirit moveth lesser thing air without
                        cattle itself darkness greater.{" "}
                      </p>
                      <h6 className="review-name quote-and-name font-Av">
                        – John Deo
                      </h6>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="testimonial-bar text-center">
                      {/* <i
                      className="primary fa fa-quote-left"
                      aria-hidden="true"
                    ></i> */}
                      <FontAwesomeIcon
                        className="quote-and-name fa fa-quote-left"
                        icon={faQuoteLeft}
                      />
                      <p className="reviewbar">
                        The set one creepeth given air behold bring herb so
                        thing sixth spirit moveth lesser thing air without
                        cattle itself darkness greater.{" "}
                      </p>
                      <h6 className="review-name quote-and-name font-Av">
                        – Michel Richard
                      </h6>
                    </div>
                  </div>
                </Slider>
              </div>
              {/* <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
