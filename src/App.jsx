//This component handles the routing of the app using the react router dom library. 

import { 
  createBrowserRouter,
  RouterProvider, 
} from 'react-router-dom';
import './styles/App.css'
import Home from './components/routes/Home';
import Dashboard from './components/routes/Dashboard';
import Fablabs from './components/routes/FabLabs';
import Stats from './components/routes/Stats';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/dashboard",
    element: <Dashboard/>
  },
  {
    path: "/fablabs",
    element: <Fablabs/>
  },
  {
    path: "/stats",
    element: <Stats/>
  },
]);


function App() {

  return (
       <RouterProvider router={router} />
  )
}

export default App
