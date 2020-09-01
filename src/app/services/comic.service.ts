import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http'

import {Comic} from './../models/model.comic';

@Injectable({
  providedIn: 'root'
})
export class ComicService {

  constructor(private http: HttpClient) { }

  obtenerComic1(){
   return this.http.get<Comic>('/614/info.0.json');
  }
  
}
