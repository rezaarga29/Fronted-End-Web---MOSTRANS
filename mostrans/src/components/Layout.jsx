import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="layout-container">
      <Navbar />
      <div className="content-container">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
