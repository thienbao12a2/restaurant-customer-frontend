import React from "react";

const Categories = ({ categories, filterItems, activeCategory }) => {
  return (
    <div className="container-fluid">
      <div className="row text-center">
        {categories.map((category, index) => {
          return (
            <div key={index} className="col-lg-3 col-md-6 col-sm-12">
              <button
                type="button"
                className={`${
                  activeCategory === category
                    ? "filter-btn menu-active "
                    : "filter-btn"
                }`}
                onClick={() => filterItems(category)}
              >
                {category}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
