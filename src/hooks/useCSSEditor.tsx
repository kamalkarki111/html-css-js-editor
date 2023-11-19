import { useEffect, useMemo } from "react";

export function useCSSEditor({ value, iframeRef  } : UseCSSEditorParams) {
    
    const cssElement: HTMLStyleElement = useMemo(()=>{
        return document.createElement('style');
    }, []);

    useEffect( () => {

        const node = iframeRef.current?.contentDocument?.body;
        if( value && node ) {
            node?.appendChild(cssElement);
            try{
                cssElement.innerHTML = value;
            } catch(e){
                console.log(e)
            }
        }

        return ()=>{
            if( value && node ) {
                node?.removeChild(cssElement);
            }
        }
        
    }, [value, iframeRef, cssElement])
}

export interface UseCSSEditorParams {
    value: string | undefined;
    iframeRef : React.MutableRefObject<HTMLIFrameElement | undefined>;
}