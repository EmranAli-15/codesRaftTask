import { createBrowserRouter } from "react-router";
import App from "../App";
import About from "../components/About";
import Contact from "../components/Contact";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Home from "../pages/Home";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <App></App>,
            children: [
                {
                    index: true,
                    element: <Home></Home>
                },
                {
                    path: "/home",
                    element: <Home></Home>
                },
                {
                    path: "/about",
                    element: <About></About>
                },
                {
                    path: "/contact",
                    element: <Contact></Contact>
                },
                {
                    path: "/services",
                    element: <Services></Services>
                },
                {
                    path: "/portfolio",
                    element: <Portfolio></Portfolio>
                },
            ]
        },
    ]
);

export default router;
