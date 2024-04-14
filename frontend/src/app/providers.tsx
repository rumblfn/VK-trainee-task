import {FC, ReactNode} from "react";
import {Provider} from "react-redux";
import {store} from "./store.ts";
import {BrowserRouter} from "react-router-dom";

interface IProviders {
  readonly children: ReactNode
}

export const Providers: FC<IProviders> = ({children}) => {
  return <BrowserRouter>
    <Provider store={store}>
      {children}
    </Provider>
  </BrowserRouter>
}