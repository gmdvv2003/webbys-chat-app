import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import { InputHandle } from "common/types";

import DescriptiveInput from "components/DescriptiveInput";
import Button from "components/Button";
import PasswordInputStrength from "components/PasswordInputStrength";

export default function Register() {
    const usernameFieldRef = useRef<InputHandle>(null);
    const passwordFieldRef = useRef<InputHandle>(null);
    const confirmPasswordFieldRef = useRef<InputHandle>(null);
    const passwordStrengthFieldRef = useRef<InputHandle>(null);

    const [enteredUsername, setEnteredUsername] = useState("");
    const [enteredPassword, setEnteredPassword] = useState("");
    const [enteredConfirmPassword, setEnteredConfirmPassword] = useState("");

    const [usernameAlreadyInUse, setUsernameAlreadyInUse] = useState(false);
    const [matchingPasswords, setMatchingPasswords] = useState(false);

    /**
     *
     * @param value
     */
    function onUsernameChange(value: string) {
        setEnteredUsername(value);
    }

    /**
     *
     * @param value
     */
    function onPasswordChange(value: string) {
        setEnteredPassword(value);
        setMatchingPasswords(value == enteredConfirmPassword);
    }

    /**
     *
     * @param value
     */
    function onConfirmPasswordChange(value: string) {
        setEnteredConfirmPassword(value);
        setMatchingPasswords(value == enteredPassword);
    }

    useEffect(() => {
        const unbindOnUsernameChange = usernameFieldRef.current?.addListener(onUsernameChange);
        const unbindOnPasswordChange = passwordFieldRef.current?.addListener(onPasswordChange);
        const unbindOnConfirmPasswordChange = confirmPasswordFieldRef.current?.addListener(onConfirmPasswordChange);

        return () => {
            unbindOnUsernameChange?.();
            unbindOnPasswordChange?.();
            unbindOnConfirmPasswordChange?.();
        };
    }, [enteredUsername, enteredPassword, enteredConfirmPassword]);

    return (
        <>
            <div className="flex h-screen items-center justify-center bg-gray-100">
                <div className="flex justify-center">
                    {/* Register Form */}
                    <div className="flex w-96 flex-col items-center justify-center gap-4 rounded-lg bg-white px-8">
                        {/* Register Header */}
                        <div className="mt-8 w-3/5">
                            <h1 className="text-center text-2xl font-bold">Register</h1>
                        </div>

                        {/* Username Form */}
                        <div className="w-full">
                            <DescriptiveInput
                                title="Username"
                                description="Enter your username"
                                inputError={usernameAlreadyInUse ? "Username already in use" : undefined}
                                essential={true}
                                ref={usernameFieldRef}
                            />
                        </div>

                        {/* Password Form */}
                        <div className="w-full">
                            <DescriptiveInput
                                title="Password"
                                description="Enter your password"
                                inputError={!matchingPasswords ? "Passwords do not match" : undefined}
                                essential={true}
                                usePassword={true}
                                ref={passwordFieldRef}
                            />
                        </div>

                        {/* Confirm Password Form */}
                        <div className="w-full">
                            <DescriptiveInput
                                title="Confirm Password"
                                description="Enter your password again"
                                inputError={!matchingPasswords ? "Passwords do not match" : undefined}
                                essential={true}
                                usePassword={true}
                                ref={confirmPasswordFieldRef}
                            />
                        </div>

                        {/* Password Strength */}
                        <div className="w-full">
                            <PasswordInputStrength password={enteredPassword} ref={passwordStrengthFieldRef} />
                        </div>

                        {/* Submit Button */}
                        <div className="h-max w-full">
                            {(() => {
                                const disabled =
                                    enteredUsername.length == 0 || enteredPassword.length == 0 || enteredConfirmPassword.length == 0;
                                return (
                                    <Button className={`${disabled ? "bg-slate-400 text-gray-200" : undefined}`} disabled={disabled}>
                                        Register
                                    </Button>
                                );
                            })()}
                        </div>

                        {/* Login Link */}
                        <button className="mb-8">
                            <span className="text-sm">
                                Already have an account?
                                <span className="text-blue-700">
                                    &nbsp;<Link to="/login">Log in</Link>
                                </span>
                            </span>
                        </button>
                    </div>

                    {/* Billboard */}
                    <div className="flex w-96 justify-center rounded-r-lg bg-blue-200 md:hidden">
                        <img className="rounded-r-lg object-contain" src="/webbys-banner.jpg" alt="Webbys" />
                    </div>
                </div>
            </div>
        </>
    );
}
