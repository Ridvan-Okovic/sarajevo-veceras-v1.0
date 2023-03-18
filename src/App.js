import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './components/Pages/HomePage';
import EventsPage from './components/Pages/EventsPage';
import LikedEvents from './components/Pages/LikedEvents';
import RootLayout from './components/Pages/RootLayout';
import DetailsPage from './components/Pages/DetailsPage';
import EventProvider from './context/EventProvider';

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
      {
        path: '/events/:place',
        element: <DetailsPage />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
