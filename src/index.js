import React from 'react';
import ReactDOM from 'react-dom';
import { AuthContextProvider } from './context/authContext/AuthContext'
import { MovieContextProvider } from './context/movieContext/MovieContext'
import { ListContextProvider } from './context/listContext/ListContext'
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ListContextProvider>
      <MovieContextProvider>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </MovieContextProvider>
    </ListContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
