/* eslint-disable no-undef */
/*
Verifico que FavoriteHeart gestione correctamente los personajes favoritos
y que llame correctamente a MarvelContext para agregar/quitar favoritos
*/

import { render, screen, fireEvent } from '@testing-library/react';
import { MarvelProvider } from '../../context/MarvelContext';
import FavoriteHeart from './FavoriteHeart';

// Mock character ID
const characterId = '1011334';

describe('FavoriteHeart', () => {
  test('toggles favorite status on click', () => {
    const { rerender } = render(
      <MarvelProvider>
        <FavoriteHeart characterId={characterId} />
      </MarvelProvider>
    );

    const heartIcon = screen.getByRole('img', { name: 'Favorite' });
    expect(heartIcon).toHaveAttribute('src', '/images/heart.svg');

    fireEvent.click(heartIcon);

    rerender(
      <MarvelProvider>
        <FavoriteHeart characterId={characterId} />
      </MarvelProvider>
    );

    expect(heartIcon).toHaveAttribute('src', '/images/heart-filled.svg');
  });
});
