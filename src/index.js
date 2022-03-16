import star from './stars.js';
import getPixelColour from './click.js'
import './style.scss';

star('red', 80, 80)
star('blue', 200, 80)
star('green', 320, 80)
star('black', 140, 200)
star('yellow', 260, 200)
stars.addEventListener('click',getPixelColour);


