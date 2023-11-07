import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import SuspenseLoader from "../components/SuspenseLoader";

const Dashboard = () => <div>D</div>
const Budget = lazy(() => import('./Budget'))
const Checkbook = lazy(() => import('./Checkbook'))

export const routeList = [
    { name: 'Dashboard', path: '/', RouteComponent: Dashboard },
    { name: 'bdg', path: '/budget', RouteComponent: Budget },
    { name: 'cbo', path: '/checkbook', RouteComponent: Checkbook },
]

const RouterComponet = () => {
    return <Routes>
        {routeList.map((routeItem) =>
            <Route
                path={routeItem.path}
                element={<SuspenseLoader>
                    <routeItem.RouteComponent />
                </SuspenseLoader>}
                key={routeItem.name}
            >
            </Route>)}
    </Routes>
}

export default RouterComponet

