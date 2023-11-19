import { HTMLAttributes } from "react";
export declare function useEditor({ config }: EditorParams): EditorScreenReturnParams;
export type EditorParams = {
    config: {
        /**
         * Config related to JS editor
         */
        js?: {
            /**
             * Snippit Text to be used as JS code.
             */
            snippit: string;
        };
        /**
         * Config related to CSS editor
         */
        css?: {
            /**
             * Snippit Text to be used as CSS code
             */
            snippit: string;
        };
        /**
         * Config related to HTML editor
         */
        html?: {
            /**
             * Snippit Text to be used as HTML code
             */
            snippit: string;
        };
    };
};
export interface EditorScreenReturnParams {
    /** Props to be spread over the source element where resukt will be shown */
    elementProps: HTMLAttributes<HTMLElement>;
    /** Host Elements Ref(Iframe) where Results will be shown  */
    hostRef: React.MutableRefObject<HTMLIFrameElement | undefined>;
}
