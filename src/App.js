import Door from "./components/Door.jsx"
import Living from "./components/Living.jsx"
import Bed from "./components/Bed.jsx"
import Bath from "./components/Bath.jsx"

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
    {/* BrowserRouter uses HTML5 history API to keep your UI in sync with the URL*/}
    <BrowserRouter>
    {/* Routes is the container for all of our potential routes */}
      <Routes>
        {/* Route is each individual route; we will utilize the path and element prop. 
        Path reflects the URL path, element is where we render our component */}
        <Route path = "/" element = {<Door />} />
        <Route path = "/livingroom" element = {<Living />} />
        <Route path = "/bedroom" element = {<Bed />} />
        <Route path = "/bathroom" element = {<Bath />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}


