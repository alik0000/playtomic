import { TypographyOptions } from '@mui/material/styles/createTypography';
import { CSSProperties } from "react";

export const fontFamily = [
    'Be Vietnam Pro, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
].join(', ');

declare module '@mui/material/styles' {
    interface TypographyVariants {
        tab: CSSProperties;
    }

    // allow configuration using `createTheme`
    interface TypographyVariantsOptions {
        tab?: CSSProperties;
    }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        tab: true;
    }
}

const typography: TypographyOptions = {
    fontFamily,
    htmlFontSize: 10,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    button: {
        textTransform: 'inherit',
        fontSize: '1.8rem'
    },
    h1: {
        fontWeight: 700,
        fontSize: 34,
    },
    h2: {
        fontWeight: 700,
        fontSize: 30,
    },
    h3: {
        fontSize: 28,
        fontWeight: 700,
    },
    h4: {
        fontSize: 24,
        fontWeight: 700,
    },
    h5: {
        fontSize: 20,
        fontWeight: 700,
    },
    h6: {
        fontSize: 15,
        fontWeight: 700,
    },
    body1: {
        fontSize: '1.8rem',
        lineHeight: 1.45,
        fontWeight: 500,
    },
    body2: {
        fontSize: '1.6rem',
    },
    subtitle1: {
        fontSize: '1.2rem',
        lineHeight: 1.3,
    },
    subtitle2: {
        fontSize: '1rem',
    },
};

export default typography;
