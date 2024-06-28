import React, { useEffect, useImperativeHandle, LegacyRef, useRef } from "react";

import useListeners from "hooks/useListeners";

import { InputProperties, InputHandle } from "common/types";

const Input = React.forwardRef<InputHandle, InputProperties>(({ type = "text", onInputChange = () => {} }, ref) => {
    const { addListener, removeListener, notify, kill } = useListeners<string>();

    useImperativeHandle(
        ref,
        () => ({
            addListener,
            removeListener,
        }),
        [],
    );

    /**
     *
     * @param event
     */
    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        notify(event.target.value);
    }

    useEffect(() => {
        addListener(onInputChange);
        return kill;
    }, []);

    return (
        <input
            className="h-8 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
            type={type}
            onChange={handleChange}
        />
    );
});

export default Input;
