"use client";

import * as React from "react";
import {NextUIProvider} from "@nextui-org/system";
import {ThemeProvider as NextThemesProvider} from "next-themes";
import {ThemeProviderProps} from "next-themes/dist/types";
import {store} from '@/app/store'
import {Provider} from "react-redux";

export interface ProvidersProps {
    children: React.ReactNode;
    themeProps?: ThemeProviderProps;
}

export function Providers({children, themeProps}: ProvidersProps) {
    return (
        <Provider store={store}>
            <NextUIProvider>
                <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
            </NextUIProvider>
        </Provider>
    );
}
