import { Injectable, Pipe } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { of, iif, Observable, BehaviorSubject } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

import { environment } from './../../environments/environment';
import { Video, VideoList } from './../interfaces/video'

@Injectable({
  providedIn: 'root'
})
export class YoutubeDataApiService {

  pageTokens = []
  URI = "https://www.googleapis.com/youtube/v3/"
  apiKey = environment.apiKeyYoutube
  channelId = environment.channelId
  url = this.URI + 'search?order=date&key=' + this.apiKey + '&channelId=' + this.channelId + '&part=snippet,id&maxResults=15';
  nextPageToken: string[] = []
  videoSubject: BehaviorSubject<Video[]> = new BehaviorSubject(null)

  constructor(private http: HttpClient) { }

  videoSearch(url: string) {
    this.http.get<VideoList>(url)
    .subscribe(
      (res: VideoList) => {
        // if(res.nextPageToken !== null){
        //   if(this.nextPageToken === null || !this.nextPageToken.includes(res.nextPageToken)){
        //     this.nextPageToken.push(res.nextPageToken)
        //     console.log(this.nextPageToken)
        //     console.log(res.items)
        //   }
        // }
        this.videoSubject.next(res.items)
      },
      (err: any) => {
        this.videoSubject.error(err)
      },
      () => {
        this.videoSubject.complete()
      }
    )
    // .pipe(
    //   map((res: VideoList) => {
    //     if(res.nextPageToken !== null){
    //       if(this.nextPageToken === null || !this.nextPageToken.includes(res.nextPageToken)){
    //         this.nextPageToken.push(res.nextPageToken)
    //         console.log(this.nextPageToken)
    //         console.log(res.items)
    //       }
    //     }
    //     return res.items
    //   })
    // ))
    }

    // updateSubject() {

    // }

    getVideosOnline() {
      this.videoSearch(this.url)
      return this.videoSubject
    }

    getMoreVideos() {
      console.log(this.nextPageToken)
      while (this.nextPageToken.length > 0) {
        this.videoSearch(this.url + '&pageToken=' + this.nextPageToken.pop())
      }
    }

  getVideos() {
    return this.http.get<Video[]>('./assets/videoList/video-list.json')
    .pipe(
      map((response: Video[]) => {
        return response;
        }
      )
    )
  }
}
