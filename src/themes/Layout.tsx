import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AlertHome from "../components/AlertApp";
import ScrollToTop from "../components/ScrollToTop";
export default function Layout() {
  return (
    <div className="flex flex-col items-center">
      <ScrollToTop />
      <Header />
      <AlertHome />
      <Outlet />
      <Footer />
    </div>
  );
}
