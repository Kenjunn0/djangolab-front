import Cookie from "js-cookie";
import axios from "axios"
import {QueryFunctionContext} from "@tanstack/react-query";

const instance = axios.create({
    baseURL: "http://127.0.0.1:8000/api/v1/",
    withCredentials: true
});

export const getRooms = async () => instance.get("rooms/")
    .then(response => response.data);

export const getRoom = async ({queryKey} : QueryFunctionContext) => {
    const [_, roomPk] = queryKey;
    return instance.get(`rooms/${roomPk}`)
        .then(response => response.data);
};

export const getRoomReviews = async ({queryKey} : QueryFunctionContext) => {
    const [_, roomPk] = queryKey;
    return instance.get(`rooms/${roomPk}/reviews`)
        .then((response) => response.data);
};

export const getMe = async () => {
    return instance.get(`users/me`).
    then((response) => response.data)
}

export const logOut = async () => {
    return instance.post(`users/log-out`, null, {
        headers : {
            "X-CSRFToken" : Cookie.get("csrftoken") || "",
        },
    }).
    then((response) => response.data)
}

export const githubLogin = async  (code: string) => {
    return instance.post(`users/github`, { code }, {
        headers: {
            "X-CSRFToken" : Cookie.get("csrftoken") || "",
        },
    }).
    then((response) => response.status);
}

export const kakaoLogin = async  (code: string) => {
    return instance.post(`users/kakao`, { code }, {
        headers: {
            "X-CSRFToken" : Cookie.get("csrftoken") || "",
        },
    }).
    then((response) => response.status);
}

export interface IUsernameLoginVariables {
    username : string;
    password : string;
}

export const usernameLogIn = async  ({username, password} : IUsernameLoginVariables) => {
    return instance.post(`users/log-in`, { username, password }, {
        headers: {
            "X-CSRFToken" : Cookie.get("csrftoken") || "",
        },
    }).
    then((response) => response.status);
}