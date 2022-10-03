

import { useEffect, useState } from 'react';
import {Client} from "../Utility/Client"
import {Album as AlbumType} from "../models/album"
import {contentTypes} from "../project/contentTypes"
const Albums: React.FC = () =>{

        //State
    const [albums, setAlbums] = useState([])
    const [loading, setLoading] = useState(true)


useEffect(() => {

    //call
    const fetchAlbums = async () =>{
       const req = await  Client.items<AlbumType>()
        .type(contentTypes.album.codename)
/*future langauge stuff
     if(language){
        querys.languageParamter(languate)
     }*/
     .toPromise()
    
     setLoading(false)
     console.log(req)

    //  setAlbums(req.data.items as AlbumType[])
    }
    
  fetchAlbums()
   
}, [])

return(
<>

</>
)

}



export {Albums}