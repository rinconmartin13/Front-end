import React from "react";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import AboutUs from "../Components/AboutUs";
import BestWork from "../Components/BestWork";
import GraficaEstadis from "../Components/GraficaEstadis";
import NavbarPag from "../Components/NavbarPag";
function Home(){
 return (
   <div className="App">
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<NavbarPag />}>
           <Route index element={<BestWork />} />
           <Route path="Graf" element={<GraficaEstadis />} />
           <Route path="About" element={<AboutUs />} />
           <Route path="*" element={<Navigate replace to="/" />} />
         </Route>
       </Routes>
     </BrowserRouter>
     {/* <BrowserRouter>
       <Routes>
         <Route path="/" element={<Navbar />}></Route>
         <Route path="/Graf" element={<GraficaEstadis />}></Route>
         <Route path="/About" element={<AboutUs />}></Route>

         {/* <Route path="/" element={<LoginP></LoginP>}></Route>
         <Route path="/signup" element={<SignUpP></SignUpP>}></Route>
         <Route
           path="/forgotPassword"
           element={<ForgotPasswordP></ForgotPasswordP>}
         ></Route>
         <Route path="/confirmuser" element={<ConfirmUser />}></Route>
         <Route path="/recovery" element={<RecoveryPassword />}></Route>
         <Route path="/dashboard" element={<DashboardProducts />}></Route>
         <Route path="/add" element={<AddProduct></AddProduct>}></Route> */}
       {/* </Routes> */}
     {/* </BrowserRouter> */} 
   </div>
 );
}

export default Home;