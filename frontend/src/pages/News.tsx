import {useGetLatestNewsQuery} from "../shared/api/news/newsApi.ts";
import {NewCard} from "../entities/newCard/newCard.tsx";

export const News = () => {
  const {data: news, isLoading, isSuccess} = useGetLatestNewsQuery(undefined, {
    pollingInterval: 60000
  })

  return <div>
    <h1>News page</h1>
    <div>
      {isSuccess
        ? news.map((newInfo, index) => <NewCard key={index} newInfo={newInfo}/>)
        : isLoading
          ? <span aria-busy="true">Hacking news...</span>
          : <span>Something went wrong</span>
      }
    </div>
  </div>
}