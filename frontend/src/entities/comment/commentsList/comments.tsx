import {FC} from "react";
import styles from "./styles.module.scss";
import {IComment} from "../../../shared/api/news/type.ts";
import {Comment} from "../commentPreview/comment.tsx";

interface IComments {
  readonly comments: IComment[]
}

export const Comments: FC<IComments> = ({comments}) => {
  return <div className={styles.comments}>
    {comments.map((comment, index) => <Comment key={index} {...comment}/>)}
  </div>
}