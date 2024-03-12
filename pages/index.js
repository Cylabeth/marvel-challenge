import React, { useEffect, useState } from 'react';
import { fetchCharacters } from '../services/marvelService';
import FavoriteHeart from '../components/FavoriteHeart/FavoriteHeart';
import Header from '../components/Header/Header'
import Link from 'next/link';
import Image from 'next/image';
import { useMarvelContext } from '../context/MarvelContext'; 


const Home = ()  => {
    const [characters, setCharacters] = useState([]);
    const [hoveredCardId, setHoveredCardId] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const { favorites, addFav, removeFav, showFavorites } = useMarvelContext();
    const [isLoading, setIsLoading] = useState(true);
    const [imageSize, setImageSize] = useState({ width: 162, height: 157 });


    useEffect(() => {
        const loadCharacters = async () => {
            const fetchedCharacters = await fetchCharacters();
            setCharacters(fetchedCharacters.map(character => ({
                ...character,
                id: character.id.toString()
              })));
            setIsLoading(false); 
        };

        loadCharacters();
        
    },[]);
    
    useEffect(() => {
        const updateImageSize = () => {
            if (window.innerWidth < 640) {
                setImageSize({ width: 162, height: 157 });
            } else {
                setImageSize({ width: 190, height: 185 });
            }
        };

        updateImageSize();
        window.addEventListener('resize', updateImageSize);
        return () => window.removeEventListener('resize', updateImageSize);
    }, []);


    const splitName = (name) => {
        return name.split(/\((.*)\)/)
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const displayedCharacters = characters.filter(character => {
        return showFavorites ? favorites.includes(character.id) : true;
    }).filter(character => character.name.toLowerCase().includes(searchTerm.toLowerCase()));    

    return (
        <div>
            <Header loading={isLoading}/>
            {showFavorites &&  <h2 className="character-favs">Favorites</h2>}
            <div className="search-container">
                <input
                    className='search-bar'
                    type="text"
                    placeholder="SEARCH A CHARACTER..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
            </div>
            <p className="results-counter">{displayedCharacters.length} results</p>
            <div className="characters-grid">       
            {displayedCharacters && displayedCharacters.map((character) => (
                <Link key={character.id} href={`/characters/${character.id}`} passHref>
                    <div key={character.id} className="character-card" onMouseEnter={() => setHoveredCardId(character.id)} onMouseLeave={() => setHoveredCardId(null)}>
                        <div className="character-img" >
                            <Image src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} width={imageSize.width} height={imageSize.height} priority/>
                        </div>
                        <div className="character-data">
                            <h3>{splitName(character.name)[0]}</h3>
                            <FavoriteHeart 
                                    characterId={character.id.toString()}
                                    isFavorited={favorites.includes(character.id.toString())}
                                    toggleFavorite={() => favorites.includes(character.id.toString()) ? removeFav(character.id.toString()) : addFav(character.id.toString())}
                                    isParentHovered={hoveredCardId === character.id}
                            />
                        </div>    
                    </div>
                </Link>
            ))}
            </div>
        </div>
    );
};

export default Home;