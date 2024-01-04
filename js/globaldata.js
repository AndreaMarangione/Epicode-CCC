const playBtn = document.getElementById('play');
const stopBtn = document.getElementById('stop');
const divPlanets = document.querySelectorAll('#galaxy-container div');
const popUpPlanets = document.querySelectorAll('.pop-up');
const preloader = document.getElementById('preloader');

window.onload = function () {
    preloader.style.opacity = 0;
    setInterval(function () {
        preloader.style.display = 'none';
    }, 500)
}

if (window.navigator.userAgent.indexOf('Safari') == 102) {
    const headerBg = document.getElementById('header');
    const footerBg = document.getElementById('footer');

    headerBg.style.background = '#040406';
    footerBg.style.background = '#040406';
}

const globalData = {
    planets: [
        {
            name: 'sun',
            title: 'Il Sole',
            description: "Il Sole, fulcro della nostra galassia, è una sorgente inesauribile di energia e luce. Una sfera ardente di gas caldo, il Sole irradia calore e luce, permettendo la vita sulla Terra. Le immense eruzioni solari e le danze di particelle creano uno spettacolo celeste. Esplorare il Sole è un viaggio nell'energia stellare, fornendo chiavi per comprendere il funzionamento fondamentale del nostro sistema solare. ☀️🌌",
            path: './assets/imgCard/starSun.jpeg',
            wikiUrl: 'https://it.wikipedia.org/wiki/Sole',
            popUpPosition: {
                top: '85px',
                left: '-8px',
            },
        },
        {
            name: 'mercury',
            title: 'Il Pianeta Mercurio',
            description: "Mercurio, il pianeta più vicino al Sole, è un mondo roccioso e scottante. Senza atmosfera significativa, le temperature variano estremamente. Esplorare Mercurio significa affrontare sfide termiche uniche e scoprire i segreti della sua storia geologica. 🪐🔥",
            path: './assets/imgCard/planetMercury.jpeg',
            wikiUrl: 'https://it.wikipedia.org/wiki/Mercurio_(astronomia)',
            staticPosition: '44%',
            dynamicPosition: {
                left: '47%',
            },
            popUpPosition: {
                top: '50px',
                left: '-35px',
            },
        },
        {
            name: 'venus',
            title: 'Il Pianeta Venere',
            description: "Venere, la 'gemella' rovente della Terra, è avvolta da un'atmosfera densa e calda. Il suo paesaggio è caratterizzato da pianure vulcaniche e montagne imponenti. Senza stagioni come le conosciamo, la sua superficie è costantemente avvolta in una fitta coperta nuvolosa. Esplorare Venere sfida la scienza, offrendo insight preziosi sulle dinamiche atmosferiche e geologiche. Un pianeta misterioso che continua a intrigare gli esploratori spaziali. 🪐🔥",
            path: './assets/imgCard/planetVenus.jpeg',
            wikiUrl: 'https://it.wikipedia.org/wiki/Venere_(astronomia)',
            staticPosition: '39%',
            dynamicPosition: {
                left: '45%',
            },
            popUpPosition: {
                top: '50px',
                left: '-35px',
            },
        },
        {
            name: 'earth',
            title: 'Il Pianeta Terra',
            description: "La Terra è il nostro pianeta, ricco di varietà. Oceani estesi, montagne imponenti e una vasta gamma di creature lo caratterizzano. Le stagioni portano cambiamenti, dalla neve all'estate. Esplorare la Terra significa scoprire luoghi sorprendenti e creare connessioni con la diversità che offre. 🌍✨",
            path: './assets/imgCard/planetEarth.jpeg',
            wikiUrl: 'https://it.wikipedia.org/wiki/Terra',
            staticPosition: '33%',
            dynamicPosition: {
                left: '42%',
            },
            popUpPosition: {
                top: '50px',
                left: '-30px',
            },
        },
        {
            name: 'mars',
            title: 'Il Pianeta Marte',
            description: "Marte, il nostro vicino nel sistema solare, è un pianeta rosso e affascinante. Con paesaggi desertici, valli profonde e poli gelati, offre uno spettacolo unico. Le sue stagioni sono lunghe, e le tempeste di sabbia possono essere intense. Esplorare Marte è un'avventura scientifica in continua evoluzione, aprendo nuove prospettive sul nostro sistema solare. 🚀🔴",
            path: './assets/imgCard/planetMars.jpeg',
            wikiUrl: 'https://it.wikipedia.org/wiki/Marte_(astronomia)',
            staticPosition: '28%',
            dynamicPosition: {
                left: '39%',
            },
            popUpPosition: {
                top: '50px',
                left: '-35px',
            },
        },
        {
            name: 'jupiter',
            title: 'Il Pianeta Giove',
            description: "Giove, il gigante gassoso del nostro sistema solare, è uno spettacolo maestoso. Con vaste fasce nuvolose e la Grande Macchia Rossa, è un pianeta di dimensioni imponenti. Le sue lune e il potente campo magnetico aggiungono al suo fascino. Esplorare Giove è un'avventura astrale, offrendo uno sguardo su fenomeni unici nel sistema solare e aprendo porte a nuove scoperte cosmiche. 🪐🌌",
            path: './assets/imgCard/planetJupiter.jpeg',
            wikiUrl: 'https://it.wikipedia.org/wiki/Giove_(astronomia)',
            staticPosition: '22%',
            dynamicPosition: {
                left: '36%',
            },
            popUpPosition: {
                top: '50px',
                left: '-27px',
            },
        },
        {
            name: 'saturn',
            title: 'Il Pianeta Saturno',
            description: "Saturno, famoso per gli anelli spettacolari, è un gigante gassoso con una presenza iconica. Esplorare Saturno significa immergersi nell'architettura intricata dei suoi anelli e studiare la sua vasta famiglia di lune. Un pianeta affascinante da esaminare nel nostro sistema solare. 🪐💫",
            path: './assets/imgCard/planetSaturn.jpeg',
            wikiUrl: 'https://it.wikipedia.org/wiki/Saturno_(astronomia)',
            staticPosition: '16%',
            dynamicPosition: {
                left: '32%',
            },
            popUpPosition: {
                top: '50px',
                left: '-20px',
            },
        },
        {
            name: 'uranus',
            title: 'Il Pianeta Urano',
            description: "Urano, il gigante ghiacciato, si distingue per l'inclinazione estrema dell'asse. Con un aspetto azzurro e anelli sottili, offre uno spettacolo celeste unico. Esplorare Urano significa sondare i misteri delle sue atmosfere dinamiche e della sua struttura interna. 🪐❄️",
            path: './assets/imgCard/planetUrano.jpeg',
            wikiUrl: 'https://it.wikipedia.org/wiki/Urano_(astronomia)',
            staticPosition: '10%',
            dynamicPosition: {
                left: '29%',
            },
            popUpPosition: {
                top: '50px',
                left: '-15px',
            },
        },
        {
            name: 'neptune',
            title: 'Il Pianeta Nettuno',
            description: "Nettuno, il pianeta blu scuro, è un gigante gassoso con atmosfera tempestosa e anelli sfumati. Le sue lune, tra cui Tritone con geysers, sono affascinanti. Esplorare Nettuno implica scrutare le sue caratteristiche atmosferiche e comprendere la sua dinamica unica. 🪐🌊",
            path: './assets/imgCard/planetNeptune.jpeg',
            wikiUrl: 'https://it.wikipedia.org/wiki/Nettuno_(astronomia)',
            staticPosition: '4%',
            dynamicPosition: {
                left: '26%',
            },
            popUpPosition: {
                top: '50px',
                left: '-15px',
            },
        },
    ]
}