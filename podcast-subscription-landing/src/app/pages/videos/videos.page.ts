import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { IonInfiniteScroll } from '@ionic/angular';

import { Observable, merge, concat } from 'rxjs';

import { AuthService } from 'src/app/services/auth.service';
import { YoutubeDataApiService } from 'src/app/services/youtube-data-api.service';
import { Video } from './../../interfaces/video'

@Component({
  selector: 'app-videos',
  templateUrl: './videos.page.html',
  styleUrls: ['./videos.page.scss'],
})
export class VideosPage implements OnInit {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  // videosList: Observable<Video[]>;
  videosListOnline: Observable<Video[]>;
  textoSearch: string = '';
  urlYoutubeVideo: string = "https://www.youtube.com/watch?v="

  constructor(
    private auth: AuthService,
    private activatedRoute: ActivatedRoute,
    private ytservice: YoutubeDataApiService
    ) { }

  currentAuthStatus$: Observable<any>

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(() => {
      this.currentAuthStatus$ = this.auth.authStatusListener()
      this.videosListOnline = this.ytservice.getVideos()
    })
    this.videosListOnline.subscribe(res => {
      console.log(res)
    })
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

  loadData(event) {
    // console.log('cargando más');
    this.ytservice.getMoreVideos()
    this.infiniteScroll.disabled = true
    event.target.complete();
    // this.videosListOnline.concat(
    //   this.ytservice.getMoreVideos()
    // )
  //   setTimeout(() => {

  //     if(this.data.length > 50) {
  //       event.target.complete();
  //       this.infiniteScroll.disabled = true;
  //       return;
  //     }

  //     const nuevoArr = Array(20);
  //     this.data.push(...nuevoArr);
  //   }, 1500)
  }
}
