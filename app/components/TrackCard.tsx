import Image from "next/image";

interface TrackCardProps {
  trackName: string
  artistName: string
  artWorkUrl: string
}

export default function TrackCard({trackName, artistName, artWorkUrl}:TrackCardProps) {
    return (
      <div>
              <Image src={artWorkUrl} alt={trackName} width={100} height={100} />
              <p>Название трека: {trackName}</p>
              <p>Исполнитель: {artistName}</p>
      </div>
    )
}