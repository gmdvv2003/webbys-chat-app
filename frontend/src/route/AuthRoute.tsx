import { Navigate } from "react-router-dom";

import { AuthRouteProperties } from "common/types";
import { useAuth } from "auth/AuthContext";

function AuthRoute({ children }: AuthRouteProperties) {
    const { userSession } = useAuth();
    if (!userSession) {
        return (
            <Navigate
                to={{ pathname: "/login", search: "message_description=You must be logged in order to access this page.&message_description_type=error" }}
            />
        );
    }

    return <>{children}</>;
}

export default AuthRoute;
