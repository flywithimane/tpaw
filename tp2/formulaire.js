
function validation() {

    if (document.getElementById("nom").value.length < 5) {


        document.getElementById("resultat").setAttribute("style", "display :none");
        document.getElementById("error").setAttribute("style", "display :block");
        document.getElementById("error").innerHTML = "La saisie du nom est obligatoire";
    }


    else if (document.getElementById("prenom").value.length < 5) {
        document.getElementById("error").setAttribute("style", "display :block");
        document.getElementById("error").innerHTML = "La saisie du prénom est obligatoire";
    }



    else if (document.getElementById("Datenss").value.length < 5) {
        document.getElementById("error").setAttribute("style", "display :block");
        document.getElementById("error").innerHTML = "La saisie de la Date de naissance est obligatoire";
    }

    else if (document.getElementById("Adresse").value.length < 5) {
        document.getElementById("error").setAttribute("style", "display :block");
        document.getElementById("error").innerHTML = "La saisie de l'adresse est obligatoire";
    }

    else if (document.getElementById("Mail").value.length < 5) {
        document.getElementById("error").setAttribute("style", "display :block");
        document.getElementById("error").innerHTML = "La saisie de Mail est obligatoire";
    }
   



    
    else  {
        document.getElementById("resultat").setAttribute("style", "display :block");
        document.getElementById("error").setAttribute("style", "display :none");
        document.getElementById("resultat").innerHTML = "Bienvenue   "+ document.querySelector("#nom").value + "  " + document.querySelector("#prenom").value ;

    }



}

