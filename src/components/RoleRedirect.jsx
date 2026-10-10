import { Navigate } from "react-router-dom";
import { useUser } from "@clerk/react";
import Loading from "./Loading";

export default function RoleRedirect() {
    const { isLoaded, isSignedIn, user } = useUser()
    
    if (!isLoaded) {
        return <Loading />
    }
    
    if (!isSignedIn) {
        return <Navigate to="/login" replace />
    }

    const role = user?.publicMetadata?.role

    if (role === "admin") {
        return <Navigate to="/dashboard" replace />
    }

    if (role === "user") {
        return <Navigate to="/form" replace />
    }

    return (
        <div className="p-6 bg-[#F1F7FF] text-center text-sm text-red-700">
            Role akun belum diatur dengan benar. Hubungi administrator.
        </div>
    )
}