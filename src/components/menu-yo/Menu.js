import React, { useState, useEffect } from "react";
import MenuItems from "./MenuItems";
import Categories from "./Categories";
import { Functions } from "../../lib";

const { API_GetRequest } = Functions;
const Menu = () => {
  const [menuItems, setMenuItems] = useState({});
  const [activeItems, setActiveItems] = useState();
  const [activeCategory, setActiveCategory] = useState("appetizers");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await API_GetRequest.onGetMenuItems();
      const { data } = response;
      const allCategories = [
        ...new Set(data.menu.map((item) => item.category)),
      ];
      const defaultMenu = data.menu.filter(
        (item) => item.category === "appetizers"
      );
      setActiveItems(defaultMenu);
      setMenuItems(data.menu);
      setCategories(allCategories);
    })();
  }, []);
  const filterItems = (category) => {
    setActiveCategory(category);
    const newItems = menuItems.filter((item) => item.category === category);
    setActiveItems(newItems);
  };
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>{window.location.pathname === "/menu" ? "" : "Our Menu"}</h2>
        </div>
        <Categories
          categories={categories}
          activeCategory={activeCategory}
          filterItems={filterItems}
        />
        {activeItems && <MenuItems items={activeItems} />}
      </section>
    </main>
  );
};

export default Menu;
