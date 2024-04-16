import useUser from "../lib/useUser";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";


interface IProtectedPageProps {
    children: React.ReactNode;
}

export default function ProtectedPage( { children } : IProtectedPageProps ){

    const { user, isLoggedIn, userLoading } = useUser();
    const navigate = useNavigate();

    useEffect(() => {
        if(!userLoading && !isLoggedIn) navigate("/");

    }, [userLoading, isLoggedIn, navigate])


    return (
        <>
            {children}
        </>
    )
}