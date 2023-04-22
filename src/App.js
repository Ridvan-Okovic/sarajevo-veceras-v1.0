import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';

import EventsPage, {
  loader as eventsLoader,
} from './components/Pages/EventsPage';
import LikedEvents from './components/Pages/LikedEvents';
import RootLayout from './components/Pages/RootLayout';
import DetailsPage from './components/Pages/DetailsPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/events',
        element: <EventsPage />,
        loader: eventsLoader,
      },
      {
        path: '/liked',
        element: <LikedEvents />,
      },
      {
        path: '/events/:place',
        element: <DetailsPage />,
      },
      {
        path: '/',
        element: <Navigate to="/events" redirect />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
