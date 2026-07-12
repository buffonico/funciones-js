let colorGuardado = "";


document.addEventListener('keydown', function (event) {

    let letra = event.key.toLowerCase();

    if (letra === 'a') {
        colorGuardado = "pink";
    } else if (letra === 's') {
        colorGuardado = "orange";
    } else if (letra === 'd') {
        colorGuardado = "lightblue";
    } else if (letra !== a, s, d) {
        console.log("Letra equivocada");
    }

    if (colorGuardado !== "") {
        const divKey = document.getElementById('key');
        divKey.style.backgroundColor = colorGuardado;
        divKey.textContent = `Color: ${letra.toUpperCase()}`;
    }
});

document.addEventListener('keydown', function (event) {

    let letra = event.key.toLowerCase();

    if (letra === 'q') {
        colorGuardado = "purple";
    } else if (letra === 'w') {
        colorGuardado = "grey";
    } else if (letra === 'e') {
        colorGuardado = "brown";
    } else if (letra !== q, w, e) {
        console.log("Letra equivocada");
    }

    if (colorGuardado !== "") {
        const divKey = document.getElementById('key');
        divKey.style.backgroundColor = colorGuardado;
        divKey.textContent = `Color: ${letra.toUpperCase()}`;
    }
});
