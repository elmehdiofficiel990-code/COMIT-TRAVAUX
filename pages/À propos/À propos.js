/* =========================================================
   PAGE À PROPOS - COMIT TRAVAUX
========================================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       BOUTON "DÉCOUVRIR NOTRE ENTREPRISE"
    ====================================================== */

    const presentationButton = document.querySelector(
        '.about-btn[href="#presentation"]'
    );

    if (presentationButton) {

        presentationButton.addEventListener("click", function (event) {

            event.preventDefault();

            const presentation = document.querySelector("#presentation");

            if (presentation) {

                presentation.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    }


    /* =====================================================
       ANIMATION DES CARTES
    ====================================================== */

    const cards = document.querySelectorAll(
        ".engagement-card, .presence-card"
    );

    cards.forEach(function (card, index) {

        card.style.transition =
            "transform 0.3s ease, box-shadow 0.3s ease";

        card.addEventListener("mouseenter", function () {

            card.style.transform = "translateY(-5px)";

            card.style.boxShadow =
                "0 15px 35px rgba(0,0,0,0.10)";

        });

        card.addEventListener("mouseleave", function () {

            card.style.transform = "translateY(0)";

            card.style.boxShadow = "none";

        });

    });


});