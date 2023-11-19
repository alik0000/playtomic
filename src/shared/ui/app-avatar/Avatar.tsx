import {Typography} from "@mui/material";
import Box from "@mui/material/Box";
import { Avatar as MuiAvatar } from "@mui/material";
import {FC, memo, useMemo} from "react";
import {AddOutlined} from "@mui/icons-material";
import { theme } from "../../styles";

const stringToColor = (string: string) => {
    let hash = 0;
    let i;

    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
    }

    return color;
}
const splitName = (name: string) => `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`
const stringAvatar = (name: string) => {
    return {
        backgroundColor: stringToColor(name)
    }
}

const styleOutlined =  {
    backgroundColor: theme.palette.primary.light,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: theme.palette.primary.main
}

export const AppAvatar:FC<Record<Partial<string>, string>> = memo((props) => {
    const {src, level, author} = props

    const style = useMemo(() => {
        const addStyle = !src && author
            ? stringAvatar(author || '')
            : !src && !author ? styleOutlined : ''

        return {
            height: '7.7rem',
            width: '7.7rem',
            ...addStyle,
        }
    }, [src, author])

    return (
        <Box textAlign='center'>
            <MuiAvatar src={src} sx={style}>
                {author && !src ? splitName(author) : <AddOutlined color={'primary'} fontSize={"large"}/>}
            </MuiAvatar>
            <Typography variant={'body1'}>{author ? splitName(author) : 'Available'}</Typography>
            {level && <Typography variant={'body2'} color={'text.disabled'}>{level}</Typography>}
        </Box>
    )
})
