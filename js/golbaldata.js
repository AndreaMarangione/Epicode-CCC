const playBtn = document.getElementById('play');
const stopBtn = document.getElementById('stop');
const divPlanets = document.querySelectorAll('#galaxy-container > div');
const popUpPlanets = document.querySelectorAll('.pop-up');
const popUpSun = document.getElementById('sun');
const preloader = document.getElementById('preloader');

window.onload = function() {
    preloader.style.opacity = 0;
    setInterval(function(){
        preloader.style.display = 'none';
    },500)
}

if (window.navigator.userAgent.indexOf('Safari') == 102) {
    const headerBg = document.getElementById('header');   
    const footerBg = document.getElementById('footer');   

    headerBg.style.background = '#040406';
    footerBg.style.background = '#040406';
}

function closingPopUp() {
    popUpPlanets.forEach(popup => {
        popup.style.opacity = 0;
    })
}

const globalData = {
    planets: [
        {
            name: 'sun', 
            title: 'Il Sole',
            description: "Il Sole, fulcro della nostra galassia, è una sorgente inesauribile di energia e luce. Una sfera ardente di gas caldo, il Sole irradia calore e luce, permettendo la vita sulla Terra. Le immense eruzioni solari e le danze di particelle creano uno spettacolo celeste. Esplorare il Sole è un viaggio nell'energia stellare, fornendo chiavi per comprendere il funzionamento fondamentale del nostro sistema solare. ☀️🌌",
            path: './assets/imgCard/starSun.jpeg', 
            id: 'sunCard',
            wikiUrl: 'https://it.wikipedia.org/wiki/Sole'
        },
        {
            name: 'mercury', 
            title : 'Il Pianeta Mercurio',
            description: "Mercurio, il pianeta più vicino al Sole, è un mondo roccioso e scottante. Senza atmosfera significativa, le temperature variano estremamente. Esplorare Mercurio significa affrontare sfide termiche uniche e scoprire i segreti della sua storia geologica. 🪐🔥" ,
            path: './assets/imgCard/planetMercury.jpeg',
            id: 'mercuryCard',
            wikiUrl: 'https://it.wikipedia.org/wiki/Mercurio_(astronomia)'
        },
        {
            name: 'venus', 
            title : 'Il Pianeta Venere',
            description: "Venere, la 'gemella' rovente della Terra, è avvolta da un'atmosfera densa e calda. Il suo paesaggio è caratterizzato da pianure vulcaniche e montagne imponenti. Senza stagioni come le conosciamo, la sua superficie è costantemente avvolta in una fitta coperta nuvolosa. Esplorare Venere sfida la scienza, offrendo insight preziosi sulle dinamiche atmosferiche e geologiche. Un pianeta misterioso che continua a intrigare gli esploratori spaziali. 🪐🔥" ,
            path: './assets/imgCard/planetVenus.jpeg',
            id: 'venusCard',
            wikiUrl: 'https://it.wikipedia.org/wiki/Venere_(astronomia)'
        },
        {
            name: 'earth', 
            title : 'Il Pianeta Terra',
            description: "La Terra è il nostro pianeta, ricco di varietà. Oceani estesi, montagne imponenti e una vasta gamma di creature lo caratterizzano. Le stagioni portano cambiamenti, dalla neve all'estate. Esplorare la Terra significa scoprire luoghi sorprendenti e creare connessioni con la diversità che offre. 🌍✨",
            path: './assets/imgCard/planetEarth.jpeg', 
            id: 'earthCard',
            wikiUrl: 'https://it.wikipedia.org/wiki/Terra'
        },
        {
            name: 'mars', 
            title : 'Il Pianeta Marte',
            description: "Marte, il nostro vicino nel sistema solare, è un pianeta rosso e affascinante. Con paesaggi desertici, valli profonde e poli gelati, offre uno spettacolo unico. Le sue stagioni sono lunghe, e le tempeste di sabbia possono essere intense. Esplorare Marte è un'avventura scientifica in continua evoluzione, aprendo nuove prospettive sul nostro sistema solare. 🚀🔴",
            path: './assets/imgCard/planetMars.jpeg',
            id: 'marsCard',
            wikiUrl: 'https://it.wikipedia.org/wiki/Marte_(astronomia)'
        },
        {
            name: 'jupiter', 
            title : 'Il Pianeta Giove',
            description: "Giove, il gigante gassoso del nostro sistema solare, è uno spettacolo maestoso. Con vaste fasce nuvolose e la Grande Macchia Rossa, è un pianeta di dimensioni imponenti. Le sue lune e il potente campo magnetico aggiungono al suo fascino. Esplorare Giove è un'avventura astrale, offrendo uno sguardo su fenomeni unici nel sistema solare e aprendo porte a nuove scoperte cosmiche. 🪐🌌",
            path: './assets/imgCard/planetJupiter.jpeg',
            id: 'jupiterCard',
            wikiUrl: 'https://it.wikipedia.org/wiki/Giove_(astronomia)'
        },
        {
            name: 'saturn', 
            title : 'Il Pianeta Saturno',
            description: "Saturno, famoso per gli anelli spettacolari, è un gigante gassoso con una presenza iconica. Esplorare Saturno significa immergersi nell'architettura intricata dei suoi anelli e studiare la sua vasta famiglia di lune. Un pianeta affascinante da esaminare nel nostro sistema solare. 🪐💫",
            path: './assets/imgCard/planetSaturn.jpeg',
            id: 'saturnCard',
            wikiUrl: 'https://it.wikipedia.org/wiki/Saturno_(astronomia)'
        },
        {
            name: 'uranus', 
            title : 'Il Pianeta Urano',
            description: "Urano, il gigante ghiacciato, si distingue per l'inclinazione estrema dell'asse. Con un aspetto azzurro e anelli sottili, offre uno spettacolo celeste unico. Esplorare Urano significa sondare i misteri delle sue atmosfere dinamiche e della sua struttura interna. 🪐❄️",
            path: './assets/imgCard/planetUrano.jpeg',
            id: 'uranusCard',
            wikiUrl: 'https://it.wikipedia.org/wiki/Urano_(astronomia)'
        },
        {
            name: 'neptune', 
            title : 'Il Pianeta Nettuno',
            description: "Nettuno, il pianeta blu scuro, è un gigante gassoso con atmosfera tempestosa e anelli sfumati. Le sue lune, tra cui Tritone con geysers, sono affascinanti. Esplorare Nettuno implica scrutare le sue caratteristiche atmosferiche e comprendere la sua dinamica unica. 🪐🌊",
            path: './assets/imgCard/planetNeptune.jpeg',
            id: 'neptuneCard',
            wikiUrl: 'https://it.wikipedia.org/wiki/Nettuno_(astronomia)'
        },
    ]
}