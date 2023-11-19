import React from 'react';
import { useState } from "react";
import { useHTMLEditor } from "../hooks/useHTMLEditor";
import { Editor } from "@monaco-editor/react";
export function HTMLEditor({ IframeRef, editorProps }) {
    const [code, setCode] = useState();
    useHTMLEditor({ value: code, iframeRef: IframeRef });
    return (React.createElement(React.Fragment, null,
        React.createElement(Editor, { ...editorProps, language: "html", theme: "vs-dark", value: code, onChange: (val, e) => { setCode(val); } })));
}
