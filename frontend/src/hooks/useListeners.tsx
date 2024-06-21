import { useState } from "react";

function useListeners<T>() {
    const [listeners, setListeners] = useState<Function[]>([]);

    /**
     *
     * @param listener
     */
    function addListener(callback: (data: T) => void): () => void {
        setListeners((previousListeners) => [...previousListeners, callback]);
        return () => {
            removeListener(callback);
        };
    }

    /**
     *
     */
    function removeListener(callback: (data: T) => void) {
        setListeners((previousListeners) => previousListeners.filter((listener) => listener !== callback));
    }

    /**
     *
     * @param data
     */
    function notify(data: T) {
        for (const listener of listeners) {
            listener(data);
        }
    }

    /**
     *
     */
    function kill() {
        setListeners([]);
    }

    return { addListener, removeListener, notify, kill };
}

export default useListeners;
