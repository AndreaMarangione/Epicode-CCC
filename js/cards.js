function createCard(planet) {
    const cardSection = document.querySelector('.card-section-left');

    if (cardSection.childNodes.length > 0) {
        cardSection.firstChild.remove();
    }

    globalData.planets.forEach(element => {
        if (planet == element.name) {
            const card = document.createElement('div');
            card.classList.add('card');

            const image = document.createElement('img');
            const title = document.createElement('h3');
            const description = document.createElement('p');
            const urlFromWiki = document.createElement('a');
            const closeBtn = document.createElement('button');
            closeBtn.innerHTML = '<ion-icon name="close-circle"></ion-icon>';

            image.src = element.path;
            title.textContent = element.title;
            description.textContent = element.description;
            urlFromWiki.href = element.wikiUrl;
            urlFromWiki.target = '_blank';
            urlFromWiki.textContent = ' Scopri di piu >>';

            description.append(urlFromWiki);
            card.append(closeBtn, image, title, description);
            cardSection.append(card);

            card.style.opacity = 1;
            card.style.top = '10%';

            closeBtn.onclick = function () {
                card.style.opacity = 0;
                card.style.top = '500px';
                setInterval(function () {
                    card.remove();
                }, 500)
            }
        }
    })
}
