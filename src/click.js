let stars = document.getElementById("stars");
export let context = stars.getContext("2d")
let paint = document.getElementById("paint");
let or = paint.getContext("2d")

export default function getPixelColour(e) {
    let x = e.offsetX || e.originalEvent.layerX || e.layerX,
        y = e.offsetY || e.originalEvent.layerY || e.layerY,
        pixel = context.getImageData(x, y, 1, 1);
        let z = `rgba(${pixel.data[0]},${pixel.data[1]},${pixel.data[2]},${pixel.data[3]})`
       
       or.fillStyle = z;
       or.fill();
       or.fillRect(0,0,400,400)
}