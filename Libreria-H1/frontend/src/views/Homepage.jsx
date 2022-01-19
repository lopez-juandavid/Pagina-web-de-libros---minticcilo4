import React from 'react'
import Card from '../components/Card'
import Navbar from '../components/Navbar'

const homepage = () => {
  return (
    <div>
      <Navbar />
      <Card imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpmFgAds9CacKw2uVa7yZIF9N-ug0Anvc9xg&usqp=CAU" titulo="pinocho" autor="alguien"/>
    </div>
  )
}

export default homepage
