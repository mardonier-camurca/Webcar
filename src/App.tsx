import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";
import { Login } from "./pages/login"; 
import { Register } from "./pages/register"; 
import { Dashboard } from "./pages/dashboad"; 
import { New } from "./pages/dashboad/new"; 
import { CarDetail } from "./pages/car";
import { Private } from "./routes/Private";

import { Layout } from "./components/layout";

const router = createBrowserRouter([
  {
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/car/:id",
        element: <CarDetail/>
      },
      {
        path: "/dashboard",
        element: <Private><Dashboard/></Private> 
      },
      {
        path: "/dashboard/new",
        element: <Private><New/></Private>
      }
    ]
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/register",
    element: <Register/>
  }
])

export { router };