import React from 'react'

import { useIntl } from 'react-intl';
import { Navigate, Route, Routes, Link } from 'react-router-dom';
import LocalizedApp from '../Utility/LocalizedApp'


type Props = {}

const Navbar = (props: Props) => {
    const intl = useIntl()   
     const { formatMessage } = useIntl()
    const links = [

        {
            name: intl.formatMessage({ id: 'Route.albums' }), 
            path:intl.formatMessage({ id: 'Route.albums' })
        },
        {
            name: intl.formatMessage({ id: 'Route.bands' }), path:intl.formatMessage({ id: 'Route.bands' })
        },
    

        
    ]

    return (
        <header className='sticky top-0 z-30 w-full '>
            <div className='md:flex items-center justify-between bg-slate-500 py-4 md:px-10 px-7'>
            <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800'>
                <ul className='md-center md:inline-flex space-x-10'>
                    {links.map((link, i)=>(
                   <li key={i}> <Link to={link.path} > {link.name} </Link> </li>
                    ))}
                </ul>
                </div>
            </div>
        </header>
    )
}

export { Navbar }