import {FC, memo} from "react";
import {Fab} from "@mui/material";
import {AddOutlined} from "@mui/icons-material";
import { StyledFixedButton } from './FixedButton.styles'

export const FixedButton: FC = memo(() => {
    return (
        <StyledFixedButton>
            <Fab variant="extended" size='large' color="primary" sx={{pointerEvents: 'visible'}}>
                <AddOutlined sx={{ mr: 1}} />
                Start a match
            </Fab>
        </StyledFixedButton>
    )
})
