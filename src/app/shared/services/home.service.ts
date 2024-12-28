import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { CartBook, Cinema } from "../models/book";
import { MovieCard } from "../../pages/movie-card/movie-card.component";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environment";

@Injectable()
export class HomeService {

    private getRecentReleaseCinemaUrl: string = '/api/home/getRecentReleaseCinema';

    constructor(private http: HttpClient){}

    getRecentReleaseCinema(): Observable<MovieCard[]> {
        return this.http.get<MovieCard[]>(`${environment.apiHost}${this.getRecentReleaseCinemaUrl}`);
    }
}