import axios from 'axios'

export const fetchData = ()=>{
    return async(dispatch)=>{
        const result = await axios.get('https://fakestoreapi.com/products')
        dispatch({
            type:'FETCHDATA',
            payload:result.data
        })
    }
}

// For add item to cart
export const addCart = (item)=>{
  return{
    type:'ADDITEM',
    payload:item
  }
}

// For Delete item from cart
export const delCart = (item)=>{
  return{
    type:'DELITEM',
    payload:item
  }
}