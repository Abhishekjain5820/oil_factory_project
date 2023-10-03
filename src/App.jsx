
import { Route, Routes } from "react-router-dom";
// import { Nav } from "./components";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
// import { Footer } from "./sections";

const App = () => {
  return (

    <>
    
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
   

    </>
    
    
  );
};

export default App;
