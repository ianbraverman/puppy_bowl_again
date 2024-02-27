import { RouterProvider } from "react-router-dom";
import router from "./src/layout/Router";

export default function App() {
  return <RouterProvider router={router} />;
}
