import { Injectable } from '@angular/core';
import { Book, CartBook } from '../models/book';
import { Observable, of, tap } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environment';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: CartBook[] = [];

  private getAllUrl: string = '/api/cart/getAll';
  private addUrl: string = '/api/cart/addBookToCart';
  private deleteUrl: string = '/api/cart/delete';
  private updateUrl: string = '/api/cart/updateQuantity';
  private checkCartUrl: string = '/api/cart/checkCart';
  private clearCartUrl: string = '/api/cart/clearCart';

  constructor(private http: HttpClient){

  }

  getCartItems(): Observable<CartBook[]> {
    return this.http.get<CartBook[]>(`${environment.apiHost}${this.getAllUrl}`);
  }

  clearCart() {
    return this.http.get(`${environment.apiHost}${this.clearCartUrl}`);
  }

  addItem(book: Book): Observable<number> {
    return this.http.post<number>(`${environment.apiHost}${this.addUrl}`, book)
  }

  public checkCart(bookId: number): Observable<boolean> {
    let params = new HttpParams().set("bookId", bookId);
    return this.http.get<boolean>(`${environment.apiHost}${this.checkCartUrl}`, {params});
  }

  removeItem(id: number): Observable<number> {
    let params = new HttpParams().set("id", id);
    return this.http.get<number>(`${environment.apiHost}${this.deleteUrl}`, {params});
  }

  updateQuantity(book: CartBook, quantity: number): void {
    this.update(book.id, quantity).pipe(
      tap(() => {
        const item = this.cartItems.find(item => item === book);
        if (item) {
          item.quantity = quantity;
        }
      }),
      untilDestroyed(this)
    ).subscribe();
  }


  private update(id: number, quantity: number) {
    let params = new HttpParams().set("id", id).set("quantity", quantity);
    return this.http.get(`${environment.apiHost}${this.updateUrl}`, {params});
  }
}
