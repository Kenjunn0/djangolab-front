import ProtectedPage from "../components/ProtectedPage";
import useHostOnlyPage from "../components/HostOnlyPage";
import {Text} from "@chakra-ui/react";

export default function UploadRoom(){

    useHostOnlyPage();

    return (
        <ProtectedPage>
            <Text>Upload Room</Text>
        </ProtectedPage>
    )
}