/* =========================================================
   COMIT TRAVAUX
   JAVASCRIPT - PAGE CLIMATISATION
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       DONNÉES DES SERVICES
    ===================================================== */

    const services = [

        {
            number: "01",
            title: "Installation climatisation",
            description:
                "Installation de systèmes de climatisation adaptés aux besoins des bâtiments résidentiels, professionnels et industriels.",

            image:
                "../../images/climatisation/service-01.jpg",

            interventions: [
                "Installation des systèmes de climatisation",
                "Raccordement des équipements",
                "Mise en place des unités",
                "Mise en service",
                "Contrôle du fonctionnement"
            ]
        },

        {
            number: "02",
            title: "Maintenance & entretien",
            description:
                "Entretien préventif et correctif des équipements afin de garantir leur performance, leur fiabilité et leur durée de fonctionnement.",

            image:
                "../../images/climatisation/service-02.jpg",

            interventions: [
                "Diagnostic des équipements",
                "Entretien préventif",
                "Contrôle des performances",
                "Interventions correctives",
                "Remise en fonctionnement"
            ]
        },

        {
            number: "03",
            title: "Ventilation & traitement de l’air",
            description:
                "Solutions de ventilation et de traitement de l’air adaptées aux exigences des différents environnements.",

            image:
                "../../images/climatisation/service-03.jpg",

            interventions: [
                "Installation des systèmes de ventilation",
                "Traitement de l’air",
                "Distribution de l’air",
                "Contrôle des installations",
                "Optimisation du confort"
            ]
        },

        {
            number: "04",
            title: "Climatisation des grands espaces",
            description:
                "Solutions de climatisation adaptées aux bureaux, commerces, industries et bâtiments publics.",

            image:
                "../../images/climatisation/service-04.jpg",

            interventions: [
                "Étude des besoins",
                "Dimensionnement des équipements",
                "Installation des systèmes",
                "Mise en service",
                "Suivi des performances"
            ]
        },

        {
            number: "05",
            title: "Étude & conseil",
            description:
                "Accompagnement technique et dimensionnement des solutions climatiques en fonction des caractéristiques du projet.",

            image:
                "../../images/climatisation/service-05.jpg",

            interventions: [
                "Analyse des besoins",
                "Étude technique",
                "Dimensionnement",
                "Choix des équipements",
                "Conseil et accompagnement"
            ]
        }

    ];


    /* =====================================================
       ÉLÉMENTS HTML
    ===================================================== */

    const detailNumber =
        document.getElementById("detail-number");

    const detailTitle =
        document.getElementById("detail-title");

    const detailDescription =
        document.getElementById("detail-description");

    const detailImage =
        document.getElementById("detail-image");

    const detailList =
        document.getElementById("detail-list");

    const currentService =
        document.getElementById("current-service");

    const previousButton =
        document.getElementById("prev-service");

    const nextButton =
        document.getElementById("next-service");


    /* =====================================================
       SERVICE ACTUEL
    ===================================================== */

    let currentIndex = 0;


    /* =====================================================
       AFFICHER UN SERVICE
    ===================================================== */

    function showService(index) {

        if (index < 0) {
            index = services.length - 1;
        }

        if (index >= services.length) {
            index = 0;
        }

        currentIndex = index;

        const service = services[currentIndex];


        /* Numéro */
        detailNumber.textContent =
            service.number;


        /* Titre */
        detailTitle.textContent =
            service.title;


        /* Description */
        detailDescription.textContent =
            service.description;


        /* Image */
        detailImage.src =
            service.image;

        detailImage.alt =
            service.title;


        /* Numéro compteur */
        currentService.textContent =
            service.number;


        /* Liste */
        detailList.innerHTML = "";

        service.interventions.forEach(item => {

            const li =
                document.createElement("li");

            li.textContent = item;

            detailList.appendChild(li);

        });

    }


    /* =====================================================
       SERVICE SUIVANT
    ===================================================== */

    nextButton.addEventListener("click", () => {

        showService(currentIndex + 1);

    });


    /* =====================================================
       SERVICE PRÉCÉDENT
    ===================================================== */

    previousButton.addEventListener("click", () => {

        showService(currentIndex - 1);

    });


    /* =====================================================
       LIENS DES CARTES SERVICES
    ===================================================== */

    const serviceLinks =
        document.querySelectorAll(
            ".service-content a[data-service]"
        );


    serviceLinks.forEach(link => {

        link.addEventListener("click", event => {

            event.preventDefault();

            const index =
                Number(link.dataset.service);

            showService(index);

            const target =
                document.getElementById(
                    "service-details"
                );

            if (target) {

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    /* =====================================================
       ANIMATION LÉGÈRE DES CARTES
    ===================================================== */

    const cards =
        document.querySelectorAll(".service-card");


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "service-visible"
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    cards.forEach(card => {

        observer.observe(card);

    });


    /* =====================================================
       INITIALISATION
    ===================================================== */

    showService(0);

});