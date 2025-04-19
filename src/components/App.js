import "../css/App.scss";
import Events from "./Events";
import About from "./About";
import Workplaces from "./Workplaces";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Layout from "./Layout";
import Magazine from "../events/Magazine";
import Constitution from "./Constitution";
import ContactUs from "./ContactUs";
import Sector05 from "../workplaces/Sector05";
import Khalsa from "../workplaces/Khalsa";
import Osap from "../workplaces/Osap";
import Sector02 from "../workplaces/Sector02";
import Sector21 from "../workplaces/Sector21";
import Sector06 from "../workplaces/Sector06";
import Jagda from "../workplaces/Jagda";
import Chhend from "../workplaces/Chhend";
import Executive from "./Executive";
import DiyaProject from "../events/DiyaProject";
import FoundationDay from "../events/FoundationDay";
import LSY from "../events/LSY";
import DiyaProject2024 from "../events/DiyaProject2024";

function App() {
  return (
    <>
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />}></Route>
              <Route path="/events" element={<Events />}></Route>
              <Route path="/workplaces" element={<Workplaces />} />
              <Route path="/workplaces/sector-02" element={<Sector02 />} />
              <Route path="/workplaces/sector-21" element={<Sector21 />} />
              <Route path="/workplaces/sector-05" element={<Sector05 />} />
              <Route path="/workplaces/sector-06" element={<Sector06 />} />
              <Route path="/workplaces/chhend" element={<Chhend />} />
              <Route path="/workplaces/osap" element={<Osap />} />
              <Route path="/workplaces/khalsa" element={<Khalsa />} />
              <Route path="/workplaces/jagda" element={<Jagda />} />
              <Route path="/magazines" element={<Magazine />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/executive" element={<Executive />}></Route>
              <Route path="/contact" element={<ContactUs />}></Route>
              <Route path="/constitution" element={<Constitution />}></Route>
              <Route path="/events/DiyaProject" element={<DiyaProject />}></Route>
              <Route path="/events/FoundationDay" element={<FoundationDay />}></Route>
              <Route path="/events/LSY" element={<LSY />}></Route>
              <Route path="/events/DiyaProject2024" element={<DiyaProject2024 />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;