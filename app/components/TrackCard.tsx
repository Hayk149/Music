import Image from "next/image";
import styles from "./TrackCard.module.css"
import Link from "next/link";

interface TrackCardProps {
  trackId: string
  trackName: string
  artistName: string
  artWorkUrl: string
}

export default function TrackCard({trackId, trackName, artistName, artWorkUrl}:TrackCardProps) {
    return (
      <Link rel="stylesheet" href={`/track/${trackId}`} style={{ textDecoration: "none", color: "inherit" }}>
        <div className={styles.card}>
                <div className={styles.wrapper}>
                  <Image className={styles.image} src={artWorkUrl} alt={trackName} width={100} height={100} />
                  <div className={styles.description}>
                    <p className={styles.trackname}>Название трека: {trackName}</p>
                    <p className={styles.artistname}>Исполнитель: {artistName}</p>
                  </div>
                </div>
        </div>
      </Link>
    )
}