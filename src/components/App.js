import "../css/App.scss";
import Events from "./Events";
import About from "./About";
import Workplaces from "./Workplaces";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Home from "./Home";
import Layout from "./Layout";
import Magazine from "../events/Magazine";
import Constitution from "./Constitution";
import ContactUs from "./ContactUs";
// import SectorDetail from "./SectorDetail";
import Executive from "./Executive";
import DiyaProject from "../events/DiyaProject";
import FoundationDay from "../events/FoundationDay";
import LSY from "../events/LSY";
import DiyaProject2024 from "../events/DiyaProject2024";
import HangOnWorking from "./HangOnWorking";
import Volunteer from "./Volunteer";

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
              <Route path="/workplaces/:slug" element={<Navigate to="/hang-on-working" replace />} />
              <Route path="/hang-on-working" element={<HangOnWorking />} />
              <Route path="/volunteer" element={<Volunteer />} />
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