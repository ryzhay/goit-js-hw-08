import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const VIDEO_PLAYER_KEY = "videoplayer-current-time";

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(data) {
    localStorage.setItem(VIDEO_PLAYER_KEY, JSON.stringify(data.seconds));
};


const currentTime = localStorage.getItem(VIDEO_PLAYER_KEY) || 0;
player.setCurrentTime(currentTime);


