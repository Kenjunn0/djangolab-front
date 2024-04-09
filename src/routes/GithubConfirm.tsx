import {Heading, Spinner, Text, VStack} from "@chakra-ui/react";
import {useLocation} from "react-router-dom";
import {useEffect} from "react";
import {githubLogin} from "../api";

export default function GithubConfirm() {

    const { search } = useLocation();

    const confirmLogin = async () => {
        const params = new URLSearchParams(search);
        const code = params.get("code");
        if(code) await githubLogin(code);
    }

    useEffect(() => {
        confirmLogin();
    }, [])

    return (
        <VStack bg="gray.100" justifyContent={"center"} minH={"100vh"}>
            <Heading>Processing log in...</Heading>
            <Text>Don't go anywhere. </Text>
            <Spinner size={"lg"} />
        </VStack>
    )
}