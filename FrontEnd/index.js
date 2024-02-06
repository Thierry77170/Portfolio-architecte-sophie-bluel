// Bouton filtre checké par défaut au chargement de la page
btnActivated.style.backgroundColor = "#1D6154";
btnActivated.style.color = "#ffffff";

// Fonction pour afficher les éléments au chargement de la page et de la modale
btnTous();
loadingImagesForModal ()

// Évènement pour gérer le click des filtres
for (let i = 0; i < btnSorting.length; i++) {
    btnSorting[i].addEventListener("click", () => {
        bgChange (i);
        // Application de la fonction btnTous uniquement au premier bouton
        if (i === 0) {
            btnTous();  
        }  
        // Application de la fonction btnObjets uniquement au premier bouton
        if (i === 1) {
            btnObjets();  
        }  
        // Application de la fonction btnAppartements uniquement au premier bouton
        if (i === 2) {
            btnAppartements();  
        }  
        // Application de la fonction btnHotelEtResto uniquement au premier bouton
        if (i === 3) {
            btnHotelEtResto();  
        }  
    });
};

// On empêche le comportement par défaut "submit"
 formIndex.addEventListener("submit", (event) => {
    event.preventDefault();
});

// On transforme le lien "login" en "logout" lorsque l'utilisateur est connecté
document.addEventListener("DOMContentLoaded", () => {
    // Vérifier si le token est présent dans le localStorage avec la variable dans config.js
    // On sélectionne le lien "logout" dans la page index.html la variable dans config.js
    // Si le token est présent, l'utilisateur est connecté
    if (token) {
        logout.innerText = "logout"; 
        btnContainerSorting.style.display = "none";
        // Ajouter un événement de clic pour gérer la déconnexion
        logout.addEventListener("click", () => {
            logoutUser();
            window.location.href = "index.html";
        });  
    } else if (!token) {
        invisibleElements();
    }   
});


// Gestion de la modale
// Modale invisible par défault
openModal.style.display ="none";

// Fermeture de la modale au click sur la croix
closeModal.addEventListener("click", ()=> {
    openModal.style.display = "none";
});

// Ouverture de la madale au click sur le lien "modofier" et chargement des images 
linkEditTag.addEventListener("click", ()=> {
    openModal.style.display = "flex";  
});











console.log(".frameIcon0.value");

// Fonction pour gérer la supression d'une image dans la modale et  la page d'accueil

    //Variable pour la requête de la supression de l'image
    const req = {
        method: "DELETE",
        headers: {
            "accept" : "*/*",
            },
    };

    