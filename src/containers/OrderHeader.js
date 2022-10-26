import React from "react";
import { NavLink, Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Image,
  Badge,
  Button,
} from "react-bootstrap";
import { DropDown, CartDropdownHeader, CartDropdownItem } from "../components";
import Icofont from "react-icofont";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { images } from "../assets";
// import { Button } from "react-bootstrap/lib/InputGroup";

const { logo1 } = images;
class OrderHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavExpanded: false,
    };
  }
  setIsNavExpanded = (isNavExpanded) => {
    this.setState({ isNavExpanded: isNavExpanded });
  };
  closeMenu = () => {
    this.setState({ isNavExpanded: false });
  };

  handleClick = (e) => {
    if (this.node.contains(e.target)) {
      // if clicked inside menu do something
    } else {
      // If clicked outside menu, close the navbar.
      this.setState({ isNavExpanded: false });
    }
  };

  // componentDidMount = () => {};
  // componentWillUnmount() {}
  renderOrderMenuType() {
    const { categories, filterItems } = this.props;
    return categories.map((category, index) => {
      return (
        <NavDropdown.Item
          key={index}
          eventKey={2.1}
          // as={NavLink}
          activeclassname="active"
          // to="/listing"
          onClick={() => filterItems(category)}
          className="menu-dropdown"
        >
          {category}
        </NavDropdown.Item>
      );
    });
  }
  calculateSubtotal() {
    const { selectedItems } = this.props;
    let subTotal = 0;
    selectedItems.map(({ price, quantity }) => {
      subTotal = subTotal + price * quantity;
    });
    return subTotal;
  }
  renderSelectedItems() {
    const { selectedItems } = this.props;
    return selectedItems.map((item, index) => {
      return (
        <React.Fragment key={index}>
          <CartDropdownItem
            icoIcon="ui-press"
            iconClass="text-success food-item"
            quantity={item.quantity}
            title={item.item_name}
            price={`$${(item.price * item.quantity).toFixed(2)}`}
          />
        </React.Fragment>
      );
    });
  }

  render() {
    const { selectedItems, setShowModal } = this.props;
    return (
      <div
        ref={(node) => (this.node = node)}
        style={{
          background: "rgba(46, 45, 45, 0.952)",
          position: "sticky",
          zIndex: "999",
          textAlign: "center",
        }}
      >
        <Navbar
          onToggle={this.setIsNavExpanded}
          expanded={this.state.isNavExpanded}
          color="light"
          expand="lg"
          // className="navbar-light osahan-nav shadow-sm px-0 py-0 "
          className="shadow-sm px-0 py-0"
        >
          <Container
            style={{
              height: "75px",
            }}
          >
            <NavLink to="/">
              <Image
                src={logo1}
                alt="logo"
                style={{ height: "75px", width: "auto" }}
              />
            </NavLink>
            <Navbar.Toggle /> {/*Hamburger menu*/}
            <Navbar.Collapse
              id="navbarNavDropdown"
              // style={{ background: "white", color: "red" }}
            >
              <Nav
                activeKey={0}
                className="ml-auto order-nav"
                onSelect={this.closeMenu}
              >
                {/* <Nav.Link
                  eventKey={0}
                  as={NavLink}
                  activeclassname="active"
                  exact="true"
                  to="/"
                  className="order-nav"
                >
                  Home <span className="sr-only">(current)</span>
                </Nav.Link> */}
                {/* <Nav.Link
                  eventKey={1}
                  as={NavLink}
                  activeclassname="active"
                  to="/offers"
                  className="order-nav"
                >
                  <Icofont icon="sale-discount" /> Offers{" "}
                  <Badge variant="danger">New</Badge>
                </Nav.Link> */}
                <NavDropdown
                  title={<span className="order-nav ">Menu</span>}
                  alignRight
                  className="border-0"
                >
                  {/* <NavDropdown.Item
                    eventKey={2.1}
                    as={NavLink}
                    activeclassname="active"
                    to="/listing"
                  >
                    Listing
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    eventKey={2.2}
                    as={NavLink}
                    activeclassname="active"
                    to="/detail"
                  >
                    Detail + Cart
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    eventKey={2.3}
                    as={NavLink}
                    activeclassname="active"
                    to="/checkout"
                  >
                    Checkout
                  </NavDropdown.Item> */}
                  {this.renderOrderMenuType()}
                </NavDropdown>
                {/* <NavDropdown
                  title={<span className="order-nav ">Pages</span>}
                  alignRight
                >
                  <NavDropdown.Item
                    eventKey={3.1}
                    as={NavLink}
                    activeclassname="active"
                    to="/track-order"
                  >
                    Track Order
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    eventKey={3.2}
                    as={NavLink}
                    activeclassname="active"
                    to="/invoice"
                  >
                    Invoice
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    eventKey={3.3}
                    as={NavLink}
                    activeclassname="active"
                    to="/login"
                  >
                    Login
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    eventKey={3.4}
                    as={NavLink}
                    activeclassname="active"
                    to="/register"
                  >
                    Register
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    eventKey={3.5}
                    as={NavLink}
                    activeclassname="active"
                    to="/404"
                  >
                    404
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    eventKey={3.6}
                    as={NavLink}
                    activeclassname="active"
                    to="/extra"
                  >
                    Extra
                  </NavDropdown.Item>
                </NavDropdown> */}
                {/* <NavDropdown
                  alignRight
                  title={
                    <DropDown
                      className="d-inline-block"
                      image="img/user/4.png"
                      imageAlt="user"
                      imageClass="nav-osahan-pic rounded-pill"
                      title="My Account"
                    />
                  }
                >
                  <NavDropdown.Item
                    eventKey={4.1}
                    as={NavLink}
                    activeclassname="active"
                    to="/myaccount/orders"
                  >
                    <Icofont icon="food-cart" /> Orders
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    eventKey={4.2}
                    as={NavLink}
                    activeclassname="active"
                    to="/myaccount/offers"
                  >
                    <Icofont icon="sale-discount" /> Offers
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    eventKey={4.3}
                    as={NavLink}
                    activeclassname="active"
                    to="/myaccount/favourites"
                  >
                    <Icofont icon="heart" /> Favourites
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    eventKey={4.4}
                    as={NavLink}
                    activeclassname="active"
                    to="/myaccount/payments"
                  >
                    <Icofont icon="credit-card" /> Payments
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    eventKey={4.5}
                    as={NavLink}
                    activeclassname="active"
                    to="/myaccount/addresses"
                  >
                    <Icofont icon="location-pin" /> Addresses
                  </NavDropdown.Item>
                </NavDropdown> */}
                <NavDropdown
                  activeclassname="active"
                  alignRight
                  className="dropdown-cart"
                  title={
                    <DropDown
                      className="d-inline-block order-nav"
                      faIcon={faCartShopping}
                      iconClass="mr-1"
                      title="Cart"
                      badgeClass="ml-1"
                      badgeVariant="success"
                      badgeValue={selectedItems.length}
                    />
                  }
                >
                  <div className="dropdown-cart-top  shadow-sm">
                    {
                      <CartDropdownHeader
                        className="dropdown-cart-top-header p-4"
                        title="Empire Steakhouse"
                        subTitle="151 E 50th St, New York, NY 10022"
                        image={logo1}
                        imageClass="img-fluid mr-3"
                        imageAlt="osahan"
                        NavLinkUrl="#"
                        NavLinkText="View Full Menu"
                      />
                    }
                    <div className="dropdown-cart-top-body border-top p-4">
                      {this.renderSelectedItems()}
                    </div>
                    <div className="dropdown-cart-top-footer border-top p-4">
                      <p className="mb-0 font-weight-bold text-secondary">
                        Sub Total{" "}
                        <span className="float-right text-dark">
                          {`$${this.calculateSubtotal().toFixed(2)}`}
                        </span>
                      </p>
                      <small className="text-info">
                        Extra charges may apply
                      </small>
                    </div>
                    <div className="dropdown-cart-top-footer border-top p-2">
                      <Button
                        // eventKey={5.1}
                        // as={Link}
                        className="btn btn-success btn-block py-3 text-white text-center dropdown-item"
                        // to="/checkout"
                        onClick={() => setShowModal(true)}
                      >
                        {" "}
                        Order For Pickup
                      </Button>
                    </div>
                  </div>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default OrderHeader;
