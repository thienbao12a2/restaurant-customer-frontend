import React from "react";
import OwlCarousel from "react-owl-carousel3";
import "../../node_modules/owl.carousel/dist/assets/owl.carousel.css";
import "../../node_modules/owl.carousel/dist/assets/owl.theme.default.css";
import MayLikeItem from "./MayLikeItem";

class ItemsCarousel extends React.Component {
  renderItems() {
    const { items, selectedItems, onSelectItems } = this.props;
    return items.map((item, index) => {
      return (
        <div className="item " key={index}>
          <MayLikeItem
            item={item}
            title={item.item_name}
            price={`$${item.price}`}
            image={item.item_image}
            imageClass="img-fluid image-carousel"
            imageAlt="carousel"
            selectedItems={selectedItems}
            onSelectItems={onSelectItems}
          />
        </div>
      );
    });
  }
  render() {
    const { items } = this.props;
    return (
      <OwlCarousel
        nav
        loop
        {...options}
        className="owl-theme owl-height owl-carousel-five offers-interested-carousel text-center"
      >
        {items.length > 0 && this.renderItems()}
      </OwlCarousel>
    );
  }
}

const options = {
  responsive: {
    0: {
      items: 2,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 4,
    },
    1200: {
      items: 5,
    },
  },
  lazyLoad: true,
  startPosition: 1,
  pagination: "true",
  loop: true,
  dots: false,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  nav: true,
  navText: [
    "<i class='icofont-thin-left'></i>",
    "<i class='icofont-thin-right'></i>",
  ],
};

export default ItemsCarousel;
