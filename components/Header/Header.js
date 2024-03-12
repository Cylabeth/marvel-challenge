import React from 'react';
import styles from '../../styles/Header.module.css';
import { useMarvelContext } from '../../context/MarvelContext'; 
import { useRouter } from 'next/router'; 
import Image from 'next/image';


const Header = ({ loading}) => {
  const { favorites, toggleFavoritesFilter, setShowFavorites } = useMarvelContext();
  const router = useRouter(); 

  const handleLogoClick = () => {
    setShowFavorites(false); // Reseteamos el filtro de favoritos cuando se hace click en el logo de Marvel
    router.push('/'); 
  };

  const handleFavoriteClick = () => {
    toggleFavoritesFilter(); // Filtro de favoritos...
    if(router.pathname !== '/') {
      router.push('/');
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer} onClick={handleLogoClick}>
          <Image src="/images/marvel-logo.svg" alt="Marvel Logo" className={styles.logo} width={130} height={52}/>
      </div>
      <div className={styles.favorites} onClick={handleFavoriteClick}>
          <Image src="/images/big-heart.svg" alt="Favorites" className={styles.heartIcon} width={26} height={24}/>
          <span className={styles.favoritesCount}>{favorites.length}</span>
      </div>
      <div className={`${styles.loadingBar} ${!loading && styles.hidden}`} id="loadingBar"></div>
    </header>
  );
};

export default Header;
