/* =========================================================
   COMIT TRAVAUX
   PAGE ÉLECTRICITÉ
   JAVASCRIPT SPÉCIFIQUE
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       DONNÉES DES 6 SERVICES
    ===================================================== */

    const services = [

        {
            number: "01",

            title: "Installations électriques",

            description:
                "Réalisation des installations électriques pour bâtiments résidentiels, locaux professionnels et différents projets.",

            images: [
                "../../images/electricite/services/01-installations-electriques/01.jpg",
                "../../images/electricite/services/01-installations-electriques/02.jpg",
                "../../images/electricite/services/01-installations-electriques/03.jpg",
                "../../images/electricite/services/01-installations-electriques/04.jpg"
            ],

            list: [
                "Installation complète",
                "Raccordement",
                "Mise en service",
                "Contrôle et tests",
                "Conformité aux normes"
            ]
        },


        {
            number: "02",

            title: "Électricité industrielle",

            description:
                "Solutions électriques adaptées aux environnements industriels et aux exigences des équipements et installations.",

            images: [
                "../../images/electricite/services/02-electricite-industrielle/01.jpg",
                "../../images/electricite/services/02-electricite-industrielle/02.jpg",
                "../../images/electricite/services/02-electricite-industrielle/03.jpg",
                "../../images/electricite/services/02-electricite-industrielle/04.jpg"
            ],

            list: [
                "Installations industrielles",
                "Raccordement des équipements",
                "Câblage",
                "Contrôle et tests",
                "Maintenance"
            ]
        },


        {
            number: "03",

            title: "Tableaux électriques",

            description:
                "Conception, câblage et raccordement de tableaux électriques adaptés aux besoins des installations.",

            images: [
                "../../images/electricite/services/03-tableaux-electriques/01.jpg",
                "../../images/electricite/services/03-tableaux-electriques/02.jpg",
                "../../images/electricite/services/03-tableaux-electriques/03.jpg",
                "../../images/electricite/services/03-tableaux-electriques/04.jpg"
            ],

            list: [
                "Conception des tableaux",
                "Câblage",
                "Raccordement",
                "Protection électrique",
                "Tests et vérifications"
            ]
        },


        {
            number: "04",

            title: "Distribution électrique",

            description:
                "Réalisation des réseaux de distribution électrique et des systèmes d'alimentation adaptés aux bâtiments.",

            images: [
                "../../images/electricite/services/04-distribution-electrique/01.jpg",
                "../../images/electricite/services/04-distribution-electrique/02.jpg",
                "../../images/electricite/services/04-distribution-electrique/03.jpg",
                "../../images/electricite/services/04-distribution-electrique/04.jpg"
            ],

            list: [
                "Réseaux de distribution",
                "Alimentation électrique",
                "Câblage",
                "Raccordement",
                "Contrôle des installations"
            ]
        },


        {
            number: "05",

            title: "Éclairage",

            description:
                "Solutions d'éclairage intérieur et extérieur adaptées aux besoins fonctionnels et esthétiques des bâtiments.",

            images: [
                "../../images/electricite/services/05-eclairage/01.jpg",
                "../../images/electricite/services/05-eclairage/02.jpg",
                "../../images/electricite/services/05-eclairage/03.jpg",
                "../../images/electricite/services/05-eclairage/04.jpg"
            ],

            list: [
                "Éclairage intérieur",
                "Éclairage extérieur",
                "Installation des luminaires",
                "Raccordement",
                "Mise en service"
            ]
        },


        {
            number: "06",

            title: "Énergie solaire",

            description:
                "Solutions solaires adaptées aux besoins énergétiques des bâtiments et aux projets d'énergie renouvelable.",

            images: [
                "../../images/electricite/services/06-energie-solaire/01.jpg",
                "../../images/electricite/services/06-energie-solaire/02.jpg",
                "../../images/electricite/services/06-energie-solaire/03.jpg",
                "../../images/electricite/services/06-energie-solaire/04.jpg"
            ],

            list: [
                "Étude et conception",
                "Installation solaire",
                "Raccordement",
                "Mise en service",
                "Suivi et maintenance"
            ]
        }

    ];


    /* =====================================================
       ELEMENTS HTML
    ===================================================== */

    const tabs =
        document.querySelectorAll(".service-tab");

    const displayNumber =
        document.getElementById("service-number");

    const displayTitle =
        document.getElementById("service-title");

    const displayDescription =
        document.getElementById("service-description");

    const displayList =
        document.getElementById("service-list");

    const mainImage =
        document.getElementById("service-main-image");

    const thumbnailsContainer =
        document.getElementById("service-thumbnails");

    const previousButton =
        document.querySelector(".gallery-prev");

    const nextButton =
        document.querySelector(".gallery-next");

    const overviewCards =
        document.querySelectorAll("[data-service-link]");


    let currentService = 0;

    let currentImage = 0;


    /* =====================================================
       AFFICHER LES MINIATURES
    ===================================================== */

    function createThumbnails(service) {

        thumbnailsContainer.innerHTML = "";

        service.images.forEach((image, index) => {

            const button =
                document.createElement("button");

            button.type = "button";

            button.className =
                "service-thumbnail";

            if (index === 0) {
                button.classList.add("active");
            }


            const img =
                document.createElement("img");

            img.src = image;

            img.alt =
                service.title +
                " - photo " +
                (index + 1);

            img.loading = "lazy";


            button.appendChild(img);

            thumbnailsContainer.appendChild(button);


            button.addEventListener("click", () => {

                showImage(index);

            });

        });

    }


    /* =====================================================
       AFFICHER UNE IMAGE
    ===================================================== */

    function showImage(index) {

        const service =
            services[currentService];


        if (index < 0) {

            index =
                service.images.length - 1;
        }


        if (index >= service.images.length) {

            index = 0;
        }


        currentImage = index;


        mainImage.style.opacity = "0";


        setTimeout(() => {

            mainImage.src =
                service.images[currentImage];

            mainImage.alt =
                service.title;

            mainImage.style.opacity = "1";

        }, 160);


        const thumbnails =
            thumbnailsContainer.querySelectorAll(
                ".service-thumbnail"
            );


        thumbnails.forEach((thumbnail, i) => {

            thumbnail.classList.toggle(
                "active",
                i === currentImage
            );

        });

    }


    /* =====================================================
       AFFICHER UN SERVICE
    ===================================================== */

    function showService(index) {

        if (
            index < 0 ||
            index >= services.length
        ) {
            return;
        }


        currentService = index;

        currentImage = 0;


        const service =
            services[currentService];


        /* ---------------------------------------------
           Onglets
        --------------------------------------------- */

        tabs.forEach((tab, i) => {

            tab.classList.toggle(
                "active",
                i === currentService
            );

        });


        /* ---------------------------------------------
           Texte
        --------------------------------------------- */

        displayNumber.textContent =
            service.number;

        displayTitle.textContent =
            service.title;

        displayDescription.textContent =
            service.description;


        /* ---------------------------------------------
           Liste
        --------------------------------------------- */

        displayList.innerHTML = "";

        service.list.forEach(item => {

            const li =
                document.createElement("li");

            li.textContent = item;

            displayList.appendChild(li);

        });


        /* ---------------------------------------------
           Image principale
        --------------------------------------------- */

        mainImage.style.opacity = "0";


        setTimeout(() => {

            mainImage.src =
                service.images[0];

            mainImage.alt =
                service.title;

            mainImage.style.opacity = "1";

        }, 160);


        /* ---------------------------------------------
           Miniatures
        --------------------------------------------- */

        createThumbnails(service);

    }


    /* =====================================================
       CLIQUE SUR LES SERVICES
    ===================================================== */

    tabs.forEach((tab) => {

        tab.addEventListener("click", () => {

            const index =
                Number(
                    tab.dataset.service
                );

            showService(index);

        });

    });


    /* =====================================================
       FLÈCHE PRÉCÉDENTE
    ===================================================== */

    previousButton.addEventListener(
        "click",
        () => {

            showImage(currentImage - 1);

        }
    );


    /* =====================================================
       FLÈCHE SUIVANTE
    ===================================================== */

    nextButton.addEventListener(
        "click",
        () => {

            showImage(currentImage + 1);

        }
    );


    /* =====================================================
       CARTES "EN UN COUP D'ŒIL"
    ===================================================== */

    overviewCards.forEach((card) => {

        card.addEventListener("click", () => {

            const index =
                Number(
                    card.dataset.serviceLink
                );

            showService(index);

        });

    });


    /* =====================================================
       SWIPE MOBILE
    ===================================================== */

    let touchStartX = 0;

    let touchEndX = 0;


    mainImage.addEventListener(
        "touchstart",
        (event) => {

            touchStartX =
                event.changedTouches[0].screenX;

        },
        { passive: true }
    );


    mainImage.addEventListener(
        "touchend",
        (event) => {

            touchEndX =
                event.changedTouches[0].screenX;


            const distance =
                touchStartX - touchEndX;


            if (distance > 50) {

                showImage(currentImage + 1);

            }


            if (distance < -50) {

                showImage(currentImage - 1);

            }

        },
        { passive: true }
    );


    /* =====================================================
       CLAVIER
    ===================================================== */

    document.addEventListener(
        "keydown",
        (event) => {

            if (event.key === "ArrowLeft") {

                showImage(currentImage - 1);

            }

            if (event.key === "ArrowRight") {

                showImage(currentImage + 1);

            }

        }
    );


    /* =====================================================
       INITIALISATION
    ===================================================== */

    showService(0);

});