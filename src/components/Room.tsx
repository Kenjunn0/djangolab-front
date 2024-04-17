import {Box, Button, Grid, HStack, Image, Text, useColorMode, useColorModeValue, VStack} from "@chakra-ui/react";
import {FaCamera, FaRegHeart, FaStar} from "react-icons/fa";
import {Link, useNavigate} from "react-router-dom";

interface IRoomProps {
    pk: number;
    isOwner: boolean;
    imageURL : string;
    name : string;
    rating : number;
    city : string;
    country : string;
    price : number;
}

export default function Room({pk, isOwner, imageURL, name, rating, city, country, price} : IRoomProps) {

    const textColor = useColorModeValue("gray.600", "white.600");
    const bgColor = useColorModeValue("gray.100", "gray.700");
    const navigate = useNavigate();


    const onCameraClick = (event : React.SyntheticEvent<HTMLButtonElement>) => {
        event.preventDefault();
        navigate(`/rooms/${pk}/photos`)
    }

    return (
        <Link to={`rooms/${pk}`} >
            <VStack spacing={-1} alignItems={"flex-start"}>
                <Box position={"relative"} overflow={"hidden"} mb={2} rounded={"3xl"}>
                    <Image bg={bgColor} minH={"180px"} minW={"250px"} src={imageURL} />
                    <Button variant={"unstyled"} position={"absolute"} top={2} right={0} onClick={onCameraClick} color="white">
                        {isOwner ? <FaCamera /> : <FaRegHeart size={"15px"} />}
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