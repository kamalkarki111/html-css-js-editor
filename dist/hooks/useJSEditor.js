import { useEffect } from "react";
export function useJSEditor({ value, iframeRef }) {
    useEffect(() => {
        const node = iframeRef.current?.contentDocument?.head;
        if (node) {
            var scriptElement = document.createElement('script');
            node?.appendChild(scriptElement);
            try {
                setTimeout(() => scriptElement.innerHTML = value || '');
            }
            catch (e) {
                console.log(e);
            }
        }
        return () => {
            if (node) {
                try {
                    node?.removeChild(scriptElement);
                    scriptElement.innerHTML = '';
                }
                catch (e) {
                    console.log(e);
                }
            }
        };
    }, [value, iframeRef]);
}
