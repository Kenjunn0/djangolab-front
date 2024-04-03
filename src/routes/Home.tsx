import {Grid} from "@chakra-ui/react";
import Room from "../components/Room";

export default function Home() {
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
            {[
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            ].map((index: number) => (
                <Room />
            ))}

        </Grid>
    )
}