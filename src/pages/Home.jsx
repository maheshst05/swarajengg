import React from 'react'
import Responsive from '../components/Slider'



import AboutUs from '../components/Aboutus'
import OurProducts from '../components/OurProducts'
import ListOfMachinery from '../components/ListOfMachinery'
import OurPartners from '../components/OurParterns'



const Home = () => {
  return (
    <div style={{
      width: '100%',
      margin: 'auto',
      padding: 0,

    }}>

      <Responsive />
      <AboutUs />
      <OurProducts />
      {/* <ListOfMachinery /> */}
      <OurPartners />

    </div>
  )
}

export default Home
