import React from 'react'
import SideDrawer from './SideDrawer'

function NewsNav({setCategory}) {

  //Enabling hidden nav bars
  const hnav=document.querySelector(".nav")
  let lastScrollY= window.scrollY
  
  window.addEventListener("scroll", ()=> {
      if(lastScrollY < window.scrollY){
          hnav?.classList.add("nav-hidden")
      }else{
          hnav?.classList.remove("nav-hidden")
      }

      lastScrollY=window.scrollY
  })

  return (
    <div className='nav'>
        <div className='nav-icon'>
            <SideDrawer setCategory={setCategory}/>
        </div>
        <div className='nav-text'>
            News 
        
        <img src="https://apps.khabriya.in/wp-content/uploads/2021/07/appstore.png"
            height="60%"
            alt='nav-icon'
            style={{cursor:'pointer'}} />
            Nation
        </div>
    </div>
  )
  
}

export default NewsNav