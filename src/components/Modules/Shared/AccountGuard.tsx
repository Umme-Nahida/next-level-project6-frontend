import { useGetUserQuery } from "@/Redux/Features/authApi/authApi";
import { Loader2 } from "lucide-react";
import React from "react";
import { Navigate } from "react-router";

export default function AccountGuard({
    children,
}: {
    children: React.ReactNode;
}) {

    // call user api to get user status and role
    const { data, error, isLoading } = useGetUserQuery(undefined);

    const user = data?.user?.user;

    if (isLoading) return <Loader2 className="mr-2 h-8 w-8 animate-spin" />

    if (error) {
        console.log("error", error)
    }
    const status = user?.role === "DRIVER" && user.isActive === "BLOCKED" ? {isActive: "suspended"} : user.isActive;
    console.log("AccountGuard Status", status, user.isActive, user?.role)
    if (user?.isActive === "BLOCKED" || status?.isActive === "suspended") {
        return <Navigate to="/accountSuspentUser" replace />;
    }

    return <>{children}</>;
}
