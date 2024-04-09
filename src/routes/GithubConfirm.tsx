import {Heading, Spinner, Text, useToast, VStack} from "@chakra-ui/react";
import {useLocation, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {githubLogin} from "../api";
import {useQueryClient} from "@tanstack/react-query";

export default function GithubConfirm() {

    const { search } = useLocation();
    const toast = useToast();
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const confirmLogin = async () => {
        const params = new URLSearchParams(search);
        const code = params.get("code");
        if(code) {
            const status = await githubLogin(code);
            if (status === 200) {
                toast({
                    status: "success",
                    title: "welcome",
                    description: "happy to have you back!",
                    position: "bottom-right"
                })
                queryClient.refetchQueries({
                    queryKey: ["me"]
                })
                navigate("/")
            }
        }
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