import axios from "axios";

const onBookTable = async (params) => {
  const response = await axios.post(
    "http://127.0.0.1:8000/api/v1/my-restaurant/booking",
    params
  );
  const { data } = response;
  return data;
};

const onOrderFood = async (params) => {
  const response = await axios.post(
    "http://127.0.0.1:8000/api/v1/my-restaurant/order",
    { orderDetails: params }
  );
  const { data } = response;
  return data;
};

const onContactRestaurant = async (params) => {
  const response = await axios.post(
    "http://127.0.0.1:8000/api/v1/my-restaurant/contactRestaurant",
    params
  );
  const { data } = response;
  return data;
};
export default { onBookTable, onOrderFood, onContactRestaurant };
