import { FavoriteContext } from "../contexts";
import StorageKeys from "../enum/StorageKeys";
import { useLocalStorage } from "../hooks";

const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useLocalStorage(StorageKeys.favorites, []);

  const addToFavorites = (latitude, longitude, location) => {
    setFavorites([...favorites, { latitude, longitude, location }]);
  };

  const removeFromFavorites = (location) => {
    const restFavorites = favorites.filter(
      (favorite) => favorite?.location !== location
    );
    setFavorites(restFavorites);
  };

  return (
    <FavoriteContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteProvider;
