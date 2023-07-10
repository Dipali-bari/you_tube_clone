

import React from 'react'
import '../categoryBar/categoryBar.scss'
import {useState} from 'react'


const keyword =['All' ,'Dramedy', 'Film criticisms' , 'AngularJs' , 'React Native' , 
                  'use of API' ,'Redux' ,'Music' ,'Redux' , 'Live' , 'Web Development' , 'Bollywood Music' ,'Tamil Cinema' , 'Gaming' , 'Computers']

export default function CategoryBar() {

  const [activeElement , setActiveElement] = useState('All')

  const handleClick = (value) =>{
    setActiveElement(value)
  }
  
  return <div className='categorybar'>
    {
      keyword.map((value , i)=><span 
        onClick={()=>handleClick(value)}

        className={activeElement === value ? 'active' :''}

      key={i}>{value}</span>
      )
    }

  </div>
}
