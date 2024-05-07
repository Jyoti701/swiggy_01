import React from 'react'
import {Svghelp,Svgsignin,Svgoffer,Svgsearch,Svgcart,Svgcorporate} from './Utils/Utility'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div className='navigation_container'>
      <ul className='nav-item'>
        <Link><li><Svgcorporate/>Swiggy Corporate</li></Link>
        <Link><li><Svgsearch/>Search</li></Link>
        <Link to="/offer"><li><Svgoffer/>Offers</li></Link>
        <Link to="/help"><li><Svghelp/>Help</li></Link>
        <Link to="signin"><li><Svgsignin/>Sign In</li></Link>
        <Link><li><Svgcart/>Cart</li></Link>
      </ul>
    </div>
  )
}

export default Navigation;
