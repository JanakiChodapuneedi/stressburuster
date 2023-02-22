import './App.css';
import SideBar from './components/SideBar';
import MainContainer from './components/MainContainer';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Jokes from './components/Jokes';
import Body from './components/Body';
import MeditationVideos from './components/MeditationVideos';

const browserRouter = createBrowserRouter ([
  {
    path : '/',
    element : <Body/>,
    children : [{
      path : '/',
      element : <MainContainer/>
    },
      {
        path:"meditationVideos",
        element:<MeditationVideos/>
      }
    ]
  }
])
function App() {
 
  return (
    <div className="flex">      
          
          <RouterProvider router={browserRouter}>
          <Body/>
          </RouterProvider>
    </div>
  );
}

export default App;
