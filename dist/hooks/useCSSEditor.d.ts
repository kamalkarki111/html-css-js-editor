/// <reference types="react" />
export declare function useCSSEditor({ value, iframeRef }: UseCSSEditorParams): void;
export interface UseCSSEditorParams {
    value: string | undefined;
    iframeRef: React.MutableRefObject<HTMLIFrameElement | undefined>;
}
