import React from "react";
import { Container, Row, Col, Tab, Badge } from "react-bootstrap";
import ItemsCarousel from "./ItemsCarousel";
import Icofont from "react-icofont";
import MainList from "./MainList";

const FoodList = ({
  items,
  popularItems,
  getQty,
  getStarValue,
  activeCategory,
  onSelectItems,
  onDeleteItems,
  selectedItems,
}) => {
  return (
    // <Tab.Container defaultActiveKey="first">
    //   <section className="offer-dedicated-body pt-2 pb-2 mt-4 mb-4">
    //     <Container>
    //       <Row>
    <Col md={8}>
      <div className="offer-dedicated-body-left">
        <Tab.Content className="h-100">
          <Tab.Pane eventKey="first">
            <h5 className="mb-3">
              Most Popular{" "}
              <Badge variant="success">
                {" "}
                <Icofont icon="tags" /> 15% Off All Items{" "}
              </Badge>
            </h5>
            <ItemsCarousel
              items={popularItems}
              selectedItems={selectedItems}
              onSelectItems={onSelectItems}
            />
            <MainList
              items={items}
              getQty={getQty}
              getStarValue={getStarValue}
              activeCategory={activeCategory}
              onSelectItems={onSelectItems}
              onDeleteItems={onDeleteItems}
              selectedItems={selectedItems}
            />
          </Tab.Pane>
        </Tab.Content>
      </div>
    </Col>
    //       </Row>
    //     </Container>
    //   </section>
    // </Tab.Container>
  );
};

export default FoodList;
