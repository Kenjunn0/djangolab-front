import {Outlet} from "react-router-dom";
import {
    Box,
    useDisclosure
} from "@chakra-ui/react";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import LoginModal from "./LoginModal";
import Header from "./Header";
import SignUpModal from "./SignUpModal";


export default function Root(){

    const { isOpen: isLoginOpen, onOpen: onLoginOpen, onClose: onLoginClose } = useDisclosure();
    const { isOpen: isSignUpOpen, onOpen: onSignUpOpen, onClose: onSignUpClose } = useDisclosure();

    return (
        <Box>
            <Header onLoginOpen={onLoginOpen} onSignUpOpen={onSignUpOpen} />
            <LoginModal isOpen={isLoginOpen} onClose={onLoginClose} />
            <SignUpModal isOpen={isSignUpOpen} onClose={onSignUpClose} />
            <Outlet />
            <ReactQueryDevtools />
        </Box>
    );
}