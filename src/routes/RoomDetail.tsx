import {useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import {getRoom, getRoomReviews} from "../api";
import {IReviews, IRoomDetail} from "../types";
import {
    Avatar,
    Box,
    Container,
    Divider,
    Grid,
    GridItem,
    Heading,
    HStack,
    Image,
    Skeleton,
    Text,
    VStack
} from "@chakra-ui/react";
import {FaStar} from "react-icons/fa";
import Header from "../components/Header";


export default function RoomDetail() {
    const {roomPk} = useParams();
    const {isLoading : isRoomLoading, data : roomData} = useQuery<IRoomDetail>({
        queryKey: [`rooms`, roomPk],
        queryFn: getRoom
    })
    const {isLoading : isReviewsLoading, data : reviewsData} = useQuery<IReviews[]>({
        queryKey: [`room`, roomPk, `reviews`],
        queryFn: getRoomReviews
    })

    return(
        <Box
            my={10}
            mx={{
                base: 10,
                md: 20,
                lg: 30
            }}
        >
            <Skeleton height={"40px"} width={"50%"} isLoaded={!isRoomLoading}>
                <Heading>{roomData?.name}</Heading>
            </Skeleton>
            {roomData?.photos && roomData?.photos.length > 0 ? (
                <Grid templateColumns={"repeat(4, 1fr)"} templateRows={"1fr 1fr"} height={"60vh"} gap={3} mt={10} rounded={20} overflow={"hidden"}>
                    {[0, 1, 2, 3, 4].map((index) => (
                        <GridItem
                            colSpan={index === 0 ? 2 : 1}
                            rowSpan={index === 0 ? 2 : 1}
                            overflow={"hidden"}
                            key={roomData?.photos[index].pk}
                        >
                            <Skeleton isLoaded={!isRoomLoading} h={"100%"} w={"100%"}>
                                <Image objectFit={"cover"} w={"100%"} h={"100%"} src={roomData?.photos[index].file} />
                            </Skeleton>
                        </GridItem>
                    ))}
                </Grid>
            ) : null
            }
            <HStack w={"40%"} mt={10} justifyContent={"space-between"}>
                <VStack alignItems={"flex-start"}>
                    <Skeleton isLoaded={!isRoomLoading} height={"30px"}>
                        <Heading fontSize={"xl"}>House Hosted by {roomData?.owner.name}</Heading>
                    </Skeleton>
                    <Skeleton isLoaded={!isRoomLoading} height={"30px"}>
                        <HStack w={"100%"} justifyContent={"flex-start"}>
                            <Text>{roomData?.toilets} Toilet{roomData?.toilets === 1 ? "" : "s"}</Text>
                            <Divider orientation={"vertical"} height={"30px"} />
                            <Text>{roomData?.rooms} Room{roomData?.rooms === 1 ? "" : "s"} </Text>
                        </HStack>
                    </Skeleton>
                </VStack>
                <Avatar size={"lg"} src={roomData?.owner.avatar} />
            </HStack>
            <Box mt={10}>
                <Heading fontSize={"xl"}>
                    <HStack>
                        <FaStar />
                        <Text>{roomData?.rating} · </Text>
                        <Text>{reviewsData?.length} Review{reviewsData?.length === 1 ? "" : "s"}</Text>
                    </HStack>
                </Heading>
                <Container marginX={"none"} maxW={"container.lg"}>
                <Grid mt={5} gap={5} templateColumns={"1fr 1fr"}>
                    {reviewsData?.map((review, index) => (
                        <VStack p={5} bg={"gray.100"} alignItems={"flex-start"} rounded={25} key={index}>
                            <HStack>
                                <Avatar name={review.user.name} src={review.user.avatar}/>
                                <VStack alignItems={"fl"}>
                                    <Heading fontSize={"md"}>{review.user.name}</Heading>
                                    <HStack spacing={1}>
                                        <FaStar size={"12px"} />
                                        <Text>{review.rating}</Text>
                                    </HStack>
                                </VStack>
                            </HStack>
                            <Text w={"100%"} p={2} bg={"gray.200"} rounded={15}>{review.payload}</Text>
                        </VStack>
                    ))}
                </Grid>
                </Container>
            </Box>
        </Box>
    )
}