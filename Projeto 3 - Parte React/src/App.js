import "./styles.css";
import Usuarios from "./models/Usuarios";
import Disciplinas from "./models/Disciplinas";
import Biblioteca from "./models/Biblioteca";
import Main from "./models/Main";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />
  },
  {
    path: "/usuarios",
    element: <Usuarios />
  },
  {
    path: "/disciplinas",
    element: <Disciplinas />
  },
  {
    path: "/biblioteca",
    element: <Biblioteca />
  },
  {
    path: "*",
    element: <div>Rota não existente</div>
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}
