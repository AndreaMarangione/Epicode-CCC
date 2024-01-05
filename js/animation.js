stopBtn.onclick = function () {
    for (let index = 1; index < divPlanets.length; index++) {
        divPlanets[index].style.animationName = 'none';
        divPlanets[index].style.left = globalData.planets[index].staticPosition.left;
        divPlanets[index].style.width = globalData.planets[index].staticPosition.width;
    }

    for (let index = 0; index < popUpPlanets.length; index++) {
        popUpPlanets[index].style.opacity = 1;
        popUpPlanets[index].style.top = globalData.planets[index].popUpPosition.top;
        popUpPlanets[index].style.left = globalData.planets[index].popUpPosition.left;
    }

    planetsImg.forEach(planet => {
        planet.style.cursor = 'pointer';
    })
}

playBtn.onclick = function () {
    closingPopUp()
    createCard('');

    setTimeout(function () {
        for (let index = 1; index < divPlanets.length; index++) {
            divPlanets[index].style.animationName = 'rotation';
            divPlanets[index].style.left = globalData.planets[index].dynamicPosition.left;
            divPlanets[index].style.width = globalData.planets[index].dynamicPosition.width;
        }
    }, 700)

    planetsImg.forEach(planet => {
        planet.style.cursor = 'default';
    })
}

function closingPopUp() {
    popUpPlanets.forEach(popup => {
        popup.style.opacity = 0;
    })
}

function clickPopUp(enable) {
    popUpPlanets.forEach(popUp => {
        popUp.onclick = function () {
            createCard(popUp.ariaValueText);
        }
    })
    planetsImg.forEach(planet => {
        planet.onclick = function () {
            createCard(planet.ariaValueText);
        }
    })
}
clickPopUp();
