import { useEffect } from "react";
export function useHTMLEditor({ value, iframeRef }) {
    useEffect(() => {
        const node = iframeRef?.current?.contentDocument?.body;
        if (value && node) {
            node.innerHTML = value;
        }
        return () => {
        };
    }, [value, iframeRef]);
    return {};
}
