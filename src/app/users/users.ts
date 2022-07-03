export interface User {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    phone: string
}

export interface Checkable {
    isSelected: boolean;
}

export interface WithImage {
    imgPath: string;
}


export interface RawUser {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: number;
        geo: {
            lat: number;
            lng: number;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}
