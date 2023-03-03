import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onPlay, 1000));
const TIME_KEY = "videoplayer-current-time";
    
function onPlay(time) {
 localStorage.setItem(TIME_KEY, time.seconds);
};
 
player.setCurrentTime(localStorage.getItem(TIME_KEY));