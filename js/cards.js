const cardSection = document.querySelector('.card-section-left');

globalData.planets.forEach(element => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.id = element.id;

    const image = document.createElement('img');
    const title = document.createElement('h3');
    const description = document.createElement('p');
    const urlFromWiki = document.createElement('a');
    
    image.src = element.path;
    title.innerText = element.title;
    description.innerText = element.description;
    urlFromWiki.href = element.wikiUrl;
    urlFromWiki.target = '_blank';
    urlFromWiki.innerText = 'Scopri di piu >>';

    card.append(image, title, description, urlFromWiki);

    cardSection.append(card);
});

// Nella card del Sole, di Venere e di Giove non funziona il link (??????) mistero