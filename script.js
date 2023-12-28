const playBtn = document.getElementById('play');
const stopBtn = document.getElementById('stop');
const earth = document.getElementById('earth');
const mars = document.getElementById('mars');
const venus = document.getElementById('venus');
const jupiter = document.getElementById('jupiter');




stopBtn.onclick = function() {
    earth.style.animationName = 'none';
    mars.style.animationName = 'none';
    venus.style.animationName = 'none';
    jupiter.style.animationName = 'none';
}

playBtn.onclick = function() {
    earth.style.animationName = 'rotation';
    mars.style.animationName = 'rotation';
    venus.style.animationName = 'rotation';
    jupiter.style.animationName = 'rotation';
}

