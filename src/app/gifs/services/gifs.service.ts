import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../Interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _tagsHistory: string[] = [];
  private apiKey:       string = "HsJDNLNKCtw6UQNs7y1hw2TK4cjhFsjV";
  private url:          string = "http://api.giphy.com/v1/gifs";
  public gifList:       Gif[] = [];

  constructor(
    private http: HttpClient,

  ) { }

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
    const params = new HttpParams()
      .set("api_key", this.apiKey)
      .set("q", tag)
      .set("limit", 10);
    this.http.get<SearchResponse>(`${this.url}/search`,  { params }).subscribe(resp   => {
      this.gifList = resp.data;
      console.log("Servicio: ",  this.gifList);
    });
  }
}
