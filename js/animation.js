closingCardBtn.addEventListener('click', closingAll);

stopBtn.onclick = function () {
    divPlanets.forEach(planet => {
        planet.style.animationName = 'none';
        planet.classList.add('static-planet');
    });

    popUpPlanets.forEach(popup => {
        popup.style.opacity = 1;
        popup.style.top = '30px';
    })

    popUpSun.style.opacity = 1;
    popUpSun.style.top = '52%';
    popUpSun.style.left = '52%';

}

playBtn.onclick = function () {
    closingPopUp()

    closingAll()

    setTimeout(function () {
        divPlanets.forEach(planet => {
            planet.style.animationName = 'rotation';
            planet.classList.remove('static-planet');
        });
    }, 700)
}

popUpSun.onclick = function () {
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

popUpMercury.onclick = function () {
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

popUpVenus.onclick = function () {
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

popUpEarth.onclick = function () {
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

popUpMars.onclick = function () {
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

popUpJupiter.onclick = function () {
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

popUpSaturn.onclick = function () {
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

popUpUranus.onclick = function () {
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

popUpNeptune.onclick = function () {
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