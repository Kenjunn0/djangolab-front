import {Box, Button, Grid, HStack, Image, Text, useColorModeValue, VStack} from "@chakra-ui/react";
import {FaRegHeart, FaStar} from "react-icons/fa";

export default function Room() {

    const textColor = useColorModeValue("gray.600", "white.600");

    return (
        <VStack spacing={-1} alignItems={"flex-start"}>
            <Box position={"relative"} overflow={"hidden"} mb={2} rounded={"3xl"}>
                <Image minH={"150px"} src="https://a0.muscache.com/im/pictures/4a74a8b3-3efe-48c8-a86e-aad7f1a49d0f.jpg?im_w=720" />
                <Button variant={"unstyled"} position={"absolute"} top={2} right={0} color="white">
                    <FaRegHeart size={"15px"} />
                </Button>
            </Box>
            <Grid templateColumns={"4fr  1fr"} gap={2}>
                <Text as={"b"} px={1} noOfLines={1} fontSize={"sm"}>Songak-myeon, Asan-si, ChongCheongNam-do : Korean's House</Text>
                <HStack spacing={1}>
                    <FaStar size={12} />
                    <Text fontSize={14}>4.72</Text>
                </HStack>
            </Grid>
            <Text px={1} fontSize={"sm"} color={textColor}>Asan, S. Korea</Text>
            <Text px={1} fontSize={"sm"} color={textColor}>
                <Text as={"b"}>$72</Text> / night
            </Text>
        </VStack>
    )
}