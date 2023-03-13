import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import EventProvider from './context/EventProvider';

import HomePage from './components/Pages/HomePage';
import LikedEvents from './components/Pages/LikedEvents';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <EventProvider>
        <HomePage />
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
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
