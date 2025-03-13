import { useContext, useState, useEffect } from "react";
import HeartIcon from "../../../src/assets/heart.svg";
import RedHeartIcon from "../../assets/heart-red.svg";
import { FavoriteContext, WeatherContext } from "../../contexts";

export default function AddToFavorite() {
  const { favorites, addToFavorites, removeFromFavorites } =
    useContext(FavoriteContext);
  const { weatherData } = useContext(WeatherContext);
  const [isFavorite, toggleFavorite] = useState(false);
  const { latitude, longitude, location } = weatherData;

  const handleFavorites = () => {
    const found = favorites?.find(
      (favorite) => favorite?.location === location
    );
    if (!found) {
      addToFavorites(latitude, longitude, location);
    } else {
      removeFromFavorites(location);
    }
    toggleFavorite(!isFavorite);
  };

  useEffect(() => {
    const found = favorites.find((favorite) => favorite.location === location);
    toggleFavorite(found);
  });

  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button
          className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
          onClick={handleFavorites}
        >
          <span>Add to Favourite</span>
          <img src={isFavorite ? RedHeartIcon : HeartIcon} alt="heart" />
        </button>
      </div>
    </div>
  );
}
