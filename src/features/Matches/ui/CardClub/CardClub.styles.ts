import { styled, Button, ButtonProps } from "@mui/material";

const StyledButton = styled(Button)<ButtonProps>(() => ({
    display: 'flex',
    textTransform: 'inherit',
    width: 'fit-content',
    flexShrink: '0',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: '0.8rem',
    borderColor: '#E3E2E2FF'
}))

export {
    StyledButton
}
