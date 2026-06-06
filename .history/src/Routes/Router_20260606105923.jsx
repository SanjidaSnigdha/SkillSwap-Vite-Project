import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../pages/Home";
import CategorySkills from "../pages/CategorySkills";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <HomeLayout></HomeLayout>,
            children: [
                {
                  path: "/",
                  element: <Home></Home> 
                },
                {
                    path: "/category/:id",
                    element: <CategorySkills></CategorySkills>,
                    loader: () => fetch("/categories.json")
                }
            ]
        },
        {
            path: "/auth",
            element: <h2>Authentication Layout</h2>,
            
        },
        {
            path: "/skill",
            element: <h2>Skill Layout</h2>,
        },
        {
            path: "/",
            element: <h2>Error 404</h2>,
        },
    ]
);
export default router;