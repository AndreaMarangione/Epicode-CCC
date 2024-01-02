closingCardBtn.addEventListener('click', closingAll);

stopBtn.onclick = function() {
    mercury.style.animationName = 'none';
    venus.style.animationName = 'none';
    earth.style.animationName = 'none';
    mars.style.animationName = 'none';
    jupiter.style.animationName = 'none';
    saturn.style.animationName = 'none';
    uranus.style.animationName = 'none';
    neptune.style.animationName = 'none';

    popUpSun.style.opacity = 1;
    popUpSun.style.top = '52%';

    popUpMercury.style.opacity = 1;
    popUpMercury.style.top = '30px';

    popUpVenus.style.opacity = 1;
    popUpVenus.style.top = '30px';

    popUpEarth.style.opacity = 1;
    popUpEarth.style.top = '30px';

    popUpMars.style.opacity = 1;
    popUpMars.style.top = '30px';

    popUpJupiter.style.opacity = 1;
    popUpJupiter.style.top = '30px';

    popUpSaturn.style.opacity = 1;
    popUpSaturn.style.top = '30px';

    popUpUranus.style.opacity = 1;
    popUpUranus.style.top = '30px';

    popUpNeptune.style.opacity = 1;
    popUpNeptune.style.top = '30px';
}

playBtn.onclick = function() {
    popUpSun.style.opacity = 0;
    popUpMercury.style.opacity = 0;
    popUpVenus.style.opacity = 0;
    popUpEarth.style.opacity = 0;
    popUpMars.style.opacity = 0;
    popUpJupiter.style.opacity = 0;
    popUpSaturn.style.opacity = 0;
    popUpUranus.style.opacity = 0;
    popUpNeptune.style.opacity = 0;

    closingAll() 

    setTimeout(function(){
        mercury.style.animationName = 'rotation';
        venus.style.animationName = 'rotation';
        earth.style.animationName = 'rotation';
        mars.style.animationName = 'rotation';
        jupiter.style.animationName = 'rotation';
        saturn.style.animationName = 'rotation';
        uranus.style.animationName = 'rotation';
        neptune.style.animationName = 'rotation';
    }, 700)
}

popUpSun.onclick = function(){
    getClosingCardBtn();
    
    sunCard.style.opacity = 1;
    sunCard.style.top = '10%';

    venusCard.style.opacity = 0;    
    venusCard.style.top = '500px';

    earthCard.style.opacity = 0;    
    earthCard.style.top = '500px'; 

    marsCard.style.opacity = 0;    
    marsCard.style.top = '500px';   
        
    jupiterCard.style.opacity = 0;    
    jupiterCard.style.top = '500px';   

    saturnCard.style.opacity = 0;
    saturnCard.style.top = '500px'; 

    uranusCard.style.opacity = 0;
    uranusCard.style.top = '500px'; 

    neptuneCard.style.opacity = 0;
    neptuneCard.style.top = '500px'; 
}

popUpMercury.onclick = function(){
    getClosingCardBtn();

    sunCard.style.opacity = 0; 
    sunCard.style.top = '500px';

    mercuryCard.style.opacity = 1;
    mercuryCard.style.top = '10%';

    venusCard.style.opacity = 0;
    venusCard.style.top = '500px';

    earthCard.style.opacity = 0;    
    earthCard.style.top = '500px'; 

    marsCard.style.opacity = 0;    
    marsCard.style.top = '500px';   
    
    jupiterCard.style.opacity = 0;    
    jupiterCard.style.top = '500px';   

    saturnCard.style.opacity = 0;
    saturnCard.style.top = '500px'; 

    uranusCard.style.opacity = 0;
    uranusCard.style.top = '500px'; 
    
    neptuneCard.style.opacity = 0;
    neptuneCard.style.top = '500px'; 
}

popUpVenus.onclick = function(){
    getClosingCardBtn();

    sunCard.style.opacity = 0; 
    sunCard.style.top = '500px';

    mercuryCard.style.opacity = 0;
    mercuryCard.style.top = '500px';

    venusCard.style.opacity = 1;
    venusCard.style.top = '10%';

    earthCard.style.opacity = 0;    
    earthCard.style.top = '500px'; 

    marsCard.style.opacity = 0;    
    marsCard.style.top = '500px';   
    
    jupiterCard.style.opacity = 0;    
    jupiterCard.style.top = '500px';   

    saturnCard.style.opacity = 0;
    saturnCard.style.top = '500px'; 

    uranusCard.style.opacity = 0;
    uranusCard.style.top = '500px'; 

    neptuneCard.style.opacity = 0;
    neptuneCard.style.top = '500px'; 
}

popUpEarth.onclick = function(){
    getClosingCardBtn();

    sunCard.style.opacity = 0; 
    sunCard.style.top = '500px';

    mercuryCard.style.opacity = 0;
    mercuryCard.style.top = '500px';

    venusCard.style.opacity = 0;    
    venusCard.style.top = '500px'; 

    earthCard.style.opacity = 1;
    earthCard.style.top = '10%';

    marsCard.style.opacity = 0;    
    marsCard.style.top = '500px';   
        
    jupiterCard.style.opacity = 0;    
    jupiterCard.style.top = '500px'; 

    saturnCard.style.opacity = 0;
    saturnCard.style.top = '500px'; 

    uranusCard.style.opacity = 0;
    uranusCard.style.top = '500px'; 

    neptuneCard.style.opacity = 0;
    neptuneCard.style.top = '500px'; 
}

popUpMars.onclick = function(){
    getClosingCardBtn();

    sunCard.style.opacity = 0; 
    sunCard.style.top = '500px';

    mercuryCard.style.opacity = 0;
    mercuryCard.style.top = '500px';

    venusCard.style.opacity = 0;    
    venusCard.style.top = '500px';  

    earthCard.style.opacity = 0;    
    earthCard.style.top = '500px'; 

    marsCard.style.opacity = 1;
    marsCard.style.top = '10%';
    
    jupiterCard.style.opacity = 0;    
    jupiterCard.style.top = '500px';   

    saturnCard.style.opacity = 0;
    saturnCard.style.top = '500px'; 

    uranusCard.style.opacity = 0;
    uranusCard.style.top = '500px'; 

    neptuneCard.style.opacity = 0;
    neptuneCard.style.top = '500px'; 
}

popUpJupiter.onclick = function(){
    getClosingCardBtn();

    sunCard.style.opacity = 0;    
    sunCard.style.top = '500px'; 
    
    mercuryCard.style.opacity = 0;
    mercuryCard.style.top = '500px';

    venusCard.style.opacity = 0;    
    venusCard.style.top = '500px'; 

    earthCard.style.opacity = 0;    
    earthCard.style.top = '500px'; 

    marsCard.style.opacity = 0;    
    marsCard.style.top = '500px';   
    
    jupiterCard.style.opacity = 1;
    jupiterCard.style.top = '10%'; 

    saturnCard.style.opacity = 0;
    saturnCard.style.top = '500px'; 

    uranusCard.style.opacity = 0;
    uranusCard.style.top = '500px'; 

    neptuneCard.style.opacity = 0;
    neptuneCard.style.top = '500px'; 
}

popUpSaturn.onclick = function(){
    getClosingCardBtn();

    sunCard.style.opacity = 0;    
    sunCard.style.top = '500px'; 
    
    mercuryCard.style.opacity = 0;
    mercuryCard.style.top = '500px';
    
    venusCard.style.opacity = 0;    
    venusCard.style.top = '500px'; 

    earthCard.style.opacity = 0;    
    earthCard.style.top = '500px'; 

    marsCard.style.opacity = 0;    
    marsCard.style.top = '500px';   
    
    jupiterCard.style.opacity = 0;
    jupiterCard.style.top = '500px';
    
    saturnCard.style.opacity = 1;
    saturnCard.style.top = '10%'; 

    uranusCard.style.opacity = 0;
    uranusCard.style.top = '500px'; 

    neptuneCard.style.opacity = 0;
    neptuneCard.style.top = '500px'; 
}

popUpUranus.onclick = function(){
    getClosingCardBtn();

    sunCard.style.opacity = 0;    
    sunCard.style.top = '500px'; 
    
    mercuryCard.style.opacity = 0;
    mercuryCard.style.top = '500px';
    
    venusCard.style.opacity = 0;    
    venusCard.style.top = '500px'; 

    earthCard.style.opacity = 0;    
    earthCard.style.top = '500px'; 

    marsCard.style.opacity = 0;    
    marsCard.style.top = '500px';   
    
    jupiterCard.style.opacity = 0;
    jupiterCard.style.top = '500px';
    
    saturnCard.style.opacity = 0;
    saturnCard.style.top = '500px'; 

    uranusCard.style.opacity = 1;
    uranusCard.style.top = '10%'; 

    neptuneCard.style.opacity = 0;
    neptuneCard.style.top = '500px'; 
}

popUpNeptune.onclick = function(){
    getClosingCardBtn();

    sunCard.style.opacity = 0;    
    sunCard.style.top = '500px'; 
    
    mercuryCard.style.opacity = 0;
    mercuryCard.style.top = '500px';
    
    venusCard.style.opacity = 0;    
    venusCard.style.top = '500px'; 

    earthCard.style.opacity = 0;    
    earthCard.style.top = '500px'; 

    marsCard.style.opacity = 0;    
    marsCard.style.top = '500px';   
    
    jupiterCard.style.opacity = 0;
    jupiterCard.style.top = '500px';
    
    saturnCard.style.opacity = 0;
    saturnCard.style.top = '500px'; 

    uranusCard.style.opacity = 0;
    uranusCard.style.top = '500px'; 

    neptuneCard.style.opacity = 1;
    neptuneCard.style.top = '10%'; 
}