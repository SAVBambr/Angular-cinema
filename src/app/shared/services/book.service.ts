import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Author, Book, Genre, Moods } from "../models/book";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environment";

@Injectable()
export class BookService {
    private getAllBooksUrl: string = '/api/book/getBooks';

    constructor(private http: HttpClient){}

    public getAllBooks(): Observable<Book[]>{
        
        return this.http.get<Book[]>(`${environment.apiHost}${this.getAllBooksUrl}`);
    }
}