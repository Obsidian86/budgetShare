import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import SuspenseLoader from "../components/SuspenseLoader";

const Dashboard = lazy(() => import("./Dashboard"));
const Budget = lazy(() => import("./Budget"));
const Checkbook = lazy(() => import("./Checkbook"));

export const routeList = [
  { name: "Dashboard", path: "/", RouteComponent: Dashboard },
  { name: "Budgets", path: "/budget", RouteComponent: Budget },
  { name: "Income", path: "/budget", RouteComponent: Budget },
  { name: "Accounts", path: "/budget", RouteComponent: Budget },
  { name: "Checkbook", path: "/checkbook", RouteComponent: Checkbook },
];

const RouterComponet = () => {
  return (
    <Routes>
      {routeList.map((routeItem) => (
        <Route
          path={routeItem.path}
          element={
            <SuspenseLoader>
              <routeItem.RouteComponent />
            </SuspenseLoader>
          }
          key={routeItem.name}
        ></Route>
      ))}
    </Routes>
  );
};

export default RouterComponet;
