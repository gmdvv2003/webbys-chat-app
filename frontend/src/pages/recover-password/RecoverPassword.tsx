import DescriptiveInput from "components/DescriptiveInput";
import Button from "components/Button";

export default function RecoverPassword() {
    return (
        <div className="flex h-screen items-center justify-center bg-gray-100">
            <div className="flex w-96 flex-col items-center gap-4 rounded-l-lg bg-white px-8">
                {/* Header */}
                <div className="mt-8 w-full">
                    <h1 className="text-center text-2xl font-bold">Can't access your account?</h1>
                </div>

                <h4 className="text-justify">
                    Enter the email address you used to sign up and we'll send you a link to reset your password.
                </h4>

                <div className="w-full">
                    <DescriptiveInput title="Email" />
                </div>

                {/* Submit Button */}
                <div className="mb-8 h-max w-full">
                    <Button>Submit</Button>
                </div>
            </div>
        </div>
    );
}
