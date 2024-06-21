import { FormErrorLabelProperties } from "common/types";

export default function FormErrorLabel({ error }: FormErrorLabelProperties) {
    return (
        <>
            <span className="text-sm font-light text-red-600">{error}</span>
        </>
    );
}
