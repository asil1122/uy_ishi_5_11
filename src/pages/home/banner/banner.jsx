import { Box, Container, Stack } from "@mui/material"
import { theme } from "../../../config/mui-config"
import { Title } from "./style"
import { SecondaryButton } from "../../../components/ui/secondary-button/secondary-button"
import banner from "../../../assets/banner.png"

export const Banner = () => {
    return (
        <Box py={'97px'} bgcolor={theme.palette.primary.main}>
            <Container maxWidth={"xs"}>
                <Stack direction={'row'} justifyContent={'space-between'}>
                    <Box>
                        <Title>Новая коллекция ковров Venetta</Title>
                        <SecondaryButton>Смотреть все</SecondaryButton>
                    </Box>
                    <Stack gap={'40px'} direction={"row"}>
                        <Box maxWidth={'303px'}>
                            <img src={banner} alt="banner" />
                        </Box>
                        <Box maxWidth={'303px'}>
                            <img src={banner} alt="banner" />
                        </Box>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    )
}