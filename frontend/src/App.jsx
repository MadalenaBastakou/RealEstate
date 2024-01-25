import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./components/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Residences from "./components/Residences";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import "./App.css";
// import Logout from "./components/Logout";
// import axios from "axios";
// import EditResidence from "./components/EditResidence";
// import DeleteResidence from "./components/DeleteResidence";
import AddResidence from "./components/AddResidence";

function App() {
  // axios.defaults.withCredentials = true;
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3001/auth/verify")
  //     .then((res) => {
  //       if (res.data.login) {
  //         setRole(res.data.role);
  //       } else {
  //         setRole("");
  //       }
  //     })
  //     .catch((err) => console.log(err));
  // }, []);
  // return (
  //   <BrowserRouter>
  //     <Navbar />
  //     <Routes>
  //       <Route path="/" element={<Home />}></Route>
  //       <Route path="/residences" element={<Residences />}></Route>
  //       <Route path="/login" element={<Login />}></Route>
  //       <Route path="/signup" element={<SignUp />}></Route>
  //       <Route path="/logout" element={<Logout />}></Route>
  //       <Route path="/addresidence" element={<AddResidence />}></Route>
  //       <Route path="/residence/:id" element={<EditResidence />}></Route>
  //       <Route path="/residence/:id" element={<DeleteResidence />}></Route>
  //     </Routes>
  //     <Footer />
  //   </BrowserRouter>
  // );
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/register" element={<SignUp/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/addresidence" element={<AddResidence />}></Route>
      <Route path="/residences" element={<Residences />}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App;
