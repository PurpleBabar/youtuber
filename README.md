# Youtuber
A simple Jquery plugin for youtube

## Install

Youtuber works with jquery 1.11.2, and has not been tested with other versions. Just call Youtuber in the head of your
doc then call it.

```js
$('.youtuber').youtuber();
```

When called on a *img* tag, it will display the preview picture. Otherwise it will display the frame, or the preview picture and a play logo (one you can choose).

## Options

You can personnalize your youtube integration with the following options :

```js
$('.youtuber').youtuber({
				quality:'default',
	            width: 320,
	            height: 180,
	            youtubeStyle: true,
	            playButton: '',
	            autoplay: false
			});
```

### Quality

You can choose between differents quality of pictures, depending on what Youtube has generated for the video: 
	-default
	-maxresdefault
	-sddefault
	-mqdefault
	-hqdefault
	-0
	-1
	-2
	-3

### Width and Height

You can define the width and the height you'd want in pixels.

### Autoplay

Default: false. Turn it to true if you want your video to play as soosn as it is loaded.

### PlayButton + YoutubeStyle

By default, your video will have the same look as the youtube frmae. But turning *youtubeStyle* to false you can choose the preview image (with *quality*) and the playButton you want (just put the path to your image in *playButton*).