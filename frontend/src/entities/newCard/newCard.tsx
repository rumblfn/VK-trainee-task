import {FC} from "react";
import {INew} from "../../shared/api/news/type.ts";
import {handleDate, truncateText} from "../../shared/format.ts";
import {Link} from "react-router-dom";

export const NewCard: FC<INew> = ({ id, title, author, content, rating, created_at }) => {
  return <div>
    <details>
      <summary>{handleDate(created_at)} — {title}</summary>
      <ul>
        <li>
          <span>Author:</span> <strong>{author}</strong>
        </li>
        <li>
          <span>Rating:</span> <strong>{rating}</strong>
        </li>
        <li>
          <span>Preview:</span> <i>{truncateText(content)}</i>
        </li>
        <Link to={`/news/${id}`}>
          <strong>See more</strong>
        </Link>
      </ul>
    </details>
  </div>
}