import React from "react";

import { RadioButtonProperties } from "common/types";

const RadioButton = React.forwardRef<HTMLInputElement, React.PropsWithChildren<RadioButtonProperties>>(
    ({ label }, ref) => {
        return (
            <div className="flex items-center justify-start gap-2">
                <input className="h-4 w-4 rounded border-gray-300 bg-gray-100 focus:border-sky-500" type="checkbox" />
                <label className="text-sm font-semibold">{label}</label>
            </div>
        );
    },
);

export default RadioButton;
