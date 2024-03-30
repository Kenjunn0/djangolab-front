import {Button, Heading, Text, VStack} from "@chakra-ui/react";
import {useNavigate, Link} from "react-router-dom";

export default function NotFound(){

    const navigate = useNavigate()

    // function redirection(): void {navigate("/")}

    return (
        <VStack bg="gray.100" justifyContent={"center"} minH={"100vh"}>
            <Heading>Page Not Found.</Heading>
            <Text>It Seems That You're Lost.</Text>
            <Link to="/">
                <Button>Go Home &rarr;</Button>
            </Link>
        </VStack>
    );
}