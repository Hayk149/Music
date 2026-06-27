import TrackCard from "./components/TrackCard";

interface Track {
  trackId: number
  trackName: string
  artistName: string
  artworkUrl100: string
  previewUrl: string
}

interface ApiResponse {
  resultCount: number
  results: Track[]
}

export default async function Home() {
  
    const response = await fetch("https://itunes.apple.com/search?term=top&media=music&limit=10")
  
    const data: ApiResponse = await response.json()

  return (
    <main>
      <h1>Muusic Explorer</h1>
      <p>
        Треков найдено {data.resultCount}:
      </p>
      <ul>
        {data.results.map((track) => (
          <li key={track.trackId}>
            <TrackCard 
              trackName={track.trackName}
              artistName={track.artistName}
              artWorkUrl={track.artworkUrl100}
            />
        </li>)) }
      </ul>
    </main>
  );
}
