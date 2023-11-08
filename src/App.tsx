import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Bookmarks from "./pages/Bookmarks";
import SideMenu from "./components/SideMenu";
import data from "../data.json";
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="appContainer">
          <SideMenu />
          <Routes>
            <Route path="/" element={<Home data={data} />}></Route>
            <Route
              path="/bookmarks"
              element={<Bookmarks data={data} />}
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
