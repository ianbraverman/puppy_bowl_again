import { createBrowserRouter } from "react-router-dom";
import Mainpage from "./Mainpage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainpage />,
  },
  //{
  // path: "/puppy/:id",
  //element: <Puppy />,
  //},
]);

export default router;
