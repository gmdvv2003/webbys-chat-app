/*
    ;; =============================================== ;;
    ;; ==================== Hooks ==================== ;;
    ;; =============================================== ;;
*/

import React from "react";

// ==================== useListeners ==================== //
export interface UseListeners<T> {
    addListener: (callback: (data: T) => void) => () => void;
    removeListener: (callback: (data: T) => void) => void;
}

/*
    ;; ================================================= ;;
    ;; ==================== Context ==================== ;;
    ;; ================================================= ;;
*/

// ==================== Auth ==================== //
export interface AuthContextType {
    userSession: UserSession | null;

    login: (username: string, password: string) => void;
    logout: () => void;
}

export interface AuthProviderProperties {
    children: React.ReactNode;
}

// ==================== User Session ==================== //
export interface UserSession {
    id: string;
    email: string;
    username: string;
}

/*
    ;; ==================================================== ;;
    ;; ==================== Components ==================== ;;
    ;; ==================================================== ;;
*/

// ==================== Input ==================== //
export interface InputProperties {
    type?: string;
    onInputChange?: (value: string) => void;
}

export interface InputHandle extends UseListeners<string> {}

// ==================== DescriptiveInput ==================== //
export interface DescriptiveInputProperties {
    title: string;
    description?: string;
    inputError?: string | undefined;
    essential?: boolean;
    usePassword?: boolean;
    onInputChange?: (value: string) => void;
}

export interface DescriptiveInputHandle {}

// ==================== Button ==================== //
export interface ButtonProperties {
    children: React.ReactNode;
}

// ==================== Radio Button ==================== //
export interface RadioButtonProperties {
    label: string;
}

// ==================== Password Input ==================== //
export interface PasswordInputProperties {
    onInputChange?: (value: string) => void;
}

export interface PasswordInputHandle extends InputHandle {}

// ==================== Password Input Strength ==================== //
export interface PasswordInputStrengthProperties {
    password: string;
}

export interface PasswordInputStrengthHandle {}

// ==================== Form Error Label ==================== //
export interface FormErrorLabelProperties {
    error: string;
}
