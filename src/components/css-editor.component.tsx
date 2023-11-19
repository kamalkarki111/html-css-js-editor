'use client'
import React from 'react';
import { useState } from "react";
import { Editor, EditorProps } from "@monaco-editor/react";
import {useCSSEditor} from "../hooks/useCSSEditor";

export function CSSEditor({ IframeRef , editorProps}:{IframeRef: any, editorProps:EditorProps}) {

    const [code, setCode] = useState<string>();

    useCSSEditor({value: code, iframeRef: IframeRef})
    
    return (
        <>
            <Editor
            {...editorProps}
            language="css"
            theme="vs-dark"
            value={code}
            onChange={ (val, e) => { setCode(val) } } />
        </>
    )
}