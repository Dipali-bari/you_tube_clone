
import React from 'react'
import { IoReorderThreeOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { IoMdMic } from "react-icons/io";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { BiUserCircle } from "react-icons/bi";
import '../Header/Header.css';

import { IconContext } from "react-icons";

export default function Header() {
  return (
    <div className='conatiner'>
         {/* <IoReorderThreeOutline  size={26}/>

         <img
          src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Youtube2_colored_svg-512.png"
          alt="youtubeicon"
          style={{ height: "100px", width: "100px" }}
        />

        <form>
            <input type="text" placeholder='Search'/>
            <button type='submit'><IoIosSearch size={23}/></button>
        </form>

        <dic className="header_icons">
        <BiDotsVerticalRounded size={25} />
        <BiUserCircle />

        </dic> */}
        <div className="youtubeIcon">
        <div className="lines">
            <IoReorderThreeOutline  size={30}/>
        </div>
        <div className="youtube" >
        <img
          src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Youtube2_colored_svg-512.png"
          alt="youtubeicon"
          style={{ height: "100px", width: "100px" }}
        />
        </div>
       
       
      </div>
      <div className="searchBox">
        <div id="search">
            
        <div className="tasksInput">
            <input placeholder="Search" type="text" class="form-control " />
            
        </div>
     
        <div class="submit-and-options">
           
            <button type="submit" class="btn ">  <IoIosSearch size={23}/></button>
        </div>

        </div>
      
        
       {/* <div id="input">
        <input type="text" placeholder="Search"/>
            <IoIosSearch />
       </div> */}
       <div id ="mic">
            <IoMdMic  size={25}/>

       </div>
      </div>
      <div className="signIn">
        <div id="dot">
        <BiDotsVerticalRounded size={25} />
        </div>
        <div id="s">
            <IconContext.Provider value={{ color: ' rgb(25, 102, 245)', size: '25' }}>
            <div><BiUserCircle /></div>

            </IconContext.Provider>
                
            
            <div id="user">
            
            <button id="btnsignIn">Sign In</button>

            
            </div>

        </div>
        
       
      </div>
    </div>
  )
}
