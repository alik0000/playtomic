import { StrictMode } from 'react';
import 'app/styles/app.css'
import { App } from "./app/App";
import {ThemeProvider} from "./app/providers/theme";
import {BrowserRouter} from "react-router-dom";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <StrictMode>
        <BrowserRouter>
            <ThemeProvider>
                <App/>
            </ThemeProvider>
        </BrowserRouter>
    </StrictMode>
)
