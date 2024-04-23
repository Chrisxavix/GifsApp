import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../Interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  public gifsListPaint: Gif[] = [];

  constructor(
    private gifsService: GifsService,
  ) { }

  get gifsToList(): Gif[] {
    console.log("Home: ",  this.gifsService.gifList);
    return this.gifsService.gifList;
  }
}
