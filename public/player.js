const SoundCloudAudio = require('soundcloud-audio');
const player = new SoundCloudAudio('aps6FCJllFHVcpRtxEeVOiKRS2LZ9Uaa');

window.play = function (url) {
    // player.resolve("https://soundcloud.com/user-992197046/wavwavwavwav", function (track) {
    player.resolve(url, function (track) {

        player.play();
    });
}

window.pause = function () {
    player.pause();
}

window.setVolume = function (level) {
    level = level / 100;
    player.setVolume(level);
}
