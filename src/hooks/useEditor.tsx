'use client'
import { HTMLAttributes, useEffect, useId, useRef } from "react";
import {useHTMLEditor} from "./useHTMLEditor";
import {useCSSEditor} from "./useCSSEditor";
import {useJSEditor} from "./useJSEditor";

export function useEditor( { config } : EditorParams ) : EditorScreenReturnParams {

    const hostRef = useRef<HTMLIFrameElement>();

    const id = useId();

    useHTMLEditor({value:config.html?.snippit, iframeRef: hostRef});

    useCSSEditor({value:config.css?.snippit, iframeRef: hostRef});

    useJSEditor({value:config.js?.snippit, iframeRef: hostRef});

    useEffect( () => {

        const iframe = document.createElement('iframe');

        const rootElement = document.getElementById(id);

        hostRef.current = rootElement?.appendChild(iframe);

        return ()=>{
            rootElement?.removeChild(iframe);
        }

    }, [])

    return {
        elementProps : {
            id
        },
        hostRef
    }
}

export type EditorParams = {
    config: {
        /**
         * Config related to JS editor
         */
        js ?: {
            /**
             * Snippit Text to be used as JS code.
             */
            snippit: string,
        },
        /**
         * Config related to CSS editor
         */
        css ?: {
            /**
             * Snippit Text to be used as CSS code
             */
            snippit: string,
        },
        /**
         * Config related to HTML editor
         */
        html ?: {
            /**
             * Snippit Text to be used as HTML code
             */
            snippit: string,
        }
    }
}

export interface EditorScreenReturnParams {
    /** Props to be spread over the source element where resukt will be shown */
    elementProps: HTMLAttributes<HTMLElement>;
    /** Host Elements Ref(Iframe) where Results will be shown  */
    hostRef: React.MutableRefObject<HTMLIFrameElement | undefined>
}