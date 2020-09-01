import { Component, OnInit } from '@angular/core';
import { ComicService } from './services/comic.service';
import { Comic } from './models/model.comic'; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  
  public comicE : Comic;

  constructor(public comicService: ComicService){
    this.comicE = new Comic (0,'','',0,0);
  }
  

  ngOnInit(){
    this.comicService.obtenerComic1()
    .subscribe(
      comics => {console.log(comics);
        this.comicE = comics;
      },
      err => console.log(err)
      );
}
}


