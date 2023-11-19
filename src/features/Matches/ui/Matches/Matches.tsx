import {FC, useState, SyntheticEvent, KeyboardEvent, MouseEvent, useCallback} from "react";
import {TabContext, TabPanel} from '@mui/lab';
import {
    Stack,
    IconButton,
    Button,
    Typography,
    Grid,
    Divider,
    Box,
    AccordionSummary,
    AccordionDetails,
    Drawer,
} from "@mui/material";
import {
    TuneOutlined,
    ExpandMoreOutlined,
    ExpandMore
} from '@mui/icons-material'
import {
    StyledMatches, StyledTab, StyledTabList,
    StyledTabListWrap, StyledFilterTagsItems, StyledFilterTagsWrap,
    StyledFilterFabButton, StyledSidebar, StyledAccordion
} from "./Matches.styles";
import { Filter } from '../Filter/Filter'
import { CardCourt } from '../CardCourt/CardCourt'
import {CardClub} from "../CardClub/CardClub";
import {FixedButton} from "shared/ui/fixed-button/FixedButton";

export const Matches: FC = () => {
    const [value, setValue] = useState('1');
    const [showHide, setShowHide] = useState(true)


    const toggleDrawer = useCallback((open?: boolean) =>
        (event: KeyboardEvent | MouseEvent) => {
            if (
                event &&
                event.type === 'keydown' &&
                ((event as KeyboardEvent).key === 'Tab' ||
                    (event as KeyboardEvent).key === 'Shift')
            ) {
                return;
            }

            setShowHide(open || !showHide)
        }, [showHide])

    const handleChange = (event: SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <StyledMatches>
            <TabContext value={value}>
                <StyledTabListWrap>
                    <StyledTabList onChange={handleChange}>
                        <StyledTab disableRipple label="Available" value="1"/>
                        <StyledTab disableRipple label="Your matches" value="2" />
                    </StyledTabList>
                </StyledTabListWrap>
                <TabPanel value="1" sx={{ display: 'flex', mt: '2.4rem'}}>
                    <Grid container spacing={{lg: 5, xs: 3}}>
                        <StyledFilterTagsWrap item xs={12}>
                            <StyledFilterTagsItems>
                                <IconButton onClick={toggleDrawer()} sx={{ display: {lg: 'none', md: 'block'}, p: 0}}>
                                    <TuneOutlined sx={{fontSize: '4rem', color: 'text.primary'}}/>
                                </IconButton>
                                {['Padel', 'Tomorrow, evening', 'Tomorrow, evening'].map((text, index) =>
                                    <StyledFilterFabButton key={text+index} color='primary' variant={'extended'}>
                                        {text}
                                        <ExpandMoreOutlined />
                                    </StyledFilterFabButton>
                                )}
                                <Button variant="text" size='large' sx={{whiteSpace: 'nowrap', color: 'primary.dark'}}>Clear all</Button>
                            </StyledFilterTagsItems>
                        </StyledFilterTagsWrap>
                        <Grid item lg={3} xs={0}>
                            <StyledSidebar color='default'>
                                <Filter />
                            </StyledSidebar>
                        </Grid>
                        <Drawer
                            variant={'persistent'}
                            anchor={'bottom'}
                            open={showHide}
                            onClose={toggleDrawer(false)}
                            sx={{
                                '.MuiPaper-root': {
                                    height: '100%',
                                },
                                display: { lg: 'none', xs: 'block'}
                            }}
                        >
                            <Box color={'default'} sx={{
                                minHeight: '100%',
                                py: '2.4rem', backgroundColor: 'background.paper',
                            }}>
                                <Filter handleClose={() => {
                                    setShowHide(false)
                                }} />
                            </Box>
                        </Drawer>
                        <Grid item lg={9} xs={12} sx={{ mt: {lg: 0, xs: '7.5rem'} }}>
                            <Stack rowGap={6} sx={{ px: {lg: '2.4rem', xs: '0'}, width: {xs: '100%'} }}>
                                <Grid container spacing={{xs: 3, sm: 2, md: 4}}>
                                    <Grid item xs={12}>
                                        <Stack rowGap={1}>
                                            <Typography variant="h2">
                                                For your level
                                            </Typography>
                                            <Typography variant="body2" sx={{color: 'text.disabled'}}>
                                                These matches fit you search and your level perfectly
                                            </Typography>
                                        </Stack>
                                    </Grid>
                                    {Array.from(Array(5).keys()).map((num) =>
                                        <Grid key={num} item lg={4} md={6} xs={12}>
                                            <CardCourt/>
                                        </Grid>
                                    )}
                                </Grid>

                                <Divider variant={'middle'} flexItem sx={{ borderWidth: '1px' }}></Divider>

                                <StyledAccordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMore sx={{width: '44px', height: '44px'}} />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                        sx={{padding: 0, border: 0}}
                                    >
                                        <Box display='flex' flexDirection='column' rowGap={1}>
                                            <Typography variant={'h3'}>Be the first player!</Typography>
                                            <Typography variant={'body1'} color={'text.disabled'}>Create a new match by selecting the hour you want</Typography>
                                        </Box>
                                    </AccordionSummary>
                                    <AccordionDetails sx={{padding: 0}}>
                                        <Grid container spacing={{xs: 3, sm: 2, md: 3}}>
                                            {Array.from(Array(4).keys()).map((num) =>
                                                <Grid key={num} item lg={4} md={6} xs={12}>
                                                    <CardClub/>
                                                </Grid>
                                            )}
                                        </Grid>
                                    </AccordionDetails>
                                </StyledAccordion>
                            </Stack>
                        </Grid>
                    </Grid>
                    <FixedButton/>
                </TabPanel>

                <TabPanel value="2">
                    <Typography variant='h2'>Your matches</Typography>
                </TabPanel>
            </TabContext>
        </StyledMatches>
    )
}
