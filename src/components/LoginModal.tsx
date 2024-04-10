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
import {ReactElement, useState} from "react";


interface LoginModalProps {
    isOpen: boolean
    onClose: () => void
}
export default function LoginModal({ isOpen, onClose } : LoginModalProps) {

    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");

    const onChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
        const { name, value } = event.currentTarget;
        if (name === "username") setUsername(value);
        if (name === "password") setPassword(value);
    };

    const onSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault();
    }

    return (
        <Modal motionPreset="slideInBottom" isOpen={isOpen} onClose={onClose} >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>LogIn</ModalHeader>
                <ModalCloseButton />
                <ModalBody as={"form"} onSubmit={onSubmit as any} >
                    <VStack spacing={2} >
                        <InputGroup>
                            <InputLeftElement children={ <Box color={"gray.500"}> <FaUserAlt /> </Box> } />
                            <Input required name={"username"} value={username} onChange={onChange} placeholder={"username"} variant={"filled"} />
                        </InputGroup>
                        <InputGroup>
                            <InputLeftElement children={ <Box color={"gray.500"}> <FaLock /> </Box> } />
                            <Input required name={"password"} value={password} onChange={onChange} type={"password"} placeholder={"password"} variant={"filled"} />
                        </InputGroup>
                    </VStack>
                    <Button mt={5} w={"full"} colorScheme={"red"} type={"submit"}>Login</Button>
                    <SocialLogin />
                </ModalBody>
                <ModalFooter></ModalFooter>
            </ModalContent>
        </Modal>
    )
}