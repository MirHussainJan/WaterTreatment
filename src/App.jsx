import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Technologies from "./pages/Technologies";
import About from "./pages/About";
import Industries from "./pages/Industries";
import Blogs from "./pages/BLogs";
import Parts from "./pages/Parts";
import ContactUs from "./pages/ContactUs";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/technologies' element={<Technologies />}></Route>
        <Route path='/Industries' element={<Industries />}></Route>
        <Route path='/Blogs' element={<Blogs />}></Route>
        <Route path='/Parts' element={<Parts />}></Route>
        <Route path='/Contact' element={<ContactUs />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;