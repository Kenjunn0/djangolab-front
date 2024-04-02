import {Link, Outlet} from "react-router-dom";
import {
    HStack,
    Box,
    Button,
    IconButton,
    Modal,
    useDisclosure,
    ModalOverlay,
    ModalContent,
    ModalHeader, ModalCloseButton, ModalBody, Input, VStack, InputGroup, InputLeftElement, ModalFooter
} from "@chakra-ui/react";
import {FaAirbnb} from "react-icons/fa6";
import {FaLock, FaMoon, FaUserAlt} from "react-icons/fa";


export default function Root(){

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box>
            <HStack py={5} px={10} spacing={"2.5px"} justifyContent={"space-between"} borderBottomWidth={1} >
                <Box color={"red.500"}>
                    <Link to={"/"}>
                        <FaAirbnb size={"48"} />
                    </Link>
                </Box>
                <HStack spacing={2}>
                    <IconButton aria-label={"Toggle dark mode"} icon={<FaMoon />} variant={"ghost"} />
                    <Button onClick={onOpen}>Log in</Button>
                    <Button colorScheme={"red"}>Sign up</Button>
                </HStack>
                <Modal motionPreset="slideInBottom" isOpen={isOpen} onClose={onClose} >
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>LogIn</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <VStack spacing={2} >
                                <InputGroup>
                                    <InputLeftElement children={ <Box color={"gray.500"}> <FaUserAlt /> </Box> } />
                                    <Input placeholder={"username"} variant={"filled"} />
                                </InputGroup>
                                <InputGroup>
                                    <InputLeftElement children={ <Box color={"gray.500"}> <FaLock /> </Box> } />
                                    <Input placeholder={"password"} variant={"filled"} />
                                </InputGroup>
                            </VStack>
                        </ModalBody>
                        <ModalFooter>
                                <Button w={"full"} colorScheme={"red"}>Login</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </HStack>
            <Outlet />
        </Box>
    );
}