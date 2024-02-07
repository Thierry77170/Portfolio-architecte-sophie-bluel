// Variable pour gérer le background des filtres au click
let btnActivated = document.querySelector(".activated");
let btnSorting = document.querySelectorAll(".btnSorting");

// Récupération des balises parents des éléments pour les fonctions des filtres
let worksTags = document.querySelectorAll(".works");

// On récupère la balise form du fichier "index.html" pour empêcher le comportement par défaut "submit"
const formIndex = document.getElementById("formIndex");  

// On récupère la balise form du fichier "login.html" pour empêcher le comportement par défaut "submit"
const formLogin = document.getElementById("formLogin");  

// On récupère les balises dans le fichier "login.html" pour gérer la validation ou erreur de connexion
const emailTag = document.getElementById("email");
const motDePasseTag = document.getElementById("motDePasse");

// Sélectionner le lien "logout" dans la page index.html lorsque l'utilisateur est connecté
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

// Variable pour gérer la supression d'images dans la modale et la page d'accueil
const frameIconTags = document.getElementsByClassName("frameIcon");

// Variable pour gérer l'ajout d'images et titres dans la page d'accueil et dans la modale 
const btnModalAddTag = document.querySelector(".btnModalAdd");
