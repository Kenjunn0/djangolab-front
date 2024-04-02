import {
    Box, Button, Input,
    InputGroup, InputLeftElement, Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent, ModalFooter,
    ModalHeader,
    ModalOverlay,
    VStack
} from "@chakra-ui/react";
import {FaLock, FaUserAlt} from "react-icons/fa";
import SocialLogin from "./SocialLogin";


interface LoginModalProps {
    isOpen: boolean
    onClose: () => void
}
export default function LoginModal({ isOpen, onClose } : LoginModalProps) {



    return (
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
                    <Button mt={5} w={"full"} colorScheme={"red"}>Login</Button>
                    <SocialLogin />
                </ModalBody>
                <ModalFooter></ModalFooter>
            </ModalContent>
        </Modal>
    )
}