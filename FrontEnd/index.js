// Bouton filtre checké par défaut au chargement de la page
btnActivated.style.backgroundColor = "#1D6154";
btnActivated.style.color = "#ffffff";

// Fonction pour afficher les éléments invisibles si l'utilisateur est connecté
invisibleElements();

// Fonction pour afficher les éléments au chargement de la page et de la modale
getWorks();
loadingImagesForModal ()

// Évènement pour gérer le click des filtres
for (let i = 0; i < btnSorting.length; i++) {
    btnSorting[i].addEventListener("click", () => {
        bgChange (i);
        // Application de la fonction btnTous uniquement au premier bouton
        if (i === 0) {
            getWorks();  
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









// On écoute le changement dans le champ input="file" pour afficher la previewImage
fileInputTag.addEventListener("change", (event) => {
    // On vérifie d'abord si un fichier a été sélectionné en accédant à event.target.files[0]
    const selectedFile = event.target.files[0];
    if (selectedFile) {
        // On utilise FileReader pour lire le contenu du fichier sélectionné en tant qu'URL de données (data URL)
        const reader = new FileReader();
        // On applique la propriété onload qui met à jour la source de l'image de prévisualisation
        reader.onload = (e) => {
            previewImage.src = e.target.result;
            previewImage.style.display = 'block';
        };
        //  On lit le contenu du fichier spécifié en tant qu'URL de données (data URL).
        reader.readAsDataURL(selectedFile);
    } else {
        previewImage.src = '#';
        previewImage.style.display = 'none';
    }
});







// On écoute l'évènement "submite" pour créer un nouveau work dans la base de données
formToAddImageTag.addEventListener("submit", (event) => {
    event.preventDefault();

    // On récupére le fichier image sélectionné par l'utilisateur
    const imageFile = previewImageTag;
    const titleValue = titleTag.value;
    const categorieValue = categorieTag.value;
    //console.log(imageFile); 
    //console.log(titleValue);
    //console.log(categorieValue); 

    const newWork = {
        image: imageFile, 
        title: titleValue,
        category: categorieValue
    }
    console.log(newWork);
 
    //Variable pour la requête 
    const req = {
        method: "POST",
        headers: {
            "accept" : "application/json",
            "Content-Type": "multipart/form-data",
            "Authorization" : `Bearer ${token}`,
            },
        body: JSON.stringify(newWork)
    };
    // Effectuer la requête POST avec fetch() pour créer un nouveau work
    fetch("http://localhost:5678/api/works", req)
    .then(res => {
        return res.json();
    })
    .then(dataWork => {   
        // Traitement de la réponse serveur
        const imagesUrl = dataWork.imageUrl;         
        const title = dataWork.title;    

        // Création des balises images avec l'icone delete pour la modale
        const figureTagModal = document.createElement("figure"); 
        const imagesTags = document.createElement("img");
        console.log(imagesTags);
        const spanDeleteTag = document.createElement("span");
        const deleteTag = document.createElement("i");
      
        figureTagModal.classList.add("worksModale");   
        imagesTags.src = imagesUrl;      
        spanDeleteTag.classList.add("frameIcon");
        deleteTag.classList.add("fa-solid, fa-trash-can");

        galleryModalTag.appendChild(figureTagModal); 
        figureTagModal.appendChild(imagesTags);
        figureTagModal.appendChild(spanDeleteTag);
        spanDeleteTag.appendChild(deleteTag);

        // Création des balises images avec les titres pour la page d'accueil
        const figureTag = document.createElement("figure"); 
        const images2Tags = document.createElement("img"); 
        console.log(images2Tags);
        const figcaptionTag = document.createElement("figcaption"); 

        figureTag.classList.add("works");
        images2Tags.src = imagesUrl;
        figcaptionTag.innerText = title; 
        
        galleryTag.appendChild(figureTag);
        figureTag.appendChild(images2Tags);
        figureTag.appendChild(figcaptionTag);
    })
    //.catch(error => console.error("erreur lors de la récupération des données"));
});
    









// Fonction pour gérer la supression d'une image dans la modale et  la page d'accueil
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
                    if (worksTags === "") {
                        // Suppression des balises images avec les titres pour la page d'accueil
                        galleryTag.removeChild(worksTags);
                    }
                    if (worksModaleTag === "") {
                        // Suppression des balises images avec pour la modale
                        worksModaleTag.removeChild(worksTags);
                    }
                    
                }           
            })
        });
    };
};






// Fonction pour gérer le changement de couleur du Bouton "Valider" de la modale 2
btnValiderTag.style.backgroundColor = "#A7A7A7";











    




    

    