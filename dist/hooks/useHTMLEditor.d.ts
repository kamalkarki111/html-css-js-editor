/// <reference types="react" />
export declare function useHTMLEditor({ value, iframeRef }: UseHTMLEditorParams): {};
export interface UseHTMLEditorParams {
    value: string | undefined;
    iframeRef: React.MutableRefObject<HTMLIFrameElement | undefined>;
}
