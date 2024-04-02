import {Box, Button, HStack, IconButton} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import {FaAirbnb} from "react-icons/fa6";
import {FaMoon} from "react-icons/fa";

interface HeaderProps {
    onLoginOpen : () => void
    onSignUpOpen : () => void
}

export default function Header( { onLoginOpen, onSignUpOpen } : HeaderProps ) {
    return (
        <HStack py={5} px={10} spacing={"2.5px"} justifyContent={"space-between"} borderBottomWidth={1} >
            <Box color={"red.500"}>
                <Link to={"/"}>
                    <FaAirbnb size={"48"} />
                </Link>
            </Box>
            <HStack spacing={2}>
                <IconButton aria-label={"Toggle dark mode"} icon={<FaMoon />} variant={"ghost"} />
                <Button onClick={onLoginOpen}>Log in</Button>
                <Button onClick={onSignUpOpen} colorScheme={"red"}>Sign up</Button>
            </HStack>
        </HStack>
    )
}