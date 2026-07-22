'use client'
import { useState, useEffect } from "react";
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

    const [tracks, setTracks] = useState<Track[]>(data.results)

    const filteredTracks = data.results.filter((track) => {
        return track.trackName.toLowerCase().includes(query.toLowerCase())
    })


    useEffect(() => {
        if (!query) return
            const fetchTracks = async () => {
            const data = await fetch(`https://itunes.apple.com/search?term=${query}&media=music&limit=10`)
            const data1 = await data.json()
            setTracks(data1.results)
        }
        fetchTracks()
    }, [query])

    return (
        <div>
            <input
                type="text"
                placeholder="Поиск по названию..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <ul className={styles.list}>
            {tracks.map((track: Track) => (
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