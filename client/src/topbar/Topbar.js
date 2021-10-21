import React from 'react'; 
import './topbar.css';

export default function TopBar () {



    return (
        <div className="top">
          <div className="topLeft">
          <i class="topIcon fab fa-facebook-square" aria-hidden="true"></i>
          <i class="topIcon fab fa-twitter-square" aria-hidden="true"></i>
          <i class="topIcon fab fa-pinterest-square" aria-hidden="true"></i>
          <i class="topIcon fab fa-instagram-square" aria-hidden="true"></i>
</div>
          <div className="topCenter">
          <ul className="topList">
              <li className="topListItem">HOME</li>
              <li className="topListItem">ABOUT</li>
              <li className="topListItem">CONTACT</li>
              <li className="topListItem">WRITE</li>
              <li className="topListItem">LOGOUT</li>


          </ul>
        
</div>
          <div className="topRight">
              <img  className="topImage" src="data:image/jpeg;base64,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" alt="image" />  
              
              <i class="topSearchIcon fa fa-search" aria-hidden="true"></i>
          </div>
        </div>

    )





}