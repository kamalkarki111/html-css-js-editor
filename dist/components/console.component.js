import React from 'react';
import { useConsole } from "../hooks/useConsole";
export function Console({ IframeRef, editorProps }) {
    const { logs } = useConsole({ iframeRef: IframeRef });
    return (React.createElement("div", { ...editorProps }, logs?.map((log, index) => (React.createElement("p", { key: index, style: { color: log.type === 'error' ? '	#cc3300' : log.type === 'warn' ? '#ffcc00' : 'green' } }, log.type + ' : ' + log.msg)))));
}
