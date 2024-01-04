stopBtn.onclick = function () {
    for (let index = 1; index < divPlanets.length; index++) {
        divPlanets[index].style.animationName = 'none';
        divPlanets[index].style.left = globalData.planets[index].staticPosition;
    }

    for(let index = 0; index < popUpPlanets.length; index++) {
        popUpPlanets[index].style.opacity = 1;
        popUpPlanets[index].style.top = globalData.planets[index].popUpPosition.top;
        popUpPlanets[index].style.left = globalData.planets[index].popUpPosition.left;
    }
}

playBtn.onclick = function () {
    closingPopUp()
    createCard('');

    setTimeout(function () {
        for (let index = 1; index < divPlanets.length; index++) {
            divPlanets[index].style.animationName = 'rotation';
            divPlanets[index].style.left = globalData.planets[index].dynamicPosition.left;
        }
    }, 700)
}

function closingPopUp() {
    popUpPlanets.forEach(popup => {
        popup.style.opacity = 0;
    })
}

function clickPopUp() {
    popUpPlanets.forEach(popUp => {
        popUp.onclick = function () {
            createCard(popUp.ariaValueText);
        }
    })
}
clickPopUp();
