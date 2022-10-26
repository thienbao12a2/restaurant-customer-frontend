import React from "react";

const CoverImage = () => {
  return (
    <section className="cover-image border-zigzag-up parallex">
      <div className="container text-center">
        <h4 className="text-white">
          {window.location.pathname.replace(
            "/",
            window.location.pathname === "/menu" ? "Our " : ""
          )}
          {window.location.pathname === "/contact" ? " Us" : ""}
        </h4>
      </div>
    </section>
  );
};

export default CoverImage;
