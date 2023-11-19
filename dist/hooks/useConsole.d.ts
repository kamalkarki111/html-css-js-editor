/// <reference types="react" />
export declare function useConsole({ iframeRef }: UseConsoleParams): UseConsoleReturnParams;
export interface UseConsoleParams {
    iframeRef: React.MutableRefObject<HTMLIFrameElement | undefined>;
}
export interface UseConsoleReturnParams {
    logs?: [
        {
            type?: 'error' | 'warn' | 'log';
            msg?: string;
        }
    ] | undefined;
}
