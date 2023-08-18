import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const FoodItem = (props) => {
  const { itemData } = props;

  const { name, category, price, defaultPrice, imageId, id } = itemData;

  const storeItems = useSelector((store) => store.cart.items);

  const count = storeItems.filter((obj) => obj.id === id)[0].count;
  const dispatch = useDispatch();

  handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div className="m-4 p-4 w-[250px] h-[400px] bg-gray-300 rounded-lg hover:bg-gray-300 relative">
      <div>
        <img className="rounded-lg" alt="res-logo" src={CDN_URL + imageId} />
        <h3 className="font-semibold py-4 text-lg">{name}</h3>
        <div className="font-bold">Count: {count}</div>
        <h3 className="py-2 font-bold">
          Price: ₹{(price / 100) * count || (defaultPrice / 100) * count}
        </h3>
      </div>
      <button
        className="bg-red-700 mx-8 m-2 text-white px-4 py-2 absolute bottom-2 rounded-lg shadow-lg font-semibold"
        onClick={() => handleRemoveItem(id)}
      >
        Remove Item
      </button>
    </div>
  );
};

export default FoodItem;
