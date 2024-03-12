/* eslint-disable no-undef */

//Verifico que se muestren correctamente la cantidad de favoritos en el header

jest.mock('next/router', () => ({
    useRouter() {
      return {
        route: '/',
        pathname: '',
        query: '',
        asPath: '',
        push: jest.fn(),
        prefetch: jest.fn(),
        replace: jest.fn(),
      };
    },
  }));
  
import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';
import { MarvelProvider } from '../../context/MarvelContext';

describe('Header', () => {
  test('displays correct favorites count', () => {
    render(
      <MarvelProvider>
        <Header />
      </MarvelProvider>
    );

    expect(screen.getByText(/0/)).toBeInTheDocument();

  });
});
