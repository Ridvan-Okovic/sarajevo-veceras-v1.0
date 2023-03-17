import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import EventProvider from './context/EventProvider';

import HomePage from './components/Pages/HomePage';
import EventsPage from './components/Pages/EventsPage';
import LikedEvents from './components/Pages/LikedEvents';
import RootLayout from './components/Pages/RootLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <EventProvider>
        <RootLayout />
      </EventProvider>
    ),
    children: [
      { path: '', element: <HomePage /> },
      {
        path: '/events',
        element: (
          <EventProvider>
            <EventsPage />
          </EventProvider>
        ),
      },
      {
        path: '/liked',
        element: (
          <EventProvider>
            <LikedEvents />
          </EventProvider>
        ),
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
