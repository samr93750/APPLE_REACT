import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Alert from "./Components/Alert";
import Section1 from "./Components/Sec1";
import Section2 from "./Components/Section2";
import Section3 from "./Components/Section3";
import Section4 from "./Components/Section4";
import Section5 from "./Components/Section5";
import Section6 from "./Components/Section6";
import Footer from "./Components/Footer";
import YouTube from "./Components/Youtube";
import News from "./Components/News";
import Parent from "./Components/Parent";
import NotFound from "./Components/NotFound";
import Top from "./Components/Top";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Top />

         {/* <Parent /> */}
        <Routes>
          <Route path="/" element={<Parent />} />
          <Route path="/ipadPro" element={<Section1 />} />
          <Route path="/macbook" element={<Section2 />} />
          <Route path="/iphone11pro" element={<Section3 />} />
          <Route path="/iphone11" element={<Section4 />} />
          <Route path="/tv" element={<Section5 />} />
          <Route path="/card" element={<Alert />} />
          <Route path="/notfound" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
