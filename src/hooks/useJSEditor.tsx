import { useEffect, useMemo } from "react";

export function useJSEditor({ value, iframeRef  } : UseJSEditorParams) {



    useEffect( () => {

        const node = iframeRef.current?.contentDocument?.body;
        
        if( node ) {
            var scriptElement = document.createElement('script');
            node?.appendChild(scriptElement);
            try{
                setTimeout(()=> scriptElement.innerHTML = value || '');
            } catch(e){
                console.log(e)
            }
        }

        return ()=>{
            if( node ) {
                try{
                    node?.removeChild(scriptElement);
                    scriptElement.innerHTML = '';
                } catch(e){
                    console.log(e)
                }
                   
                
            }
        }
        
    }, [value, iframeRef])
}

export interface UseJSEditorParams {
    value: string | undefined;
    iframeRef : React.MutableRefObject<HTMLIFrameElement | undefined>;
}