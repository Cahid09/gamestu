import Footer from "./components/Footer";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import { Routes, Route } from "react-router-dom";
import ProjectsHome from "./components/projects-page-components/ProjectsHome";
import AboutHome from "./components/about-page-components.js/AboutHome";
import ContactHome from "./components/contact-page-components/ContactHome";


function App() {
  return (
    <div>
<Header/>
<Routes>
  <Route path="/" element={<Homepage/>}></Route>
  <Route path="/home" exact element={<Homepage/>}></Route>
  <Route path="/projects" element={<ProjectsHome/>}></Route>
  <Route path="/about" element={<AboutHome/>}></Route>
  <Route path="/contact" element={<ContactHome/>}></Route>
</Routes>
    </div>
  );
}

export default App;
