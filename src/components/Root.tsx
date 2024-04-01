import {Link, Outlet} from "react-router-dom";
import {HStack, Box, Button} from "@chakra-ui/react";
import {FaAirbnb} from "react-icons/fa6";


export default function Root(){
    return (
        <Box>
            <HStack py={5} px={10} spacing={"2.5px"} justifyContent={"space-between"} borderBottomWidth={1} >
                <Box color={"red.500"}>
                    <Link to={"/"}>
                        <FaAirbnb size={"48"} />
                    </Link>
                </Box>
                <HStack spacing={2}>
                    <Button>Log in</Button>
                    <Button colorScheme={"red"}>Sign up</Button>
                </HStack>
            </HStack>
            <Outlet />
        </Box>
    );
}