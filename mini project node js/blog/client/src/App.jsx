import React from "react";
import "./index.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import MainLayout from "./Layout/MainLayout";

// import Login from "./pages/Login";
// import SignUp from "./pages/SignUp"
// import AdminLayout from "./Layout/AdminLayout";
// import Profile from "./pages/Profile";
// import Home from "./pages/Home";
import OrderTracking from "./components/OrderTracking";

export default function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<MainLayout />}>
    //       <Route index element={<Home />} />
    //       <Route path="/profile" element={<Profile />} />
    //     </Route>
    //     <Route element={<AdminLayout />}>
    //       <Route path="/login" element={<Login />} /><Route path="/signup" element={<SignUp />} />
    
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
    <div>
      <OrderTracking/>
    </div>
  );
}
