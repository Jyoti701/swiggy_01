import React from 'react'
import '../App.css'

const Restaurentcard = ({resinfo}) => {
  return (

    <div className='card_container'>
    <div className='img_container'>
    <img src={`https://media-assets.swiggy.com/swiggy/image/upload/${resinfo.info.cloudinaryImageId}`} alt={resinfo.info.name} className='card_img'/>
    </div>
    <div className='info_container'>
    <p>{resinfo.info.name}</p>
    <div className='info_rating_container'>
    <p>Avg rating:{
      resinfo.info.avgRatingString}</p>
    <p>{resinfo.info.costForTwo}</p>
    </div>
    <p>delivery Time:{resinfo.info.
sla.deliveryTime
}minutes</p>
<p className='cuisines'>cuisines: {resinfo.info.cuisines.join(',')}</p>
    </div>
    </div>
  )
}

export default Restaurentcard;
