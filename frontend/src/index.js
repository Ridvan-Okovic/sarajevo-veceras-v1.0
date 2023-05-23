import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import LikedProvider from './context/LikedProvider';
import EventProvider from './context/EventProvider';
import AuthProvider from './context/AuthProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <EventProvider>
      <LikedProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </LikedProvider>
    </EventProvider>
  </AuthProvider>
);
