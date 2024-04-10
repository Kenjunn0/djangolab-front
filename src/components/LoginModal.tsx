import {
    Box, Button, Input,
    InputGroup, InputLeftElement, Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent, ModalFooter,
    ModalHeader,
    ModalOverlay, Text,
    VStack
} from "@chakra-ui/react";
import {FaLock, FaUserAlt} from "react-icons/fa";
import SocialLogin from "./SocialLogin";
import {useForm} from "react-hook-form";


interface LoginModalProps {
    isOpen: boolean
    onClose: () => void
}

interface IForm {
    username : string
    password : string
}

export default function LoginModal({ isOpen, onClose } : LoginModalProps) {

    const { register, handleSubmit, formState : { errors } } = useForm<IForm>();

    const onSubmit = (data : IForm) => {
        console.log(errors)
    }

    return (
        <Modal motionPreset="slideInBottom" isOpen={isOpen} onClose={onClose} >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>LogIn</ModalHeader>
                <ModalCloseButton />
                <ModalBody as={"form"} onSubmit={handleSubmit(onSubmit)}>
                    <VStack spacing={2} >
                        <InputGroup>
                            <InputLeftElement children={ <Box color={"gray.500"}> <FaUserAlt /> </Box> } />
                            <Input isInvalid={Boolean(errors.username?.message)} {...register("username", { required : "write a username"})} placeholder={"username"} variant={"filled"} />
                            <Text fontSize={"sm"} textColor={"red.500"}>{errors.username?.message}</Text>
                        </InputGroup>
                        <InputGroup>
                            <InputLeftElement children={ <Box color={"gray.500"}> <FaLock /> </Box> } />
                            <Input isInvalid={Boolean(errors.username?.message)} {...register("password", { required : "write a password"})} type={"password"} placeholder={"password"} variant={"filled"} />
                            <Text fontSize={"sm"} textColor={"red.500"}>{errors.password?.message}</Text>
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