import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

import { environment } from './../../environments/environment';
import { Video } from './../interfaces/video'

@Injectable({
  providedIn: 'root'
})
export class YoutubeDataApiService {

  URI = "https://www.googleapis.com/youtube/v3/"
  apiKey = environment.apiKeyYoutube
  channelId = environment.channelId
  videoList = []

  constructor(private http: HttpClient) { }

  // videoSearch(url: string) {
  //   this.http.get<any>(url).subscribe(
  //     res => {
  //       this.videoList.push(...res.items)
  //       if(res.nextPageToken) {
  //         this.videoSearch(url+'&pageToken='+res.nextPageToken)
  //       }
  //     },
  //     err => {
  //       console.log(err)
  //     }
  //   )
  // }

  getVideos() {
    // this.videoSearch(this.URI + 'search?key=' + this.apiKey + '&channelId=' + this.channelId + '&part=snippet,id&maxResults=50')
    // console.log(this.videoList)
    return this.http.get<Video[]>('./assets/videoList/video-list.json')
    .pipe(
      map((response: Video[]) => {
        return response;
        }
      )
    )
  }
}
