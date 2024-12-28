import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { InputTextModule } from 'primeng/inputtext';
import { BookService } from "../../shared/services/book.service";
import { FormsModule } from "@angular/forms";
import { SkeletonModule } from 'primeng/skeleton';
import { HomeService } from "../../shared/services/home.service";
import { NgFor, NgIf } from "@angular/common";
//import { MyCarouselModule } from "../carousel/carousel.module";
import { MovieCardComponent } from "../movie-card/movie-card.component";
import { MovieCardModule } from "../movie-card/movie-card.module";
import { MovieService } from "../../shared/services/movie.service";


@NgModule({
    declarations: [HomeComponent],
    imports: [
        MovieCardModule,
        //MyCarouselModule,
        CarouselModule, 
        InputTextModule, 
        ButtonModule, 
        FormsModule, 
        SkeletonModule,
        NgFor,
        NgIf,
    ],
    providers: [HomeService, MovieService],
    exports: [HomeComponent]

})
export class HomeModule{}