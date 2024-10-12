import { Box, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import { Li, Ul } from '../../style/style'
import { theme } from '../../config/mui-config'

export const Footer = () => {
  return (
    <Box py={'40px'} bgcolor={theme.palette.grey.main}>
        <Container maxWidth="xs">
            <Stack direction={'row'} gap={'64px'}>
                <Ul>
                    <Li>
                        <Typography mb={'24px'} fontSize={'18px'} variant='h2'>Каталог товаров</Typography>
                        <Typography variant='body2'>Ковры</Typography>
                    </Li>
                    <Li>
                        <Typography variant='body2'>Коврики</Typography>
                    </Li>
                    <Li>
                        <Typography variant='body2'>Дорожки</Typography>
                    </Li>
                    <Li>
                        <Typography variant='body2'>Для ванной</Typography>
                    </Li>
                    <Li>
                        <Typography variant='body2'>Особенные ковры</Typography>
                    </Li>
                </Ul>
                <Ul>
                    <Li>
                        <Typography mb={'24px'} fontSize={'18px'} variant='h2'>Личный кабинет</Typography>
                        <Typography variant='body2'>Ковры</Typography>
                    </Li>
                    <Li>
                        <Typography variant='body2'>Коврики</Typography>
                    </Li>
                    <Li>
                        <Typography variant='body2'>Дорожки</Typography>
                    </Li>
                </Ul>
                <Ul>
                    <Li>
                        <Typography mb={'24px'} fontSize={'18px'} variant='h2'>Центр поддержки</Typography>
                        <Typography variant='body2'>Ковры</Typography>
                    </Li>
                    <Li>
                        <Typography variant='body2'>Коврики</Typography>
                    </Li>
                    <Li>
                        <Typography variant='body2'>Дорожки</Typography>
                    </Li>
                </Ul>
                <Ul>
                    <Li>
                        <Typography mb={'24px'} fontSize={'18px'} variant='h2'>Помощь и контакты</Typography>
                        <Typography variant='body2'>+7 775 657 66 76</Typography>
                    </Li>
                    <Li>
                        <Typography variant='body2'>info@kilem.kz</Typography>
                    </Li>
                </Ul>
                <Ul>
                    <Li>
                        <Typography mb={'24px'} fontSize={'18px'} variant='h2'>Рассылка</Typography>
                    </Li>
                    <Li>
                        <Typography variant='body2'>Подпишитесь, чтобы всегда 
                        быть в курсе наших новый акций</Typography>
                    </Li>
                </Ul>
            </Stack>            
        </Container>
    </Box>
)
}
