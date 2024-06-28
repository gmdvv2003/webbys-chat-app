import { ButtonProperties } from "common/types";

export default function Button({ children, className, disabled, onClick }: ButtonProperties) {
    return (
        <button
            className={`h-8 w-full rounded bg-blue-500 font-semibold text-white enabled:hover:bg-blue-600 ${className}`}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    );
}
