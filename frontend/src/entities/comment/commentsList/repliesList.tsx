import {FC} from "react";
import {useGetCommentRepliesByIdQuery} from "../../../shared/api/news/commentsApi.ts";
import {Comments} from "./comments.tsx";

interface IReplies {
  readonly commentId: number
}

export const Replies: FC<IReplies> = ({commentId}) => {
  const {data: replies, isError, isSuccess, isLoading } = useGetCommentRepliesByIdQuery(commentId)

  if (isSuccess) {
    return <Comments comments={replies} />
  }
  if (isLoading) {
    return <span aria-busy="true">Hacking replies...</span>
  }
  if (isError) {
    return <span>Nothing was found</span>
  }

  return <span>Something went wrong</span>
}