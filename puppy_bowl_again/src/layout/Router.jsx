import { createBrowserRouter } from "react-router-dom";
//import Puppies from Puppies.jsx
//import Puppy from Puppy.jsx

const router = createBrowserRouter([
  {
    path: "/",
    element: <Puppies />,
  },
  {
    path: "/puppy/:id",
    element: <Puppy />,
  },
]);

export default router;
