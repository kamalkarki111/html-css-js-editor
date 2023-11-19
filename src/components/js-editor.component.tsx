import React from 'react';
import { useState } from "react"
import { Editor, EditorProps } from "@monaco-editor/react";
import {useJSEditor} from "../hooks/useJSEditor";

export function JSEditor({ IframeRef , editorProps}:{IframeRef: any, editorProps:EditorProps}) {

    const [code, setCode] = useState<string>();

    useJSEditor({value: code, iframeRef: IframeRef});
    
    return (
        <>
            <Editor
            {...editorProps}
            language="javascript"
            theme="vs-dark"
            value={code}
            onChange={ (val, e) => { setCode(val) } } />
        </>
    )
}