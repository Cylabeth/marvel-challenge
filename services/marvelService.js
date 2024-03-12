/* eslint-disable no-undef */

/* Dado que la API key no esta asociada a ninguna información sensible, y solo a fin de completar
el challenge, se han expuesto la public key y el hash en la parte del cliente.*/

const API_URL = 'http://gateway.marvel.com/v1/public/characters';
const PUBLIC_KEY = NEXT_PUBLIC_MARVEL_PUBLIC_KEY;
const HASH = NEXT_PUBLIC_MARVEL_HASH;

export const fetchCharacters = async () => {
    try {
        const response = await fetch(`${API_URL}?ts=1&apikey=${PUBLIC_KEY}&hash=${HASH}&limit=50`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.data.results; 
    } catch (error) {
        console.error('There was a problem with your fetch operation:', error);
        throw error; 
    }
};

export async function fetchCharacterById(id) {
    try {
        const response = await fetch(`${API_URL}/${id}?ts=1&apikey=${PUBLIC_KEY}&hash=${HASH}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.data.results[0];
    } catch (error) {
        console.error('There was a problem with your fetch operation:', error);
        throw error; 
    }
}

export async function fetchComicsById(id) {
    try {
        const response = await fetch (`${API_URL}/${id}/comics?ts=1&apikey=${PUBLIC_KEY}&hash=${HASH}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.data.results;
    } catch (error) {
        console.error('There was a problem with your fetch operation:', error);
        throw error; 
    }
}