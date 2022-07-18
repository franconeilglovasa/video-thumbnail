import { Component, OnInit } from '@angular/core';
import { VideoProcessingService } from '../video-processing-service';

@Component({
  selector: 'app-thumb',
  templateUrl: './thumb.component.html',
  styleUrls: ['./thumb.component.scss']
})
export class ThumbComponent implements OnInit {
  public thumbnailData: string;

  constructor( private videoService: VideoProcessingService) { }

  ngOnInit(): void {
  }

  public add(): void {
    this.videoService.promptForVideo().then(videoFile => {
      //console.dir(videoFile);
      return this.videoService.generateThumbnail(videoFile);
    }).then(thumbnailData => {
      //console.dir(thumbnailData);
      this.thumbnailData = thumbnailData;
    })
  }

}
