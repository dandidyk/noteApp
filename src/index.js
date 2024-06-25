import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './routes/main/main';
import ErrorPage from './routes/error-page';
import ManageNote from "./routes/manageNote/manageNote";
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "note/:nodeId",
    element: <ManageNote />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    
  </React.StrictMode>
);

reportWebVitals();
