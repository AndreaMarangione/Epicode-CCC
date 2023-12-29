closingCardBtn.addEventListener('click', closingAll);

stopBtn.onclick = function() {
    earth.style.animationName = 'none';
    mars.style.animationName = 'none';
    venus.style.animationName = 'none';
    jupiter.style.animationName = 'none';

    popUpSun.style.opacity = 1;
    popUpSun.style.top= '52%'

    popUpEarth.style.opacity = 1;
    popUpEarth.style.top= '30px'

    popUpMars.style.opacity = 1;
    popUpMars.style.top= '30px'

    popUpVenus.style.opacity = 1;
    popUpVenus.style.top= '30px'

    popUpJupiter.style.opacity = 1;
    popUpJupiter.style.top= '30px'
}

playBtn.onclick = function() {
    popUpSun.style.opacity = 0;
    popUpEarth.style.opacity = 0;
    popUpMars.style.opacity = 0;
    popUpVenus.style.opacity = 0;
    popUpJupiter.style.opacity = 0;

    closingAll() 

    setTimeout(function(){
        earth.style.animationName = 'rotation';
        mars.style.animationName = 'rotation';
        venus.style.animationName = 'rotation';
        jupiter.style.animationName = 'rotation';
    }, 700)
}

popUpEarth.onclick = function(){
    getClosingCardBtn();

    earthCard.style.opacity = 1;
    earthCard.style.top = 0;

    sunCard.style.opacity = 0; 
    sunCard.style.top = '500px';

    marsCard.style.opacity = 0;    
    marsCard.style.top = '500px';   
    
    venusCard.style.opacity = 0;    
    venusCard.style.top = '500px';   
    
    jupiterCard.style.opacity = 0;    
    jupiterCard.style.top = '500px'; 
}

popUpMars.onclick = function(){
    getClosingCardBtn();

    marsCard.style.opacity = 1;
    marsCard.style.top = 0;

    sunCard.style.opacity = 0; 
    sunCard.style.top = '500px';

    earthCard.style.opacity = 0;    
    earthCard.style.top = '500px'; 

    venusCard.style.opacity = 0;    
    venusCard.style.top = '500px';   
    
    jupiterCard.style.opacity = 0;    
    jupiterCard.style.top = '500px';   
}

popUpVenus.onclick = function(){
    getClosingCardBtn();

    venusCard.style.opacity = 1;
    venusCard.style.top = 0;

    sunCard.style.opacity = 0; 
    sunCard.style.top = '500px';

    earthCard.style.opacity = 0;    
    earthCard.style.top = '500px'; 

    marsCard.style.opacity = 0;    
    marsCard.style.top = '500px';   
    
    jupiterCard.style.opacity = 0;    
    jupiterCard.style.top = '500px';   
}

popUpJupiter.onclick = function(){
    getClosingCardBtn();

    sunCard.style.opacity = 0;    
    sunCard.style.top = '500px'; 
    
    jupiterCard.style.opacity = 1;
    jupiterCard.style.top = 0;

    earthCard.style.opacity = 0;    
    earthCard.style.top = '500px'; 

    marsCard.style.opacity = 0;    
    marsCard.style.top = '500px';   
    
    venusCard.style.opacity = 0;    
    venusCard.style.top = '500px';   
}

popUpSun.onclick = function(){
    getClosingCardBtn();
    
    sunCard.style.opacity = 1;
    sunCard.style.top = 0;

    earthCard.style.opacity = 0;    
    earthCard.style.top = '500px'; 

    marsCard.style.opacity = 0;    
    marsCard.style.top = '500px';   
    
    venusCard.style.opacity = 0;    
    venusCard.style.top = '500px';
    
    jupiterCard.style.opacity = 0;    
    jupiterCard.style.top = '500px';   
}