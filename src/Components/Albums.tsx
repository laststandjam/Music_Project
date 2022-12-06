 
 
import {useState, useEffect}from 'react';
import {Client} from "../Utility/Client"
import { Album as AlbumType} from "../models/album"
import {contentTypes} from "../project/contentTypes"
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
 
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
<div className="display flex relative">
{albums.map((album, i)=>(
  <Card className='w96' key={i}>
  <CardHeader>
  <img className="" src={album.elements.coverArt.linkedItems[0].elements.asset.value[0].url}/>
 </CardHeader>
 <CardBody className="text-center">
        <Typography variant="h5" className="mb-2">
        {album.elements.title.value}
        </Typography>
  </CardBody>
  </Card>
  ))}
</div>}
</>
)
 
}
 
 
 
export {Albums}