export class Author {
    id: number;
    name: string;
    books: Book[];
}

export class CartBook {
    id: number;
    book: Book;
    quantity: number;
}

export class Book {
    id: number;
    title: string;
    description: string;
    image: string;
    author: Author;
    genre: Genre;
    mood: Moods;
    rating: number;
    year: number;
    pageCount: number;
    price: number;
}

export enum Genre {
    Fantasy,
    Romance,
    Detective,
    Science
}

export enum Moods {
    Happy,
    Serious,
    Intriguing,
    Tense,
    Thoughtful,
    Suspenseful,
    Mysterious,
    Adventurous
}

export class Review {
    id: number;
    author: string;
    text: string;
    rating: number;
    idBook: number;
}

export class User {
    name: string;
    email: string;
    password: string;
    login: string;
    cartBooks: CartBook[];
    reviews: Review[];
}

export class UserLogin {
    password: string;
    login: string;
}


export class Cinema {
    name: string;
    discription: string;
    rating: number;
}