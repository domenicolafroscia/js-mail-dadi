// Dati
document.querySelector('#genera').addEventListener('click', function () {

    const userNumber = Math.floor(Math.random() * 100);
    const pcNumber = Math.floor(Math.random() * 100);

    console.log(userNumber, pcNumber);

    document.getElementById("casuale-1").innerHTML = "Numero giocatore: " + userNumber;

    document.getElementById("casuale-2").innerHTML = "Numero PC: " + pcNumber;

    // Logica
    let message = 0;

    if (userNumber > pcNumber) {
        message = "Il vincitore è il giocatore."
    } else if (pcNumber > userNumber) {
        message = "Il vincitore è il PC."
    }

    console.log(message);

    // Output
    document.getElementById("message").innerHTML = message;
});