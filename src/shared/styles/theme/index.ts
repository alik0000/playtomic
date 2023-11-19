import { createTheme } from '@mui/material/styles';
import palette from './palette';
import typography from './typography';
import shape from './shape';

export const THEME_SPACING = 6;
let theme = createTheme()
const hideScroll = {
    [theme.breakpoints.down('md')]: {
        display: 'none'
    },
    [theme.breakpoints.up('md')]: {
        display: 'block'
    },
}
theme = createTheme({
    palette,
    typography,
    shape,
    spacing: THEME_SPACING,
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                html: {
                    '*': {
                        scrollbarWidth: 'thin',
                        scrollbarColor: 'transparent',

                        '&::-webkit-scrollbar': {
                            width: 6,
                            height: 6,
                            backgroundColor: 'transparent',
                        },
                        '&::-webkit-scrollbar-track': {
                            backgroundColor: '#efefef',
                            paddingTop: '5px',
                            paddingBottom: '5px',
                            borderRadius: 6,
                        },
                        '&::-webkit-scrollbar-thumb': {
                            borderRadius: 6,
                            backgroundColor: '#B7B7B7',
                            minHeight: 24,
                            minWidth: 24,
                        },
                        '&::-webkit-scrollbar-thumb:focus': {
                            backgroundColor: '#adadad',
                        },
                        '&::-webkit-scrollbar-thumb:active': {
                            backgroundColor: '#adadad',
                        },
                        '&::-webkit-scrollbar-thumb:hover': {
                            backgroundColor: '#adadad',
                        },
                        '&::-webkit-scrollbar-corner': {
                            backgroundColor: 'transparent',
                        },
                    },
                },
            }
        },
        MuiStack: {
            styleOverrides: {
                root: {
                    '&.MuiStack-root::-webkit-scrollbar': hideScroll,
                }
            }
        },
        MuiToggleButtonGroup: {
            styleOverrides: {
                root: {
                    '&.MuiToggleButtonGroup-root::-webkit-scrollbar': hideScroll,
                }
            }
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: palette.background?.default,
                },
            },
        },
        MuiToggleButton: {
            styleOverrides: {
                root: {
                    '&.MuiToggleButton-root': {
                        backgroundColor: 'transparent',
                        color: 'text.primary',
                        textTransform: 'inherit',
                        borderRadius: '5rem',
                        fontSize: '1.6rem',
                        paddingRight: '1.2rem',
                        paddingLeft: '1.2rem',

                        '&:not(:first-child)': {
                            borderColor: '#cfd8dc !important',
                            borderTopLeftRadius: '5rem !important',
                            borderBottomLeftRadius: '5rem !important',
                        },
                        '&:not(:last-child)': {
                            borderTopRightRadius: '5rem !important',
                            borderBottomRightRadius: '5rem !important',
                            marginRight: '1rem',
                        },
                        '&.Mui-selected': {
                            backgroundColor: '#263238',
                            color: 'white',
                            borderColor: '#263238'
                        }
                    }
                },
            },
        },
    },
});

export {theme}
