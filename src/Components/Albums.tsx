

import {useState, useEffect}from 'react';
import {Client} from "../Utility/Client"
import { Album as AlbumType} from "../models/album"
import {contentTypes} from "../project/contentTypes"

const Albums: React.FC = () =>{


        //State
    const [albums, setAlbums] = useState<AlbumType[]>([])
    const [loading, setLoading] = useState<boolean>(true)


useEffect(() => {

    //call
    const fetchAlbums = async () =>{
       const req = await  Client.items<AlbumType>()
        .type(contentTypes.album.codename)
        .depthParameter(1)
        
/*future langauge stuff
     if(language){
        querys.languageParamter(languate)
     }*/

     .toPromise()
    
     
     setLoading(false)
     
     
     setAlbums(req.data.items)
   
    }
    
  fetchAlbums()
  console.log(albums[0])
   
}, [loading])

return(


<>

{loading
?<div>"Loading"</div>
:
albums.map((album, i)=>(
  <div className='shadow-md w-full relative bottom-50 left-50' key={i}>
  <h1>{album.elements.title.value}</h1>
  <img src={album.elements.coverArt.value[0]}/>
 
  </div>
  ))}

</>
)

}



export {Albums}