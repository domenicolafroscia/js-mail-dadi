// Dati
const mailList = ["pincopallo@gmail.com", "mariorossi@gmail.com", "fedropisani@gmail.com", "loremipsum@gmail.com"];

const userMail = prompt ("Ciao utente! Qual'è la tua email?");
console.log(userMail);

// Logica
let found = false;

for (let i = 0; i < mailList.length; i++) {
    const curMail = mailList[i];

    if(curMail === userMail) {
        found = true;
    }

    console.log(curMail, userMail, found);
}

let message = 0;

if(found === true) {
   message = "Il tuo indirizzo email è nella lista. Puoi accedere!";
} else {
    message = "Il tuo indirizzo email non è presente nella lista. Siamo spiacenti non hai accesso alla pagina.";
}

console.log(message);

// Output
document.getElementById("message").innerHTML = message;