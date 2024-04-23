import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  constructor(
    private gifsService: GifsService,
  ) { }

  get tagsHistory(): string[] {
    return this.gifsService.tagsHistory;
  }

  searchTag(tag: string): void {
    console.log("PRESIONADO: ", tag);
    this.gifsService.searchTag(tag);
  }
}
