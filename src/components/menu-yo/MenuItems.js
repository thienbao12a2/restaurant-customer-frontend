import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
const MenuItems = ({ items }) => {
  // const renderMenuItem = items.map((item, index) => {
  //   const { item_name, price, description } = item;
  //   return (
  //     <li className="d-flex align-items-start">
  //       <div className="leftbar">
  //         <h5>{item_name}</h5>
  //         <p className="item-text">{description}</p>
  //       </div>
  //       <div className="rightbar d-flex align-items-center">
  //         {/* <i className="fa fa-caret-right" aria-hidden="true"></i> */}
  //         <FontAwesomeIcon icon={faCaretRight} />
  //         <h5>${price}</h5>
  //       </div>
  //     </li>
  //   );
  // });
  return (
    <div className="menu-body">
      <h5 className="title">Empire Steakhouse</h5>
      <div className="section-center">
        {items.map((item, index) => {
          const { item_name, price, description } = item;
          return (
            <div key={index} className="menu-item">
              <div className="leftbar">
                <h5>{item_name}</h5>
              </div>
              <div className="rightbar">
                <FontAwesomeIcon icon={faCaretRight} />
                <h5>${price}</h5>
              </div>
              <p className="item-text">{description}</p>
            </div>
          );
        })}
      </div>
    </div>
    // <div className="menubar">
    //   <div class="row">
    //     <div class="col-lg-6 col-md-12">
    //       <div class="white-bg border-gray border-1 menu-in text-start pt-4 pe-5 ps-5 pb-4 mb-4">
    //         <h5 class="mb-4 cursive-title primary">Entries</h5>
    //         <ul class="menu-listing">{renderMenuItem}</ul>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default MenuItems;
