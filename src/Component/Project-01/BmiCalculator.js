import React ,{useState}from 'react'
import './BmiCalculator.css'
export default function BmiCalculator() {
  const [weight,setWeight] = useState(0)
  const [height,setHeight] = useState(0)
  const [bmi,setBmi] = useState('')
  const [message, setMessage] = useState(false)

  

  const calcBmi = (e)=>{
     e.preventDefault()

     if(weight === 0 || height === 0 ){
      alert('Please enter a valid weight and height')
     }
     else{
      let bmi = ((weight/(height*height))*100*100)
      setBmi(bmi.toFixed(2))
     }
     setMessage(true)
  }
  return (
    <div className='app'>
      <div className="containerBox">
        <h2>BMI claculator</h2>
        <form onSubmit={calcBmi}>
        <div>
         <label >Enter your Height(cm)</label>
          <input type="text" value={height}  onChange={(e)=>{setHeight(e.target.value)}}/>
         </div>
         <div>
         <label >Enter Your Weight(kg)</label>
          <input type="text" value={weight} onChange={(e)=>{setWeight(e.target.value)}}/>
         </div>
         <div>
          <button className='btn' type='submit'>Submit</button>
          <button className='btn btn-outline' type='submit'>Submit</button>
         </div>
        </form>
        {message ? <div className="center">
          <h3>Your BMI is :{bmi}</h3>
          <p>Your suggested weight range is between 50-67 <br />You are in a health weight range</p>
        </div>:null}
       
      </div>
       
    </div>
  )
}
