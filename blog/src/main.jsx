import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'normalize.css';
import './index.css';

import App from './App.jsx';
import { Login, Profile, Registration, Post, ProtectedRoute } from './pages';
import store from './store/store';

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
  { path: '/post', element: <Post /> },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
