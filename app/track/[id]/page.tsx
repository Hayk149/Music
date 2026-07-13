import styles from './page.module.css'
import Link from "next/link";
 
interface TrackPageProps {
  params: Promise<{
    id: string;
  }>;
}

interface TrackResponse {
  resultCount: number
  results: Track[]
}

interface Track {
  trackId: string
  trackName: string
  artistName: string
  artworkUrl100: string
  collectionPrice: number
  trackPrice: number
  releaseDate: string
  primaryGenreName: string
}

export default async function TrackPage({params}: TrackPageProps) {
    const {id} = await params
    
    const response = await fetch(`https://itunes.apple.com/lookup?id=${id}`)
    const data: TrackResponse = await response.json()

    const track: Track = data.results[0]

    return (

      <main className={styles.wrapper}>
        <h1 className={styles.title}>Страница трека c id {id}</h1>
        <div className={styles.flex}>
            <img className={styles.image} src={track.artworkUrl100} alt="track.trackName" />
            <div className={styles.info}>
                <p className={styles.trackname}>название трека {track.trackName}</p>
                <p className={styles.artistname}>имя исполнителя {track.artistName}</p>
                <p>дата релиза {new Date(track.releaseDate).toLocaleDateString("ru-RU")}</p>
                <p>цена альбома {track.collectionPrice}</p>
                <p>цена трека {track.trackPrice}</p>
                <p>жанр трека {track.primaryGenreName}</p>
                <Link rel="stylesheet" href={'/'} className={styles.link}>
                  <button className={styles.button}>
                    Назад к трекам
                  </button>
                </Link>
            </div>
        </div>
      </main>
    );
}