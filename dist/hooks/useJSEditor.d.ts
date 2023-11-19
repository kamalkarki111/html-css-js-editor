/// <reference types="react" />
export declare function useJSEditor({ value, iframeRef }: UseJSEditorParams): void;
export interface UseJSEditorParams {
    value: string | undefined;
    iframeRef: React.MutableRefObject<HTMLIFrameElement | undefined>;
}
