// Fonction pour gérer le changement de couleur des filtres au click
function bgChange (i) {
    // Pour vérifier si un bouton est déjà actif
    const activated = btnSorting[i].classList.contains("activated");
    // Pour réinitialiser le bouton actif à son état initial au click d'un autre bouton
    btnSorting.forEach((btn) => {
        btn.style.backgroundColor = "#ffffff";
        btn.style.color = "#1D6154";
        btn.classList.remove("activated");
    });
    if (!activated) {
        // Pour activer le bouton cliqué
        btnSorting[i].style.backgroundColor = "#1D6154";
        btnSorting[i].style.color = "#ffffff";
        btnSorting[i].classList.add("activated");
    } else {
        btnSorting[i].style.backgroundColor = "#1D6154";
        btnSorting[i].style.color = "#ffffff";
    }
};

// Fonction pour gérer le bouton "Tous" du filtre au click
async function getWorks() {
    // Récupération des images et titres par l'API
    await fetch("http://localhost:5678/api/works")
    .then(reponse => reponse.json())
    .then(dataWorks => {   
        const imagesUrl = dataWorks.map(work => work.imageUrl); 
        const title = dataWorks.map(work => work.title);        
        // Récupération des balises parents pour les images et les titres dans "config.js"        
        // Effacement des éléments existants
        galleryTag.innerHTML = "";       
        // Création de la balise image[i] et de la balise titre[i]
        for (let i = 0; i < imagesUrl.length; i++) {
            const figureTag = document.createElement("figure");
            const imagesTags = document.createElement("img");
            const figcaptionTitle = document.createElement("figcaption"); 

            figureTag.classList.add("works");
            imagesTags.src = imagesUrl[i];  
            figcaptionTitle.innerText = title[i];

            // implémentation de la balise image[i] et de la balise titre[i]  dans la balise parent
            figureTag.appendChild(imagesTags);
            figureTag.appendChild(figcaptionTitle); 
            galleryTag.appendChild(figureTag);      
        }
    })
    //.catch(error => console.error("erreur lors de la récupération des données"));
};

// Fonction pour gérer le bouton "Objets" du filtre au click
async function btnObjets () {
    // Récupération des images et titres par l'API
    await fetch("http://localhost:5678/api/works")
    .then(reponse => reponse.json())
    .then(dataWorks => {   
        const filteredObjects = dataWorks.filter(work => work.category.name === "Objets");
        const resultsImages = filteredObjects.map(work => work.imageUrl);
        const resultsTitles = filteredObjects.map(work => work.title);       
        // Récupération des balises parents pour les images et les titres dans "config.js"
        // Effacement des éléments existants
        galleryTag.innerHTML = ""; 
        // Création de la balise image[i] et de la balise titre[i]
        for (let i = 0; i < filteredObjects.length; i++) {
            const figureTag = document.createElement("figure");
            console.log(figureTag);
            const imagesTags = document.createElement("img");
            const figcaptionTitle = document.createElement("figcaption"); 

            figureTag.classList.add("work");
            imagesTags.src = resultsImages[i];  
            figcaptionTitle.innerText = resultsTitles[i];

            // implémentation de la balise image[i] et de la balise titre[i]  dans la balise parent
            figureTag.appendChild(imagesTags);
            figureTag.appendChild(figcaptionTitle); 
            galleryTag.appendChild(figureTag); 
        }
    })
    .catch(error => console.error("erreur lors de la récupération des données"));
};


// Fonction pour gérer le bouton "Appartements" du filtre au click
async function btnAppartements () {
    // Récupération des images et titres par l'API
    await fetch("http://localhost:5678/api/works")
    .then(reponse => reponse.json())
    .then(dataWorks => {   
        const filteredAppartements = dataWorks.filter(work => work.category.name === "Appartements");
        const resultsImages = filteredAppartements.map(work => work.imageUrl);
        const resultsTitles = filteredAppartements.map(work => work.title);      
        // Récupération des balises parents pour les images et les titres dans "config.js"
        // Effacement des éléments existants
        galleryTag.innerHTML = ""; 
        // Création de la balise image[i] et de la balise titre[i]
        for (let i = 0; i < filteredAppartements.length; i++) {
            const figureTag = document.createElement("figure");
            console.log(figureTag);
            const imagesTags = document.createElement("img");
            const figcaptionTitle = document.createElement("figcaption"); 

            figureTag.classList.add("works");
            imagesTags.src = resultsImages[i];  
            figcaptionTitle.innerText = resultsTitles[i];

            // implémentation de la balise image[i] et de la balise titre[i]  dans la balise parent
            figureTag.appendChild(imagesTags);
            figureTag.appendChild(figcaptionTitle); 
            galleryTag.appendChild(figureTag);    
        }
    })
    .catch(error => console.error("erreur lors de la récupération des données"));
};

// Fonction pour gérer le bouton "Hôtels et restaurants" du filtre au click
async function btnHotelEtResto () {
    // Récupération des images et titres par l'API
    await fetch("http://localhost:5678/api/works")
    .then(reponse => reponse.json())
    .then(dataWorks => {   
        const filteredHotelEtResto = dataWorks.filter(work => work.category.name === "Hotels & restaurants");
        const resultsImages = filteredHotelEtResto.map(work => work.imageUrl);
        const resultsTitles = filteredHotelEtResto.map(work => work.title);       
        // Récupération des balises parents pour les images et les titres dans "config.js"
        // Effacement des éléments existants
        galleryTag.innerHTML = ""; 
        // Création de la balise image[i] et de la balise titre[i]
        for (let i = 0; i < filteredHotelEtResto.length; i++) {
            const figureTag = document.createElement("figure");
            console.log(figureTag);
            const imagesTags = document.createElement("img");
            const figcaptionTitle = document.createElement("figcaption"); 

            figureTag.classList.add("works");
            imagesTags.src = resultsImages[i];  
            figcaptionTitle.innerText = resultsTitles[i];

            // implémentation de la balise image[i] et de la balise titre[i]  dans la balise parent
            figureTag.appendChild(imagesTags);
            figureTag.appendChild(figcaptionTitle); 
            galleryTag.appendChild(figureTag);   
        }
    })
    .catch(error => console.error("erreur lors de la récupération des données"));
};

// Fonction pour déconnecter l'utilisateur
function logoutUser() {
    // Supprimer le token du localStorage
    window.localStorage.removeItem("token");
};

// Fonction pour rendre les élements invisibles du index.html visible si l'utilisateur est connecté
function invisibleElements() {
    if (token) {
        divBlackHeaderRectangle.style.display = "flex";
        linkEditTag.style.display = "flex";
    }
};

// Fonction pour gérer l'affichage des images de la modale
async function loadingImagesForModal() {
    try {
        const response = await fetch("http://localhost:5678/api/works");
        const dataWorks = await response.json();
      
        const imagesUrl = dataWorks.map(work => work.imageUrl);

        for (let i = 0; i < imagesUrl.length; i++) {
            const figureTag = document.createElement("figure");
            const imagesTags = document.createElement("img");
            const spanDeleteTag = document.createElement("span");
            const deleteTag = document.createElement("i");

            figureTag.classList.add("worksModale");
            imagesTags.src = imagesUrl[i];
            imagesTags.setAttribute("data-id", dataWorks[i].id);
            spanDeleteTag.classList.add("frameIcon");
            deleteTag.classList.add("fa-solid", "fa-trash-can");

            spanDeleteTag.appendChild(deleteTag);
            figureTag.appendChild(imagesTags);
            figureTag.appendChild(spanDeleteTag);
            galleryModalTag.appendChild(figureTag);

            // On ajoute un gestionnaire d'événements au clic sur spanDeleteTag
            spanDeleteTag.addEventListener("click", (event) => {
                // Utilisez event.target.closest() pour trouver l'élément figure parent
                const figureTag = event.target.closest("figure");
                if (figureTag) {
                    // On accède à l'ID de l'image à partir de l'élément figure
                    const imageId = figureTag.querySelector("img").getAttribute("data-id");
                    // On appel la fonction deleteImage() avec l'ID de l'image
                    deleteImage(imageId, event); 
                    window.location.href = "index.html"; 
                }
            });
        }
    } catch (error) {
       console.error("erreur lors de la récupération des données :", error);
    }
}

// Fonction pour gérer la supression d'une image dans la modale et  la page d'accueil
async function deleteImage(imageId, evnt) {
    try {      
        //event.preventDefault();
        const req = {
            method: "DELETE",
            headers: {
                "accept": "*/*",
                "Authorization": `Bearer ${token}`,
            },
        };
        const response = await fetch(`http://localhost:5678/api/works/${imageId}`, req);     
        if (response.ok) {
            console.log("La suppression de l'image a réussi");

             // On supprimer l'image de la galerie sur la page d'accueil
            const imageGallery = document.querySelector(".works");
            const imageToRemove = imageGallery.querySelector(`[data-id="${imageId}"]`);
            console.log( imageToRemove);
        if (imageToRemove) {
            imageGallery.removeChild(imageToRemove);
        }
        // Supprimer l'image de la modale
        const imageModal = document.querySelector(`.worksModale[data-id="${imageId}"]`);
        if (imageModal) {
            imageModal.remove();
        }
        } else {
            console.log("La suppression de l'image a échoué");
            throw new Error("La suppression de l'image a échoué");
        }
    } catch (error) {
       console.error("Une erreur s'est produite lors de la suppression de l'image :", error);
    }
}

// Fonction pour fermer la modal en cliquant à l'extérieur de la <div class="modalWrapper">
function modalClosure() {
    // On cache la modale en changeant son style d'affichage
    if (openModal) {
        openModal.style.display = "none"; 
    }
   if ( openModal2) {
    openModal2.style.display = "none"; 
   }
}