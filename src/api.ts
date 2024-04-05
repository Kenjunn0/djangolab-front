import axios from "axios"

const instance = axios.create({
    baseURL: "http://localhost:8000/api/v1/"
});

export const getRooms = async () => instance.get("rooms")
    .then(response => response.data);

export const getRoom = async () => instance.get(`rooms/4`)
    .then(response => response.data)