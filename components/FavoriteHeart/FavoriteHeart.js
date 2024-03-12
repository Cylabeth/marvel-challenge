import React from 'react';
import styles from '../../styles/FavoriteHeart.module.css';
import Image from 'next/image';
import { useMarvelContext } from '../../context/MarvelContext';

const FavoriteHeart = ({ characterId, isParentHovered,  width = 15, height = 14  }) => {
    const { favorites, addFav, removeFav } = useMarvelContext(); // Uso del contexto para manejar los favoritos
    const isFavorited = favorites.includes(characterId); // Si ese personaje es favorito...

  const handleClick = (event) => {
    // Esto evita que, al darle click al corazón para seleccionar el personaje como favorito, 
    //se redirija automáticamente a la descripción del personaje
    event.stopPropagation(); 
    event.preventDefault(); 
    isFavorited ? removeFav(characterId) : addFav(characterId);
  };

  
  let heartSrc = "/images/heart.svg";
  if (isFavorited && !isParentHovered) {
    heartSrc = "/images/heart-filled.svg"; 
  } else if (isFavorited && isParentHovered) {
    heartSrc = "/images/heart-white.svg"; // El corazón blanco es para el hover del detalle de la tarjeta del personaje
  }

  return (
    <div className={styles.heartContainer} onClick={handleClick}>
      <Image className={styles.heart} src={heartSrc} alt="Favorite" width={width} height={height} />
    </div>
  );
};

export default FavoriteHeart;
