
import React from 'react'
import "./sidebar.scss"
import {AiFillHome} from 'react-icons/ai'
import {MdSubscriptions ,MdVideoLibrary} from 'react-icons/md'
import {GoHistory} from 'react-icons/go'

export default function Sidebar() {
  return (
    <nav className=' sidebar '>
        <li>
            <AiFillHome size={23}/>
            <span>Home</span>
        </li>
        <li>
            <MdSubscriptions size={23}/>
            <span>Subscription</span>
        </li>
        <li>
            <MdVideoLibrary size={23}/>
            <span>Library</span>
        </li>
        <li>
            <GoHistory size={23}/>
            <span>History</span>
        </li>
        <hr/>

    </nav>
  )
}
