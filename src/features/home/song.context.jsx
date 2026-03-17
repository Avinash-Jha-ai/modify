import { Children, createContext } from "react";
import { useState } from "react";
export const SongContext =createContext()

export const SongContextProvider =({children})=>{
    const [song, setsong] = useState({
        "url": "https://ik.imagekit.io/hnoglyswo0/cohort-2/moodify/songs/Lady_Singham_gs01DFz-1.mp3",
        "posterUrl": "https://ik.imagekit.io/hnoglyswo@/cohort-2/moodify/posters/Lady_Singham_VWBDGJkie",
        "title": "Lady Singham",
        "mood": "happy",
    })

    const [loading, setloading] = useState(false)

    return (
        <SongContext.Provider value={{loading, setloading, song, setsong}}>
            {children}
        </SongContext.Provider>
    )
}