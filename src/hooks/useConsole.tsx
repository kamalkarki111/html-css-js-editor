'use client'
import { useEffect, useState } from "react";

export function useConsole({ iframeRef  } : UseConsoleParams): UseConsoleReturnParams {

    const [logs, setLogs] = useState<UseConsoleReturnParams['logs']>([{type:'log',msg:'welcome to console'}]);

    useEffect( () => {
        const node = iframeRef?.current?.contentWindow
        if(  node) {
            (node as any).console = {
                log : (msg: string)=>{
                    setLogs((val:any):any=>{
                        val && val.push({type:'log',msg})
                        return [...val];
                    })
                },
                error : (msg: string)=>{
                    setLogs((val:any):any=>{
                        val && val.push({type:'error',msg})
                        return [...val];
                    })
                },
                warn : (msg: string)=>{
                    setLogs((val:any):any=>{
                        val && val.push({type:'warn',msg})
                        return [...val];
                    })
                },
            }

            node.onerror = (msg) => {
                setLogs((val:any):any=>{
                    val && val.push({type:'error',msg})
                    return [...val];
                })
            }

        }
        return ()=>{
        }
    }, [iframeRef,setLogs] )

    return {
        logs
    }
}

export interface UseConsoleParams {
    iframeRef : React.MutableRefObject<HTMLIFrameElement | undefined>;
}

export interface UseConsoleReturnParams {
    logs? : [{
        type?: 'error' | 'warn' | 'log';
        msg?: string;
    } ] | undefined; 
}