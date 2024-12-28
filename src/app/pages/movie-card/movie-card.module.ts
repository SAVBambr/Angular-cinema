import { NgModule } from "@angular/core";
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { InputTextModule } from 'primeng/inputtext';
import { BookService } from "../../shared/services/book.service";
import { FormsModule } from "@angular/forms";
import { SkeletonModule } from 'primeng/skeleton';
import { HomeService } from "../../shared/services/home.service";
import { CommonModule, NgFor, NgIf } from "@angular/common";
import {MovieCardComponent } from "./movie-card.component";



@NgModule({
    declarations: [MovieCardComponent],
    imports: [
        //CarouselModule, 
        InputTextModule, 
        ButtonModule, 
        FormsModule, 
        SkeletonModule,
        NgFor,
        NgIf,
        CommonModule,
    ],
    providers: [],
    exports: [MovieCardComponent]

})
export class MovieCardModule{}