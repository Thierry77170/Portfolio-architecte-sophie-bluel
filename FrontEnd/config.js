// Variable pour gérer le background des filtres au click
let btnActivated = document.querySelector(".activated");
let btnSorting = document.querySelectorAll(".btnSorting");

// Variable pour récupérer les balises parents des éléments pour les fonctions des filtres
const worksTags = document.querySelectorAll(".works");

// Variable récupèrer la balise form du fichier "index.html" pour empêcher le comportement par défaut "submit"
const formIndex = document.getElementById("formIndex");  

// Variable pour récupèrer la balise form du fichier "login.html" pour empêcher le comportement par défaut "submit"
const formLogin = document.getElementById("formLogin");  

// Variable récupèrer les balises dans le fichier "login.html" pour gérer la validation ou erreur de connexion
const emailTag = document.getElementById("email");
const motDePasseTag = document.getElementById("motDePasse");

// Variable pour sélectionner le lien "logout" dans la page index.html lorsque l'utilisateur est connecté
const logout = document.getElementById("logout");

// Variable pour gérer l'affichage des boutons du filtre à la connection de l'utilisateur
const btnContainerSorting = document.querySelector(".containerSorting");

// Variables pour gérer les éléments invisibles du fichier index.html
const divBlackHeaderRectangle = document.querySelector(".blackHeaderRectangle");
const linkEditTag = document.querySelector(".linkEdit");

// Variable pour récupérer le token lors de la connexion
const token = JSON.parse(window.localStorage.getItem("token"));

// Variable pour gérer l'ouverture et la fermeture des modales
const closeModal = document.querySelector(".close");
const openModal = document.getElementById("modal");
const openModal2 = document.getElementById("modal2");
const closeModal2 = document.querySelector(".close2");
const worksModaleTag = document.querySelectorAll(".worksModale");
const arrowLeftTag = document.querySelector(".arrowLeft");
modalWrapper = document.querySelector(".modalWrapper");

// Variable pour gérer la supression d'images dans la modale et la page d'accueil
const frameIconTags = document.getElementsByClassName("frameIcon");

// Variable pour gérer l'ajout d'images et de titres dans la page d'accueil et dans la modale 
const btnModalAddTag = document.querySelector(".btnModalAdd");

// Variable pour récupérer les valeurs des champs de la modale 2 et créeer un nouveau work
const formToAddImageTag = document.getElementById("formToAddImage");
const fileInputTag = document.getElementById("fileInput");
const titleTag = document.getElementById("title");
const categorieTag = document.getElementById("categorie");
const previewImageTag = document.getElementById("previewImage");
const galleryModalTag = document.querySelector(".galleryModal");
const galleryTag = document.querySelector(".gallery");

// Variable pour gérer le changement de couleur du Bouton "Valider" de la modale 2
const btnValiderTag = document.querySelector(".btnValider");
const btnValider = document.getElementById("btnSubmit");
// Variable pour sélectionner tous les champs du formulaire de la modale 2
const formFields = document.querySelectorAll("#fileInput,  #formToAddImage input[type='text'], #formToAddImage select");

// Variable pour vérifier si tous les champs de la modale 2 sont remplis
const errorModal2 = document.querySelector(".centerTheElements");