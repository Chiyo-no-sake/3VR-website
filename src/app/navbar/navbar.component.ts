import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() headings: string[];
  @Input() links: string[];
  @Input() logoURL: string[];
  @Output() headingClick = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    if (this.headings === undefined || this.links === undefined) {
      throw Error('No heading specified for navbar');
    }

    if (this.headings.length !== this.links.length) {
      throw Error('Headings and links must be of the same length');
    }
  }

}
