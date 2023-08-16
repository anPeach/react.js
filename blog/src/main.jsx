import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { persistor, store } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';
import 'normalize.css';
import './index.css';

import App from './App.jsx';
import {
  Login,
  Profile,
  Registration,
  Post,
  ProtectedRoute,
  PostsList,
} from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  { path: '/login', element: <Login /> },
  {
    path: '/profile',
    element: (
      <ProtectedRoute>
        <Profile />
      </ProtectedRoute>
    ),
  },
  { path: '/registration', element: <Registration /> },
  {
    path: '/posts',
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute>
            <PostsList />
          </ProtectedRoute>
        ),
      },
      {
        path: ':id',
        element: <Post />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
