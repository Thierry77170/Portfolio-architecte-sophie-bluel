// Bouton filtre checké par défaut au chargement de la page
btnActivated.style.backgroundColor = "#1D6154";
btnActivated.style.color = "#ffffff";

// Fonction pour afficher les éléments invisibles si l'utilisateur est connecté
invisibleElements();

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
    } 
});


// Gestion des modales
// Modales invisibles par défault géré par le CSS
// Fermeture des modales au click sur les croix
closeModal.addEventListener("click", ()=> {
    openModal.style.display = "none";
});
closeModal2.addEventListener("click", ()=> {
    openModal.style.display = "none";
    openModal2.style.display = "none";
});

// Ouverture des modales au click sur le lien "modofier" et au bouton "Ajouter photo" 
linkEditTag.addEventListener("click", ()=> {
    openModal.style.display = "flex";  
});
btnModalAddTag.addEventListener("click", ()=> {
    openModal2.style.display = "flex"; 
});

// Retour sur la modale précédente
arrowLeftTag.addEventListener("click", ()=> {
    openModal2.style.display = "none";
    openModal.style.display = "flex"; 
});



// Fonction pour gérer la supression d'une image dans la modale et  la page d'accueil
console.log(frameIconTags);

function deleteImage() {
    for (i = 0; i <  frameIconTags.length; i++) {
        //Variable pour la requête de la supression de l'image
        const req = {
            method: "DELETE",
            headers: {
                "accept" : "*/*",
                "Authorization" : `Bearer ${token}`,
                },
        };

        frameIconTags[i].addEventListener("click", (event) => {
            fetch(`http://localhost:5678/api/works/` + [i], req) 
            .then(res => {
                if (res.status  !== 200) {
                    console.log("suppression de l'image échoué")
                }
                return res.json()
            })
            .then(dataWork => {
                if (dataWork.status  === 200) {
                    console.log("suppression de l'image réussi");
                }           
            })
        });
    };
};

btnValiderTag.style.backgroundColor = "#A7A7A7";

// Fonction pour gérer l'ajout d'images et titres dans la page d'accueil et dans la modale 
//btnModalAddTag.addEventListener("click",(event) => {
    //event.preventDefault
//});



    

    