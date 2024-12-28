import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Author, Book, Genre, Moods } from "../models/book";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { environment } from "../../environment";
import { MovieCard } from "../../pages/movie-card/movie-card.component";

@Injectable()
export class MovieService {
    private getAllUrl: string = '/api/cinema/getAll';
    private getUrl: string = '/api/cinema/get';

    constructor(private http: HttpClient){}

    public getAll(): Observable<MovieCard[]>{
        
        return this.http.get<MovieCard[]>(`${environment.apiHost}${this.getAllUrl}`);
    }
    public getById(id: number): Observable<MovieCard> {
      let params = new HttpParams().set("id", id);
      return this.http.get<MovieCard>(`${environment.apiHost}${this.getUrl}`, {params});

    }

}