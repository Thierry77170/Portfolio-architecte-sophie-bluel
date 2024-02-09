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
    .catch(error => console.error("erreur lors de la récupération des données"));
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
        //const token = window.sessionStorage.getItem("token");
        divBlackHeaderRectangle.style.display = "flex";
        linkEditTag.style.display = "flex";
    }
};

// Fonction pour gérer l'affichage des images de la modale
async function loadingImagesForModal () {
    // Récupération des images par l'API
    await fetch("http://localhost:5678/api/works")
    .then(reponse => reponse.json())
    .then(dataWorks => {   
        const imagesUrl = dataWorks.map(work => work.imageUrl);         
        // Récupération des balises parents pour les images dans "config.js"            
        // Création des balises image[i] et de l'icone delete
        for (let i = 0; i < imagesUrl.length; i++) {
            const figureTag = document.createElement("figure");
            const imagesTags = document.createElement("img");
            const spanDeleteTag = document.createElement("span"); 
            const deleteTag = document.createElement("i");
            
            figureTag.classList.add("worksModale");
            imagesTags.src = imagesUrl[i];  
            spanDeleteTag.classList.add("frameIcon"); 
            deleteTag.classList.add("fa-solid");
            deleteTag.classList.add("fa-trash-can");
            
            // implémentation des balises image[i]  dans la modale
            spanDeleteTag.appendChild(deleteTag);
            figureTag.appendChild(imagesTags);
            figureTag.appendChild(spanDeleteTag); 
            galleryModalTag.appendChild(figureTag);   
        }
        deleteImage();
    })
    .catch(error => console.error("erreur lors de la récupération des données"));
};