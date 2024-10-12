import { Box, Container, Grid2, Stack, Typography } from "@mui/material"
import { Banner } from "./banner"
import { products } from "../../data/product-data"
import { ProductCard } from "../../components/ui/item-card/product-card"
import { Link } from "react-router-dom"
import { LinkBtn } from "../../style/style"
import { Card } from "../../components/ui/skidka-card/card"
import { data2 } from "../../data/skidka-data"

export const Home = () => {
    return (
        <>
            <Banner />
            <Box pt={'100px'} pb={'100px'}>
                <Container maxWidth={"xs"}>
                    <Stack direction={'row'} gap={"32px"} alignItems={"center"}>
                        <Typography mb={"29px"} variant={"h2"}>
                            Новинки
                        </Typography>
                        <LinkBtn>
                            Все новинки
                        </LinkBtn>
                    </Stack>
                    <Grid2 container spacing={"40px"}>
                        {products.map((item) => (
                            <Grid2 size={3} key={item.id}>
                                <ProductCard {...item} />
                            </Grid2>
                        ))}
                    </Grid2>
                </Container>
            </Box>
            <Box  pb={'100px'}>
                <Container maxWidth={"xs"}>
                    <Stack direction={'row'} gap={"32px"} alignItems={"center"}>
                        <Typography mb={"29px"} variant={"h2"}>
                            Скидки
                        </Typography>
                        <LinkBtn>
                            Все скидки
                        </LinkBtn>
                    </Stack>
                    <Grid2 container spacing={"40px"}>
                        {data2.map((item) => (
                            <Grid2 size={3} key={item.id}>
                                <Card {...item} />
                            </Grid2>
                        ))}
                    </Grid2>
                </Container>
            </Box>
        </>
    )
}