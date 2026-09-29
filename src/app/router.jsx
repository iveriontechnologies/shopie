import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage.jsx";
import { NotFoundPage } from "../pages/NotFoundPage.jsx";
import PublicLayout from '../layouts/PublicLayout.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    errorElement: <NotFoundPage />,
    children: [{ index: true, element: <HomePage /> }],
  },
]);

export default router;
