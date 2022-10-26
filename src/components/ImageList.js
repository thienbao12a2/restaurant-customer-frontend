import React from "react";
import ImageCard from "./ImageCard";

const ImageList = ({ images }) => {
  const gallery = images.map((image) => {
    return <ImageCard key={image._id} image={image} />;
  });
  return <div className="image-list">{gallery}</div>;
};

export default ImageList;
