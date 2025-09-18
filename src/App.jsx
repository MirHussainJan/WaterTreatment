 import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Technologies from "./pages/Technologies";
import About from "./pages/About";
import Industries from "./pages/Industries";
import Blogs from "./pages/Blogs";
import Parts from "./pages/Parts";
import ContactUs from "./pages/ContactUs";
import WaterPurificationTechnologies from "./OtherPages/CustomPurificationSystems";
import WaterSoftening from "./OtherPages/WaterSoftening";
import Desalination from "./OtherPages/Desalination";
import ReverseOsmosis from "./OtherPages/ReverseOsmosis";
import Deionization from "./OtherPages/Deionization";
import WaterIonization from "./OtherPages/WaterIonization";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/technologies' element={<Technologies />}></Route>
        <Route path='/technologies/water-purification' element={<WaterPurificationTechnologies />}></Route>
        <Route path='/technologies/water-softening' element={<WaterSoftening />} ></Route>
        <Route path="/technologies/Desalination" element={<Desalination />} />
        <Route path="/technologies/reverse-osmosis" element={<ReverseOsmosis />} />
        <Route path='/technologies/deionization' element={<Deionization/>}></Route>
        <Route path='/technologies/water-ionization' element={<WaterIonization/>}></Route>
        
        <Route path='/industries' element={<Industries />}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/parts' element={<Parts />}></Route>
        <Route path='/contact' element={<ContactUs />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;