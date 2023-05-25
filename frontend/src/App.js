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
import AddEventPage from './components/Pages/AddEventPage';
import Error from './components/Pages/Error';

const EventDetailsPage = lazy(() =>
  import('./components/Pages/EventDetailsPage')
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <Error />,
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
                  <h1 className="mt-8 text-center font-manrope text-4xl text-[#e1e1e1]">
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
        ],
      },
      { path: 'new', element: <AddEventPage /> },
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
