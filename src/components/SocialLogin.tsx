import {Box, Button, Divider, HStack, Text, VStack} from "@chakra-ui/react";
import {FaComment, FaGithub} from "react-icons/fa";

export default function SocialLogin(){

    const kakaoParams = {
        client_id : "fcc696f712982887c4bfd776d82dbb0c",
        redirect_uri : "http://127.0.0.1:3000/social/kakao",
        response_type : "code"
    }

    const params = new URLSearchParams(kakaoParams).toString();

    console.log(params)

    return (
        <Box>
            <HStack my={2}>
                <Divider />
                <Text textTransform={"uppercase"} color={"gray.500"} fontSize={"xs"} as={"b"}>OR</Text>
                <Divider />
            </HStack>
            <VStack>
                <Button
                    as={"a"}
                    href={"https://github.com/login/oauth/authorize?client_id=7a2d6e687ddb017273ff&scope=read:user,user:email"}
                    w={"100%"}
                    leftIcon={<FaGithub />}
                >
                    Continue with Github
                </Button>
                <Button
                    as={"a"}
                    href={`https://kauth.kakao.com/oauth/authorize?${params}`}
                    w={"100%"}
                    leftIcon={<FaComment />}
                    colorScheme={"yellow"}
                >
                    Continue with Kakaotalk
                </Button>
            </VStack>
        </Box>
    )
}