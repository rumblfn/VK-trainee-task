import {Link} from "react-router-dom";

export const Header = () => {
  return <header>
    <nav>
      <ul>
        <li>
          <Link to="/">
            <strong>100 hacker news</strong>
          </Link>
        </li>
      </ul>
    </nav>
  </header>
}