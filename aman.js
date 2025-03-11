function mettreAJourIngrédients() {
    const nombreKouign = document.getElementById('nombreKouign').value;
    
    const ingrédients = {
        "sel": 1,
        "levure": 5,
        "farine": 175,
        "eau": 12.5,
        "sucre": 100,
        "beurre": 100,
        "selPate": 4.5,
        "farineMachine": 225,
        "levureMachine": 3,
        "eauMachine": 15
    };

    document.querySelector('span#sel').innerHTML = `<strong>${ingrédients.sel * nombreKouign} cuillère${nombreKouign > 1 ? 's' : ''} à café</strong>`;
    document.querySelector('span#levure').innerHTML = `<strong>${ingrédients.levure * nombreKouign} g</strong>`;
    document.querySelector('span#farine').innerHTML = `<strong>${ingrédients.farine * nombreKouign} g</strong>`;
    document.querySelector('span#eau').innerHTML = `<strong>${ingrédients.eau * nombreKouign} cl</strong>`;

    document.querySelector('span#sucre').innerHTML = `<strong>${ingrédients.sucre * nombreKouign} g</strong>`;
    document.querySelector('span#beurre').innerHTML = `<strong>${ingrédients.beurre * nombreKouign} g</strong>`;
    document.querySelector('span#selPate').innerHTML = `<strong>${ingrédients.selPate * nombreKouign} g</strong>`;
    document.querySelector('span#farineMachine').innerHTML = `<strong>${ingrédients.farineMachine * nombreKouign} g</strong>`;
    document.querySelector('span#levureMachine').innerHTML = `<strong>${ingrédients.levureMachine * nombreKouign} g</strong>`;
    document.querySelector('span#eauMachine').innerHTML = `<strong>${ingrédients.eauMachine * nombreKouign} cl</strong>`;
}


document.addEventListener("DOMContentLoaded", function () {
    const imageKouign = document.querySelector('img[alt="Photo du Kouign Amann"]');
    
    imageKouign.addEventListener("click", function () {
        imageKouign.classList.add('fade-out');

        setTimeout(function () {
            imageKouign.src = 'AMAR.jpg';
            imageKouign.classList.remove('fade-out');
            imageKouign.classList.add('fade-in');
        }, 500); 
    });
});
