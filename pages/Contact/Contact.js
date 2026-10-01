document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       ANIMATION AU SCROLL
    ====================================================== */

    const animatedElements = document.querySelectorAll(
        ".contact-card, .location-address, .contact-cta-content"
    );

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(
            (entries, obs) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("contact-visible");

                        obs.unobserve(entry.target);
                    }

                });

            },
            {
                threshold: 0.12
            }
        );

        animatedElements.forEach((element) => {
            element.classList.add("contact-hidden");
            observer.observe(element);
        });
    }


    /* =====================================================
       LIEN "NOUS CONTACTER"
    ====================================================== */

    const contactButton = document.querySelector(".contact-button");

    if (contactButton) {

        contactButton.addEventListener("click", (event) => {

            const target = document.querySelector("#coordonnees");

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    }

});