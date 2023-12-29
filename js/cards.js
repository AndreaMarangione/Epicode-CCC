const cardSection = document.querySelector('.card-section-left');



function createCard() {
    globalData.planets.forEach(element => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.id = element.id;

        const closeCardBtn = document.createElement('span');
        const image = document.createElement('img');
        const title = document.createElement('h3');
        const description = document.createElement('p');

        
        image.src = element.path;
        title.innerText = element.title;
        description.innerText = element.description;

        card.append(closeCardBtn, image, title, description)

        cardSection.append(card)

    });
}

createCard()
