import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Bout from "./pages/Bout";
import Csignin from "./pages/Csignin";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";







export default function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element ={<Home />} />
       <Route path="/about" element ={<Bout/>} />
      <Route path="/sign-in" element ={<Csignin/>} />
      <Route path="/sign-up" element ={<SignUp/>} />
        <Route path="/dashboard" element ={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
  );
}
