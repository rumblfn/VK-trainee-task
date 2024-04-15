import {FC} from "react";
import {INewFull} from "../../shared/api/news/type.ts";
import {handleDate} from "../../shared/format.ts";
import styles from "./styles.module.scss";
import {Comments} from "../../entities/comment/commentsList/comments.tsx";

export const NewView: FC<INewFull> = ({new_info, comments, comments_count}) => {
  const {title, author, created_at, rating, content} = new_info

  return <div>
    <header className="grid">
      <hgroup>
        <h1>
          <mark>{title}</mark>
          <sub>{author}</sub>
        </h1>
      </hgroup>
      <hgroup>
        <p>{handleDate(created_at)}</p>
        <p>Rating: {rating}</p>
      </hgroup>
    </header>
    <main>
      {content}
    </main>
    <footer className={styles.commentsWrapper}>
      <h3>Comments: ({comments_count})</h3>
      <Comments comments={comments}/>
    </footer>
  </div>
}