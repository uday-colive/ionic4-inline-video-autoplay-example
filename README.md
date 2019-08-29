# ionic4-inline-video-autoplay-example
Just an working example of how to implement autoplay videos from youtube and vimeo that plays inline inside the webview.
If you don't want to check the code, you can follow the steps bellow.

### Youtube Player API

Import the script in `index.html` file.
```html
<script src="https://www.youtube.com/iframe_api"></script>
```

Add the following code to a `ngOnInit` hook for an example, you may need to declare the variable `YT` in a global scope

```typescript
let player;
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
```

This code will play the video when it is loaded, but we also need to have an div#player in our HTML file.

```html
<div id="player"></div>
```


### Vimeo Iframe

```html
<iframe src="https://player.vimeo.com/video/76979871?autoplay=1&loop=1&autopause=0&?playsinline=0" width="640" height="360" frameborder="0" allow="autoplay"></iframe>
```

We need to add the `playsinline=0` parameter in the url


### Config.xml properties
```xml
    <access origin="*" />
    <access origin="*.youtube.com" />
    <access origin="*.ytimg.com" />
    <access origin="*.gstatic.com" />
    <access origin="*.googlevideo.com" />
    <allow-navigation href="https://*youtube.com/*" />
    <preference name="AllowInlineMediaPlayback" value="true" />
```

We should have this properties in our config.xml to make sure that will work.
