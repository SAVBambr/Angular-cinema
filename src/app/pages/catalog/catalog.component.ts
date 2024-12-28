import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { BookService } from '../../shared/services/book.service';
import { PaginatorModule } from 'primeng/paginator';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { SkeletonModule } from 'primeng/skeleton';
import { HomeModule } from '../home/home.module';
import { MovieCardModule } from '../movie-card/movie-card.module';



@UntilDestroy()
@Component({
  selector: 'catalog',
  standalone: true,
  imports: [
    MovieCardModule,
    FormsModule, 
    InputTextModule,
    SkeletonModule, 
    PaginatorModule, 
    DropdownModule, 
    ButtonModule, 
    CarouselModule, 
    HomeModule

  ],
  providers: [BookService],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss'
})
export class CatalogComponent{
  movieCards4 = [
    { id: 16, name: 'В паутине', year: 2018, age: '16+', image: 'paytina.png', video: 'planeta.mp4' },
    { id: 17, name: 'Револьвер', year: 2022, age: '18+', image: 'revolver.png', video: 'planeta.mp4' },
    { id: 18, name: 'Фабрика троллей', year: 2022, age: '18+', image: 'genius.png', video: 'planeta.mp4'  },
    { id: 19, name: 'Мертвец', year: 2019, age: '16+', image: 'mertvech.png', video: 'planeta.mp4' },
    { id: 20, name: 'Страна чудес', year: 2021, age: '18+', image: 'strana.png', video: 'planeta.mp4' },

    { id: 21, name: 'Ответственная гражданка', year: 2018, age: '16+', image: 'graghdan.png', video: 'planeta.mp4', },
    { id: 22, name: 'Посвещается женщинам', year: 2022, age: '18+', image: 'ghen.png', video: 'planeta.mp4', },
    { id: 23, name: 'Мой Хатико', year: 2022, age: '18+', image: 'hatico.png', video: 'planeta.mp4', },
    { id: 24, name: 'Игра в Пусане', year: 2019, age: '16+', image: 'pysan.png', video: 'planeta.mp4', },
    { id: 25, name: 'Выжившие.Бетонная утопия', year: 2021, age: '18+', image: 'ytop.png', video: 'planeta.mp4', },

    { id: 26, name: 'Сделка с дьяволом', year: 2018, age: '16+', image: 'sdelka.png', video: 'planeta.mp4', },
    { id: 27, name: 'Невидимый убийца', year: 2022, age: '18+', image: 'nevid.png', video: 'planeta.mp4', },
    { id: 28, name: 'Гений математики', year: 2022, age: '18+', image: 'genius.png', video: 'planeta.mp4', },
    { id: 29, name: 'Следущая жертва', year: 2019, age: '16+', image: 'sled.png', video: 'planeta.mp4', },
    { id: 30, name: 'Помнить', year: 2021, age: '18+', image: 'pomnit.png', video: 'planeta.mp4', },

    { id: 31, name: 'Побег из Могадишо', year: 2018, age: '16+', image: 'pobeg.png', video: 'planeta.mp4', },
    { id: 32, name: 'Эфлятун', year: 2022, age: '18+', image: 'eflatyn.png', video: 'planeta.mp4', },
    { id: 33, name: 'Отпуск по корейски', year: 2022, age: '18+', image: 'trip.png', video: 'planeta.mp4', },
    { id: 34, name: 'Дом, милый дом', year: 2019, age: '16+', image: 'home.png', video: 'planeta.mp4', },
    { id: 35, name: '777 Чарли', year: 2021, age: '18+', image: 'charli.png', video: 'planeta.mp4', },
  ];

  movieCards5 = [
    { id: 36, name: 'Стеклянные потолки', year: 2018, age: '16+', image: 'steklo.png', video: 'planeta.mp4' },
    { id: 37, name: 'Поэма о Шанъян', year: 2022, age: '18+', image: 'poema.png', video: 'planeta.mp4' },
    { id: 38, name: 'Правосудие', year: 2022, age: '18+', image: 'pravosydie.png', video: 'planeta.mp4' },
    { id: 39, name: 'Основание: Осман', year: 2019, age: '16+', image: 'osnovanie.png', video: 'planeta.mp4' },
    { id: 40, name: 'Любовь по закону', year: 2021, age: '18+', image: 'lybov.png', video: 'planeta.mp4' },

    { id: 41, name: 'Работай позже, веселись сейчас', year: 2018, age: '16+', image: 'rabotai.png', video: 'planeta.mp4' },
    { id: 42, name: 'Далёкие странники', year: 2022, age: '18+', image: 'strannic.png', video: 'planeta.mp4' },
    { id: 43, name: 'Лейла', year: 2022, age: '18+', image: 'leila.png', video: 'planeta.mp4' },
    { id: 44, name: 'Один единственный', year: 2019, age: '16+', image: 'odin.png', video: 'planeta.mp4' },
    { id: 45, name: 'Бумажный дом', year: 2021, age: '18+', image: 'bymajni.png', video: 'planeta.mp4' },

    { id: 46, name: 'Секрет тёмной каморки', year: 2018, age: '16+', image: 'sekret.png', video: 'planeta.mp4' },
    { id: 47, name: 'Невиномный подсудимый', year: 2022, age: '18+', image: 'nevinovni.png', video: 'planeta.mp4' },
    { id: 48, name: 'Второй муж', year: 2022, age: '18+', image: 'vtoroi.png', video: 'planeta.mp4' },
    { id: 49, name: 'Заводила и принцесса', year: 2019, age: '16+', image: 'zavodila.png', video: 'planeta.mp4' },
    { id: 50, name: 'Отец', year: 2021, age: '18+', image: 'otech.png', video: 'planeta.mp4' },

    { id: 51, name: 'Крупье', year: 2018, age: '16+', image: 'crypie.png', video: 'planeta.mp4' },
    { id: 52, name: 'Лгуньи со свечами', year: 2022, age: '18+', image: 'lgyni.png', video: 'planeta.mp4' },
    { id: 53, name: 'Клюквенный сорбет', year: 2022, age: '18+', image: 'sorbet.png', video: 'planeta.mp4' },
    { id: 54, name: 'Ваша честь', year: 2019, age: '16+', image: 'vasha.png', video: 'planeta.mp4' },
    { id: 55, name: 'История Розы', year: 2021, age: '18+', image: 'istoria.png', video: 'planeta.mp4' },
  ];
  
  
  
}

