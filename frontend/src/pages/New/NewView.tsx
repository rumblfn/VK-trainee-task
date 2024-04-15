import {FC} from "react";
import {INew} from "../../shared/api/news/type.ts";
import {handleDate} from "../../shared/format.ts";
import styles from "./styles.module.scss";
import {Comments} from "../../entities/comment/commentsList/comments.tsx";
import {useGetNewsCommentsInfoQuery} from "../../shared/api/news/commentsApi.ts";
import {Link} from "react-router-dom";

interface INewsCommentsWrapper {
  readonly newId: number
}

const NewsCommentsWrapper: FC<INewsCommentsWrapper> = ({newId}) => {
  const {
    data,
    refetch,
    isError,
    isLoading,
    isSuccess,
    isFetching,
  } = useGetNewsCommentsInfoQuery(newId)

  if (isLoading) {
    return <span aria-busy="true">Hacking comments...</span>
  }

  return <footer className={styles.commentsWrapper}>
    <div className={styles.capitalWrapper}>
      <h3>Comments: {isSuccess && `(${data.total_comments_count})`}</h3>
      <button type="button"
              onClick={refetch}
              disabled={isLoading || isFetching}
              data-tooltip="Hard update of news comments"
      >
        Update
      </button>
    </div>
    {isError && <span>Something went wrong with loading comments</span>}
    {(isFetching || isLoading) && <span aria-busy="true">Fetching comments...</span>}
    {isSuccess && <Comments comments={data.root_comments}/>}
  </footer>
}

export const NewView: FC<INew> = ({id, title, author, created_at, rating, content}) => {
  async function copyToClip() {
    await navigator.clipboard.writeText(location.href);
  }

  return <div>
    <div className={styles.functionality}>
      <Link to="/">
        <button type="button">To the news list</button>
      </Link>
      <button className={styles.copyButton} type="button" onClick={copyToClip}>
        <span>Copy link</span>
        <div className={styles.copyText}>The link to the news has been copied</div>
      </button>
    </div>
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
    <NewsCommentsWrapper newId={id}/>
  </div>
}