import React, { useEffect, useState } from "react";

import { PasswordInputStrengthHandle, PasswordInputStrengthProperties } from "common/types";
import { getPasswordEntropyBits } from "utilities/passwordEntropy";

const PASSWORD_STRENGTH_TIERS = [
    { label: "Weak", color: "#f54242" },
    { label: "Fair", color: "#ffb303" },
    { label: "Good", color: "#b7ff00" },
    { label: "Great", color: "#42f55a" },
];

const PasswordInputStrength = React.forwardRef<PasswordInputStrengthHandle, React.PropsWithChildren<PasswordInputStrengthProperties>>(
    ({ password }, ref) => {
        const [passwordEntropyBits, setPasswordEntropyBits] = useState(0);

        useEffect(() => {
            setPasswordEntropyBits(getPasswordEntropyBits(password));
        }, [password]);

        return (
            <>
                {(() => {
                    const entropyLevel = Math.min(Math.floor(passwordEntropyBits / 20), PASSWORD_STRENGTH_TIERS.length) - 1;
                    return (
                        <>
                            {/* Strength bar */}
                            <div className="flex items-center justify-start gap-px">
                                {Array.from(Array(PASSWORD_STRENGTH_TIERS.length).keys()).map((_, index: number) => {
                                    return (
                                        <div
                                            className="h-1 w-full bg-gray-300"
                                            style={{
                                                backgroundColor:
                                                    index <= entropyLevel ? PASSWORD_STRENGTH_TIERS[entropyLevel]?.color : undefined,
                                            }}
                                        />
                                    );
                                })}
                            </div>

                            {/* Strength text */}
                            <span
                                className="relative float-right text-xs"
                                style={{
                                    color: PASSWORD_STRENGTH_TIERS[entropyLevel]?.color || undefined,
                                }}
                            >
                                {PASSWORD_STRENGTH_TIERS[entropyLevel]?.label || "N/A"}
                            </span>
                        </>
                    );
                })()}
            </>
        );
    },
);

export default PasswordInputStrength;
