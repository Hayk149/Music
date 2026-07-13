import styles from "./page.module.css"
import TrackList from "./components/TrackList";
import {Track} from "./types"

interface ApiResponse {
  resultCount: number
  results: Track[]
}

export default async function Home() {
  
    const response = await fetch("https://itunes.apple.com/search?term=top&media=music&limit=10")
  
    const data: ApiResponse = await response.json()

  return (
    <main className={styles.main}>

      <h1 className={styles.title}>Music Explorer</h1>
      <p className={styles.subtitle}>
        Треков найдено {data.resultCount}:
      </p>
      <TrackList data={data}/>
    </main>
  );
}
