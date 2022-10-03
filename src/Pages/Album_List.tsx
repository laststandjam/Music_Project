
import {useEffect, useState} from 'React'
import { fileURLToPath } from 'url'
import {Client} from "../Utility/Client"
import {Albums} from "../Components/Albums"


const Album_List: React.FC = ()=>{

    return(
        <div>
            <h1>Album list</h1>
            <Albums/>
        </div>
    )
}

export {Album_List}