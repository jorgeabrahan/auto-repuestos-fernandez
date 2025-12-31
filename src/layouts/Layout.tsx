import { Spinner } from "flowbite-react";
import { useEffect, useState } from "react";
import { matchPath, Outlet, useLocation, useNavigate } from "react-router-dom";
import { CNavbar } from "../components/CNavbar";
import { CSidebar } from "../components/CSidebar";
import {
  FLATENED_ROUTES,
  ROUTE_ACCESS_CONDITION,
  ROUTES,
} from "../lib/constants/routes";
import { ServiceAuth } from "../services/ServiceAuth";
import useSessionStore from "../stores/useSessionStore";

export default function Layout() {
  const location = useLocation();
  const navigate = useNavigate();

  const { user, appUser } = useSessionStore((store) => store);
  const setSession = useSessionStore((store) => store.setSession);
  const [isLoading, setIsLoading] = useState(true);
  const [routeAccessType, setRouteAccessType] = useState<
    null | keyof typeof ROUTE_ACCESS_CONDITION
  >(null);
  useEffect(() => {
    const pathname = location.pathname;
    const match = FLATENED_ROUTES.find((route) =>
      matchPath(
        { path: route.path, end: true }, // end:true match exacto
        pathname,
      ),
    );
    if (!match) {
      navigate(ROUTES.error404.index.path, { replace: true });
      return;
    }
    setRouteAccessType(match.type);
  }, [location]);
  useEffect(() => {
    if (routeAccessType == null) return;
    const fetchUser = async () => {
      const { data, ok } = await ServiceAuth.getUser();
      if (!ok || data == null) return null;
      setSession(data);
      return data;
    };
    const validateRoutes = async () => {
      const session =
        user != null && appUser != null ? { user, appUser } : await fetchUser();
      const isSignedIn = session != null && session.user && session.appUser;
      if (routeAccessType === ROUTE_ACCESS_CONDITION.public) {
        setIsLoading(false);
      }
      if (routeAccessType === ROUTE_ACCESS_CONDITION.unauthenticated) {
        if (isSignedIn) {
          navigate(ROUTES.root.index.path, { replace: true });
        } else {
          setIsLoading(false);
        }
      }
      if (routeAccessType === ROUTE_ACCESS_CONDITION.authenticated) {
        if (isSignedIn) {
          setIsLoading(false);
        } else {
          navigate(ROUTES.iniciarSesion.index.path, { replace: true });
        }
      }
    };
    validateRoutes();
  }, [routeAccessType]);
  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Spinner aria-label="Center-aligned spinner example" />
      </div>
    );
  }
  return (
    <>
      {routeAccessType == ROUTE_ACCESS_CONDITION.authenticated && <CSidebar />}
      <main>
        {routeAccessType == ROUTE_ACCESS_CONDITION.authenticated && (
          <header>
            <CNavbar />
          </header>
        )}
        <div className="px-3 md:px-5">
          <Outlet />
        </div>
      </main>
    </>
  );
}
