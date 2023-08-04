import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'normalize.css';
import './index.css';

import App from './App.jsx';
import { Login, Profile, Registration, ProtectedRoute } from './pages';
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
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
