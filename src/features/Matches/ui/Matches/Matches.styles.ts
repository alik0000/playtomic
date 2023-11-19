import {
    styled,
    Tab, TabProps,
    Box, BoxProps,
    Grid, GridProps,
    Stack, StackProps,
    Fab, FabProps,
    AppBar, AppBarProps,
    Accordion, AccordionProps,
} from "@mui/material";
import { TabList, TabListProps } from "@mui/lab";

const StyledMatches = styled(Box)<BoxProps>(({theme}) => ({
    marginTop: '3.2rem',
    ...theme.typography.h4
}))
const StyledTabListWrap = styled(Box)<BoxProps>(({theme}) => ({
    top: 0,
    zIndex: 11,
    marginRight: 'auto',
    marginLeft: 'auto',

    [theme.breakpoints.up('xs')]: {
        width: '100%',
        position: 'fixed',
        backgroundColor: theme.palette.background.paper,
    },
    [theme.breakpoints.up('lg')]: {
        width: 'fit-content',
        position: 'static',
        backgroundColor: 'transparent',
    },
}))
const StyledTabList = styled(TabList)<TabListProps>(({theme}) => ({
    'span.MuiTabs-indicator': {
        backgroundColor: theme.palette.text.primary
    }
}))
const StyledTab = styled(Tab)<TabProps>(({theme}) => ({
    color: theme.palette.text.secondary,
    paddingLeft: '6.4rem',
    paddingRight: '6.4rem',
    borderBottom: '3px',
    borderStyle: 'solid',
    flexGrow: 1,
    maxWidth: '100%',
    whiteSpace: "nowrap",
    borderColor: theme.palette.text.disabled,
    textTransform: 'inherit',
    ...theme.typography.h3,
    fontWeight: theme.typography.fontWeightMedium,

    '&.Mui-selected': {
        color: theme.palette.text.primary,

        'span': {
            color: theme.palette.text.primary
        }
    },

    'span': {
        color: 'currentColor'
    }
}))

const StyledFilterTagsWrap = styled(Grid)<GridProps>(({theme}) => ({
    top: '4.8rem',
    zIndex: 10,
    flexWrap: 'nowrap',

    [theme.breakpoints.up('xs')]: {
        position: 'fixed',
        backgroundColor: theme.palette.background.paper,
    },
    [theme.breakpoints.up('lg')]: {
        position: 'static',
        backgroundColor: 'transparent',
    },

    '&.MuiGrid-item': {
        width: '100%',
        paddingBottom: '1.8rem'
    },
}))

const StyledFilterTagsItems = styled(Stack)<StackProps>(({theme}) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 'fit-content',
    columnGap: '1.2rem',
    overflowX: 'auto',

    [theme.breakpoints.up('xs')]: {
        justifyContent: 'flex-start',
        maxWidth: 'calc(100% + 3.8rem)',
        paddingLeft: '1.8rem',
        paddingRight: '1.8rem',
        marginLeft: '-1.8rem',
    },
    [theme.breakpoints.up('lg')]: {
        justifyContent: 'center',
        maxWidth: '100%',
        paddingLeft: 0,
        paddingRight: 0,
        marginLeft: 0,
    },
}))

const StyledFilterFabButton = styled(Fab)<FabProps>(({theme}) => ({
    width: 'fit-content',
    minWidth: 'auto',
    height: 'auto',
    columnGap: '1rem',
    padding: '0.6rem 2.2rem',
    whiteSpace: 'nowrap',
    boxShadow: 'none',
    backgroundColor: theme.palette.text.primary,
}))

const StyledSidebar = styled(AppBar)<AppBarProps>(({theme}) => ({
    position: 'sticky',
    height: 'calc(100vh - 10rem)',
    top: '9rem',
    paddingTop: '2.4rem',
    paddingBottom: '2.4rem',
    backgroundColor: theme.palette.background.paper,
    bottom: 0,
    borderRadius: '1.2rem',
    overflow: 'hidden',

    [theme.breakpoints.up('xs')]: {
        display: 'none'
    },
    [theme.breakpoints.up('lg')]: {
        display: 'block'
    }
}))

const StyledAccordion = styled(Accordion)<AccordionProps>(() => ({
    background: 'transparent',
    border: 'none',
    boxShadow: 'none',

    '&.Mui-expanded': {
        marginTop: 0
    },
    '&::before': {
        display: 'none !important'
    }
}))

export {
    StyledMatches,
    StyledTabList,
    StyledTabListWrap,
    StyledTab,
    StyledFilterTagsWrap,
    StyledFilterTagsItems,
    StyledFilterFabButton,
    StyledSidebar,
    StyledAccordion
}

