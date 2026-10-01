/* =========================================================
   COMIT TRAVAUX
   ACCUEIL - JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       APPARITION DES SECTIONS AU SCROLL
    ===================================================== */

    const animatedElements =
        document.querySelectorAll(
            ".expertise-content, " +
            ".expertise-image, " +
            ".section-heading, " +
            ".domain-card, " +
            ".presence-container, " +
            ".final-cta-container"
        );


    /*
     * État initial.
     */

    animatedElements.forEach((element) => {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(30px)";

        element.style.transition =
            "opacity 0.7s ease, " +
            "transform 0.7s ease";

    });



    /* =====================================================
       OBSERVER
    ===================================================== */

    const observer =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry) => {

                    if (!entry.isIntersecting) {

                        return;

                    }


                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";


                    observer.unobserve(
                        entry.target
                    );

                });

            },
            {
                threshold: 0.12
            }
        );


    animatedElements.forEach((element) => {

        observer.observe(element);

    });



    /* =====================================================
       ANIMATION DES CARTES
    ===================================================== */

    const domainCards =
        document.querySelectorAll(
            ".domain-card"
        );


    domainCards.forEach(
        (card, index) => {

            card.style.transitionDelay =
                `${index * 0.08}s`;

        }
    );



    /* =====================================================
       EFFET SUR LES BOUTONS
    ===================================================== */

    const actionButtons =
        document.querySelectorAll(
            ".primary-button, " +
            ".secondary-button, " +
            ".presence-button, " +
            ".final-cta-button"
        );


    actionButtons.forEach((button) => {

        button.addEventListener(
            "mouseenter",
            () => {

                button.classList.add(
                    "button-hover"
                );

            }
        );


        button.addEventListener(
            "mouseleave",
            () => {

                button.classList.remove(
                    "button-hover"
                );

            }
        );

    });



    /* =====================================================
       ANIMATION DU HERO
    ===================================================== */

    const heroContent =
        document.querySelector(
            ".hero-content"
        );


    if (heroContent) {

        heroContent.style.opacity = "0";

        heroContent.style.transform =
            "translateY(25px)";

        heroContent.style.transition =
            "opacity 0.9s ease, " +
            "transform 0.9s ease";


        /*
         * Petite attente pour laisser
         * le Hero apparaître proprement.
         */

        setTimeout(() => {

            heroContent.style.opacity = "1";

            heroContent.style.transform =
                "translateY(0)";

        }, 150);

    }



    /* =====================================================
       PARALLAX LÉGER DU HERO
    ===================================================== */

    const hero =
        document.querySelector(".hero");


    if (hero) {

        const updateHero =
            () => {

                /*
                 * Sur téléphone, on désactive
                 * le parallax pour de meilleures
                 * performances.
                 */

                if (window.innerWidth <= 800) {

                    hero.style.backgroundPosition =
                        "center center";

                    return;

                }


                const scroll =
                    window.scrollY;


                /*
                 * Le Hero bouge très légèrement.
                 */

                if (scroll < hero.offsetHeight) {

                    hero.style.backgroundPosition =
                        `center ${scroll * 0.15}px`;

                }

            };


        window.addEventListener(
            "scroll",
            updateHero,
            { passive: true }
        );

    }



    /* =====================================================
       ANNÉE AUTOMATIQUE DANS LE FOOTER
    ===================================================== */

    const yearElements =
        document.querySelectorAll(
            "[data-current-year]"
        );


    yearElements.forEach((element) => {

        element.textContent =
            new Date().getFullYear();

    });



    /* =====================================================
       PROTECTION CONTRE LE FLASH
       APRÈS CHARGEMENT
    ===================================================== */

    document.documentElement.classList.add(
        "page-loaded"
    );


});