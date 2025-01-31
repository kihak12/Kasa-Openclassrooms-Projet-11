import {createBrowserRouter} from "react-router-dom";
import {Home} from "./pages/home/Home.jsx";
import {About} from "./pages/about/About.jsx";
import {Logement} from "./pages/logement/Logement.jsx";
import {NotFound} from "./pages/not-found/NotFound.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/logement/:id",
        element: <Logement />
    },
    {
        path: "/about",
        element: <About />
    },
    {
        path: "/not-found",
        element: <NotFound />
    },
    {
        path: "*",
        element: <NotFound />
    }
])
