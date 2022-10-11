import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Layouts/Main';
import Home from './Components/Home/Home'
import Quiz from './Components/Quiz/Quiz';
import Statistics from './Components/Statistics/Statistics'
import Blog from './Components/Blog/Blog'

function App() {
  const router =createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          element: <><Home></Home><Quiz></Quiz></> ,
         },
         {
          path:'/statistics',
         element:<Statistics></Statistics>,
         },
         {
          path:'/blog',
          element:<Blog></Blog>
         }
       

      
      ] 

    },
    
  ])
  return (
    <div >
   <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
