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
import LikedEventsCalendarPage from './components/Pages/LikedEventsCalendarPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: 'events',

        children: [
          { index: true, element: <EventsPage />, loader: eventsLoader },
          {
            path: ':eventId',
            element: <EventDetailsPage />,
            loader: eventDetailsLoader,
          },
          {
            path: 'place/:place',
            element: <PlaceDetailsPage />,
          },
          {
            path: 'search',
            element: <SearchPage />,
          },
        ],
      },

      {
        path: 'liked',
        children: [
          {
            index: true,
            element: <LikedEvents />,
          },
          {
            path: 'calendar',
            element: <LikedEventsCalendarPage />,
          },
        ],
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
