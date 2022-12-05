
import {useEffect, useState} from 'React'
import { fileURLToPath } from 'url'
import {Client} from "../Utility/Client"
import {Albums} from "../Components/Albums"


const Album_List: React.FC = ()=>{

    return(
        <>
        <div className="relative">
            <h1>Album list</h1>  
            </div>
            <Albums/>
            </>
      
    )
}

export {Album_List}