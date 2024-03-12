
import PropTypes from 'prop-types';
import '../styles/globals.css'; 
import { MarvelProvider } from '../context/MarvelContext';

function MyApp({ Component, pageProps }) {
  return (
    <MarvelProvider>
      <Component {...pageProps} />
    </MarvelProvider>
  );
}

MyApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
    pageProps: PropTypes.object.isRequired,
  };
  
export default MyApp;
