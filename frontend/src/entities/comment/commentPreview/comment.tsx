import {FC, useState} from "react";
import {IComment} from "../../../shared/api/news/type.ts";
import styles from "./styles.module.scss";
import {handleDate} from "../../../shared/format.ts";
import {Replies} from "../commentsList/repliesList.tsx";

export const Comment: FC<IComment> = ({id, content, replies_count: repliesCount, created_at: createdAt}) => {
  const [isShowReplies, setIsShowReplies] = useState(false)

  return <div className={styles.comment}>
    <p className={styles.textWrapper}>
      <span className={styles.content}>{content}</span>
      <sup>{handleDate(createdAt)}</sup>
    </p>
    {repliesCount > 0 && <div>
        <details>
            <summary onClick={() => setIsShowReplies(prev => !prev)}>
              <span className={styles.repliesCount}>
                {isShowReplies ? "< hide" : "> view reply(-ies)"}
              </span>
            </summary>
          {isShowReplies && <Replies commentId={id}/>}
        </details>
    </div>}
  </div>
}