import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { fetchCharacterById, fetchComicsById } from '../../services/marvelService'; 
import styles from '../../styles/CharacterDetail.module.css';
import Header from '../../components/Header/Header';
import FavoriteHeart from '../../components/FavoriteHeart/FavoriteHeart';
import { useMarvelContext } from '../../context/MarvelContext';
import Image from 'next/image';


//Para obtener solo el año de salida del cómic
const getOnSaleDate = (dates) => {
    const onSaleDate = dates.find(date => date.type === 'onsaleDate');
    return onSaleDate ? onSaleDate.date : 'Unknown';
};

const CharacterDetail = ({ character, comics }) => {
    const { id } = useRouter().query;  
    const { favorites, addFav, removeFav } = useMarvelContext();
    const [ isFavorited, setIsFavorited ] = useState(false);

    useEffect(() => {
        const stringId = id.toString();
        const checkFavoriteStatus = () => {
            setIsFavorited(favorites.includes(stringId));
        };
        checkFavoriteStatus();
    
        const favSub = window.addEventListener('storage', checkFavoriteStatus);
        const favFocus = window.addEventListener('focus', checkFavoriteStatus);
        return () => {
            window.removeEventListener('focus', favFocus);
            window.removeEventListener('storage', favSub);
        };
    }, [id, favorites]);
        
    return (
            <>
            <Header /> 
                <div className={styles.characterBanner}>
                    <div className={styles.characterBannerContent}>
                    <div className={styles.characterImageContainer}>
                        <Image
                            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                            alt={character.name}
                            fill 
                            priority
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                        <div className={styles.characterInfo}>
                            <div className={styles.characterGroup}>
                                <h1 className={styles.characterName}>{character.name}</h1>
                                <FavoriteHeart 
                                   width={30} 
                                   height={32}
                                   characterId={id.toString()}
                                   isFavorited={isFavorited}
                                   toggleFavorite={() => {
                                        const newState = !isFavorited;
                                        setIsFavorited(newState);
                                        newState ? addFav(id.toString()) : removeFav(id.toString());
                                    }}                                
                                />
                            </div>
                            <p>{character.description || 'No description available.'}</p>
                        </div>
                    </div>
                </div>
                <h2 className={styles.characterSubtitle}>Comics</h2>
                <div className={styles.comicsContainer}>
                    {comics.sort((a, b) => {
                        new Date(b.dates.find(date => 
                            date.type === 'onsaleDate').date) - new Date(a.dates.find(date => 
                            date.type === 'onsaleDate').date)})
                        .map((comic, index) => (
                        <div key={index} className={styles.comic}>
                        <Image src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={comic.title} width={180} height={270}/>
                        <div>
                            <p className={styles.comicInfo}>{comic.title}</p>
                            <p className={styles.comicYear}>{new Date(getOnSaleDate(comic.dates)).getFullYear()}</p>
                        </div>
                        </div>
                    ))}
                </div>
            </>
    );

    };

export async function getServerSideProps(context) {
  const { id } = context.params;
  const character = await fetchCharacterById(id);
  const comics = await fetchComicsById(id)
  return {
    props: { character, comics },
  };
}

export default CharacterDetail;