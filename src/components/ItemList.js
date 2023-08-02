import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
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
              <div className="bg-gray-500 mx-10 mt-16 text-white p-2 rounded-lg absolute shadow-lg">
                <button onClick={() => handleAddItem(item.card.info)}>
                  Add +
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
