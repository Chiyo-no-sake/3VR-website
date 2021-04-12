import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {
  @Input() imageURLs: string[];
  @Input() alts: string[];
  @Output() imageClick = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
    if (this.imageURLs === undefined || this.alts === undefined) {
      throw Error('Must provide images and alternate texts');
    }
    if (this.imageURLs.length !== this.alts.length) {
      throw Error('Must provide same number of images and alternate texts');
    }
  }

  onClick(index: number): void {
    this.imageClick.emit(index);
  }

}
