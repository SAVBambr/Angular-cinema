import { Component, Input } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { HomeService } from '../../shared/services/home.service'
import { map, tap } from 'rxjs';
import { Cinema } from '../../shared/models/book';
import { MovieCard } from '../movie-card/movie-card.component';
import { Route, Router } from '@angular/router';
 
@UntilDestroy()
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent{
  
  @Input() public title: string = 'Title default'

  movieCards1 = [
    { id: 1, name: 'Планета зверей', year: 2018, age: '16+', image: 'planeta.png', video: 'planeta.mp4', country: 'Китай', time: 'Время - 2 ч 12 мин', description: 'Блабла', rating: '6.7 из 10'},
    { id: 2, name: 'Отпуск по Корейски', year: 2022, age: '18+', image: 'trip.png', video: '', },
    { id: 3, name: 'Гений математики', year: 2022, age: '18+', image: 'genius.png', video: 'planeta.mp4', },
    { id: 4, name: 'Чудо в камере №7', year: 2019, age: '16+', image: 'chydo.png', video: 'planeta.mp4', },
    { id: 5, name: 'Дом, милый дом', year: 2021, age: '18+', image: 'home.png', video: 'planeta.mp4', },
  ];

  movieCards2 = [
    { id: 6, name: 'Мой Хатико', year: 2013, age: '18+', image: 'hatico.png', video: 'planeta.mp4', },
    { id: 7, name: 'Землетрясение', year: 2010, age: '18+', image: 'earth.png', video: 'planeta.mp4', },
    { id: 8, name: 'Меня зовут Кхан', year: 2019, age: '18+', image: 'khan.png', video: 'planeta.mp4', },
    { id: 9, name: '777 Чарли', year: 2022, age: '18+', image: 'charli.png', video: 'planeta.mp4', },
    { id: 10, name: 'Паразиты', year: 2019, age: '18+', image: 'parazit.png', video: 'planeta.mp4', },
  ];

  // movieCards3 = [
  //   { id: 11, name: 'Револьвер', year: 2024, age: '18+', image: 'revolver.png', video: 'planeta.mp4', country: 'россия', time: '50 мин', description: 'Блабла', rating: '6 из 10', actorsnames: 'Actor1, Actor2, Actor3, Actor4, Actor5', actorsphotos: 'assets/images/actor1/png, assets/images/actor1/png, assets/images/actor1/png, assets/images/actor1/png, assets/images/actor1/png,' },
  //   { id: 12, name: 'Фабрика троллей', year: 2024, age: '18+', image: 'trol.png', video: 'planeta.mp4', },
  //   { id: 13, name: 'Мертвец', year: 2024, age: '18+', image: 'mertvech.png', video: 'planeta.mp4', },
  //   { id: 14, name: 'Страна чудес', year: 2024, age: '16+', image: 'chydo.png', video: 'planeta.mp4', },
  //   { id: 15, name: 'Ответственная гражданка', year: 2023, age: '18+', image: 'graghdan.png', video: 'planeta.mp4', },
  // ];

  public recentReleaseCinema: MovieCard[];

  constructor(private homeService: HomeService, private route: Router){
    homeService.getRecentReleaseCinema().pipe(
      tap((values) => {
        this.recentReleaseCinema = values;
      })
    ).subscribe();
 }

  goToCatalog() {
    this .route.navigate(['/catalog'])
  }





}





