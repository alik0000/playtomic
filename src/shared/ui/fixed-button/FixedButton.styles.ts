import {Box, BoxProps, styled} from "@mui/material";

const StyledFixedButton = styled(Box)<BoxProps>(({theme}) => ({
    position: 'fixed',
    bottom: '4rem',
    pointerEvents: 'none',
    display: 'flex',
    width: '100%',

    [theme.breakpoints.up('xs')]: {
        justifyContent: 'center',
    },
    [theme.breakpoints.up('md')]: {
        justifyContent: 'flex-end',
        paddingRight: '3.5rem',
        paddingLeft: '3.5rem',
    },
    [theme.breakpoints.up('lg')]: {
        paddingRight: '6rem',
        paddingLeft: '6rem',
    },
}))

export {
    StyledFixedButton
}
