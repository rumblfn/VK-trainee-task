import {useGetLatestNewsQuery} from "../../shared/api/news/newsApi.ts";
import {NewCard} from "../../entities/newCard/newCard.tsx";
import styles from "./styles.module.scss";

export const News = () => {
  const {data: news, isLoading, isSuccess} = useGetLatestNewsQuery(undefined, {
    pollingInterval: 60000
  })

  const handleHardUpdate = () => {

  }

  return <div>
    <div className={styles.capitalWrapper}>
      <h1>News page</h1>
      <button onClick={handleHardUpdate} data-tooltip="Hard update of news">Update</button>
    </div>
    <div>
      {isSuccess
        ? news.map((newInfo, index) => <NewCard key={index} {...newInfo}/>)
        : isLoading
          ? <span aria-busy="true">Hacking news...</span>
          : <span>Something went wrong</span>
      }
    </div>
  </div>
}