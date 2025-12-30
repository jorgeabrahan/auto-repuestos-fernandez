export const ROUTE_ACCESS_CONDITION = {
  authenticated: "authenticated",
  unauthenticated: "unauthenticated",
  public: "public",
} as const;

export const ROUTES = {
  inventario: {
    index: {
      path: "/inventario",
      type: ROUTE_ACCESS_CONDITION.authenticated,
    },
    new: {
      path: "/inventario/nuevo",
      type: ROUTE_ACCESS_CONDITION.authenticated,
    },
    edit: {
      path: "/inventario/:idInventario",
      build: (idInventario: string) => `/inventario/${idInventario}`,
      type: ROUTE_ACCESS_CONDITION.authenticated,
    },
  },
  cotizaciones: {
    index: {
      path: "/cotizaciones",
      type: ROUTE_ACCESS_CONDITION.authenticated,
    },
    new: {
      path: "/cotizaciones/nueva",
      type: ROUTE_ACCESS_CONDITION.authenticated,
    },
    edit: {
      path: "/cotizaciones/:idCotizacion",
      build: (idCotizacion: string) => `/cotizaciones/${idCotizacion}`,
      type: ROUTE_ACCESS_CONDITION.authenticated,
    },
  },
  facturas: {
    index: {
      path: "/facturas",
      type: ROUTE_ACCESS_CONDITION.authenticated,
    },
    new: {
      path: "/facturas/nueva",
      type: ROUTE_ACCESS_CONDITION.authenticated,
    },
    edit: {
      path: "/facturas/:idFactura",
      build: (idFactura: string) => `/facturas/${idFactura}`,
      type: ROUTE_ACCESS_CONDITION.authenticated,
    },
  },
  ordenesDeSalida: {
    index: {
      path: "/ordenes-de-salida",
      type: ROUTE_ACCESS_CONDITION.authenticated,
    },
    new: {
      path: "/ordenes-de-salida/nueva",
      type: ROUTE_ACCESS_CONDITION.authenticated,
    },
    edit: {
      path: "/ordenes-de-salida/:idOrdenDeSalida",
      build: (idOrdenDeSalida: string) =>
        `/ordenes-de-salida/${idOrdenDeSalida}`,
      type: ROUTE_ACCESS_CONDITION.authenticated,
    },
  },
  iniciarSesion: {
    index: {
      path: "/iniciar-sesion",
      type: ROUTE_ACCESS_CONDITION.unauthenticated,
    },
  },
};
