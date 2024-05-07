import React from 'react'
import { useState,useEffect } from 'react'
import Restaurentcard from './Restaurentcard'

const Body = () => {
  const[restaurant,setRestaurant]=useState([])
  useEffect(()=>{
Fetchdata()
  },[])
  const Fetchdata= async()=>{
    try{
const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
const datajson=await data.json()
const fetcheddata=datajson.data?.cards[4]?.card?.card?.
  gridElements?.infoWithStyle?.restaurants
console.log(fetcheddata)
setRestaurant(fetcheddata)
    }catch{
console.log("api is fetching....")
    }
    

  }
  return (
    <div className='body_container'>
   {
    restaurant.map((res,index)=>{
     
return(
 <Restaurentcard key={res.info.id} resinfo={res}/>
)
    })
   }
    </div>
  )
}

export default Body
