import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./app.tsx";
import MovieDetail from "./MovieDetail.tsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Header from "./Header.tsx";
// ルーティングの設定
const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
  {
    path: "/movies/:movieId",
    Component: MovieDetail,
  },
]);

createRoot(document.getElementById("app")!).render(
  <StrictMode>
    <Header>
      <RouterProvider router={router} />
    </Header>
  </StrictMode>,
);
