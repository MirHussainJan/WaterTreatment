 import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog1 from "./pages/Blog1";
import Blog2 from "./pages/Blog2";
import Blog3 from "./pages/Blog3";
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
import SterilizationWaterTreatmentSystems from "./OtherPages/SterilizationWaterTreatmentSystems";
import UltravoiletDisinfection from "./OtherPages/UltravoiletDisinfection";
import IonExchange from "./OtherPages/IonExchange";
import ActivatedCarbonFiltration from "./OtherPages/ActivatedCarbonFiltration";
import Sedimentation from "./OtherPages/Sedimentation";
import CopperSilverIonization from "./OtherPages/CopperSilverIonization";
import MembraneCleaningSystems from "./OtherPages/MembraneCleaningSystems";
import MediaFilters from "./OtherPages/MediaFilters";
import WaterChillers from "./OtherPages/WaterChillers";
import SelfCleaningFiltration from "./OtherPages/SelfCleaningFiltration";
import CartridgeFilterHousings from "./OtherPages/CartridgeFilterHousings";

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
    <Route path='/technologies/sterilization-water-treatment-systems' element={<SterilizationWaterTreatmentSystems />} />
    <Route path='/technologies/ultravoilet-disinfection' element={<UltravoiletDisinfection />} />
    <Route path='/technologies/ion-exchange' element={<IonExchange />} />
    <Route path='/technologies/activated-carbon-filtration' element={<ActivatedCarbonFiltration />} />
    <Route path='/technologies/sedimentation' element={<Sedimentation />} />
    <Route path='/technologies/copper-silver-ionization' element={<CopperSilverIonization />} />
    <Route path='/technologies/membrane-cleaning-systems' element={<MembraneCleaningSystems />} />
    <Route path='/technologies/media-filters' element={<MediaFilters />} />
    <Route path='/technologies/water-chillers' element={<WaterChillers />} />
    <Route path='/technologies/self-cleaning-filtration' element={<SelfCleaningFiltration />} />
    <Route path='/technologies/cartridge-filter-housings' element={<CartridgeFilterHousings />} />
        
        <Route path='/industries' element={<Industries />}></Route>
  <Route path='/blogs' element={<Blogs />}></Route>
  <Route path='/blog1' element={<Blog1 />} />
  <Route path='/blog2' element={<Blog2 />} />
  <Route path='/blog3' element={<Blog3 />} />
        <Route path='/parts' element={<Parts />}></Route>
        <Route path='/contact' element={<ContactUs />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;