import './App.css';
import MainContainer from './components/MainContainer';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Body from './components/Body';
import MeditationVideos from './components/MeditationVideos';
import Exercises from './components/Exercises';

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
    },{
      path:"exercises",
        element:<Exercises/>
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
