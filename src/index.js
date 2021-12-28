import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { GlobalProvider } from './GlobalState/GlobalState';

import { ChakraProvider } from '@chakra-ui/react'



ReactDOM.render(

    <GlobalProvider>
    <ChakraProvider>
    <App />
    </ChakraProvider>
    </GlobalProvider>
 
,
  document.getElementById('root')
);


