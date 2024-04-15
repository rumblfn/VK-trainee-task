import {FC} from "react";
import {Navigate, useParams} from "react-router-dom";
import {useGetByIdQuery} from "../../shared/api/news/newsApi.ts";
import {NewView} from "./NewView.tsx";

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