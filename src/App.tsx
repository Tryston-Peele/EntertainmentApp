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
        <div className="flex flex-row w-full h-screen border-2 border-solid border-[green] bg-[rgb(0,4,27)] ">
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
