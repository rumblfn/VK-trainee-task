import {Provider} from "react-redux";
import {store} from "./store.ts";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {appRoutes} from "./appRouter.tsx";

export const Providers = () => {
  const router = createBrowserRouter(appRoutes)

  return <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
}