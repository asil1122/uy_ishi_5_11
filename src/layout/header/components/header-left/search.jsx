import React from 'react'
import logo from "../../../../assets/logo.svg"
import { theme } from '../../../../config/mui-config';
import { Box, Drawer, IconButton, Stack, Typography, useMediaQuery } from '@mui/material'
import { Logo } from '../style';
import { LocationIcon } from '../../../../assets/icons/location-icon';
import { SearchInput } from '../../../../components/ui/search-input/search-input';
import { useToggle } from '../../../../hooks/useToggle';
import { BurgerMenu } from '../../../../assets/icons/burger-menu';
import logoMb from "../../../../assets/logo-mb.svg"
import { SearchMobileInput } from '../../../../components/ui/search-input/serch-mb';

export const Search = () => {
    const md = useMediaQuery(`(min-width: ${theme.breakpoints.values.md}px)`)
    const { close, isOpen, open } = useToggle()
    const change = (e) => {
        console.log(e.target.value);
    };

    return (
        <Stack direction={"row"} gap={{ xs: '33px', md: '60px' }} alignItems={"center"} flexGrow={1}>
            <Stack gap={'16px'} alignItems={"center"} direction={'row'}>
                <IconButton onClick={open} sx={{ display: { xs: "block", md: 'none' } }}>
                    <BurgerMenu />
                </IconButton>
                <Logo to={'/'}>
                    {md ? (
                        <img style={{ verticalAlign: 'bottom' }} src={logo} alt="logo" />
                    ) : (
                        <img style={{ verticalAlign: 'bottom' }} src={logoMb} alt="logo" />
                    )}
                </Logo>
            </Stack>
            <Stack display={{ xs: 'none', md: 'flex' }} direction={"row"} gap={'8px'} alignItems={"center"}>
                <IconButton>
                    <LocationIcon />
                </IconButton>
                <Typography variant='body1'>Алматы</Typography>
            </Stack>
            {md ? (
                <SearchInput onChange={change} />
            ): (
                <SearchMobileInput onChange={change} />
            )}
            <Drawer open={isOpen} anchor='left' onClose={close}>
                <Box bgcolor={'white'} p={'30px'} height={'100vh'} width={'100vw'}>
                    <IconButton onClick={close}>
                        X
                    </IconButton>
                </Box>
            </Drawer>
        </Stack>
    )
}
