import {createRoutesFromElements, Route} from "react-router-dom";
import {Layout} from "./layout.tsx";
import {New} from "../pages/New/New.tsx";
import {NotFound} from "../pages/NotFound.tsx";
import {News} from "../pages/News/News.tsx";

export const appRoutes = createRoutesFromElements(
  <Route
    path="/"
    element={<Layout />}
    errorElement={<NotFound/>}
  >
    <Route
      path=""
      element={<News/>}
    />
    <Route
      path="news/:newId"
      element={<New/>}
    />
    <Route
      path="not-found"
      element={<NotFound/>}
    />
  </Route>
)