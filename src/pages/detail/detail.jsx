import React from 'react'
import { useParams } from 'react-router-dom'
import { data2 } from '../../data/skidka-data'
import { products } from '../../data/product-data'
import { Box, Button, Container, Rating, Stack, Typography } from '@mui/material'
import { theme } from '../../config/mui-config'
import img1 from '../../assets/item1.png'
import img2 from '../../assets/item2.png'
import img3 from '../../assets/item3.png'
import { SecondaryButton } from '../../components/ui/secondary-button/style'
import { colors } from '../../config/colors'
import { LikeBtn } from '../../style/style'
import { HeartIcon } from '../../assets/icons/heart-icon'
import { WatsapIcon } from '../../assets/icons/watsap-icon'

export const Detail = () => {
    const { id } = useParams()
    const item = products.find((item) => item.id == id);
    return (
        <Container sx={{ pt: '40px' }} maxWidth="xs">
            <Stack pb={"20px"} borderBottom={1} borderColor={theme.palette.primary.main}>
                <Typography mb={'11px'} fontWeight={400} variant='h2'>{item.title}</Typography>
                <Rating value={item.raiting} />
            </Stack>
            <Stack direction={'row'} gap={'40px'} mt={'24px'}>
                <Stack maxWidth={'180px'}>
                    <Stack mb={'40px'}>
                        <img src={img1} alt="" />
                    </Stack>
                    <Stack mb={'40px'}>
                        <img src={img2} alt="" />
                    </Stack>
                    <Stack mb={'40px'}>
                        <img src={img3} alt="" />
                    </Stack>
                </Stack>
                <Stack flexGrow={1} height={'626px'} maxWidth={'620px'}>
                    <img height={'100%'} src={item.img} alt="" />
                </Stack>
                <Stack>
                    <Stack direction={'row'} gap={'50px'}>
                        <Stack>
                            <Typography variant='body2'>Цена:</Typography>
                            <Typography mb={'24px'} fontWeight={400} variant='h2'>{item.price}T</Typography>
                            <Typography mb={'16px'} variant='body2'>Размер: {item.size}cm</Typography>
                            <Typography color={theme.palette.primary.main} variant='body2'>Перейти к описанию</Typography>
                        </Stack>
                        <Stack>
                            <Typography variant='body2'>В рассрочку</Typography>
                            <Typography mb={'24px'} color={theme.palette.primary.main} fontWeight={400} variant='h2'>{item.instalment.price}T</Typography>
                            <Typography mb={'16px'} variant='body2'>Количество: 1</Typography>
                            <Typography color={theme.palette.primary.main} variant='body2'>Подробнее о рассрочке</Typography>
                        </Stack>
                    </Stack>
                    <Stack mt={'32px'} direction={'row'} gap={'40px'}>
                        <SecondaryButton fullWidth>
                            <Typography fontWeight={700} color={colors.btnbg} variant='body1'>В корзину</Typography>
                        </SecondaryButton>
                        <LikeBtn>
                            <HeartIcon />
                        </LikeBtn>
                    </Stack>
                    <Stack mt={'32px'} boxShadow={2} p={'20px'}>
                        <Typography mb={'20px'} variant='body2'>Возврат в течение 14 дней</Typography>
                        <Typography mb={'20px'} variant='body2'>Среднее время доставки 2.5 дня</Typography>
                        <Typography variant='body2'>Подробнее</Typography>
                    </Stack>
                    <Box mt={'32px'}>
                        <Typography mb={'16px'} maxWidth={'334px'} variant='body2'>Нужна помощь с выбором? Просто напишите нам
                            в WhatsApp и мы обязательно вам поможем!</Typography>
                        <Button sx={{py: '13px', px: '87px'}} maxWidth={'290px'} variant='contained' startIcon={<WatsapIcon/>}>
                            <Typography color={colors.btnbg} fontWeight={700} variant='body1'>Написать</Typography>
                        </Button>
                    </Box>
                </Stack>
            </Stack>
        </Container>
    )
}
