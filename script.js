const barraPesquisa = document.getElementById("barraPesquisa");
const cards = document.querySelectorAll(".card");

barraPesquisa.addEventListener("input", function () {
    let texto = barraPesquisa.value.toLowerCase();

    cards.forEach(card => {
        let titulo = card.querySelector(".titulo").textContent.toLowerCase();

        if (titulo.includes(texto)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});
