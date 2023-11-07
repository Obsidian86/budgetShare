import { lazy, Suspense } from "react";

const SuspenseLoader = ({ children, loader = <p>Loading...</p> }) => {
    return <Suspense fallback={loader}>{children}</Suspense>
}

export default SuspenseLoader