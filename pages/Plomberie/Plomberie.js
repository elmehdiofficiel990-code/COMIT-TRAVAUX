/* =========================================================
   COMIT TRAVAUX
   PAGE PLOMBERIE
   JAVASCRIPT SPÉCIFIQUE
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const galleries = document.querySelectorAll(".pl-gallery");


    galleries.forEach((gallery) => {

        const mainImage =
            gallery.querySelector(".pl-gallery-image");

        const thumbnailsContainer =
            gallery.querySelector(".pl-gallery-thumbnails");

        const previousButton =
            gallery.querySelector(".pl-gallery-prev");

        const nextButton =
            gallery.querySelector(".pl-gallery-next");


        if (
            !mainImage ||
            !thumbnailsContainer ||
            !previousButton ||
            !nextButton
        ) {
            return;
        }


        /* =================================================
           RÉCUPÉRER LES IMAGES
        ================================================== */

        const images = gallery.dataset.images
            .split("|")
            .map(image => image.trim())
            .filter(Boolean);


        if (!images.length) {
            return;
        }


        let currentIndex = 0;


        /* =================================================
           CRÉER LES MINIATURES
        ================================================== */

        images.forEach((image, index) => {

            const button = document.createElement("button");

            button.type = "button";

            button.className = "pl-gallery-thumb";

            if (index === 0) {
                button.classList.add("active");
            }


            const thumbnail = document.createElement("img");

            thumbnail.src = image;

            thumbnail.alt = "Photo " + (index + 1);

            thumbnail.loading = "lazy";


            button.appendChild(thumbnail);

            thumbnailsContainer.appendChild(button);


            button.addEventListener("click", () => {

                showImage(index);

            });

        });


        const thumbnails =
            Array.from(
                thumbnailsContainer.querySelectorAll(
                    ".pl-gallery-thumb"
                )
            );


        /* =================================================
           AFFICHER UNE IMAGE
        ================================================== */

        function showImage(index) {

            if (index < 0) {
                index = images.length - 1;
            }

            if (index >= images.length) {
                index = 0;
            }


            currentIndex = index;


            /*
             * Animation de transition
             */

            mainImage.style.opacity = "0";


            setTimeout(() => {

                mainImage.src = images[currentIndex];

                mainImage.style.opacity = "1";

            }, 160);


            /*
             * Miniature active
             */

            thumbnails.forEach((thumbnail, i) => {

                thumbnail.classList.toggle(
                    "active",
                    i === currentIndex
                );

            });


            /*
             * Faire défiler les miniatures
             */

            if (thumbnails[currentIndex]) {

                thumbnails[currentIndex].scrollIntoView({
                    behavior: "smooth",
                    block: "nearest",
                    inline: "center"
                });

            }

        }


        /* =================================================
           BOUTON PRÉCÉDENT
        ================================================== */

        previousButton.addEventListener(
            "click",
            () => {

                showImage(currentIndex - 1);

            }
        );


        /* =================================================
           BOUTON SUIVANT
        ================================================== */

        nextButton.addEventListener(
            "click",
            () => {

                showImage(currentIndex + 1);

            }
        );


        /* =================================================
           SWIPE MOBILE
        ================================================== */

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


                /*
                 * Swipe gauche
                 */

                if (distance > 50) {

                    showImage(currentIndex + 1);

                }


                /*
                 * Swipe droite
                 */

                if (distance < -50) {

                    showImage(currentIndex - 1);

                }

            },
            { passive: true }
        );


        /* =================================================
           CLAVIER
        ================================================== */

        gallery.addEventListener(
            "keydown",
            (event) => {

                if (event.key === "ArrowLeft") {

                    showImage(currentIndex - 1);

                }

                if (event.key === "ArrowRight") {

                    showImage(currentIndex + 1);

                }

            }
        );

    });


    /* =====================================================
       ANIMATION D'APPARITION DES SECTIONS
    ===================================================== */

    const sections =
        document.querySelectorAll(
            ".pl-detail, .pl-expertise, .pl-services"
        );


    const observer =
        new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "pl-visible"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    sections.forEach((section) => {

        observer.observe(section);

    });

});