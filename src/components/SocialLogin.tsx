import {Box, Button, Divider, HStack, Text, VStack} from "@chakra-ui/react";
import {FaComment, FaGithub} from "react-icons/fa";

export default function SocialLogin(){
    return (
        <Box>
            <HStack my={2}>
                <Divider />
                <Text textTransform={"uppercase"} color={"gray.500"} fontSize={"xs"} as={"b"}>OR</Text>
                <Divider />
            </HStack>
            <VStack>
                <Button w={"100%"} leftIcon={<FaGithub />} colorScheme={"telegram"}>Continue with Github</Button>
                <Button w={"100%"} leftIcon={<FaComment />} colorScheme={"yellow"}>Continue with Kakaotalk</Button>
            </VStack>
        </Box>
    )
}