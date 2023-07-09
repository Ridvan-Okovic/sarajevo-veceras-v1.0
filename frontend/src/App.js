import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import { lazy, Suspense, useContext, useEffect } from 'react';

import { getDoc, doc } from 'firebase/firestore';
import { db } from './config/firebase-config';

import EventsPage, {
  loader as eventsLoader,
} from './components/Pages/EventsPage';
import LikedEvents from './components/Pages/LikedEvents';
import RootLayout from './components/Pages/RootLayout';
import PlaceDetailsPage from './components/Pages/PlaceDetailsPage';
import SearchPage from './components/Pages/SearchPage';
import AddEventPage from './components/Pages/AddEventPage';
import Error from './components/Pages/Error';
import Login from './components/Pages/Login';
import Author from './components/Pages/Author';
import Viewer from './components/Pages/Viewer';

import LikedContext from './context/liked-context';

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
            path: 'new',
            element: (
              <Author>
                <AddEventPage />
              </Author>
            ),
          },
        ],
      },
      {
        path: 'search',
        element: <SearchPage />,
      },
      { path: 'login', element: <Login /> },
      {
        path: 'liked',
        children: [
          {
            index: true,
            element: (
              <Viewer>
                <LikedEvents />,
              </Viewer>
            ),
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
  const { setLikedEvents } = useContext(LikedContext);
  const uid = localStorage.getItem('uid');

  useEffect(() => {
    getDoc(doc(db, 'users', uid)).then((docSnap) => {
      if (docSnap.exists()) {
        if (docSnap.data().likedEvents) {
          setLikedEvents(docSnap.data().likedEvents);
        } else {
          setLikedEvents([]);
        }
      } else {
        throw new Error('Document does not exist.');
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <RouterProvider router={router} />;
};

export default App;
