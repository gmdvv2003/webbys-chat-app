import { useState } from "react";
import { useNavigate } from "react-router-dom";

import DescriptiveInput from "components/DescriptiveInput";
import Button from "components/Button";

export default function RecoverPassword() {
    const navigate = useNavigate();

    const [enteredEmail, setEnteredEmail] = useState("");

    function onEmailChange(value: string) {
        setEnteredEmail(value);
    }

    function onSubmitButtonClick() {
        navigate({
            pathname: "/login",
            search: "message_description=Instructions to reset your password will arrive via email shortly.&message_description_type=info",
        });
    }

    return (
        <div className="flex h-screen items-center justify-center bg-gray-100">
            <div className="flex w-96 flex-col items-center gap-4 rounded-l-lg bg-white px-8">
                {/* Header */}
                <div className="mt-8 w-full">
                    <h1 className="text-center text-2xl font-bold">Can't access your account?</h1>
                </div>

                <h4>Enter the email address you used to sign up and we'll send you a link to reset your password.</h4>

                <div className="w-full">
                    <DescriptiveInput title="Email" onInputChange={onEmailChange} />
                </div>

                {/* Submit Button */}
                <div className="mb-8 h-max w-full">
                    <Button
                        className={`${enteredEmail.length == 0 ? "bg-slate-400 text-gray-200" : undefined}`}
                        disabled={enteredEmail.length == 0}
                        onClick={onSubmitButtonClick}
                    >
                        Submit
                    </Button>
                </div>
            </div>
        </div>
    );
}
