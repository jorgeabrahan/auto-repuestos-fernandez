import {
  Sidebar,
  SidebarCollapse,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems,
} from "flowbite-react";
import { FaClipboardList, FaFileInvoiceDollar } from "react-icons/fa";
import { GiBoxUnpacking } from "react-icons/gi";
import { HiCalculator } from "react-icons/hi";
import { IoLogOut } from "react-icons/io5";
import { MdOutlinePointOfSale } from "react-icons/md";
import { Link } from "react-router";
import { ROUTES } from "../lib/constants/routes";
import useSessionStore from "../stores/useSessionStore";
import useSidebarStore from "../stores/useSidebarStore";
import { RouterLink } from "./RouterLink";
import { useState } from "react";
import { ServiceAuth } from "../services/ServiceAuth";

export function CSidebar() {
  const { appUser } = useSessionStore();
  const { isMobileSidebarOpen, toggleMobileSidebar } = useSidebarStore();
  const { clearSession } = useSessionStore();
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const onSignOut = async () => {
    if (isLoggingOut) return;
    setIsLoggingOut(true);
    await ServiceAuth.signOut();
    clearSession();
    setIsLoggingOut(false);
  };
  return (
    <Sidebar
      className={`[&>div]:h-screen fixed top-0 -translate-x-full transition-transform duration-500 md:translate-0 md:sticky md:float-left xl:w-80 ${isMobileSidebarOpen && "translate-x-0"}`}
      aria-label="Sidebar"
    >
      <Link
        to={ROUTES.root.index.path}
        className="flex items-center gap-2 mb-6 ml-2 dark:text-white"
      >
        <MdOutlinePointOfSale size={24} />
        <span className="text-xl font-semibold">
          {appUser?.organizations?.name || "Organization Name"}
        </span>
      </Link>
      <SidebarItems>
        <SidebarItemGroup>
          <SidebarCollapse
            label="Inventario"
            icon={() => FaClipboardList({ size: 18 })}
            open
          >
            <SidebarItem
              as={RouterLink}
              href={ROUTES.inventario.index.path}
              onClick={toggleMobileSidebar}
            >
              Ver todos
            </SidebarItem>
            <SidebarItem
              as={RouterLink}
              href={ROUTES.inventario.new.path}
              onClick={toggleMobileSidebar}
            >
              Crear nuevo
            </SidebarItem>
          </SidebarCollapse>
          <SidebarCollapse
            icon={() => HiCalculator({ size: 20 })}
            label="Cotizaciones"
            open
          >
            <SidebarItem
              as={RouterLink}
              href={ROUTES.cotizaciones.index.path}
              onClick={toggleMobileSidebar}
            >
              Ver todas
            </SidebarItem>
            <SidebarItem
              as={RouterLink}
              href={ROUTES.cotizaciones.new.path}
              onClick={toggleMobileSidebar}
            >
              Crear nuevo
            </SidebarItem>
          </SidebarCollapse>
          <SidebarCollapse
            icon={() => FaFileInvoiceDollar({ size: 18 })}
            label="Facturas"
            open
          >
            <SidebarItem
              as={RouterLink}
              href={ROUTES.facturas.index.path}
              onClick={toggleMobileSidebar}
            >
              Ver todas
            </SidebarItem>
            <SidebarItem
              as={RouterLink}
              href={ROUTES.facturas.new.path}
              onClick={toggleMobileSidebar}
            >
              Crear nuevo
            </SidebarItem>
          </SidebarCollapse>
          <SidebarCollapse
            icon={() => GiBoxUnpacking({ size: 18 })}
            label="Ordenes de salida"
            open
          >
            <SidebarItem
              as={RouterLink}
              href={ROUTES.ordenesDeSalida.index.path}
              onClick={toggleMobileSidebar}
            >
              Ver todas
            </SidebarItem>
            <SidebarItem
              as={RouterLink}
              href={ROUTES.ordenesDeSalida.new.path}
              onClick={toggleMobileSidebar}
            >
              Crear nuevo
            </SidebarItem>
          </SidebarCollapse>
          <button
            className="cursor-pointer flex items-center w-full gap-3 p-2 dark:hover:bg-gray-700 rounded-lg"
            onClick={onSignOut}
            disabled={isLoggingOut}
          >
            <IoLogOut size={20} />
            Cerrar sesión
          </button>
        </SidebarItemGroup>
      </SidebarItems>
    </Sidebar>
  );
}
