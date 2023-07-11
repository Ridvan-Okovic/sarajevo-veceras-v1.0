import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import LikedProvider from './context/LikedProvider';
import EventProvider from './context/EventProvider';
import AuthProvider from './context/AuthProvider';
import ThemeProvider from './context/ThemeProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <LikedProvider>
    <AuthProvider>
      <EventProvider>
        <ThemeProvider>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </ThemeProvider>
      </EventProvider>
    </AuthProvider>
  </LikedProvider>
);
