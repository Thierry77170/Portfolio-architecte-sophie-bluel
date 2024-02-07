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
async function btnTous () {
    // Récupération des images et titres par l'API
    await fetch("http://localhost:5678/api/works")
    .then(reponse => reponse.json())
    .then(dataWorks => {   
        const imagesUrl = dataWorks.map(work => work.imageUrl);  
        const title = dataWorks.map(work => work.title);        
        // Récupération des balises parents pour les images et les titres dans "config.js"        
        // Effacement des éléments existants
        worksTags.forEach(btn => {
            btn.innerHTML = "";
        });
        // Création de la balise image[i] et de la balise titre[i]
        for (let i = 0; i < worksTags.length; i++) {
            const imagesTags = document.createElement("img"); 
            imagesTags.src = imagesUrl[i];
            const figcaptionTitle = document.createElement("figcaption"); 
            figcaptionTitle.innerText = title[i];
            // implémentation de la balise image[i] et de la balise titre[i]  dans la balise parent 
            worksTags[i].appendChild(imagesTags);
            worksTags[i].appendChild(figcaptionTitle);
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
        worksTags.forEach(btn => {
            btn.innerHTML = "";
        });
        // Création de la balise image[i] et de la balise titre[i]
        for (let i = 0; i < filteredObjects.length; i++) {
            const imagesTags = document.createElement("img"); 
            imagesTags.src = resultsImages[i];
            const figcaptionTitle = document.createElement("figcaption"); 
            figcaptionTitle.innerText = resultsTitles[i];
            // implémentation de la balise image[i] et de la balise titre[i]  dans la balise parent 
            worksTags[i].appendChild(imagesTags);
            worksTags[i].appendChild(figcaptionTitle);
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
        worksTags.forEach(btn => {
            btn.innerHTML = "";
        });
        // Création de la balise image[i] et de la balise titre[i]
        for (let i = 0; i < filteredAppartements.length; i++) {
            const imagesTags = document.createElement("img"); 
            imagesTags.src = resultsImages[i];
            const figcaptionTitle = document.createElement("figcaption"); 
            figcaptionTitle.innerText = resultsTitles[i];
            // implémentation de la balise image[i] et de la balise titre[i]  dans la balise parent 
            worksTags[i].appendChild(imagesTags);
            worksTags[i].appendChild(figcaptionTitle);
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
        worksTags.forEach(btn => {
            btn.innerHTML = "";
        });
        // Création de la balise image[i] et de la balise titre[i]
        for (let i = 0; i < filteredHotelEtResto.length; i++) {
            const imagesTags = document.createElement("img"); 
            imagesTags.src = resultsImages[i];
            const figcaptionTitle = document.createElement("figcaption"); 
            figcaptionTitle.innerText = resultsTitles[i];
            // implémentation de la balise image[i] et de la balise titre[i]  dans la balise parent 
            worksTags[i].appendChild(imagesTags);
            worksTags[i].appendChild(figcaptionTitle);
        }
    })
    .catch(error => console.error("erreur lors de la récupération des données"));
};

// Fonction pour déconnecter l'utilisateur
function logoutUser() {
    // Supprimer le token du localStorage
    window.localStorage.removeItem("token");
};

// Fonction pour les élements invisibles du index.html
function invisibleElements() {
    if (token) {
        const token = window.sessionStorage.getItem("token");
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
        // Effacement des éléments existants     
        // Création de la balise image[i] et de l'icone delete
        for (let i = 0; i < worksModaleTag.length; i++) {
            const imagesTags = document.createElement("img"); 
            const spanDeleteTag = document.createElement("span");     
            spanDeleteTag.classList.add("frameIcon");     
            const deleteTag = document.createElement("i");
            deleteTag.classList.add("fa-solid");
            deleteTag.classList.add("fa-trash-can");
            imagesTags.src = imagesUrl[i];
            spanDeleteTag.appendChild(deleteTag);
            // implémentation de la balise images[i] dans la balise parent 
            worksModaleTag[i].appendChild(imagesTags);
            worksModaleTag[i].appendChild(spanDeleteTag);
        }
        deleteImage();
    })
    //.catch(error => console.error("erreur lors de la récupération des données"));
};