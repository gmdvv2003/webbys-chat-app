import React, { useState, LegacyRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import { InputHandle, PasswordInputHandle, PasswordInputProperties } from "common/types";

import Input from "./Input";

const PasswordInput = React.forwardRef<PasswordInputHandle, PasswordInputProperties>(({ onInputChange }, ref) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    function onTogglePasswordVisibilityButtonClick() {
        setIsPasswordVisible((previousState) => !previousState);
    }

    return (
        <div className="w-full">
            {/* Input */}
            <Input type={isPasswordVisible ? "text" : "password"} onInputChange={onInputChange} ref={ref as LegacyRef<InputHandle>} />

            {/* Eye icon */}
            <span className="absolute inline-grid h-8 w-8 -translate-x-full items-center justify-center">
                <FontAwesomeIcon
                    className="h-4 w-4 hover:animate-grow-shrink hover:cursor-pointer"
                    color="#9A9696"
                    icon={isPasswordVisible ? faEyeSlash : faEye}
                    onClick={onTogglePasswordVisibilityButtonClick}
                />
            </span>
        </div>
    );
});

export default PasswordInput;
