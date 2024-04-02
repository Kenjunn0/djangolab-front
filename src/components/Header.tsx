import {Box, Button, HStack, IconButton, LightMode, useColorMode, useColorModeValue} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import {FaAirbnb} from "react-icons/fa6";
import {FaMoon} from "react-icons/fa";
import { IoSunnySharp } from "react-icons/io5";


interface HeaderProps {
    onLoginOpen : () => void
    onSignUpOpen : () => void
}

export default function Header( { onLoginOpen, onSignUpOpen } : HeaderProps ) {

    const { colorMode, toggleColorMode } = useColorMode()
    const logoColor = useColorModeValue("red.500", "red.200")
    const Icon = useColorModeValue(FaMoon, IoSunnySharp)

    return (
        <HStack py={5} px={10} spacing={"2.5px"} justifyContent={"space-between"} borderBottomWidth={1} >
            <Box color={logoColor}>
                <Link to={"/"}>
                    <FaAirbnb size={"48"} />
                </Link>
            </Box>
            <HStack spacing={2}>
                <IconButton
                    onClick={toggleColorMode}
                    aria-label={"Toggle dark mode"}
                    icon={<Icon />}
                    variant={"ghost"}
                />
                <Button onClick={onLoginOpen}>Log in</Button>
                <LightMode>
                    <Button onClick={onSignUpOpen} colorScheme={"red"}>Sign up</Button>
                </LightMode>
            </HStack>
        </HStack>
    )
}