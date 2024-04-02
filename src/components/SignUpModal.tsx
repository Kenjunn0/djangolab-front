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
import {FaEnvelope, FaLock, FaSignature, FaUserAlt} from "react-icons/fa";
import SocialLogin from "./SocialLogin";


interface SignUpModallProps {
    isOpen: boolean
    onClose: () => void
}
export default function SignUpModal({ isOpen, onClose } : SignUpModallProps) {

    return (
        <Modal motionPreset="slideInBottom" isOpen={isOpen} onClose={onClose} >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>LogIn</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <VStack spacing={2} >
                        <InputGroup>
                            <InputLeftElement children={ <Box color={"gray.500"}> <FaSignature /> </Box> } />
                            <Input placeholder={"name"} variant={"filled"} />
                        </InputGroup>
                        <InputGroup>
                            <InputLeftElement children={ <Box color={"gray.500"}> <FaEnvelope /> </Box> } />
                            <Input placeholder={"e-mail"} variant={"filled"} />
                        </InputGroup>
                        <InputGroup>
                            <InputLeftElement children={ <Box color={"gray.500"}> <FaUserAlt /> </Box> } />
                            <Input placeholder={"username"} variant={"filled"} />
                        </InputGroup>
                        <InputGroup>
                            <InputLeftElement children={ <Box color={"gray.500"}> <FaLock /> </Box> } />
                            <Input placeholder={"password"} variant={"filled"} />
                        </InputGroup>
                    </VStack>
                    <Button mt={5} w={"full"} colorScheme={"red"}>Sign Up</Button>
                    <SocialLogin />
                </ModalBody>
                <ModalFooter></ModalFooter>
            </ModalContent>
        </Modal>
    )
}