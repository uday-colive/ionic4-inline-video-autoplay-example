import { Component, OnInit } from '@angular/core';
declare var YT;
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      let player;
      console.log('yt', YT),
        (player = new YT.Player('player', {
          height: '390',
          width: '640',
          videoId: 'M7lc1UVf-VE',
          playerVars: {
            autoplay: 1,
            controls: 0,
            playsinline: 1
          },
          events: {
            onReady: event => event.target.playVideo(),
            onStateChange: state => console.log('state', state)
          }
        }));
    }, 10_000);
  }
}
