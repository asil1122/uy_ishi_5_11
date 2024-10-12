import { Box, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import { Search } from './components/header-left'
import { HeaderButton } from './components/header-right'
import { theme } from '../../config/mui-config'
import { links } from './header-data'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <>
        <Container maxWidth="xs">
            <Stack py={'31px'} direction={'row'} alignItems={'center'} gap={'61px'}>
                <Search />
                <HeaderButton />
            </Stack>
        </Container>
        <Box bgcolor={theme.palette.grey.main}>
            <Container maxWidth="xs">
                <Stack direction={'row'} justifyContent={'space-between'} py={'30px'}>
                    {links.map((link) => (
                        <Link style={{ textDecoration: 'none' }} key={link.id} to={link.path}>
                            <Typography variant='body1'>{link.name}</Typography>
                        </Link>
                    ))}
                </Stack>
            </Container>
        </Box>
    </>
)
}
