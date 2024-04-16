import useUser from "../lib/useUser";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

export default function useHostOnlyPage(){

    const { user, isLoggedIn, userLoading } = useUser();
    const navigate = useNavigate();

    useEffect(() => {
        if(!userLoading && !user?.is_host) navigate("/");

    }, [userLoading, isLoggedIn, navigate])


    return;
}