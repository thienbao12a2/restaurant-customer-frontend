import React from "react";
import Swiper from "react-id-swiper";
import { Link } from "react-router-dom";
import { images } from "../assets";
import "swiper/css/swiper.css";

class Slides extends React.Component {
  render() {
    const { slide1_1, slide2_1, slide4_1 } = images;
    const slideImages = [
      {
        img: slide1_1,
        smallTitle: "2021 Eater New York Award",
        title: "Welcome to Empire Steak House",
        description:
          "Empire Steak House is a New York City fixture for the finest cuts of steak, fresh seafood, and an expertly-curated wine list. Famouse for our USDA Prime Dry-Aged Porterhouse, our guests are treated to some of the best cuts meat in the city. And with over 400 different wines to choose from, there's a pairing for each and every plate.",
      },
      {
        img: slide2_1,
        smallTitle: "2021 Eater Atlanta Award",
        title: "A huge variety fruits & vegetables.",
        description:
          "As quas equidem noluisse et, ex pro semper fierent oporteat. Te epic urei ullam corper usu, eos et voluptaria rationibus. Usu cu eligendi ad ipisci sed  altera dae reformidans ea, inermis ration ibus necessitatibus eu eum.",
      },
      {
        img: slide4_1,
        smallTitle: "2021 Eater Atlanta Award",
        title: "A huge variety fruits & vegetables.",
        description:
          "As quas equidem noluisse et, ex pro semper fierent oporteat. Te epic urei ullam corper usu, eos et voluptaria rationibus. Usu cu eligendi ad ipisci sed  altera dae reformidans ea, inermis ration ibus necessitatibus eu eum.",
      },
    ];

    const properties = {
      slidesPerView: 1,
      loop: true,
      speed: 1000,
      watchSlidesVisibility: true,
      effect: "slide",
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
      navigation: {
        nextEl: ".st-swiper-button-next",
        prevEl: ".st-swiper-button-prev",
      },
      renderPrevButton: () => (
        <div className="st-swiper-button-prev st-swiper-button-nav d-none d-xl-block">
          <i className="icon-glyph-205" />
        </div>
      ),
      renderNextButton: () => (
        <div className="st-swiper-button-next st-swiper-button-nav d-none d-xl-block">
          <i className="icon-glyph-204" />
          123
        </div>
      ),
      autoplay: {
        delay: 5000,
      },
    };

    const ImageGalleryDataList = slideImages.map((element, i) => {
      return (
        <div
          className="single_slider slide_bg_1"
          style={{ backgroundImage: `url(${element.img})` }}
          key={i}
        >
          <div className="slider_item_tb">
            <div className="slider_item_tbcell">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 col-sm-12">
                    <h5>{element.smallTitle}</h5>
                    <h2>{element.title}</h2>
                    <p>{element.description}</p>
                    <div className="slider_btn animated fadeInDown">
                      <Link to="/contact" className="slider_btn_one more-link">
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className="slides_wrapper">
        <div className="slider_home">
          <Swiper {...properties}>{ImageGalleryDataList}</Swiper>
        </div>
      </div>
    );
  }
}

export default Slides;
