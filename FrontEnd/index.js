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

// Fonction pour gérer l'affichage des images de la modale
async function loadingImagesForModal () {
    // Récupération des images par l'API
    await fetch("http://localhost:5678/api/works")
    .then(reponse => reponse.json())
    .then(dataWorks => {   
        const imagesUrl = dataWorks.map(work => work.imageUrl);         
        // Récupération des balises parents pour les images dans "config.js"        
        // Effacement des éléments existants
        worksModaleTag.forEach(btn => {
            btn.innerHTML = "";
        });
        // Création de la balise image[i] et de la balise titre[i]
        for (let i = 0; i < worksModaleTag.length; i++) {
            const imagesTags = document.createElement("img"); 
            imagesTags.src = imagesUrl[i];
            // implémentation de la balise image[i] dans la balise parent 
            worksModaleTag[i].appendChild(imagesTags);
        }
    })
    .catch(error => console.error("erreur lors de la récupération des données"));
};