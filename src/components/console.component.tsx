import React from 'react';
import {useConsole} from "../hooks/useConsole";
import { HTMLAttributes } from "react";

export function Console({ IframeRef , editorProps}:{IframeRef: any, editorProps:HTMLAttributes<HTMLDivElement>}) {

    const { logs } = useConsole({iframeRef: IframeRef})
    
    return (
        <div {...editorProps}>
            {
                logs?.map((log, index)=>(
                    <p key={index} style={{color: log.type === 'error' ? '	#cc3300' : log.type === 'warn' ? '#ffcc00' : 'green'}}>{log.type +' : '+ log.msg}</p>
                ))
            }
        </div>
    )
}