import {FC, useState, useCallback, MouseEvent} from "react";
import {
    Button, Divider, FormGroup, List, ListItem, ListItemText, Stack,
    Switch, Typography, ToggleButton, ListSubheader,
    Checkbox, Box, Fab, IconButton
} from "@mui/material";
import {ChevronLeft} from "@mui/icons-material";
import {
    SchemaSwitches, SchemaFeatureCheckboxes, SchemaSizeCheckboxes,
    SchemaPLayCheckboxes, SchemaTypeCheckboxes
} from "./Schema";
import { StyledToggleButtonGroup } from './Filter.styles'

interface Props {
    handleClose?: () => void
}
export const Filter: FC<Props> = ({handleClose}) => {
    const [checked, setChecked] = useState<string[]>([]);
    const [switched, setSwitched] = useState<string[]>([]);
    const [alignment, setAlignment] = useState('');

    const handleChange = (
        event: MouseEvent<HTMLElement>,
        newAlignment: string,
    ) => {
        setAlignment(newAlignment);
    }

    const handleToggleSwitch = useCallback((value: string) => () => {
        const currentIndex = switched.indexOf(value);
        const newSwitch = [...switched];

        if (currentIndex === -1) {
            newSwitch.push(value);
        } else {
            newSwitch.splice(currentIndex, 1);
        }

        setSwitched(newSwitch);
    }, [switched])

    const handleToggleCheckbox = useCallback((value: string) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    }, [checked])


    return(
        <FormGroup sx={{ display: 'block', minHeight: {xs: '100%', lg: 0},
            maxHeight: '100%', overflowY: 'auto', pb: '1.2rem' }}>
            <Stack direction='row' justifyContent='space-between' alignItems='center' px='1.8rem' py='0.8rem'>
                <IconButton onClick={handleClose} sx={{ display: {lg: 'none', md: 'block'}, p: 0 }}>
                    <ChevronLeft sx={{fontSize: '3.2rem'}} />
                </IconButton>
                <Typography variant={'h4'}>
                    More filters
                </Typography>
                <Button variant="text" size={'large'}>Clear all</Button>
            </Stack>
            <Divider/>
            <List>
                { SchemaSwitches.map(({id, title, ariaLabelledby}) =>
                    <ListItem key={id}>
                        <ListItemText id={id} primaryTypographyProps={{fontSize: '22px'}} primary={title} />
                        <Switch
                            edge="end"
                            inputProps={{'aria-labelledby': ariaLabelledby}}
                            onChange={handleToggleSwitch(ariaLabelledby)}
                            checked={switched.indexOf(ariaLabelledby) !== -1}
                        />
                    </ListItem>
                )}
            </List>
            <Divider/>
            <List subheader={
                <ListSubheader component="h4" id="nested-list-subheader">
                    <Typography variant={'h4'} color={'text.primary'}>Sort by</Typography>
                </ListSubheader>
            }>
                <ListItem>
                    <StyledToggleButtonGroup
                        color='primary'
                        value={alignment}
                        exclusive
                        onChange={handleChange}
                        aria-label="Platform"
                    >
                        {['More recent', 'Number of players', 'Nearest'].map((text, index) =>
                            <ToggleButton key={text+index} size='small' value={text} sx={{whiteSpace: 'nowrap'}}>
                                <Typography variant='body2'>{text}</Typography>
                            </ToggleButton>
                        )}
                    </StyledToggleButtonGroup>
                </ListItem>
            </List>
            <Divider/>
            <List subheader={
                <ListSubheader component="h4" id="nested-list-subheader">
                    <Typography variant={'h4'} color={'text.primary'}>Play with</Typography>
                </ListSubheader>
            }>
                { SchemaPLayCheckboxes.map(({id, title, subtitle, ariaLabelledby}) =>
                    <ListItem key={id}>
                        <ListItemText id={id} primaryTypographyProps={{fontSize: '20px'}} primary={
                            <Box>
                                <Typography variant={'h5'} fontWeight={500}>{title}</Typography>
                                <Typography variant={'body1'} color={'text.secondary'}>{subtitle}</Typography>
                            </Box>
                        }/>
                        <Checkbox
                            edge="end"
                            inputProps={{'aria-labelledby': ariaLabelledby}}
                            onChange={handleToggleCheckbox(ariaLabelledby)}
                            checked={checked.indexOf(ariaLabelledby) !== -1}
                            size={'medium'}
                        />
                    </ListItem>
                )}
            </List>
            <Divider/>
            <List subheader={
                <ListSubheader component="h4" id="nested-list-subheader">
                    <Typography variant={'h4'} color={'text.primary'}>Type</Typography>
                </ListSubheader>
            }>
                { SchemaTypeCheckboxes.map(({id, title, ariaLabelledby}) =>
                    <ListItem key={id}>
                        <ListItemText id={id} primaryTypographyProps={{fontSize: '2rem'}} primary={title}/>
                        <Checkbox
                            edge="end"
                            inputProps={{'aria-labelledby': ariaLabelledby}}
                            onChange={handleToggleCheckbox(ariaLabelledby)}
                            checked={checked.indexOf(ariaLabelledby) !== -1}
                            size={'medium'}
                        />
                    </ListItem>
                )}
            </List>
            <Divider/>
            <List subheader={
                <ListSubheader component="h4" id="nested-list-subheader">
                    <Typography variant={'h4'} color={'text.primary'}>Features</Typography>
                </ListSubheader>
            }>
                { SchemaFeatureCheckboxes.map(({id, title, ariaLabelledby}) =>
                    <ListItem key={id}>
                        <ListItemText id={id} primaryTypographyProps={{fontSize: '20px'}} primary={title}/>
                        <Checkbox
                            edge="end"
                            inputProps={{'aria-labelledby': ariaLabelledby}}
                            onChange={handleToggleCheckbox(ariaLabelledby)}
                            checked={checked.indexOf(ariaLabelledby) !== -1}
                            size={'medium'}
                        />
                    </ListItem>
                )}
            </List>
            <Divider/>
            <List subheader={
                <ListSubheader component="h4" id="nested-list-subheader">
                    <Typography variant={'h4'} color={'text.primary'}>Size</Typography>
                </ListSubheader>
            }>
                { SchemaSizeCheckboxes.map(({id, title, ariaLabelledby}) =>
                    <ListItem key={id}>
                        <ListItemText id={id} primaryTypographyProps={{fontSize: '20px'}} primary={title}/>
                        <Checkbox
                            edge="end"
                            inputProps={{'aria-labelledby': ariaLabelledby}}
                            onChange={handleToggleCheckbox(ariaLabelledby)}
                            checked={checked.indexOf(ariaLabelledby) !== -1}
                            size={'medium'}
                        />
                    </ListItem>
                )}
            </List>
            <Divider/>
            <Box width='100%' px='18px' pt='20px' mt='auto' >
                <Fab variant="extended" size='large' color={'primary'} disableRipple sx={{ backgroundColor: 'text.primary', textTransform: 'inherit', width: '100%', fontSize: {lg: '2.6rem', xs: '2.4rem'}, fontWeight: 400, height: '54px' }}>
                    Apply filters
                </Fab>
            </Box>
        </FormGroup>
    )
}
