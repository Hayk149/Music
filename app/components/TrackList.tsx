'use client'
import { useState } from "react";
import { Track } from "../types";
import styles from "../page.module.css"
import TrackCard from "./TrackCard";

interface TrackListProps {
    data: {
        resultCount: number,
        results: Track[]
    }
}

export default function TrackList({data}: TrackListProps) {

    const [query, setQuery] = useState("")

    const filteredTracks = data.results.filter((track) => {
        return track.trackName.toLowerCase().includes(query.toLowerCase())
    })

    return (
        <div>
            <input
                type="text"
                placeholder="Поиск по названию..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <ul className={styles.list}>
            {filteredTracks.map((track: Track) => (
              <li key={track.trackId}>
                <TrackCard
                  trackId={track.trackId}
                  trackName={track.trackName}
                  artistName={track.artistName}
                  artWorkUrl={track.artworkUrl100}
                />
            </li>)) }
                  </ul>
        </div>
    )
}