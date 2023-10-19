import { 
  createBrowserRouter,
  RouterProvider, 
} from 'react-router-dom';
import './styles/App.css'
import ModelItems from './components/routes/Home';
import Dashboard from './components/routes/Dashboard';
import Fablabs from './components/routes/FabLabs';
import Stats from './components/routes/Stats';

const router = createBrowserRouter([
  {
    path: "/",
    element: <ModelItems/>
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
    <>
       <RouterProvider router={router} />
    </>
  )
}

export default App
