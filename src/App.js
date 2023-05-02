import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import { lazy, Suspense } from 'react';

import EventsPage, {
  loader as eventsLoader,
} from './components/Pages/EventsPage';
import LikedEvents from './components/Pages/LikedEvents';
import RootLayout from './components/Pages/RootLayout';
import PlaceDetailsPage from './components/Pages/PlaceDetailsPage';
import SearchPage from './components/Pages/SearchPage';
import LikedEventsCalendarPage from './components/Pages/LikedEventsCalendarPage';

const EventDetailsPage = lazy(() =>
  import('./components/Pages/EventDetailsPage')
);

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
            element: (
              <Suspense
                fallback={
                  <h1 className="mt-8 text-4xl text-[#e1e1e1] text-center font-manrope">
                    Loading events...
                  </h1>
                }
              >
                <EventDetailsPage />
              </Suspense>
            ),
            loader: ({ params }) =>
              import('./components/Pages/EventDetailsPage').then((module) =>
                module.loader({ params })
              ),
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
