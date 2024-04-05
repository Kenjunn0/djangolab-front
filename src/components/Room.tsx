import {Box, Button, Grid, HStack, Image, Text, useColorModeValue, VStack} from "@chakra-ui/react";
import {FaRegHeart, FaStar} from "react-icons/fa";
import {Link} from "react-router-dom";

interface IRoomProps {
    pk: number;
    imageURL : string;
    name : string;
    rating : number;
    city : string;
    country : string;
    price : number;
}

export default function Room({pk, imageURL, name, rating, city, country, price} : IRoomProps) {

    const textColor = useColorModeValue("gray.600", "white.600");

    return (
        <Link to={`rooms/${pk}`} >
            <VStack spacing={-1} alignItems={"flex-start"}>
                <Box position={"relative"} overflow={"hidden"} mb={2} rounded={"3xl"}>
                    <Image minH={"150px"} src={imageURL} />
                    <Button variant={"unstyled"} position={"absolute"} top={2} right={0} color="white">
                        <FaRegHeart size={"15px"} />
                    </Button>
                </Box>
                <Grid templateColumns={"4fr  1fr"} gap={2}>
                    <Text as={"b"} px={1} noOfLines={1} fontSize={"sm"}>{name}</Text>
                    <HStack spacing={1}>
                        <FaStar size={12} />
                        <Text fontSize={14}>{rating}</Text>
                    </HStack>
                </Grid>
                <Text px={1} fontSize={"sm"} color={textColor}>{city}, {country}</Text>
                <Text px={1} fontSize={"sm"} color={textColor}>
                    <Text as={"b"}>{price}</Text> / night
                </Text>
            </VStack>
        </Link>
    )
}