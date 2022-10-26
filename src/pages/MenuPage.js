import React from "react";
import LayOut from "../layouts/LayOut";
import { Menu, CoverImage } from "../components";

const MenuPage = () => {
  return (
    <LayOut>
      <React.Fragment>
        <CoverImage />
        <Menu />
      </React.Fragment>
    </LayOut>
  );
};

export default MenuPage;
