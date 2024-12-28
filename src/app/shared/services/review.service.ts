import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Author, Book, Genre, Moods, Review } from "../models/book";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { environment } from "../../environment";

@Injectable()
export class ReviewService {
    private addReviewUrl: string = '/api/review/addReview';
    private getReviewsUrl: string = '/api/review/getReviewsById';

    constructor(private http: HttpClient){}

    public getReviews(idBook: number): Observable<Review[]>{
        let params = new HttpParams().set("idBook", idBook);
        return this.http.get<Review[]>(`${environment.apiHost}${this.getReviewsUrl}`, {params: params})
    }

    public saveReview(review: Review): Observable<number> {
        return this.http.post<number>(`${environment.apiHost}${this.addReviewUrl}`, review);
    }
}