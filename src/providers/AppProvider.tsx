import {createOptimizedContext} from "../services/optimized-context";
import React from "react";

export interface initialStateType {
    count: number;
    name: string;
}

const initialState: initialStateType = {
    count: 0,
    name: 'Denis',
}

export const context = createOptimizedContext<initialStateType>();

export interface Context {
    children: React.ReactNode;
}

export const Context: React.FC<Context> = ({ children }) => {
    const { Provider: AppProvider } = context;

    return (
        <AppProvider initialState={initialState}>
            {children}
        </AppProvider>
    );
};