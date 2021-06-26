import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { YoutubeDataApiService } from 'src/app/services/youtube-data-api.service';
import { Video } from './../../interfaces/video'

@Component({
  selector: 'app-videos',
  templateUrl: './videos.page.html',
  styleUrls: ['./videos.page.scss'],
})
export class VideosPage implements OnInit {

  videosList: Observable<Video[]>;
  textoSearch: string = '';
  urlYoutubeVideo: string = "https://www.youtube.com/watch?v="

  constructor(
    private ytservice: YoutubeDataApiService
    ) { }

  ngOnInit() {
    this.videosList = this.ytservice.getVideos();
  }

  buscar(event) {
    this.textoSearch = event.detail.value
    // console.log(this.textoSearch)
  }

  favVideo(){
    console.log("favorito")
  }

  shareVideo() {
    console.log("compartir")
  }
}
