import { Navbar, NavbarBrand, NavbarToggle } from "flowbite-react";
import { Link } from "react-router";
import useSidebarStore from "../stores/useSidebarStore";

export function CNavbar() {
  const { toggleMobileSidebar } = useSidebarStore();
  return (
    <Navbar className="md:hidden" fluid rounded>
      <NavbarBrand as={Link} href="/">
        <img
          src="/logo.jpeg"
          className="mr-3 h-6 sm:h-9"
          alt="Auto Repuestos Fernandez Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Auto Repuestos
        </span>
      </NavbarBrand>
      <NavbarToggle
        onClick={() => {
          toggleMobileSidebar();
        }}
      />
    </Navbar>
  );
}
