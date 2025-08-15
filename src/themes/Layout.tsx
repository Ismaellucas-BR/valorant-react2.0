import { Outlet } from "react-router";
import Header from "../components/Header";
export default function Layout() {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <Outlet />
    </div>
  );
}
