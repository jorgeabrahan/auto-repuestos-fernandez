import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import { ROUTES } from "./lib/constants/routes";
import { IniciarSesionPage } from "./pages/IniciarSesionPage";
import { InventarioIndexPage } from "./pages/inventario/InventarioIndexPage";
import { InventarioNewPage } from "./pages/inventario/InventarioNewPage";
import { InventarioEditPage } from "./pages/inventario/InventarioEditPage";
import { CotizacionesIndexPage } from "./pages/cotizaciones/CotizacionesIndexPage";
import { CotizacionesNewPage } from "./pages/cotizaciones/CotizacionesNewPage";
import { CotizacionesEditPage } from "./pages/cotizaciones/CotizacionesEditPage";
import { FacturasIndexPage } from "./pages/facturas/FacturasIndexPage";
import { FacturasNewPage } from "./pages/facturas/FacturasNewPage";
import { FacturasEditPage } from "./pages/facturas/FacturasEditPage";
import { OrdenesDeSalidaIndexPage } from "./pages/ordenes-de-salida/OrdenesDeSalidaIndexPage";
import { OrdenesDeSalidaNewPage } from "./pages/ordenes-de-salida/OrdenesDeSalidaNewPage";
import { OrdenesDeSalidaEditPage } from "./pages/ordenes-de-salida/OrdenesDeSalidaEditPage";
import { Error404Page } from "./pages/Error404Page";
import { Error403Page } from "./pages/Error403Page";
import { RootPage } from "./pages/RootPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route path={ROUTES.root.index.path} element={<RootPage />} />
          <Route
            path={ROUTES.iniciarSesion.index.path}
            element={<IniciarSesionPage />}
          />

          <Route
            path={ROUTES.inventario.index.path}
            element={<InventarioIndexPage />}
          />
          <Route
            path={ROUTES.inventario.new.path}
            element={<InventarioNewPage />}
          />
          <Route
            path={ROUTES.inventario.edit.path}
            element={<InventarioEditPage />}
          />

          <Route
            path={ROUTES.cotizaciones.index.path}
            element={<CotizacionesIndexPage />}
          />
          <Route
            path={ROUTES.cotizaciones.new.path}
            element={<CotizacionesNewPage />}
          />
          <Route
            path={ROUTES.cotizaciones.edit.path}
            element={<CotizacionesEditPage />}
          />

          <Route
            path={ROUTES.facturas.index.path}
            element={<FacturasIndexPage />}
          />
          <Route
            path={ROUTES.facturas.new.path}
            element={<FacturasNewPage />}
          />
          <Route
            path={ROUTES.facturas.edit.path}
            element={<FacturasEditPage />}
          />

          <Route
            path={ROUTES.ordenesDeSalida.index.path}
            element={<OrdenesDeSalidaIndexPage />}
          />
          <Route
            path={ROUTES.ordenesDeSalida.new.path}
            element={<OrdenesDeSalidaNewPage />}
          />
          <Route
            path={ROUTES.ordenesDeSalida.edit.path}
            element={<OrdenesDeSalidaEditPage />}
          />
          <Route path={ROUTES.error403.index.path} element={<Error403Page />} />
          <Route path={ROUTES.error404.index.path} element={<Error404Page />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
