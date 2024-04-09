import {
    Avatar,
    Box,
    Button,
    HStack,
    IconButton,
    LightMode, Menu, MenuButton, MenuItem, MenuList,
    Stack,
    useColorMode,
    useColorModeValue, useToast
} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import {FaAirbnb} from "react-icons/fa6";
import {FaMoon} from "react-icons/fa";
import { IoSunnySharp } from "react-icons/io5";
import useUser from "../lib/useUser";
import {logOut} from "../api";
import {useQueryClient} from "@tanstack/react-query";


interface HeaderProps {
    onLoginOpen : () => void
    onSignUpOpen : () => void
}

export default function Header( { onLoginOpen, onSignUpOpen } : HeaderProps ) {

    const {userLoading, user, isLoggedIn} = useUser();
    const toast = useToast();
    const queryClient = useQueryClient();

    const { colorMode, toggleColorMode } = useColorMode()
    const logoColor = useColorModeValue("red.500", "red.200")
    const Icon = useColorModeValue(FaMoon, IoSunnySharp)

    const onLogOut = async () => {
        const toastId = toast({
            title: "Good bye",
            description: "see you later",
            status: "loading",
            position: "bottom-right"
        })
        const data = await logOut();
        queryClient.refetchQueries({queryKey: ["me"]});
        toast.update(toastId, {
            title: "Good bye",
            description: "see you later",
            status: "success"
        })
    }

    return (
        <Stack
            py={5}
            px={10}
            spacing={{ sm: 2.5, md: 0}}
            direction={{ sm : "column", md: "row"}}
            justifyContent={"space-between"}
            alignItems={"center"}
            borderBottomWidth={1}
        >
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
                {!userLoading ? (
                    !isLoggedIn ?
                        <>
                            <Button onClick={onLoginOpen}>Log in</Button>
                            <LightMode>
                                <Button onClick={onSignUpOpen} colorScheme={"red"}>Sign up</Button>
                            </LightMode>
                        </>
                        :
                        <Menu>
                            <MenuButton>
                                <Avatar name={user?.name} src={user?.profile_photo} size={"md"} />
                            </MenuButton>
                            <MenuList>
                                <MenuItem onClick={onLogOut}>Log Out</MenuItem>
                            </MenuList>
                        </Menu>
                ) : null
                }
            </HStack>
        </Stack>
    )
}