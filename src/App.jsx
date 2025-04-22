import React from "react";
import { Outlet } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { AuthProvide } from "./context/AuthContext";

const App = () => {
  return (
    <>
    <AuthProvide>
    <Navbar></Navbar>
      <main className="min-h-screen !max-w-screen-2xl !px-4 !py-4 lg:!mx-10 font-primary">
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </AuthProvide>
     
    </>
  );
};

export default App;
