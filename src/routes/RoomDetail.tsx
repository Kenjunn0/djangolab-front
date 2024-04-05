import {useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import {getRoom} from "../api";
import {IRoom} from "./Home";


export default function RoomDetail() {
    const {roomPk} = useParams();
    const {isLoading, data} = useQuery<IRoom>({
        queryKey: [`room:${roomPk}}`],
        queryFn: getRoom
    })

    return(
        <h1>HI</h1>
    )
}