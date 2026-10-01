/* =========================================================
   PAGE CONSTRUCTION - COMIT TRAVAUX
========================================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       BOUTON HERO → RÉALISATIONS
    ====================================================== */

    const realisationButton = document.querySelector(
        '.construction-btn[href="#realisations"]'
    );

    if (realisationButton) {

        realisationButton.addEventListener("click", function (event) {

            event.preventDefault();

            const realisations =
                document.querySelector("#realisations");

            if (realisations) {

                realisations.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    }


    /* =====================================================
       HOVER DES CARTES
    ====================================================== */

    const cards = document.querySelectorAll(
        ".prestation-card"
    );

    cards.forEach(function (card) {

        card.addEventListener("mouseenter", function () {

            card.style.transform = "translateY(-6px)";

        });

        card.addEventListener("mouseleave", function () {

            card.style.transform = "translateY(0)";

        });

    });


    /* =====================================================
       ANIMATION DES RÉALISATIONS
    ====================================================== */

    const realisations =
        document.querySelectorAll(".realisation");

    realisations.forEach(function (item) {

        const image = item.querySelector("img");

        if (!image) return;

        item.addEventListener("mouseenter", function () {

            image.style.transform = "scale(1.04)";

        });

        item.addEventListener("mouseleave", function () {

            image.style.transform = "scale(1)";

        });

    });


});