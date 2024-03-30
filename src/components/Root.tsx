import {Outlet} from "react-router-dom";

export default function Root(){
    return <h3>
        Root Page
        <Outlet />
    </h3>;
}