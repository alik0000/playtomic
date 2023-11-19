import {FC} from "react";
import {Card, CardActions, CardContent, CardHeader, Divider, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import {CheckCircle} from "@mui/icons-material";
import {AppAvatar} from "shared/ui/app-avatar/Avatar";
import man from "../../assets/man.jpg";
import {StyledDateButton} from "./CardCourt.styles";

export const CardCourt:FC = () => {
    return (
        <Card sx={{borderRadius: '1.2rem'}}>
            <CardHeader component='header'
                        title={
                            <Box display='flex' justifyContent='space-between'>
                                <Typography variant="h5" fontWeight={700}>Tomorrow | 7:00 pm</Typography>
                                <Box display='flex' alignItems='center' columnGap={1.5}>
                                    <Typography variant='body1' fontWeight={600}>Court booked</Typography>
                                    <CheckCircle sx={{ color: '#edf505' }}/>
                                </Box>
                            </Box>
                        }
                        subheader={<Typography variant='body1' color={'text.secondary'}>0m • Acciones playtomic</Typography>}
            />
            <CardContent sx={{display: 'flex', gap: {sm: '2.4rem', xs: '1.2rem'}}}>
                <AppAvatar src={man} author='Muhammad Iran' level='1.8'/>
                <AppAvatar/>
                <Divider variant='middle' orientation="vertical" flexItem sx={{ borderRightWidth: '1px' }}></Divider>
                <AppAvatar author='Abdo Hamid' level='1.23'/>
                <AppAvatar/>
            </CardContent>
            <CardActions sx={{ justifyContent: 'space-between', padding: 0, borderTop: '1px solid #E3E2E2B2'}}>
                <Box px={{xs: '1.8rem', lg: '2.4rem'}} py={{xs: '1.2rem', lg: '1.8rem'}} display='flex' columnGap={1}>
                    <Typography variant='h4' fontWeight={500}>Friendly </Typography>•
                    <Typography variant='h4' fontWeight={400} color={'text.disabled'}>0.3-3.2</Typography>
                </Box>
                <StyledDateButton size={'large'} href={'#'} variant={'contained'} color={'primary'}>
                    <Typography variant={"h4"} fontWeight={500}>75 AED</Typography>
                    <Typography variant={'body2'} textTransform='lowercase'>90min</Typography>
                </StyledDateButton>
            </CardActions>
        </Card>
    )
}
