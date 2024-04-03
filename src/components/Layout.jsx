import { Suspense } from "react";
import AppBar from "./bar/AppBar/AppBar";
import { Outlet } from "react-router-dom";
import Loader from "./custom/Loader/Loader";

export default function Layout() {
    return (
        <div>
            <AppBar />

            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
        </div>
    )
}
