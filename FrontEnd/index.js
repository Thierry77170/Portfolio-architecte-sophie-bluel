// Bouton filtre checké par défaut au chargement de la page
btnActivated.style.backgroundColor = "#1D6154";
btnActivated.style.color = "#ffffff";

// Fonction pour afficher les éléments invisibles si l'utilisateur est connecté
invisibleElements();

// Fonction pour afficher les éléments au chargement de la page et de la modale
getWorks();
loadingImagesForModal ();

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
    // On vérifie si le token est présent dans le localStorage (variable dans config.js)
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
            previewImageTag.src = e.target.result;
            previewImageTag.style.display = 'block';
        };
        //  On lit le contenu du fichier spécifié en tant qu'URL de données (data URL).
        reader.readAsDataURL(selectedFile);
    } else {
        previewImageTag.src = '#';
        previewImageTag.style.display = 'none';
    }
});

// On écoute l'évènement "submite" pour créer un nouveau work dans la base de données
formToAddImageTag.addEventListener("submit", (event) => {
    event.preventDefault();
    // On vérifie si un message d'erreur existe
    let existingErrorTag = document.querySelector('.errorModal2');
    if (!existingErrorTag) {
         // On vérifie si les champs requis sont vides
        if (!fileInputTag.files[0] || !titleTag.value || !categorieTag.value) {
               // On crée un nouvel élément d'erreur uniquement s'il n'existe pas déjà
            let errorTag= document.createElement("p");
            errorTag.innerText = "Veuillez remplir tous les champs du formulaire.";
            errorTag.classList.add("errorModal2");
            centerTheElements.appendChild(errorTag);   
        }
    }      
    if (fileInputTag.files[0] && titleTag.value && categorieTag.value && existingErrorTag) {
        centerTheElements.removeChild(existingErrorTag);
    }
     // On vérifie si les champs requis sont vides
    if (!fileInputTag.files[0] || !titleTag.value || !categorieTag.value) {
        return; 
    } else {
        let formData = new FormData();
        // Ajout de l'image directement depuis l'input type="file"
        let imageFile = fileInputTag.files[0];
        if (imageFile) {
            formData.append("image", imageFile);
        }
        console.log("image", formData.get("image"))
        // Ajout du titre
        let titleValue = titleTag.value;
        formData.append("title", titleValue);
        console.log("title", formData.get("title"))
        // Ajout de la catégorie, convertie en chiffre entier
        let categoryValue = parseInt(categorieTag.value, 10);
        formData.append("category", categoryValue);
        console.log("category", formData.get("category"))
        //Variable pour la requête 
        const req = {
            method: "POST",
            headers: {
                "accept" : "application/json",
                "Authorization" : `Bearer ${token}`,
                },
            body: formData
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
    
            // Création des balises images avec les titres pour la page d'accueil
            const figureTag = document.createElement("figure"); 
            const images2Tags = document.createElement("img"); 
            console.log(images2Tags);
            const figcaptionTag = document.createElement("figcaption"); 
            // Création des attribut pour les balises et implémentation de l'image dans la balise image
            figureTag.classList.add("works");
            images2Tags.src = imagesUrl;
            figcaptionTag.innerText = title; 
            // Implémentation des balises enfants dans les balises parents
            galleryTag.appendChild(figureTag);
            figureTag.appendChild(images2Tags);
            figureTag.appendChild(figcaptionTag);
            // On réinitialise la modal 2
            galleryModalTag.innerHTML = "";
            loadingImagesForModal() ;
            titleTag.value = '';
            categorieTag.value = '';
            previewImageTag.src = "#";
            previewImageTag.removeAttribute("style");
        })
        .catch(error => console.error("erreur lors de la récupération des données"));
    }

});

//  On applique la couleur par défaut à la couleur du Bouton "Valider" de la modale 2
btnValiderTag.style.backgroundColor = "#A7A7A7";
// On écoutez l'événement de modification pour chaque champ
formFields.forEach(field => {
    field.addEventListener("input", () => {
        // On vérifie si tous les champs sont remplis
        const allFieldsFilled = Array.from(formFields).every(field => {
            if (field.type === "file") {
                return field.files.length > 0;
            }
            return field.value.trim() !== '';
        });
        // Si tous les champs sont remplis, changez la couleur du bouton Valider
        if (allFieldsFilled) {
            btnValider.style.backgroundColor = "#1D6154";
        } else {
            // Sinon, réinitialisez la couleur du bouton Valider
            btnValider.style.backgroundColor = "#A7A7A7"; 
        }
    });
});

//  On écoute l'évènement  pour fermer la modal en cliquant à l'extérieur de la <div class="modalWrapper">
openModal.addEventListener("click", (event) => {
    // Si l'élément cliqué n'est pas contenu dans la modalWrapper, alors on ferme la modal
    if (!modalWrapper.contains(event.target)) {
        // On appelle la fonction pour fermer la modal
        modalClosure(); 
    }
});

openModal2.addEventListener("click", (event) => {
    // Si l'élément cliqué n'est pas contenu dans la modalWrapper, alors on ferme la modal
    if (!formToAddImage.contains(event.target)) {
        // On appelle la fonction pour fermer la modal
        modalClosure(); 
    }
});








 




  
    




