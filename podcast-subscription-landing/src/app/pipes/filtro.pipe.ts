import { Pipe, PipeTransform } from '@angular/core';

import { Video } from './../interfaces/video'

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(videoList: Video[], texto: string): Video[] {
    if(videoList){
      videoList.sort((a, b) => {return Date.parse(b.snippet.publishedAt) - Date.parse(a.snippet.publishedAt)})
      if (texto === '') {
        return videoList
      }
      return videoList
              .filter(video => {
        return video.snippet.title.toLowerCase().includes( texto.toLowerCase() )
      })
      }
    }

}
