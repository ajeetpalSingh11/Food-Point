import { useDispatch, useSelector } from "react-redux";
import { addItem, decreaseItem, removeItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";
import { useState } from "react";

const ItemList = ({ items }) => {
  const [btnClicked, setBtnClicked] = useState(false);
  const dispatch = useDispatch();

  const storeItems = useSelector((store) => store.cart.items);

  const handleAddItem = (item) => {
    setBtnClicked(true);
    dispatch(addItem(item));
  };

  const handleRemoveItem = (id) => {
    setBtnClicked(true);
    dispatch(removeItem(id));
  };

  return (
    <div>
      {items.map((item) => {
        return (
          <div
            key={item.card.info.id}
            className="text-left border-gray-200 border-b-2 p-2 m-2 flex"
          >
            <div className="py-2 w-9/12">
              <div>
                <div className="font-semibold">{item.card.info.name}</div>
                <div>
                  ₹
                  {item.card.info.price / 100 ||
                    item.card.info.defaultPrice / 100}
                </div>
              </div>
              <p className="text-sm py-2">{item.card.info.description}</p>
            </div>

            <div className="w-3/12 p-2">
              <div className="bg-gray-500 w-24 flex justify-evenly mx-6 mt-16 text-white p-2 rounded-lg absolute shadow-lg">
                <button
                  onClick={() => handleRemoveItem(item.card.info.id)}
                  className="px-2"
                >
                  -
                </button>
                <span>
                  {storeItems.filter((obj) => obj.id === item.card.info.id)
                    .length === 0
                    ? "Add"
                    : storeItems.filter(
                        (obj) => obj.id === item.card.info.id
                      )[0].count}
                </span>
                <button
                  onClick={() => handleAddItem(item.card.info)}
                  className="px-2"
                >
                  +
                </button>
              </div>
              <img
                src={CDN_URL + item.card.info.imageId}
                className="w-40 rounded-lg"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
