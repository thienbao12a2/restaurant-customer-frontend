import React, { useState, useEffect } from "react";
import LayOut from "../layouts/LayOut";
import { CoverImage, ImageList } from "../components";
import { Functions } from "../lib";

const { API_GetRequest } = Functions;
const GalleryPage = () => {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await API_GetRequest.onGetGallery();
      const { data } = response;
      setGallery(data.gallery);
    })();
  }, []);
  return (
    <LayOut>
      <CoverImage />
      <ImageList images={gallery} />
    </LayOut>
  );
};

export default GalleryPage;
