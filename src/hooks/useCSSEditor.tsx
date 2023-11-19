'use client'
import { useEffect, useMemo } from "react";

export function useCSSEditor({ value, iframeRef  } : UseCSSEditorParams) {


    useEffect(()=>{

        const node = iframeRef.current?.contentDocument?.head;
        const cssElement = document.createElement('style');

        if(node){
            node?.appendChild(cssElement);
        } 

        return ()=>{
            if( node ) {
                try{
                    node?.removeChild(cssElement);
                } catch(e) {
                    console.log(e)
                }
            }
        }
    },[iframeRef])

    useEffect( () => {

        const node = iframeRef.current?.contentDocument?.head.querySelector('style');

        if( node ) {
            try{
                node.innerHTML = value as string;
            } catch(e){
                console.log(e)
            }
        }

        return ()=>{
        }
        
    }, [value, iframeRef])
}

export interface UseCSSEditorParams {
    value: string | undefined;
    iframeRef : React.MutableRefObject<HTMLIFrameElement | undefined>;
}