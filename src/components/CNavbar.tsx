import { Navbar, NavbarBrand, NavbarToggle } from "flowbite-react";
import { MdOutlinePointOfSale } from "react-icons/md";
import { ROUTES } from "../lib/constants/routes";
import useSessionStore from "../stores/useSessionStore";
import useSidebarStore from "../stores/useSidebarStore";
import { RouterLink } from "./RouterLink";

export function CNavbar() {
  const { appUser } = useSessionStore();
  const { toggleMobileSidebar } = useSidebarStore();
  return (
    <Navbar className="md:hidden" fluid rounded>
      <NavbarBrand as={RouterLink} href={ROUTES.root.index.path}>
        <MdOutlinePointOfSale className="mr-3" size={24} />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          {appUser?.organizations?.name || "Organization Name"}
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
