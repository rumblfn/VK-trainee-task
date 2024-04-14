import {FC} from "react";
import {INew} from "../../shared/api/news/type.ts";
import {handleDate, truncateText} from "../../shared/format.ts";
import {Link} from "react-router-dom";

interface INewCard {
  readonly newInfo: INew
}

export const NewCard: FC<INewCard> = ({ newInfo }) => {
  return <div>
    <details>
      <summary>{handleDate(newInfo.created_at)} — {newInfo.title}</summary>
      <ul>
        <li>
          <span>Author:</span> <strong>{newInfo.author}</strong>
        </li>
        <li>
          <span>Rating:</span> <strong>{newInfo.rating}</strong>
        </li>
        <li>
          <span>Preview:</span> <i>{truncateText(newInfo.content)}</i>
        </li>
        <Link to={`/news/${newInfo.id}`}>
          <strong>See more</strong>
        </Link>
      </ul>
    </details>
  </div>
}