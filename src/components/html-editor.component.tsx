import React from 'react';
import { useState } from "react"
import {useHTMLEditor} from "../hooks/useHTMLEditor";
import { Editor, EditorProps } from "@monaco-editor/react";

export function HTMLEditor({ IframeRef , editorProps}:{IframeRef: any, editorProps:EditorProps}) {

    const [code, setCode] = useState<string>();

    useHTMLEditor({value: code, iframeRef: IframeRef});
    
    return (
        <>
            <Editor
            {...editorProps}
            language="html"
            theme="vs-dark"
            value={code}
            onChange={ (val, e) => { setCode(val) } } />
        </>
    )
}