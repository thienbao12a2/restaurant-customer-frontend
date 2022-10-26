import React from "react";
// import { useLocation } from "react-router-dom";
import OrderLayOut from "../layouts/OrderLayOut";
import { Container, Row, Tab } from "react-bootstrap";
import { CoverImage, FoodList, SideBar, CheckoutModal } from "../components";
import { Functions } from "../lib";

class Order extends React.Component {
  state = {
    menuItems: {},
    activeItems: {},
    activeCategory: "all",
    categories: [],
    defaultMenu: {},
    popularItems: {},
    selectedItems: [],
    showModal: false,
  };
  componentDidMount = async () => {
    const { API_GetRequest } = Functions;
    const response = await API_GetRequest.onGetMenuItems();
    const { data } = response;
    const allCategories = [
      "all",
      ...new Set(data.menu.map((item) => item.category)),
    ];
    const defaultMenu = data.menu;
    this.filterPopular(data.menu);
    this.setState({
      activeItems: defaultMenu,
      menuItems: defaultMenu,
      categories: allCategories,
    });
  };

  onOrderFood = async (selectedItems) => {
    console.log(selectedItems);
    const { API_PostRequest } = Functions;
    const response = await API_PostRequest.onOrderFood(selectedItems);
    console.log(response);
  };

  getQty = (item) => {
    const { selectedItems } = this.state;
    selectedItems.map((selectedItem) => {
      if (selectedItem._id === item._id) selectedItem.quantity = item.quantity;
    });
    this.setState({ selectedItems });
  };
  getStarValue = ({ value }) => {
    //console.log(quantity);
  };
  onSelectItems = (item) => {
    console.log(item);
    const { selectedItems } = this.state;
    this.setState({ selectedItems: [...selectedItems, item] });
  };
  onDeleteItems = (item) => {
    console.log("delete123", item);
    const { selectedItems } = this.state;
    // if (selectedItems.length <= 1) {
    //   this.setState({ selectedItems: [] });
    //   return;
    // }
    const updatedSelectedItems = selectedItems.filter(
      (selectedItem) => selectedItem._id !== item._id
    );
    console.log(updatedSelectedItems);
    this.setState({ selectedItems: updatedSelectedItems });
  };
  filterPopular = (items) => {
    const popularItems = items.filter((item) => item.popular === true);
    this.setState({ popularItems });
  };
  filterItems = (category) => {
    this.setState({ activeCategory: category });
    if (category === "all") {
      this.setState({ activeItems: this.state.menuItems });
      return;
    }
    const newItems = this.state.menuItems.filter(
      (item) => item.category === category
    );
    this.setState({ activeItems: newItems });
  };
  render() {
    console.log("selected", this.state.selectedItems);
    const {
      activeItems,
      popularItems,
      activeCategory,
      selectedItems,
      showModal,
    } = this.state;
    const fancyActiveCategory =
      activeCategory &&
      activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1);
    return (
      <OrderLayOut
        categories={this.state.categories}
        filterItems={this.filterItems}
        selectedItems={selectedItems}
        setShowModal={(open) => this.setState({ showModal: open })}
      >
        <CoverImage />
        <Tab.Container defaultActiveKey="first">
          <section className="offer-dedicated-body pt-2 pb-2 mt-4 mb-4">
            <Container>
              <Row>
                {activeItems.length > 0 && (
                  <FoodList
                    items={activeItems}
                    popularItems={popularItems}
                    getQty={this.getQty}
                    getStarValue={this.getStarValue}
                    activeCategory={fancyActiveCategory}
                    onSelectItems={this.onSelectItems}
                    onDeleteItems={this.onDeleteItems}
                    selectedItems={selectedItems}
                  />
                )}
                <SideBar
                  getQty={this.getQty}
                  selectedItems={selectedItems}
                  onDeleteItems={this.onDeleteItems}
                  setShowModal={(open) => this.setState({ showModal: open })}
                />
                <CheckoutModal
                  showModal={showModal}
                  setShowModal={(open) => this.setState({ showModal: open })}
                  selectedItems={selectedItems}
                />
              </Row>
            </Container>
          </section>
        </Tab.Container>
      </OrderLayOut>
    );
  }
}

export default Order;
