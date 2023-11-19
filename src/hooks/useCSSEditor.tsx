import { useEffect, useMemo } from "react";

export function useCSSEditor({ value, iframeRef  } : UseCSSEditorParams) {
    
    const cssElement: HTMLStyleElement = useMemo(()=>{
        return document.createElement('style');
    }, []);

    useEffect(()=>{

        const node = iframeRef.current?.contentDocument?.head;

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
    },[])

    useEffect( () => {

        if( cssElement ) {
            try{
                cssElement.innerHTML = value;
            } catch(e){
                console.log(e)
            }
        }

        return ()=>{
        }
        
    }, [value, iframeRef, cssElement])
}

export interface UseCSSEditorParams {
    value: string | undefined;
    iframeRef : React.MutableRefObject<HTMLIFrameElement | undefined>;
}