import React from 'react'
import './Shop.css'
// import { useState } from 'react'
import Hero from '../../Componets/Hero/Hero'
import Popular from '../../Componets/Popular/Popular'
import Offers from '../../Componets/Offers/Offers'
import NewCollections from '../../Componets/NewCollections/NewCollections'
import NewsLetter from '../../Componets/NewsLetter/NewsLetter'


const shop = () => {
  return (
    <div>
      <Hero/>
     <Popular/>
     <Offers/>
     <NewCollections/>
     <NewsLetter/>
    </div>
  )
}

export default shop
