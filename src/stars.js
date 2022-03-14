import {context} from './click.js'
context.fillStyle = 'rgb(255,255,255)';
context.fill();
context.fillRect(0,0,400,400)
      
export function star (cv, x, y){
    context.beginPath();
     for (let i = 0;i < 5;i++) {
            context.lineTo(Math.cos( (18+i*72)/180*Math.PI )*60 + x, -Math.sin( (18+i*72)/180*Math.PI )*60 + y);
            context.lineTo(Math.cos( (54+i*72)/180*Math.PI )*30 + x, -Math.sin( (54+i*72)/180*Math.PI )*30 + y);
         }  
         context.fillStyle = cv;
         context.fill();
         
 }
star('red', 80, 80)
star('blue', 200, 80)
star('green', 320, 80)
star('grey', 140, 200)
star('yellow', 260, 200)

