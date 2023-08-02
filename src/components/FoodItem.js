import { useDispatch } from "react-redux";
import { removeItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const FoodItem = (props) => {
  const { itemData } = props;

  const { name, category, price, defaultPrice, imageId, id } = itemData;

  const dispatch = useDispatch();

  handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div className="m-4 p-4 w-[230px] bg-gray-300 rounded-lg hover:bg-gray-300">
      <img className="rounded-lg" alt="res-logo" src={CDN_URL + imageId} />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{category}</h4>
      <h4>₹{price / 100 || defaultPrice / 100}</h4>
      <button
        className="bg-red-700 mx-8 m-2 text-white px-4 py-2 rounded-lg shadow-lg font-semibold"
        onClick={() => handleRemoveItem(id)}
      >
        Remove Item
      </button>
    </div>
  );
};

export default FoodItem;
