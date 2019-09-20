
// style the video with medis element player plugin.
$('video').mediaelementplayer({
    features: ['playpause','progress','volume','fullscreen'],
    stretching: 'responsive'
});


// this varible holds the location of the beginning of each highted segment of text.
var times = [0.000, 4.130, 7.535, 11.270, 13.960, 17.940, 22.370, 26.880, 30.920, 34.730, 39.430, 41.190, 46.300, 49.270, 53.760, 57.780, 100.150];

// span offset for spans found in video.
const spanOffset = 13

// As the video plays highlight portions of th text.
$('video').on('timeupdate', function () {

    // while traversing the spans in the html avoiding the spans in the video...
    for (let i = 0; i < $('span').length - spanOffset + 1; ++i) {

        // Where the "currentTime" is on the current sentence change the color 
        // of the sentence to blue. Else change the rest of the sentences black.
        if ((this.currentTime >= times[i]) && (this.currentTime < times[i + 1])) {
            $('span').eq(i + spanOffset).css("color", "blue");
        } else {
            $('span').eq(i + spanOffset).css("color", "black");
        }
    }
});

// If a portion of the text is clicked start playing
// the video at that location.
for (let j = spanOffset; j < $('span').length; ++j) {

    // for each segment if clicked...
    $('span').eq(j).click(function () {
           
            // set the video to play at the new time index.
            $('video')[0].currentTime = times[parseInt(this.id.split('e')[1])];
    });
}