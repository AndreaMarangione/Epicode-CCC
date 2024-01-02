const playBtn = document.getElementById('play');
const stopBtn = document.getElementById('stop');

const mercury = document.getElementById('mercury');
const venus = document.getElementById('venus');
const earth = document.getElementById('earth');
const mars = document.getElementById('mars');
const jupiter = document.getElementById('jupiter');
const saturn = document.getElementById('saturn');
const uranus = document.getElementById('uranus');
const neptune = document.getElementById('neptune');

const popUpSun = document.getElementById('descSun');
const popUpMercury = document.getElementById('descMercury');
const popUpVenus = document.getElementById('descVenus');
const popUpEarth = document.getElementById('descEarth');
const popUpMars = document.getElementById('descMars');
const popUpJupiter = document.getElementById('descJupiter');
const popUpSaturn = document.getElementById('descSaturn');
const popUpUranus = document.getElementById('descUranus');
const popUpNeptune = document.getElementById('descNeptune');

const closingCardBtn = document.getElementById('closingCardBtn');

const preloader = document.getElementById('preloader');

window.onload = function() {
    preloader.style.opacity = 0;
    setInterval(function(){
        preloader.style.display = 'none';
    },500)
}

function closingAll(event) {
    closingCardBtn.style.right = '-50px';
    closingCardBtn.style.opacity = 0;

    sunCard.style.opacity = 0; 
    sunCard.style.top = '500px';

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

function getClosingCardBtn(event) {
    closingCardBtn.style.right = '0px';
    closingCardBtn.style.opacity = 1;
}

const globalData = {
    planets: [
        {
            title : 'Il Sole',
            description: "Il Sole, fulcro della nostra galassia, è una sorgente inesauribile di energia e luce. Una sfera ardente di gas caldo, il Sole irradia calore e luce, permettendo la vita sulla Terra. Le immense eruzioni solari e le danze di particelle creano uno spettacolo celeste. Esplorare il Sole è un viaggio nell'energia stellare, fornendo chiavi per comprendere il funzionamento fondamentale del nostro sistema solare. ☀️🌌",
            path: './assets/imgCard/starSun.jpeg', 
            id: 'sunCard'
        },
        {
            title : 'Il Pianeta Mercurio',
            description: "Da aggiungere" ,
            path: './assets/imgCard/planetVenus.jpeg',
            id: 'mercuryCard'
        },
        {
            title : 'Il Pianeta Venere',
            description: "Venere, la 'gemella' rovente della Terra, è avvolta da un'atmosfera densa e calda. Il suo paesaggio è caratterizzato da pianure vulcaniche e montagne imponenti. Senza stagioni come le conosciamo, la sua superficie è costantemente avvolta in una fitta coperta nuvolosa. Esplorare Venere sfida la scienza, offrendo insight preziosi sulle dinamiche atmosferiche e geologiche. Un pianeta misterioso che continua a intrigare gli esploratori spaziali. 🪐🔥" ,
            path: './assets/imgCard/planetVenus.jpeg',
            id: 'venusCard'
        },
        {
            title : 'Il Pianeta Terra',
            description: "La Terra è il nostro pianeta, ricco di varietà. Oceani estesi, montagne imponenti e una vasta gamma di creature lo caratterizzano. Le stagioni portano cambiamenti, dalla neve all'estate. Esplorare la Terra significa scoprire luoghi sorprendenti e creare connessioni con la diversità che offre. 🌍✨",
            path: './assets/imgCard/planetEarth.jpeg', 
            id: 'earthCard'
        },
        {
            title : 'Il Pianeta Marte',
            description: "Marte, il nostro vicino nel sistema solare, è un pianeta rosso e affascinante. Con paesaggi desertici, valli profonde e poli gelati, offre uno spettacolo unico. Le sue stagioni sono lunghe, e le tempeste di sabbia possono essere intense. Esplorare Marte è un'avventura scientifica in continua evoluzione, aprendo nuove prospettive sul nostro sistema solare. 🚀🔴",
            path: './assets/imgCard/planetMars.jpeg',
            id: 'marsCard'
        },
        {
            title : 'Il Pianeta Giove',
            description: "Giove, il gigante gassoso del nostro sistema solare, è uno spettacolo maestoso. Con vaste fasce nuvolose e la Grande Macchia Rossa, è un pianeta di dimensioni imponenti. Le sue lune e il potente campo magnetico aggiungono al suo fascino. Esplorare Giove è un'avventura astrale, offrendo uno sguardo su fenomeni unici nel sistema solare e aprendo porte a nuove scoperte cosmiche. 🪐🌌",
            path: './assets/imgCard/planetJupiter.jpeg',
            id: 'jupiterCard'
        },
        {
            title : 'Il Pianeta Saturno',
            description: "Da aggiungere",
            path: './assets/imgCard/planetJupiter.jpeg',
            id: 'saturnCard'
        },
        {
            title : 'Il Pianeta Urano',
            description: "Da aggiungere",
            path: './assets/imgCard/planetJupiter.jpeg',
            id: 'uranusCard'
        },
        {
            title : 'Il Pianeta Nettuno',
            description: "Da aggiungere",
            path: './assets/imgCard/planetJupiter.jpeg',
            id: 'neptuneCard'
        },
    ]
}
