import { Request } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { Store, SessionData, Session } from "express-session";
import { ParsedQs } from "qs";

interface MyData {
    accessToken?: string;
    firstName?: string;
};

const data: { [key: string]: MyData } = {};

export const myStore = {
    get: (sessionId: string) => data[sessionId],
    set: (sessionId: string, session: MyData) => { data[sessionId] = session; }
}

const sessions: { [key: string]: SessionData } = {};

export const sessionStore: Store = {
    get: (sessionId: string) => sessions[sessionId],
    set: (sessionId: string, session: SessionData) => { sessions[sessionId] = session; },
    destroy: (sessionId: string) => { delete sessions[sessionId]; },
    regenerate: function (req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, callback: (err?: any) => any): void {
        throw new Error("Function not implemented.");
    },
    load: function (sid: string, callback: (err: any, session?: SessionData | undefined) => any): void {
        throw new Error("Function not implemented.");
    },
    createSession: function (req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, session: SessionData): Session & SessionData {
        throw new Error("Function not implemented.");
    },
    addListener: function (eventName: string | symbol, listener: (...args: any[]) => void): Store {
        throw new Error("Function not implemented.");
    },
    on: function (eventName: string | symbol, listener: (...args: any[]) => void): Store {
        throw new Error("Function not implemented.");
    },
    once: function (eventName: string | symbol, listener: (...args: any[]) => void): Store {
        throw new Error("Function not implemented.");
    },
    removeListener: function (eventName: string | symbol, listener: (...args: any[]) => void): Store {
        throw new Error("Function not implemented.");
    },
    off: function (eventName: string | symbol, listener: (...args: any[]) => void): Store {
        throw new Error("Function not implemented.");
    },
    removeAllListeners: function (event?: string | symbol | undefined): Store {
        throw new Error("Function not implemented.");
    },
    setMaxListeners: function (n: number): Store {
        throw new Error("Function not implemented.");
    },
    getMaxListeners: function (): number {
        throw new Error("Function not implemented.");
    },
    listeners: function (eventName: string | symbol): Function[] {
        throw new Error("Function not implemented.");
    },
    rawListeners: function (eventName: string | symbol): Function[] {
        throw new Error("Function not implemented.");
    },
    emit: function (eventName: string | symbol, ...args: any[]): boolean {
        throw new Error("Function not implemented.");
    },
    listenerCount: function (eventName: string | symbol, listener?: Function | undefined): number {
        throw new Error("Function not implemented.");
    },
    prependListener: function (eventName: string | symbol, listener: (...args: any[]) => void): Store {
        throw new Error("Function not implemented.");
    },
    prependOnceListener: function (eventName: string | symbol, listener: (...args: any[]) => void): Store {
        throw new Error("Function not implemented.");
    },
    eventNames: function (): (string | symbol)[] {
        throw new Error("Function not implemented.");
    }
};
