import { useEffect, useState } from "react";
export function useConsole({ iframeRef }) {
    const [logs, setLogs] = useState([{ type: 'log', msg: 'welcome to console' }]);
    useEffect(() => {
        const node = iframeRef?.current?.contentWindow;
        if (node) {
            node.console = {
                log: (msg) => {
                    setLogs((val) => {
                        val && val.push({ type: 'log', msg });
                        return [...val];
                    });
                },
                error: (msg) => {
                    setLogs((val) => {
                        val && val.push({ type: 'error', msg });
                        return [...val];
                    });
                },
                warn: (msg) => {
                    setLogs((val) => {
                        val && val.push({ type: 'warn', msg });
                        return [...val];
                    });
                },
            };
            node.onerror = (msg) => {
                setLogs((val) => {
                    val && val.push({ type: 'error', msg });
                    return [...val];
                });
            };
        }
        return () => {
        };
    }, [iframeRef, setLogs]);
    return {
        logs
    };
}
