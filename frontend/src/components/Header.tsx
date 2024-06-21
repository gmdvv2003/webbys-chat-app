import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="h-16 w-full bg-gray-500">
            <div className="align-center flex size-full flex-wrap items-center justify-between px-8">
                <Link to="/" className="flex">
                    <span className="self-center whitespace-nowrap text-lg font-semibold">Chat App</span>
                </Link>
            </div>
        </header>
    );
}
