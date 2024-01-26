import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Residences from "./components/Residences";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import "./App.css";
import Logout from "./components/Logout";
import ForSale from "./components/ForSale";
import ForRent from "./components/ForRent";
// import axios from "axios";
// import EditResidence from "./components/EditResidence";
// import DeleteResidence from "./components/DeleteResidence";
import AddResidence from "./components/AddResidence";
import RequireAuth from "./components/RequireAuth";

function App() {
  
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/register" element={<SignUp/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/" element={<RequireAuth><Home /></RequireAuth>}/>
      <Route path="/addresidence" element={<RequireAuth><AddResidence /></RequireAuth>}/>
      <Route path="/residences" element={<RequireAuth><Residences /></RequireAuth>}/>
      <Route path="/forSale" element={<RequireAuth><ForSale /></RequireAuth>}/>
      <Route path="/forRent" element={<RequireAuth><ForRent /></RequireAuth>}/>
      <Route path="/logout" element={<Logout />}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App;
