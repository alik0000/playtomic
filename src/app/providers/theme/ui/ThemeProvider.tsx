import { CssBaseline, ThemeProvider as MUIThemeProvider } from "@mui/material";
import {FC, memo, ReactNode} from "react";
import { theme } from "shared/styles";

import { responsiveFontSizes } from "@mui/material/styles";

interface Props {
    children: ReactNode
}
export const ThemeProvider: FC<Props> = memo(({ children }) => {
    return (
        <MUIThemeProvider theme={responsiveFontSizes(theme)}>
            <CssBaseline/>
            {children}
        </MUIThemeProvider>
    )
})
