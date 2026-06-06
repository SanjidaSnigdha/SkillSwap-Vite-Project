import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../pages/Home";
import CategorySkills from "../pages/CategorySkills";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayouts from "../Layouts/AuthLayouts";

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
            element: <AuthLayouts></AuthLayouts>
            children: [
                {
                  path: "/auth/login",
                   element: <Login></Login> 
                },
                {
                    path: "/auth/register",
                    element: <Register></Register>
                }
            ]
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