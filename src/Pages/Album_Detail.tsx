import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Album as AlbumType } from '../models/album'
import { Song as SongType } from "../models/song"
import Spotify from "react-spotify-embed"
import { RichTextElement } from '@kontent-ai/react-components'
import {test} from "../Utility/Manegment"

interface Props {
    // album: AlbumType = location.state.album
}


const Album_Detail = (props: Props) => {


    const location = useLocation()
    const album: AlbumType = location.state.album
    const [expandedItems, setExpandedItems] = useState(new Set());

    //functions

    const handleQuestionMarkClick = (itemId: string) => {
        // Create a new set of expanded items by copying the current set
        // and adding/removing the clicked item depending on whether it's
        // currently expanded or not.
        test()
        const newExpandedItems = new Set(expandedItems);
        if (expandedItems.has(itemId)) {
            newExpandedItems.delete(itemId);
        } else {
            newExpandedItems.add(itemId);
        }

        setExpandedItems(newExpandedItems);
        console.log(expandedItems)
    };


    return (
        <>
            <div className='relative'>
                <ul>
                    {album.elements.songs.linkedItems.map((song: SongType, i) => (
                        <li key={song.system.id} className='song'>
                            {song.elements.title.value}
                            <button className="text-blue-500 hover:underline focus:outline-none"
                                onClick={() => handleQuestionMarkClick(song.system.id)}
                            >
                                Play
                            </button>
                            {expandedItems.has(song.system.id) && (
                                <>

                                
                                   <div>
                                    <RichTextElement richTextElement={song.elements.lyrics}/>
                                <Spotify wide link={`https://open.spotify.com/track/${song.elements.songLink.value}`} />
                            </div>
                                </>
                            )}
                         
                        </li>
                    ))}
                </ul>
            </div></>
    )
}



export { Album_Detail }
/*
import React, { useState } from 'react';

function ItemList({ items }) {
  const [expandedItems, setExpandedItems] = useState(new Set());

  const handleQuestionMarkClick = (itemId) => {
    // Create a new set of expanded items by copying the current set
    // and adding/removing the clicked item depending on whether it's
    // currently expanded or not.
    const newExpandedItems = new Set(expandedItems);
    if (expandedItems.has(itemId)) {
      newExpandedItems.delete(itemId);
    } else {
      newExpandedItems.add(itemId);
    }

    setExpandedItems(newExpandedItems);
  };

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id} className="relative">
          <button
            onClick={() => handleQuestionMarkClick(item.id)}
            className="absolute top-0 right-0 mr-2 mt-2 text-xs text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"
          >
            ?
          </button>
          {item.name}
          {expandedItems.has(item.id) && (
            <p className="mt-2 text-sm text-gray-700">
              {item.description}
            </p>
          )}
        </li>
      ))}
    </ul>
  );
}*/
