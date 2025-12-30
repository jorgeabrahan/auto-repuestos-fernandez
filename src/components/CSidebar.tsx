import {
  Sidebar,
  SidebarCollapse,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems,
  SidebarLogo,
} from "flowbite-react";
import { HiCalculator } from "react-icons/hi";
import { FaFileInvoiceDollar, FaClipboardList } from "react-icons/fa";
import { GiBoxUnpacking } from "react-icons/gi";
import { IoLogOut } from "react-icons/io5";
import useSidebarStore from "../stores/useSidebarStore";
import { ROUTES } from "../lib/constants/routes";
import { RouterLink } from "./RouterLink";

export function CSidebar() {
  const { isMobileSidebarOpen, toggleMobileSidebar } = useSidebarStore();
  return (
    <Sidebar
      className={`[&>div]:h-screen fixed top-0 -translate-x-full transition-transform duration-500 md:translate-0 md:sticky md:float-left xl:w-80 ${isMobileSidebarOpen && "translate-x-0"}`}
      aria-label="Sidebar"
    >
      <SidebarLogo
        href="/"
        img="/logo.jpeg"
        imgAlt="Auto Repuestos Fernandez Logo"
      >
        Auto Repuestos
      </SidebarLogo>
      <SidebarItems>
        <SidebarItemGroup>
          <SidebarCollapse
            label="Inventario"
            icon={() => FaClipboardList({ width: 20, height: 20 })}
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
            icon={() => HiCalculator({ width: 20, height: 20 })}
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
            icon={() => FaFileInvoiceDollar({ width: 20, height: 20 })}
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
            icon={() => GiBoxUnpacking({ width: 20, height: 20 })}
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
          <SidebarItem
            icon={() => IoLogOut({ width: 20, height: 20 })}
            onClick={() => {}}
          >
            Cerrar sesión
          </SidebarItem>
        </SidebarItemGroup>
      </SidebarItems>
    </Sidebar>
  );
}
