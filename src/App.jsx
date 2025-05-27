
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/home";
import Edit from "./pages/edit";
import Single from "./pages/single";
import Create from "./pages/create";
function App() {


  return (
    <>
     <BrowserRouter>
     <Routes>

         <Route path='/' element={<Home/>}/>
         <Route path='/edit/:id' element={<Edit/>}/>
         <Route path='/single/:id' element={<Single/>}/>
         <Route path='/create' element={<Create/>}/>
         
         
     </Routes>
     
     </BrowserRouter>
    </>
  );
}

export default App
