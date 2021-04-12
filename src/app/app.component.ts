import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'trevallirecords-website';
  images = [
    'https://i.stack.imgur.com/y9DpT.jpg',
    'https://falcim.it/wp-content/uploads/2020/09/placeholder.png',
    'https://t4.ftcdn.net/jpg/02/07/87/79/360_F_207877921_BtG6ZKAVvtLyc5GWpBNEIlIxsffTtWkv.jpg'
  ];

  alts = [
    'image-1',
    'image-2',
    'image-3',
  ];

  headings = [
    'Home',
    'Artisti',
    'Progetti'
  ];

  links = ['#', '#', '#'];

}
