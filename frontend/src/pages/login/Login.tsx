import { useEffect, useRef, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

import DescriptiveInput from "components/DescriptiveInput";
import Button from "components/Button";
import RadioButton from "components/RadioButton";

export default function Login() {
    const [searchParameters] = useSearchParams();

    const usernameFieldRef = useRef<HTMLInputElement>(null);
    const passwordFieldRef = useRef<HTMLInputElement>(null);

    const [invalidUsernameOrWrongPassword, setInvalidUsernameOrWrongPassword] = useState(false);

    const [messageDescription] = useState(searchParameters.get("message_description"));
    const [messageDescriptionType] = useState<"error" | "success" | "info">(searchParameters.get("message_description_type") as "error" | "success" | "info");

    function onLoginButtonClick() {}

    return (
        <>
            <div className="flex h-screen items-center justify-center bg-gray-100">
                <div className="flex justify-center">
                    {/* Login Form */}
                    <div className="flex w-96 flex-col items-center justify-center gap-4 rounded-l-lg bg-white px-8">
                        {/* Login Header */}
                        <div className="mt-8 w-3/5">
                            <h1 className="text-center text-2xl font-bold">Login</h1>
                        </div>

                        {/* Message Description */}
                        {messageDescription && messageDescription.length > 0 && (
                            <div
                                className={`w-full rounded-md p-2 text-center text-sm ${
                                    messageDescriptionType == "error"
                                        ? "bg-[#ffd3cbc5] text-[#e04a31]"
                                        : messageDescriptionType == "success"
                                          ? "bg-[#7ed321] text-[#ffffff]"
                                          : messageDescriptionType == "info"
                                            ? "bg-[#e9f1ff] text-[#055083]"
                                            : undefined
                                }`}
                            >
                                {messageDescription}
                            </div>
                        )}

                        {/* Username Form */}
                        <div className="w-full">
                            <DescriptiveInput
                                title="Username"
                                inputError={invalidUsernameOrWrongPassword ? "Invalid username or password" : undefined}
                                ref={usernameFieldRef}
                            />
                        </div>

                        {/* Password Form */}
                        <div className="w-full">
                            <DescriptiveInput title="Password" usePassword={true} ref={passwordFieldRef} />
                        </div>

                        {/* Remember Me */}
                        <div className="w-full">
                            <RadioButton label="Remember Me" />
                        </div>

                        {/* Forgot Password */}
                        <button>
                            <span className="text-sm text-blue-700">
                                <Link to="/recover-password">Forgot your password?</Link>
                            </span>
                        </button>

                        {/* Submit Button */}
                        <div className="h-max w-full">
                            <Button>Log in</Button>
                        </div>

                        {/* Sign up Link */}
                        <button className="mb-8">
                            <span className="text-sm">
                                Don't have an account?
                                <span className="text-blue-700">
                                    &nbsp;<Link to="/register">Sign up</Link>
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
