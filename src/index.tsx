import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import theme from './components/atoms/fonts/fontStyles'
import Fonts from './components/atoms/fonts/global'



ReactDOM.render(
  <ChakraProvider theme = {theme}>
  <Fonts />
  <App />
  </ChakraProvider>
,
  document.getElementById('root')
);
