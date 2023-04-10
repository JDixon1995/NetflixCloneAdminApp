import React from 'react';
import ReactDOM from 'react-dom';
import { AuthContextProvider } from './context/authContext/AuthContext'
import { MovieContextProvider } from './context/movieContext/MovieContext'
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <MovieContextProvider>
      <AuthContextProvider>
      <App />
    </AuthContextProvider>
    </MovieContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
