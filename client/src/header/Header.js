import React from 'react';
import './header.css'



export default function Header(){


  return(
      <div className="header">
         <div className="headerTitles">
             <span className="headerTitleSm">React & Node</span>
             <span className="headerTitleLg">Blog</span>
         </div>

         <img className="headerImg" src="https://i.insider.com/5b6209ecbda1c72a008b4576?width=1136&format=jpeg" alt="" />

      </div>
  )


}