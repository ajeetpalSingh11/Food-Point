import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import resList from "../utils/mockData";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import { SWIGGY_API } from "../utils/constants";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API);

    const json = await data.json();

    console.log(json);
    //optional chaining
    setListOfRestaurants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  // const fetchData = () => {
  //   const data = fetch(
  //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7333148&lng=76.7794179&page_type=DESKTOP_WEB_LISTING"
  //   )
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     })
  //     .then((res) => {
  //       console.log(res.data.cards[2].data.data.cards);
  //       setListOfRestaurants(res.data.cards[2].data.data.cards);
  //     });
  // };

  if (useOnlineStatus() === false) {
    return <h1>You are offline.Please check your internet connection!</h1>;
  }

  const { loggedUser, setUserName } = useContext(UserContext);

  //Conditional Rendering

  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search p-4 m-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="m-4 bg-green-100 px-4 py-2 rounded-lg"
            onClick={() => {
              const searchRes = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurants(searchRes);
            }}
          >
            Search
          </button>
        </div>
        <div className="search p-4 m-4">
          <button
            className="bg-gray-100 px-4 py-2 rounded-lg"
            onClick={() => {
              const filteredRes = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4
              );

              setFilteredRestaurants(filteredRes);
            }}
          >
            Top rated Restaurants
          </button>
          <button
            className="m-4 bg-green-100 px-4 py-2 rounded-lg"
            onClick={() => {
              setFilteredRestaurants(listOfRestaurants);
              setSearchText("");
            }}
          >
            Reset
          </button>
        </div>

        <div className="search p-4 m-8">
          <label>UserName :</label>
          <input
            type="text"
            className="border border-solid border-black p-2"
            value={loggedUser}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants?.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info.isOpen ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
