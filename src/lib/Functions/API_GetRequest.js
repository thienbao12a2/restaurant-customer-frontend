import axios from "axios";

const onGetMenuItems = async () => {
  const response = await axios.get(
    "http://127.0.0.1:8000/api/v1/my-restaurant/menu"
  );
  const { data } = response;
  return data;
};

const onGetStoreHours = async () => {
  const response = await axios.get(
    "http://127.0.0.1:8000/api/v1/my-restaurant/hours"
  );
  const { data } = response;
  return data;
};

const onGetGallery = async () => {
  const response = await axios.get(
    "http://127.0.0.1:8000/api/v1/my-restaurant/gallery"
  );
  const { data } = response;
  return data;
};

export default { onGetMenuItems, onGetStoreHours, onGetGallery };
