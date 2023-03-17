import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './components/Pages/HomePage';
import EventsPage from './components/Pages/EventsPage';
import LikedEvents from './components/Pages/LikedEvents';
import RootLayout from './components/Pages/RootLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '', element: <HomePage /> },
      {
        path: '/events',
        element: <EventsPage />,
      },
      {
        path: '/liked',
        element: <LikedEvents />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
