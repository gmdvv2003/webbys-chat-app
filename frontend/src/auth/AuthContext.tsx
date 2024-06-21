import { useState, useContext, createContext, ReactNode } from "react";

import { AuthContextType, AuthProviderProperties, UserSession } from "common/types";

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

/**
 * Create a provider for authentication
 *
 * @param {ReactNode} children - Children of the provider
 * @returns {JSX.Element} AuthProvider component
 */
export default function AuthProvider({ children }: AuthProviderProperties) {
    const [userSession, setUserSession] = useState<UserSession | null>(null);

    /**
     * Perform the login operation
     */
    async function login(username: string, password: string) {}

    /**
     * Perform the logout operation
     */
    async function logout() {}

    return <AuthContext.Provider value={{ userSession, login, logout }}>{children}</AuthContext.Provider>;
}

/**
 * Returns the authentication context
 *
 * @returns {AuthContextType} Authentication context
 */
export function useAuth(): AuthContextType {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }

    return context;
}
