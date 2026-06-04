import { createBrowserRouter } from "react-router";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: H,
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