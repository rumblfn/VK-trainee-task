import {useGetLatestNewsQuery} from "../../shared/api/news/newsApi.ts";
import {NewCard} from "../../entities/newCard/newCard.tsx";
import styles from "./styles.module.scss";

export const News = () => {
  const {
    data: news,
    isLoading,
    isSuccess,
    isFetching,
    isError,
    refetch,
  } = useGetLatestNewsQuery(undefined, {
    pollingInterval: 60000
  })

  return <div>
    <div className={styles.capitalWrapper}>
      <hgroup>
        <h1>News page</h1>
        {((isLoading && !isSuccess) || isFetching) && <span className={styles.newsLoader} aria-busy="true">Hacking news...</span>}
      </hgroup>
      <button type="button"
              onClick={refetch}
              disabled={isLoading || isFetching}
              data-tooltip="Hard update of news"
      >
        Update
      </button>
    </div>
    <div>
      {isError && <span>Something went wrong with loading news.</span>}
      {isSuccess && news.map((newInfo, index) => <NewCard key={index} {...newInfo}/>)}
    </div>
  </div>
}