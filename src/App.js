import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Layouts/Main';
import Home from './Components/Home/Home'
import Quiz from './Components/Quiz/Quiz';
import Statistics from './Components/Statistics/Statistics'
import Blog from './Components/Blog/Blog'
import StartQuiz from './Components/StartQuiz/StartQuiz';

function App() {
  const router =createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          loader:()=> fetch('https://openapi.programming-hero.com/api/quiz'),
          element:<Home></Home> ,
         },
         {
          path:'/',
          loader:()=> fetch('https://openapi.programming-hero.com/api/quiz'),
          element:<Quiz></Quiz>

         },
         {
          path:'/statistics',
         element:<Statistics></Statistics>,
         },
         {
          path:'/blog',
          element:<Blog></Blog>
         },
         {
          path: '/quiz/:courseId',
          loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.courseId}`),
          element: <StartQuiz></StartQuiz>
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
