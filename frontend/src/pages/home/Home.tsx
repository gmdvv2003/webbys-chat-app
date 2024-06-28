import Header from "components/Header";
import Chat from "components/Chat";
import DirectMessages from "components/DirectMessages";

function Home() {
    return (
        <>
            <Header />
            <div className="flex h-full w-full">
                <>
                    <DirectMessages />
                </>

                <>
                    <Chat />
                </>

                <div></div>
            </div>
        </>
    );
}

export default Home;
