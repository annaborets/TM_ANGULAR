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
