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
import PlaceDetailsPage from './components/Pages/PlaceDetailsPage';
import SearchPage from './components/Pages/SearchPage';
import EventDetailsPage, {
  loader as eventDetailsLoader,
} from './components/Pages/EventDetailsPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: 'events',
        element: <EventsPage />,
        loader: eventsLoader,
      },
      {
        path: 'events/:eventId',
        element: <EventDetailsPage />,
        loader: eventDetailsLoader,
      },
      {
        path: ':place',
        element: <PlaceDetailsPage />,
      },
      {
        path: 'liked',
        element: <LikedEvents />,
      },
      {
        path: 'search',
        element: <SearchPage />,
      },
      {
        path: '/',
        element: <Navigate to="events" redirect />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
