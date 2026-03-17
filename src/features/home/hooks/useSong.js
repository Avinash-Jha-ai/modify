import {getSong} from "../services/song.api"

import { Children, useContext } from "react"
import { SongContext } from "../song.context"

export const useSong=()=>{
    const context =useContext(SongContext);

    const {loading ,setloading ,song ,setsong} =context

    async function handleGetSong({mood}){
        setloading(true);
        try {
            const data=await getSong({mood});
            setsong(data.song);
        } catch(error) {
            console.error("Failed to fetch song:", error);
        } finally {
            setloading(false)
        }
    }

    return ({loading ,song,handleGetSong})
}