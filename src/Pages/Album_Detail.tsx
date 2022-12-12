import React from 'react'
import { useLocation } from 'react-router-dom'
import { Album as AlbumType } from '../models/album'
import {Song as SongType} from "../models/song"
interface Props {
    // album: AlbumType = location.state.album
}

const Album_Detail = (props: Props) => {
    const location = useLocation()
    const album: AlbumType = location.state.album
    console.log("detail hit", album)
    return (
        <>
        <div className='relative'>
            <h1 className="relative" >{album.elements.title.value}</h1>
                {album.elements.songs.linkedItems.map((song:SongType, i)=>(
                    <div>
                        {song.elements.lyrics.value}
                    </div>
                ))}
            
        </div></>
    )
}

export { Album_Detail }
