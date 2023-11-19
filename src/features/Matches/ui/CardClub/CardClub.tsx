import {FC} from "react";
import {Avatar, Card as MuiCard, CardActions, CardHeader, Divider, Stack, Typography} from "@mui/material";
import padelKingdomLogo from "../../assets/padelKingdomLogo.png";
import {StyledButton} from "./CardClub.styles";


export const CardClub: FC = () => {

    return (
        <MuiCard sx={{borderRadius: '12px'}}>
            <CardHeader
                avatar={
                    <Avatar src={padelKingdomLogo}  sx={{ height: '9rem', width: '10rem', borderRadius: '1.2rem' }}/>
                }
                sx={{ p: {lg: 4, xs: 3} }}
                component={'header'}
                title={<Typography variant='h5'>Demo Testclub</Typography>}
                subheader={<Typography variant='body1' >0m • Teststadt</Typography>}
            />
            <Divider sx={{ borderTopWidth: '1px' }} />
            <CardActions sx={{
                display: 'flex', flexDirection: 'column', alignItems: 'flex-start', rowGap: '1.2rem',
                pt: {lg: '1.6rem', xs: '1.2rem'}, px: {lg: '2.4rem', xs: '1.8rem'}, pb: {lg: '2.4rem', xs: '1.8rem'},
                justifyContent: 'space-between'}}
            >
                <Typography variant='h5'>Tomorrow</Typography>
                <Stack direction='row' columnGap={{lg: 3, xs: 2}} sx={{
                    overflowX: 'auto', px: {lg: '2.4rem', xs: '1.8rem'},
                    mx: {lg: '-2.4rem', xs: '-1.8rem'},
                    maxWidth: {lg: 'calc(100% + 4.8rem)', xs: 'calc(100% + 3.6rem)'}, pb: {lg: '1.2rem', xs: 0}}}>
                    {Array.from(Array(9).keys()).map((num) =>
                        <StyledButton size='large' key={num} href='#' variant={'outlined'}>
                            <Typography color='text.primary' variant="h5">7:30 pm</Typography>
                            <Typography color='text.secondary' variant='h6' fontWeight={500}>90min</Typography>
                        </StyledButton>
                    )}
                </Stack>

            </CardActions>
        </MuiCard>
    )
}
