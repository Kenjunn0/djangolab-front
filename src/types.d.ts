export interface IRoomPhotoPhoto {
    pk: string;
    file: string;
    description: string;
}

export interface IRoomList {
    id: number;
    name: string;
    country: string;
    city: string;
    price: number;
    rating: number;
    is_owner: boolean;
    photos: IRoomPhotoPhoto[];
}

export interface IRoomOwner {
    name: string;
    avatar: string;
    username: string;
}

export interface IAmenity {
    id : number;
    name: string;
    description: string;
}

export interface ICategory {
    pk : number;
    name: string;
    kind: string;
}

export interface IRoomDetail extends IRoomList {
    created_at: string;
    updated_at: string;
    rooms: number;
    toilets: number;
    description: string;
    address: string;
    pet_friendly: true;
    kind: string;
    is_owner: boolean;
    is_liked: boolean;
    category: ICategory;
    owner: IRoomOwner;
    amenities: IAmenity[];
}

interface IReviews {
    user: IRoomOwner;
    payload : string;
    rating : number;
}

export interface IUser {
    last_login: string;
    username: string;
    email: string;
    date_joined: string;
    profile_photo: string;
    name: string;
    is_host: boolean;
    gender: string;
    language: string;
    currency: string;
}