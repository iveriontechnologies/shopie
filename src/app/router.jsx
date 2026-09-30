import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage.jsx";
import { NotFoundPage } from "../pages/NotFoundPage.jsx";
import PublicLayout from "../layouts/PublicLayout.jsx";
import AuthPage from "../features/auth/pages/AuthPage.jsx";
import AuthLayout from "../layouts/AuthLayout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <HomePage /> },
      // { path: "/auth", element: <AuthPage /> },
    ],
  },

  {
    path: "/auth",
    element: <AuthLayout />,
    errorElement: <NotFoundPage />,
    children: [{ index: true, element: <AuthPage /> }],
  },
]);

export default router;
