import { Stack } from '@mui/material'
import React from 'react'
import { CustomIconButton } from '../style'
import { UserIcon } from '../../../../assets/icons/user-icon'


export const HeaderButton = () => {
  return (
    <Stack direction={"row"} gap={'20px'}>
        <CustomIconButton>
            <UserIcon />
        </CustomIconButton>
        <CustomIconButton>
            <UserIcon />
        </CustomIconButton>
        <CustomIconButton>
            <UserIcon />
        </CustomIconButton>
    </Stack>
)
}
