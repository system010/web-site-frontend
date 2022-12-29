import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Fifa from './components/fifa/Fifa'
import Form from './components/form/Form'
import { createBrowserRouter, RouterProvider, Route, Router } from 'react-router-dom';
import PremierLeague from './components/premierleague/PremierLeague';
import Ligue1 from './components/ligue1/Ligue1';
import Laligo from './components/laligo/Laligo'
import Egypt from './components/egypt/Egypt';
import Seriea from './components/seriea/Seriea';
import { Footer } from './components/footer/Footer';


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/form",
        element: <Form />
    },
    {
        path: "/fifa",
        element: <Fifa />,
    },
    {
        path: "/pre",
        element: <PremierLeague />,
    },
    {
        path: "/ligue1",
        element: <Ligue1 />,
    },
    {
        path: "/laligo",
        element: <Laligo />,
    },
    {
        path: "/egypt",
        element: <Egypt />,
    },
    {
        path: "/seriea",
        element: <Seriea />,
    },
    {
        path: "/footer",
        element: <Footer />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>

);
