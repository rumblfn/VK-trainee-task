import {Header} from "../shared/ui/header.tsx";
import {Outlet} from "react-router-dom";

export const Layout = () => {
  return <div className="container" data-theme="dark">
    <Header />
    <main>
      <Outlet />
    </main>
  </div>
}