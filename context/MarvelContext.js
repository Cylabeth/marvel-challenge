import React, { createContext, useContext, useState, useEffect } from 'react';

const MarvelContext = createContext();

export function useMarvelContext() {
    return useContext(MarvelContext);
}

export const MarvelProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);
    const [showFavorites, setShowFavorites] = useState(false);

  useEffect(() => {
      const storedFavorites = localStorage.getItem('favorites');
      if (storedFavorites) {
          setFavorites(JSON.parse(storedFavorites));
      }
  }, []);

  const toggleFavoritesFilter = () => {
    setShowFavorites(!showFavorites);
  };

  const addFav = (characterId) => {
        const id = characterId.toString();
        if (!favorites.includes(id)) {
          const updatedFavorites = [...favorites, id];
          localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
          setFavorites(updatedFavorites);
        }
  };

  const removeFav = (characterId) => {
        const id = characterId.toString();
        const updatedFavorites = favorites.filter(favId => favId !== id);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        setFavorites(updatedFavorites);
  };

    return (
        <MarvelContext.Provider value={{ favorites, addFav, removeFav, showFavorites, toggleFavoritesFilter, setShowFavorites}}>
            {children}
        </MarvelContext.Provider>
    );
};
