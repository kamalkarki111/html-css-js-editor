import React from 'react';
import { useState } from "react";
import { Editor } from "@monaco-editor/react";
import { useCSSEditor } from "../hooks/useCSSEditor";
export function CSSEditor({ IframeRef, editorProps }) {
    const [code, setCode] = useState();
    useCSSEditor({ value: code, iframeRef: IframeRef });
    return (React.createElement(React.Fragment, null,
        React.createElement(Editor, { ...editorProps, language: "css", theme: "vs-dark", value: code, onChange: (val, e) => { setCode(val); } })));
}
