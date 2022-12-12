 
 
import {useState, useEffect}from 'react';
import {Client} from "../Utility/Client"
import { Album as AlbumType} from "../models/album"
import {contentTypes} from "../project/contentTypes"
import {Album_Detail} from "../Pages/Album_Detail"
import {Link} from "react-router-dom"
import { useIntl } from 'react-intl';
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
 
 
      //functions
      const intl = useIntl()

      const cardDetail = () =>{

      }

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
  <Link to={album.system.codename} state={{album}}key={i}>
  <Card className='w-56 flex justify-center' >
  <CardHeader className="relative h-56">
  <img width={200} src={album.elements.coverArt.linkedItems[0].elements.asset.value[0].url} className={"justify-center"}/>  
  <Typography variant="h5" className="mb-2">
        {album.elements.title.value}
        </Typography>
 </CardHeader>
 <CardBody className="text-center">
      
  </CardBody>
  </Card>
  </Link>
  ))}
</div>}
</>
)
 
}
 
 
 
export {Albums}