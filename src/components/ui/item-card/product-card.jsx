import { Box, IconButton, Rating, Stack, Typography } from "@mui/material"
import { CardWrapper, NewCardBadge } from "../../../style/style.js"
import { HeartIcon } from "../../../assets/icons/heart-icon"

export const ProductCard = ({
    id,
    img,
    title,
    size,
    location,
    raiting,
    price,
    instalment,
    newProduct  
}) => {
    return (
        <CardWrapper>
            <Stack mb={'20px'} direction={"row"} alignItems={'center'} justifyContent={'space-between'}>
                <div>{newProduct && <NewCardBadge>Новинка</NewCardBadge>}</div>
                <IconButton>
                    <HeartIcon />
                </IconButton>
            </Stack>
            <Box mb={'20px'} textAlign={'center'}>
                <img src={img} alt="img" />
            </Box>
            <Typography mb={'8px'} fontWeight={500} variant="body1">
                {title}
            </Typography>
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
                <Typography mb={'8px'} lineHeight={'180%'} fontSize={'14px'} fontWeight={400} variant="body2">Цена</Typography>
                <Typography variant="body1">{price}T</Typography>
            </Stack>
        </CardWrapper>          
    )
}