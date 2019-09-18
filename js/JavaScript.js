
// style the video with medis element player plugin.
$('video').mediaelementplayer({
    features: ['playpause','progress','volume','fullscreen'],
    stretching: 'responsive'
});


// this varible holds the location of the beginning of each highted segment of text.
var beginTimes = [0.000, 4.130, 7.535, 11.270, 13.960, 17.940, 22.370, 26.880, 30.920, 34.730, 39.430, 41.190, 46.300, 49.270, 53.760, 57.780];

// this varible hold the current
// index of "beginTimes" that the
// video is on.
var i = 0;

// As the video plays highlight portions of th text.
$('video').on('timeupdate', function () {

    // if the video is past the beginning of the next segment
    // higlight the next segment.
    if (this.currentTime > beginTimes[i + 1] && beginTimes.length > i) {

        // remove the highlight from the current segment.
        document.querySelector(".current").classList.remove("current");

        // increment the time index.
        ++i;

        // highlight the new segment of text.
        document.getElementById("time" + i).classList.add("current");
    }
});

// If a portion of the text is clicked start playing
// the video at that location.
for (let j = 0; j < $('span').length; ++j) {

    // for each segment if clicked...
    $('span').eq(j).click(function () {

        // remove current segment color.
        document.querySelector(".current").classList.remove("current");

        // add new segment color.
        this.classList.add("current");

        // adjust the time index.
        i = parseInt(this.id.split('e')[1]);

        // set the video to play at the new time index.
        $('video')[0].currentTime = beginTimes[i];
    });
}