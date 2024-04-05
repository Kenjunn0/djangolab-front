import {Box, Grid, Skeleton, SkeletonText} from "@chakra-ui/react";
import Room from "../components/Room";
import {useQuery} from "@tanstack/react-query";
import {getRooms} from "../api";


interface IPhotos {
    pk: number;
    file: string;
    description: string;
}

export interface IRoom {
    pk : number;
    name : string;
    country : string;
    city : string;
    price : number;
    rating : number;
    is_owner : boolean;
    photos : IPhotos[];
}

export default function Home() {

    const {isLoading, data} = useQuery<IRoom[]>({
        queryKey: ["rooms"],
        queryFn: getRooms,
    });

    return (
        <Grid my={10}
              mx={{
                  base: 10,
                  md: 20,
                  lg: 30
              }}
              columnGap={4}
              rowGap={8}
              templateColumns={{
                  base: "1fr",
                  md: "repeat(3, 1fr)",
                  lg: "repeat(4, 1fr)",
                  "2xl": "repeat(5, 1fr)"
              }}
        >
            {isLoading ? (
                <>
                    <Box>
                        <Skeleton height={"150px"} rounded={"2xl"} mb={3} />
                        <SkeletonText w={"75%"} noOfLines={2} />
                    </Box>
                    <Box>
                        <Skeleton height={"150px"} rounded={"2xl"} mb={3} />
                        <SkeletonText w={"75%"} noOfLines={2} />
                    </Box>
                    <Box>
                        <Skeleton height={"150px"} rounded={"2xl"} mb={3} />
                        <SkeletonText w={"75%"} noOfLines={2} />
                    </Box>
                </>
            ) : null }
            {data?.map((room) => (
                <Room pk={room.pk} imageURL={room.photos[0].file} name={room.name} rating={room.rating} city={room.city} country={room.country} price={room.price} />
            ))}
        </Grid>
    )
}