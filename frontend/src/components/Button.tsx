import { ButtonProperties } from "common/types";

export default function Button({ children }: ButtonProperties) {
    return (
        <button className="h-8 w-full rounded bg-blue-500 font-semibold text-white hover:bg-blue-600">
            {children}
        </button>
    );
}
