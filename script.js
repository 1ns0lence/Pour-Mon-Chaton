

const btnNon = document.querySelector('.btn-non');
const btnOui = document.querySelector('.btn-oui');
const container = document.querySelector('.container');
const statusMsg = document.getElementById('status-message');
const esquive = (e) => {
    e.preventDefault(); // Bloque le comportement par défaut (l'ombre/le focus)

    if (btnNon.style.position !== 'absolute') {
        const initialLeft = btnNon.offsetLeft;
        const initialTop = btnNon.offsetTop;
        btnNon.style.left = `${initialLeft}px`;
        btnNon.style.top = `${initialTop}px`;
        btnNon.style.position = 'absolute';
        btnNon.style.margin = '0';
    }

    const containerRect = container.getBoundingClientRect();
    const btnRect = btnNon.getBoundingClientRect();
    const padding = 20;

    const maxX = containerRect.width - btnRect.width - padding;
    const maxY = containerRect.height - btnRect.height - padding;

    const randomX = Math.floor(Math.random() * (maxX - padding)) + padding;
    const randomY = Math.floor(Math.random() * (maxY - padding)) + padding;

    btnNon.style.left = `${randomX}px`;
    btnNon.style.top = `${randomY}px`;

    const phrases = ["Peut-être qu'un jour tu y arriveras ? Ou pas", "Raté !", "Tu sais pas viser ou quoi ?", "Tu as juste à appuyer sur oui tu sais ? :)", "Allez, encore un effort !", "Tu vas y passer la journée comme ça ?", "Essaie encore !", "Presque... ou pas !"];
    statusMsg.innerText = phrases[Math.floor(Math.random() * phrases.length)];
};

// On applique l'esquive au clic ET au toucher pour plus de réactivité
btnNon.addEventListener('click', esquive);
btnNon.addEventListener('touchstart', esquive);



btnNon.addEventListener('click', (e) => {
    e.preventDefault();

    // --- FIX DU TP ---
    if (btnNon.style.position !== 'absolute') {
        // 1. On récupère sa position EXACTE dans la carte AVANT de changer quoi que ce soit
        const initialLeft = btnNon.offsetLeft;
        const initialTop = btnNon.offsetTop;

        // 2. On lui donne ces coordonnées en dur
        btnNon.style.left = `${initialLeft}px`;
        btnNon.style.top = `${initialTop}px`;
        
        // 3. MAINTENANT on passe en absolute, il ne bougera pas d'un poil
        btnNon.style.position = 'absolute';
        btnNon.style.margin = '0'; 
    }
    // -----------------

    const containerRect = container.getBoundingClientRect();
    const btnRect = btnNon.getBoundingClientRect();

    const padding = 20;
    const maxX = containerRect.width - btnRect.width - padding;
    const maxY = containerRect.height - btnRect.height - padding;

    const randomX = Math.floor(Math.random() * (maxX - padding)) + padding;
    const randomY = Math.floor(Math.random() * (maxY - padding)) + padding;

    btnNon.style.left = `${randomX}px`;
    btnNon.style.top = `${randomY}px`;
});

// Logique pour le bouton Oui (Victoire !)
btnOui.addEventListener('click', () => {
    // 1. Lance les confettis
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff4d6d', '#ff758f', '#ffb7c5']
    });

    // 2. CHANGE L'IMAGE PAR UN GIF
    // Remplace 'images/ton-gif-trop-mignon.gif' par le vrai chemin de ton fichier
    const img = document.querySelector('.cat-image');
    img.src = 'images/YippieCat.gif'; 

    // 3. Mise à jour des textes
    document.querySelector('h1').innerText = "Yayyyyyy ! ❤️";
    document.querySelector('p').innerText = "Je savais que t'allais dire oui !";
    
    // 4. On cache le message d'erreur et le bouton Non
    statusMsg.innerText = "";
    btnNon.style.display = 'none';
});