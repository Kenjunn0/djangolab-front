import Cookie from "js-cookie";
import axios from "axios"
import {QueryFunctionContext} from "@tanstack/react-query";
import {formatDate} from "./lib/utils";

const instance = axios.create({
    baseURL: process.env.NODE_ENV === "development" ? "http://127.0.0.1:8000/api/v1/" : "https://airbnbclone-k4ue.onrender.com/api/v1/",
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

export const githubLogin = async (code: string) => {
    return instance.post(`users/github`, { code }, {
        headers: {
            "X-CSRFToken" : Cookie.get("csrftoken") || "",
        },
    }).
    then((response) => response.status);
}

export const kakaoLogin = async (code: string) => {
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

export const getAmenities = async () => {
    return await instance.get(`rooms/amenities`).
    then((response) => response.data);
}

export const getCategories = async () => {
    return await instance.get(`categories/`).
    then((response) => response.data);
}

export interface IUploadRoomVariables {
    name : string;
    country: string;
    city: string;
    price : number;
    rooms : number;
    toilets : number;
    description : string;
    address : string;
    pet_friendly : boolean;
    kind : string;
    amenities : number[];
    category : number;
}

export const uploadRoom = async  ( variables : IUploadRoomVariables)  => {
    return instance.post(`rooms/`, variables , {
        headers: {
            "X-CSRFToken" : Cookie.get("csrftoken") || "",
        },
    }).
    then((response) => response.data);
}

export const getUploadURL = async  () => {
    return instance.post(`medias/photos/get-url`, null , {
        headers: {
            "X-CSRFToken" : Cookie.get("csrftoken") || "",
        },
    }).
    then((response) => response.data);
}

export interface IUploadImageVariables {
    file : FileList
    uploadURL : string
}

export const uploadImage = ({ file, uploadURL } : IUploadImageVariables) => {
    const form = new FormData();
    form.append("file", file[0]);

    return axios.post(uploadURL, form, {
        headers: {
            "Content-Type" : "multipart/form-data",
        }
    }).then((response) => response.data);
}

export interface ICreatePhotoVariables {
    description : string;
    file : string;
    roomPk : string
}

export const createPhoto = ({description, file, roomPk} : ICreatePhotoVariables) => {
    return instance.post(`rooms/${roomPk}/photos`, {description, file}, {
        headers: {
            "X-CSRFToken" : Cookie.get("csrftoken") || "",
        },
    }).then((response) => response.data);
}

type CheckBookingQueryKey = [ string, string?, Date[]?];

export const checkBooking = ({ queryKey } : QueryFunctionContext<CheckBookingQueryKey> ) => {
    const [ _, roomPk, dates ] = queryKey;
    if(dates){
        const [first , second] = dates;
        const checkIn = formatDate(first)
        const chechOut = formatDate(second)

        return instance.get(`rooms/${roomPk}/bookings/check?check_in=${checkIn}&check_out=${chechOut}`).
        then((response) => response.data);
    }
}