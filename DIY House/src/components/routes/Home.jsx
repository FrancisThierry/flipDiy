import { useState } from 'react'
import NavBar from '../NavBar'
// import '../../styles/Home.css'
import ObjectCard from '../ObjectCard'
import Footer from '../Footer'

const mockDB = [
  { 
    glbFileAddress: "https://cdn.glitch.global/b5ca4ccb-ed4c-4ece-b66c-5f831bd45890/KratkyMilkModele.glb?v=1695286915592",
    name : "Kratky",
    key: 1,
    bottleNumber:3
  },
  {
    glbFileAddress: "https://cdn.glitch.global/b5ca4ccb-ed4c-4ece-b66c-5f831bd45890/rainCollector.glb?v=1695469827748",
    name : "Rain Collector",
    key: 2,
    bottleNumber:2
  }
  ,
  {
    glbFileAddress: "https://cdn.glitch.global/b5ca4ccb-ed4c-4ece-b66c-5f831bd45890/greenhouse.glb?v=1696882095177",
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
