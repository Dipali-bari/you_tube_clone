import React from 'react'
import '../Video/vedio.scss'
import {AiFillEye} from 'react-icons/ai'
import { useEffect } from 'react'
import axios from 'axios';



export default function Vedio() {

 
  

  

  return (
   <div className="video">
    <div className="video__top">
      <img src="https://i.ytimg.com/vi/RNEebzirc1M/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDQ0Gc7SqzKYdDESH7DOjUbLirc3w" alt=""/>
      <span>05.43</span>
    </div>
    <div className="video__title">
      create app in 5 minutes made by me
    </div>
    <div className="video__details">
      <span>
        <AiFillEye/> 5m Views •
      </span>
      <span>5 days ago
      </span>
    </div>
    <div className="video__channel">
      <img src='https://yt3.ggpht.com/BHLBW5T5uBa8ZmeTylRXQQ7wtLCJR-g0H77Cz_msi0_SmMOI1dMP48vC0ayd_jrf_Hkp1vVd0j8=s68-c-k-c0x00ffffff-no-rj' alt=''/>
      <p>Rainbow Hat Jr</p>
    </div>
   </div>
  )
}
