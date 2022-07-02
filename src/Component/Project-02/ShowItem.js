import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { delCart } from '../../Redux/Action'
import EmptyCart from './EmptyCart'
export default function ShowItem() {
  const list = useSelector((state) => state?.list)
   const dispatch = useDispatch()

  const deleteCart =(value,id)=>{
    const lists = list.filter((item)=>item.id!== id)
    dispatch(delCart(lists))
  }
  return (
    <>
      <div  className='text-center'>
        <h1 className=''>You have ordered:</h1>
        {list ? list.map((item,index)=>{
          return(
            <div key={index} className="card mb-3  m-5 " style={{ width: "70%" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={item.image} style={{height:'200px'}} className="img-fluid rounded-start " alt="loading..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{item.title.slice(0,27)}</h5>
                <p className="card-text">{item.description.slice(0,70)}</p>
                <p className="card-text">Price Rs.{item.price}</p>
              <button className='btn btn-primary mt-4' onClick={()=>{deleteCart(item,item.id)}}>Remove</button>
              </div>
            </div>
             
          </div>
        </div>
          )
        }):<EmptyCart/>}

      </div>

    </>
  )
}
