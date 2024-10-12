import React from 'react'
import logo from "../../../../assets/logo.svg"
import { IconButton, Stack, Typography } from '@mui/material'
import { Logo } from '../style';
import { LocationIcon } from '../../../../assets/icons/location-icon';
import { SearchInput } from '../../../../components/ui/search-input/search-input';


export const Search = () => {
    const change = (e) => {
        console.log(e.target.value);  
    };
  
return (
    <Stack direction={"row"} gap={'60px'} flexGrow={1}>
        <Logo>
            <img style={{verticalAlign: 'bottom'}} src={logo} alt="logo" />
        </Logo>
        <Stack direction={"row"} gap={'8px'} alignItems={"center"}>
            <IconButton>
                <LocationIcon />
            </IconButton>
            <Typography variant='body1'>Алматы</Typography>
        </Stack>
        <SearchInput onChange={change}/>
    </Stack>
)
}
