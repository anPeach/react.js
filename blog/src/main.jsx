import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import { Login, Profile, Registration } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  { path: '/login', element: <Login /> },
  { path: '/profile', element: <Profile /> },
  { path: '/registration', element: <Registration /> },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
