import { Outlet } from "react-router-dom";
import { CSidebar } from "../components/CSidebar";
import { CNavbar } from "../components/CNavbar";

export default function Layout() {
  return (
    <>
      <CSidebar />
      <main>
        <header>
          <CNavbar />
        </header>
        <Outlet />
      </main>
    </>
  );
}
