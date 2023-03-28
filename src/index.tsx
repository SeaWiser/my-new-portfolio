import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import App from "./App";
import ErrorPage from "./error-page";
import axios from 'axios';
import LegalNotices from "./components/legal-notices-and-privacy/LegalNotices";

axios.defaults.baseURL = 'http://localhost:8000'; // Remplacez par l'URL de votre API Rest
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "legal-notices",
    element: <LegalNotices/>
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);