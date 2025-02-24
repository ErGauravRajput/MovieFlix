import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { Movie } from "./pages/Movie";
import { Contact ,contactData} from "./pages/Contact";
import AppLayout from "./components/layout/AppLayout";
import { ErrorPage } from "./components/layout/ErrorPage";
import "./App.css";
import { MoviesDetails } from "./components/UI/MoviesDetails";
import { getMovieDetails } from "./Api/GetMoviesDetail";
const App = () => {
  
  const router = createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>,
      errorElement:<ErrorPage/>,
      children:[
        {

        path: "/",
        element:<Home/>
      },
      {
        path: "/Movie",
        element:<Movie/>,
      },
      {
        path: "/Movie/:MoviesID",
        element:<MoviesDetails/>,
        loader:getMovieDetails,

        
      },
      {
        path: "/Contact",
        element:<Contact/>,
        action:contactData,
      }
    ]
    }
    
  ]
  );
  // const router=createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route>
  //       <Route path="/" element={<Home/>}/>
  //       <Route path="/About" element={<About/>}/>
  //       <Route path="/Contact" element={<Contact/>}/>
  //       <Route path="/Movie" element={<Movie/>}/>
  //     </Route>
  //   )
  // )

  return <RouterProvider router={router}/>
};
export default App;