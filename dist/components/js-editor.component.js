import React from 'react';
import { useState } from "react";
import { Editor } from "@monaco-editor/react";
import { useJSEditor } from "../hooks/useJSEditor";
export function JSEditor({ IframeRef, editorProps }) {
    const [code, setCode] = useState();
    useJSEditor({ value: code, iframeRef: IframeRef });
    return (React.createElement(React.Fragment, null,
        React.createElement(Editor, { ...editorProps, language: "javascript", theme: "vs-dark", value: code, onChange: (val, e) => { setCode(val); } })));
}
