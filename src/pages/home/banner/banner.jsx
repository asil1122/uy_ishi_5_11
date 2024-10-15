import { Box, Container, Stack } from "@mui/material"
import { theme } from "../../../config/mui-config"
import { Title } from "./style"
import { SecondaryButton } from "../../../components/ui/secondary-button/secondary-button"
import banner from "../../../assets/banner.png"

export const Banner = () => {
    return (
        <Box py={{xs: '22px', md: '97px'}} bgcolor={theme.palette.primary.main}>
            <Container maxWidth={"xs"}>
                <Stack direction={{xs: "column", md: "row"}} justifyContent={'space-between'}>
                    <Box textAlign={{xs: 'center' , md: 'left'}}>
                        <Title>Новая коллекция ковров Venetta</Title>
                        <SecondaryButton sx={{display: {xs: 'none', md: 'inline-block'}}}>Смотреть все</SecondaryButton>
                    </Box>
                    <Stack gap={'20px'} direction={"row"}>
                        <Box mx={{xs: 'auto', md: 0}}>
                            <img width={'100%'} src={banner} alt="banner" />
                        </Box>
                        <Box display={{xs: 'none', md: 'block'}} >
                            <img width={'100%'} src={banner} alt="banner" />
                        </Box>
                    </Stack>
                    <SecondaryButton  sx={{display: {xs: 'inline-block', md: 'none'}, marginTop: '46px'}}>Смотреть все</SecondaryButton>              
                </Stack>
            </Container>
        </Box>
    )
}