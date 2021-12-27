import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {QueryClient, QueryClientProvider} from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { ChakraProvider } from '@chakra-ui/react'

const queryClient = new QueryClient()


ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider  client={queryClient}>
      <ChakraProvider>
    <App />
    </ChakraProvider>
    <ReactQueryDevtools  />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


