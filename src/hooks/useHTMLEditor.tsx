'use client'
import { useEffect, useMemo } from "react"

export function useHTMLEditor({ value, iframeRef  } : UseHTMLEditorParams) {

    useEffect( () => {
        const node = iframeRef?.current?.contentDocument?.body;
        if( value && node) {
            node.innerHTML = value;
        }
        return ()=>{
        }
    }, [value, iframeRef] )

    return {
        
    }
}

export interface UseHTMLEditorParams {
    value : string | undefined;
    iframeRef : React.MutableRefObject<HTMLIFrameElement | undefined>;
}