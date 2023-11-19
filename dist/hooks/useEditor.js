import { useEffect, useId, useRef } from "react";
import { useHTMLEditor } from "./useHTMLEditor";
import { useCSSEditor } from "./useCSSEditor";
import { useJSEditor } from "./useJSEditor";
export function useEditor({ config }) {
    const hostRef = useRef();
    const id = useId();
    useHTMLEditor({ value: config.html?.snippit, iframeRef: hostRef });
    useCSSEditor({ value: config.css?.snippit, iframeRef: hostRef });
    useJSEditor({ value: config.js?.snippit, iframeRef: hostRef });
    useEffect(() => {
        const iframe = document.createElement('iframe');
        const rootElement = document.getElementById(id);
        hostRef.current = rootElement?.appendChild(iframe);
        return () => {
            rootElement?.removeChild(iframe);
        };
    }, []);
    return {
        elementProps: {
            id
        },
        hostRef
    };
}
