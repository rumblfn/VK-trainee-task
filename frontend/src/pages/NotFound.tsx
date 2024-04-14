import {Link} from "react-router-dom";

export const NotFound = () => {
  return <div className="container">
    <h1>404 not found</h1>
    <Link to={"/"}>Go home</Link>
  </div>
}