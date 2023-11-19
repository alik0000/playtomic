import {Button, ButtonProps, styled} from "@mui/material";

const StyledDateButton = styled(Button)<ButtonProps>(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '40%',
    borderRadius: 0,
    [theme.breakpoints.up('xs')]: {
        padding: '1.2rem 1.6rem',
    },
    [theme.breakpoints.up('lg')]: {
        padding: '1.8rem 2.2rem',
    }
}))

export {
    StyledDateButton
}
