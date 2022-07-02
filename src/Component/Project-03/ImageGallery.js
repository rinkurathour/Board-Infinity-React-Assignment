import React, { useState } from 'react'
import img1 from './img/img1.jpg'
import img2 from './img/img2.jpg'
import img3 from './img/img3.jpg'
import img4 from './img/img4.jpg'
import img5 from './img/img5.jpg'
import img6 from './img/img6.jpg'
import Popup from './Popup'
export default function ImageGallery() {
  const data = [
    {
      id: 1,
      author: 'alejandro Esca',
      image: img1
    },
    {
      id: 2,
      author: 'Alejandro Jarvix',
      image: img2
    },
    {
      id: 3,
      author: 'Paul Jarvis',
      image: img3
    },
    {
      id: 4,
      author: 'Tina Rataj',
      image: img4
    },
    {
      id: 5,
      author: 'Lukas budimaier',
      image: img5
    },
    {
      id: 6,
      author: 'Danielle Mac',
      image: img6
    }
  ]
  console.log(data)
 const [buttonPopup, setButtonPopup] = useState(false)
 const [imageProps,setImageProps] = useState('')
 const cardTrigger = (item,index)=>{
  console.log(item)
  setButtonPopup(true)
  setImageProps(item.image)
 }
  return (
    <>
    <div className=''>
      <h3 className='text-center mt-2'>Hello, I am from ImageGallery</h3>
      <div className="row row-cols-1 row-cols-md-3 g-4 m-3   ">
        {data ?
          data.map((item, index) => {
            return (
              <div className="col  " key={index} onClick={()=>cardTrigger(item,index)}>
                <div className="card  shadow" style={{ width: "18rem" }} >
                  <img src={item.image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title text-center fst-italic">Image By:{item.author}</h5>
                  </div>
                </div>
              </div>
            )
          })
          : null}

          <Popup trigger ={buttonPopup} setTrigger = {setButtonPopup} image={imageProps}/>
      </div>
    </div>
    </>
  
  )
}
