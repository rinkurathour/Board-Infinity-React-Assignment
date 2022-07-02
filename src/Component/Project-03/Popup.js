import React from 'react'
import './ImageGallery.css'
export default function Popup(props) {
  return (props.trigger)? (
    <div className='popup'>
        <div className='popup-inner'>
           
           <img src={props.image} alt="" style={{width:"100%",height:"76vh"}} />
           <i class="fa fa-times close-btn" aria-hidden="true" onClick={()=>props.setTrigger(false)}></i>
        </div>
       
    </div>
  ):""
}
