import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import LikedProvider from './context/LikedProvider';
import EventProvider from './context/EventProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <EventProvider>
    <LikedProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </LikedProvider>
  </EventProvider>
);
