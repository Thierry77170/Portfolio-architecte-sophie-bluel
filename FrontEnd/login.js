// On empêche le comportement par défaut "submit" et on gère la validation de la connexion de l'utilisateur
formLogin.addEventListener("submit", (event) => {
  
    // On empêche le comportement par défaut "submit" 
    event.preventDefault();
  
    // On récupére les valeurs des champs pour obtenir le token
    emailValue = emailTag.value;
    motDePasseValue = motDePasseTag.value;
    const credentials = {
        email: emailValue, 
        password: motDePasseValue,
    }
    console.log(credentials);

    //Variable pour la requête du login
    const req = {
        method: "POST",
        headers: {
            "accept" : "application/json",
            "Content-Type": "application/json",
            },
        body: JSON.stringify(credentials)
    };

    // Effectuer la requête POST avec fetch() pour se connecter
    fetch("http://localhost:5678/api/users/login", req)
    .then(res => {
        if (res.status === 200) {
            return res.json();
        } else if (res.status !== 200) {
            // On vérifie s'il existe déjà un élément d'erreur
            let existingErrorTag = document.querySelector('.error');
            if (!existingErrorTag) {
                // On crée un nouvel élément d'erreur uniquement s'il n'existe pas déjà
                let errorTag = document.createElement("p");
                errorTag.innerText = "Erreur dans l’identifiant ou le mot de passe";
                formLogin.appendChild(errorTag);
                errorTag.classList.add("error");
            }
        } 
    })
    .then(data => {
        const token = data.token;
        
        // Stocker le token dans le localStorage
        window.localStorage.setItem("token", JSON.stringify(token));
        window.location.href = "index.html";
    })
    .catch(error => console.error("erreur lors de la récupération des données"));
});




    
    






