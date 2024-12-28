import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../../shared/services/home.service';
import { Actor } from '../trailer/trailer.component';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss'
})
export class MovieCardComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {
    console.log (this.card)
  }
  @Input() card:MovieCard;

  goToTrailer(){
    this.router.navigate(['/trailer', this.card.id]); 
  }

}

export class MovieCard{
  id: number;
  image:string;
  name:string;
  year:number;
  age:string;
  video:string;
  country?:string;
  time?:string;
  description?:string;
  rating?:string;
  actor?: Actor[];
}



