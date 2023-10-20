//This component generates the Home page of the application mapping over the glbObjects array and rendering an ObjectCard component for each object

import NavBar from '../NavBar'
import ObjectCard from '../ObjectCard'
import Footer from '../Footer'
import { glbObjects } from '../../mockDB'

function Home() {

  return (
    <>
      <NavBar/>
      <h1>Nos modèles</h1>
      {
        glbObjects.map((object) => <ObjectCard diyNumber={object.bottleNumber} objectName={object.name} glbFile={object.glbFileAddress} key={object.key} />)
      }
      <Footer/>
    </>
  )
}

export default Home;
