import { Navigate } from "react-router-dom";
import { useUser } from "@clerk/react";
import Loading from "./Loading";

export default function ProtectedRoute({ children }) {
    const { isLoaded, isSignedIn } = useUser()

    if (!isLoaded) {
        return <Loading />
    }

    if (!isSignedIn) {
        return <Navigate to="/login" replace />
    }

    return children
}
