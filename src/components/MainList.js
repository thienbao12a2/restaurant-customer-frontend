import React from "react";
import { images } from "../assets";
import Item from "./Item";
import { Row, Col } from "react-bootstrap";
class MainList extends React.Component {
  renderItem() {
    const { getQty, items, onSelectItems, onDeleteItems, selectedItems } =
      this.props;
    return items.map((item, index) => {
      return (
        <Col md={4} sm={6} className="mb-4" key={index}>
          <Item
            id={index}
            item={item}
            title={item.item_name}
            // subTitle={items[0].description}
            imageAlt="food-item"
            image={item.item_image}
            imageClass="img-fluid item-img"
            price={item.price}
            priceUnit="$"
            isNew={item.new}
            showPromoted={item.promoted}
            promotedVariant="dark"
            favIcoIconColor="text-danger"
            // rating="3.1 (300+)"
            getValue={getQty}
            onSelectItems={onSelectItems}
            onDeleteItems={onDeleteItems}
            selectedItems={selectedItems}
          />
        </Col>
      );
    });
  }
  render() {
    const { activeCategory } = this.props;
    return (
      <Row>
        <h5 className="mb-4 mt-3 col-md-12">{activeCategory}</h5>
        {this.renderItem()}
      </Row>
    );
  }
}

export default MainList;
