import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _tagsHistory: string[] = [];

  constructor() { }

  get tagsHistory() {
    return [...this._tagsHistory]
  }

  private organizeHistory(tag: string): void {
    tag = tag.toLowerCase();
    if(this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter( (oldTag) => oldTag !== tag)
    }
    if (this._tagsHistory.length === 10) {
      this._tagsHistory.pop()
    }
    this._tagsHistory.unshift(tag);
  }

  searchTag(tag: string): void {
    if (tag === "") return;
    this.organizeHistory(tag);
  }

}
