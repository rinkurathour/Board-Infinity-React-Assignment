
const initialState = {
    list:[]
}
export function reducer(state=initialState,action){
   
    switch(action.type){
        case 'FETCHDATA':{
            return ({...state,data:action.payload})
        }
        case 'ADDITEM':{
            const list = [...state?.list]
            list.push(action.payload)
            return({...state,list:list})
          
        }
      case 'DELITEM':{
         return ({...state,list:action.payload})
      
      }
        default:{
            return state
        }
    }
}