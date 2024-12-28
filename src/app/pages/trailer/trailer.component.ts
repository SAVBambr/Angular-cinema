import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../shared/services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { MovieCard } from '../movie-card/movie-card.component';
import { finalize, tap } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-trailer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trailer.component.html',
  styleUrl: './trailer.component.scss'
})
export class TrailerComponent implements OnInit { 
  public movieCard: MovieCard;
  public isLoaded: Boolean = false;
  public actors: Actor[] = [
    { name:'Actor1', photo: 'assets/actors/image.png'},
    { name:'Actor2', photo: 'assets/actors/image.png'},
    { name:'Actor3', photo: 'assets/actors/image.png'},
    { name:'Actor4', photo: 'assets/actors/image.png'},
    { name:'Actor5', photo: 'assets/actors/image.png'},
  ];
  constructor(private movieservice: MovieService, private route: ActivatedRoute) {}
  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;

    if (id > 0) {
      this.movieservice.getById(id)
      .pipe(
        tap((value) => {
          console.log(value)
          this.movieCard = value
        }),
        finalize(() => {
          this.isLoaded = true; 
        })
      )
      .subscribe();
    }
  }
}

export class Actor {
  name:string;
  photo:string;
  
}


