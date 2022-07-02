import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../../Redux/Action'
import { addCart } from '../../Redux/Action'
import Loding from './Loding'
export default function CardItem() {
  const dispatch = useDispatch()
  const data = useSelector((state) => {
    return (state?.data)
  })

 
  useEffect(() => {
    dispatch(fetchData())
  }, [])

 const addToCart = (item)=>{
  dispatch(addCart(item))
 }
  
  return (
    <>
   
      <div className='container'>
        <div className='row'>
          <h2 className='text-center'> Our Items</h2>
        {!data ? <Loding/>
        :data.map((item,index)=>{
          return(
    
            <div key={index} className='col mt-4'>
            <div className="card" style={{ width: " 18rem" }}>
              <img src={item.image} style = {{width:"200px",height:"200px"}} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{item.title.slice(0,27)}</h5>
                <p className="card-text">{item.description.slice(0,70)}</p>
                <span>Price:Rs.{item.price}</span>
                <br />
                <button className="btn btn-primary"  onClick={()=>{addToCart(item)}} >ADD TO CART</button>
              </div>
            </div>
          </div>
          
          )
        })}
        </div>
          

      </div>
    </>

  )
}
