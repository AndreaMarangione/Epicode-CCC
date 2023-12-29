stopBtn.onclick = function() {
    earth.style.animationName = 'none';
    mars.style.animationName = 'none';
    venus.style.animationName = 'none';
    jupiter.style.animationName = 'none';

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
    popUpEarth.style.opacity = 0;
    popUpMars.style.opacity = 0;
    popUpVenus.style.opacity = 0;
    popUpJupiter.style.opacity = 0;

    closingCardBtn.style.right = '-50px';
    closingCardBtn.style.opacity = 0;

    earthCard.style.opacity = 0;    
    earthCard.style.top = '500px'; 

    marsCard.style.opacity = 0;    
    marsCard.style.top = '500px';   
    
    venusCard.style.opacity = 0;    
    venusCard.style.top = '500px';   
    
    jupiterCard.style.opacity = 0;    
    jupiterCard.style.top = '500px';   

    setTimeout(function(){
        earth.style.animationName = 'rotation';
        mars.style.animationName = 'rotation';
        venus.style.animationName = 'rotation';
        jupiter.style.animationName = 'rotation';
    }, 700)
}


popUpEarth.onclick = function(){
    closingCardBtn.style.right = '-4px';
    closingCardBtn.style.opacity = 1;

    earthCard.style.opacity = 1;
    earthCard.style.top = 0;

    marsCard.style.opacity = 0;    
    marsCard.style.top = '500px';   
    
    venusCard.style.opacity = 0;    
    venusCard.style.top = '500px';   
    
    jupiterCard.style.opacity = 0;    
    jupiterCard.style.top = '500px'; 
}

popUpMars.onclick = function(){
    closingCardBtn.style.right = '-4px';
    closingCardBtn.style.opacity = 1;

    marsCard.style.opacity = 1;
    marsCard.style.top = 0;

    earthCard.style.opacity = 0;    
    earthCard.style.top = '500px'; 

    venusCard.style.opacity = 0;    
    venusCard.style.top = '500px';   
    
    jupiterCard.style.opacity = 0;    
    jupiterCard.style.top = '500px';   
}

popUpVenus.onclick = function(){
    closingCardBtn.style.right = '-4px';
    closingCardBtn.style.opacity = 1;

    venusCard.style.opacity = 1;
    venusCard.style.top = 0;

    earthCard.style.opacity = 0;    
    earthCard.style.top = '500px'; 

    marsCard.style.opacity = 0;    
    marsCard.style.top = '500px';   
    
    jupiterCard.style.opacity = 0;    
    jupiterCard.style.top = '500px';   
}

popUpJupiter.onclick = function(){
    closingCardBtn.style.right = '-4px';
    closingCardBtn.style.opacity = 1;
    
    jupiterCard.style.opacity = 1;
    jupiterCard.style.top = 0;

    earthCard.style.opacity = 0;    
    earthCard.style.top = '500px'; 

    marsCard.style.opacity = 0;    
    marsCard.style.top = '500px';   
    
    venusCard.style.opacity = 0;    
    venusCard.style.top = '500px';   

}

closingCardBtn.onclick = function(){
    closingCardBtn.style.right = '-50px';
    closingCardBtn.style.opacity = 0;

    earthCard.style.opacity = 0;    
    earthCard.style.top = '500px'; 

    marsCard.style.opacity = 0;    
    marsCard.style.top = '500px';   
    
    venusCard.style.opacity = 0;    
    venusCard.style.top = '500px';   
    
    jupiterCard.style.opacity = 0;    
    jupiterCard.style.top = '500px'; 
}