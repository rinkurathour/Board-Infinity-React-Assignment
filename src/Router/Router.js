import React from 'react'
import {Routes,Route} from 'react-router-dom'
import BmiCalculator from '../Component/Project-01/BmiCalculator'
import CardItem from '../Component/Project-02/CardItem'
import ShowItem from '../Component/Project-02/ShowItem'
import ImageGallery from '../Component/Project-03/ImageGallery'
export default function Router() {
  return (
      <Routes>
        <Route path='/' element= {<BmiCalculator/>} />
        <Route path='/carditem' element = {<CardItem/>} />
        <Route path='/showitem' element = {<ShowItem/>} />
        <Route path='/imagegallery' element = {<ImageGallery/>}  />
    </Routes>
    
  )
}
