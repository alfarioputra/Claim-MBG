import { Navigate } from "react-router-dom";
import { useUser } from "@clerk/react";
import Loading from "./Loading";

export default function RoleRedirect() {
    const { isLoaded, isSignedIn, user } = useUser()
    const role = user.publicMetadata.role

    if (!isLoaded) {
        return <Loading />
    }

    if (!isSignedIn) {
        return <Navigate to="/login" replace />
    }

    if (role === "admin") {
        return <Navigate to="/dashboard" replace />
    }

    if (role === "user") {
        return <Navigate to="/form" replace />
    }

    return <div>Role tidak dikenali</div>
}