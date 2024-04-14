import {FC} from "react";
import {Navigate, useParams} from "react-router-dom";
import {useGetByIdQuery} from "../shared/api/news/newsApi.ts";
import {handleDate} from "../shared/format.ts";
import {INew} from "../shared/api/news/type.ts";

const NewView: FC<INew> = ({title, author, created_at, rating, content}) => {
  return <div>
    <div className="grid">
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
    </div>
    <div>
      {content}
    </div>
    <div>
      <h3>Comments: (0)</h3>
      <div>

      </div>
    </div>
  </div>
}

export const New: FC = () => {
  const {newId} = useParams()

  if (!newId) {
    return <Navigate to="/not-found"/>
  }

  const {data, isError, isLoading, isSuccess} = useGetByIdQuery(newId)

  if (isSuccess) {
    return <NewView {...data} />
  }
  if (isLoading) {
    return <span aria-busy="true">Hacking new...</span>
  }
  if (isError) {
    return <span>Nothing was found</span>
  }

  return <span>Something went wrong</span>
}