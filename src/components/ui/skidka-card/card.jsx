import { Box, IconButton, Rating, Stack, Typography } from "@mui/material"
import { CardWrapper, NewCardBadge } from "../../../style/style.js"
import { HeartIcon } from "../../../assets/icons/heart-icon"
import styled from "@emotion/styled"
import { Link } from "react-router-dom"

const LinkBtn = styled(Link)`
    text-decoration: none;
`
export const Card = ({
    id,
    img,
    skidka,
    title,
    size,
    location,
    raiting,
    price,
    newP  
}) => {
    return (
        <CardWrapper>
            <Stack mb={'20px'} direction={"row"} alignItems={'center'} justifyContent={'space-between'}>
                <Stack>
                    <NewCardBadge>{skidka}</NewCardBadge>
                </Stack>
                <IconButton>
                    <HeartIcon />
                </IconButton>
            </Stack>
            <Box mb={'20px'} textAlign={'center'}>
                <img src={img} alt="img" />
            </Box>
            <LinkBtn to={`/detail/${id}`}>
                <Typography mb={'8px'} fontWeight={500} variant="body1">
                    {title}
                </Typography>
            </LinkBtn>
            <Typography mb={'8px'} variant="body2">
                Размер: {size}
            </Typography>
            <Typography mb={'8px'} variant="body2">
                Производитель: {location}
            </Typography>
            <Stack mb={'16px'} direction={"row"} alignItems={'center'} gap={'8px'}>
                <Rating value={raiting} precision={0.5}/>
            </Stack>
            <Stack>
                <Typography mb={'8px'} lineHeight={'180%'} fontSize={'14px'} fontWeight={400} variant="body2">Старая цена</Typography>
                <Typography variant="body1">{price}T</Typography>
            </Stack>
        </CardWrapper>          
    )
}