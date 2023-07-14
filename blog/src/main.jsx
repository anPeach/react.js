import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import { Auth, Profile } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  { path: '/auth', element: <Auth /> },
  { path: '/profile', element: <Profile /> },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
