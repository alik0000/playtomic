import {styled, ToggleButtonGroup, ToggleButtonGroupProps} from "@mui/material";

const StyledToggleButtonGroup = styled(ToggleButtonGroup)<ToggleButtonGroupProps>(() => ({
    maxWidth: 'calc(100% + 4.8rem)',
    marginRight: '-2.4rem',
    marginLeft: '-2.4rem',
    padding: '0 2.4rem 0.6rem',
    overflowX: 'auto',
}))

export {
    StyledToggleButtonGroup
}
