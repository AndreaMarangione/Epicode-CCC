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
    createCard('');

    setTimeout(function () {
        divPlanets.forEach(planet => {
            planet.style.animationName = 'rotation';
            planet.classList.remove('static-planet');
        });
    }, 700)
}

function clickPopUp() {
    popUpPlanets.forEach(popUp => {
        popUp.onclick = function () {
            createCard(popUp.ariaValueText);
        }
    })
}
clickPopUp();
