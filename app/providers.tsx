"use client";

import * as React from "react";
import {NextUIProvider} from "@nextui-org/system";
import {ThemeProvider as NextThemesProvider} from "next-themes";
import {ThemeProviderProps} from "next-themes/dist/types";
import {store, persistor} from '@/app/store'
import {Provider} from "react-redux";
import {PersistGate} from 'redux-persist/integration/react';

export interface ProvidersProps {
    children: React.ReactNode;
    themeProps?: ThemeProviderProps;
}

export function Providers({children, themeProps}: ProvidersProps) {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <NextUIProvider>
                    <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
                </NextUIProvider>
            </PersistGate>
        </Provider>
    );
}
