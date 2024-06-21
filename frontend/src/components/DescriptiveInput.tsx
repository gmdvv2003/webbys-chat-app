import React, { LegacyRef } from "react";

import { InputHandle, DescriptiveInputProperties, DescriptiveInputHandle, PasswordInputHandle } from "common/types";

import Input from "./Input";
import PasswordInput from "./PasswordInput";
import FormErrorLabel from "./FormErrorLabel";

const DescriptiveInput = React.forwardRef<DescriptiveInputHandle, DescriptiveInputProperties>(
    ({ title, description, inputError, essential, usePassword, onInputChange }, ref) => {
        return (
            <div className="align-center flex flex-col items-start">
                {/* Title */}
                <span className="font-semibold">
                    {title}
                    {essential && <span className="font-bold text-red-500"> *</span>}
                </span>

                {/* Input */}
                {usePassword ? (
                    <PasswordInput onInputChange={onInputChange} ref={ref as LegacyRef<PasswordInputHandle>} />
                ) : (
                    <Input onInputChange={onInputChange} ref={ref as LegacyRef<InputHandle>} />
                )}

                {/* Input Error */}
                {inputError != undefined && <FormErrorLabel error={inputError} />}

                {/* Description */}
                {(description != undefined && inputError == undefined) && <span className="text-sm font-light">{description}</span>}
            </div>
        );
    },
);

export default DescriptiveInput;
