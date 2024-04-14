import {Header} from "../shared/ui/Header.tsx";
import {useGetLatestNewsQuery} from "../shared/api/news/newsApi.ts";

export const Layout = () => {
  console.log(useGetLatestNewsQuery())
  return <div className="container" data-theme="dark">
    <Header />
  </div>
}