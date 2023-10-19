import { useState } from 'react'
import NavBar from '../NavBar'
// import '../../styles/Home.css'
import ObjectCard from '../ObjectCard'
import Footer from '../Footer'

const mockDB = [
  { 
    glbFileAddress: 'src/assets/glb_images/KratkyMilkModele.glb',
    name : "Kratky",
    key: 1,
    bottleNumber:3
  },
  {
    glbFileAddress: 'src/assets/glb_images/rainCollector.glb',
    name : "Rain Collector",
    key: 2,
    bottleNumber:2
  }
  ,
  {
    glbFileAddress: 'src/assets/glb_images/greenhouse.glb',
    name : "Green House",
    key: 3,
    bottleNumber:1200
  }



]

function ModelItems() {

  return (
    <>
      <NavBar/>
      <h1>Nos modèles</h1>
      {
        mockDB.map((object) => <ObjectCard diyNumber={object.bottleNumber} objectName={object.name} glbFile={object.glbFileAddress} key={object.key} />)
      }
      <Footer/>
    </>
  )
}

export default ModelItems;
