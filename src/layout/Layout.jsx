import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../companents/header/header";
import Footer from "../companents/footer/footer";

const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
