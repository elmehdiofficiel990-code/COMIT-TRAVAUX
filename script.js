/* =========================================================
   COMIT TRAVAUX - SCRIPT COMMUN
   Header + Footer + Menu mobile + Navigation
   ========================================================= */


/* =========================
   CHEMINS DU SITE
   ========================= */

const isInsidePages = window.location.pathname.includes("/pages/");
const ROOT = isInsidePages ? "../../" : "./";


/* =========================
   HEADER COMMUN
   ========================= */
const HEADER_HTML = `
<header class="site-header">

    <div class="container header-inner">

        <!-- IDENTITÉ -->
        <a href="${ROOT}pages/Accueil/accueil.html" class="site-brand">

            <!-- Logo normal -->
            <span class="brand-logo">
                <img
                    src="${ROOT}images/logo.png"
                    alt="COMIT TRAVAUX"
                >
            </span>

            <!-- Texte après scroll -->
            <span class="brand-text">
                COMIT <strong>TRAVAUX</strong>
            </span>

        </a>


        <!-- NAVIGATION DESKTOP -->
        <nav class="main-nav">

            <a href="${ROOT}pages/Accueil/accueil.html">
                Accueil
            </a>

            <a href="${ROOT}pages/À propos/À propos.html">
                À propos
            </a>


            <!-- NOS DOMAINES -->
            <div class="nav-dropdown">

                <button
                    class="dropdown-toggle"
                    type="button"
                    aria-expanded="false"
                >
                    Nos domaines
                    <span class="dropdown-arrow">⌄</span>
                </button>


                <div class="dropdown-menu">

                    <a href="${ROOT}pages/construction/construction.html">
                        <span class="dropdown-icon construction-icon">
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M3 21V8l9-5 9 5v13M7 21v-8h4v8M13 21v-5h4v5M3 21h18"/>
                            </svg>
                        </span>
                        <span>Construction</span>
                        <span class="dropdown-arrow-right">›</span>
                    </a>


                    <a href="${ROOT}pages/Plomberie/Plomberie.html">
                        <span class="dropdown-icon plomberie-icon">
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M7 3v7a5 5 0 0 0 10 0V3M5 3h4M15 3h4M12 15v6M8 21h8"/>
                            </svg>
                        </span>
                        <span>Plomberie</span>
                        <span class="dropdown-arrow-right">›</span>
                    </a>


                    <a href="${ROOT}pages/Climatisation/Climatisation.html">
                        <span class="dropdown-icon clim-icon">
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M12 2v20M2 12h20M4.9 4.9l14.2 14.2M19.1 4.9L4.9 19.1"/>
                            </svg>
                        </span>
                        <span>Climatisation</span>
                        <span class="dropdown-arrow-right">›</span>
                    </a>


                    <a href="${ROOT}pages/electricite/electricite.html">
                        <span class="dropdown-icon electricite-icon">
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M13 2L4 14h7l-1 8 10-13h-7l0-7z"/>
                            </svg>
                        </span>
                        <span>Électricité</span>
                        <span class="dropdown-arrow-right">›</span>
                    </a>

                </div>

            </div>


            <a href="${ROOT}pages/Accueil/accueil.html#presence">
                Notre présence
            </a>

            <a href="${ROOT}pages/Contact/contact.html">
                Contact
            </a>

        </nav>


        <!-- BOUTON DEVIS -->
        <a
            href="${ROOT}pages/Contact/contact.html"
            class="header-cta"
        >
            <span>DEMANDER UN DEVIS</span>
            <strong>→</strong>
        </a>


        <!-- MENU MOBILE -->
        <button
            class="mobile-menu-button"
            type="button"
            aria-label="Ouvrir le menu"
            aria-expanded="false"
        >
            <span></span>
            <span></span>
            <span></span>
        </button>

    </div>


    <!-- MENU MOBILE -->
    <div class="mobile-nav">

        <a href="${ROOT}pages/Accueil/accueil.html">
            <span>Accueil</span>
            <strong>›</strong>
        </a>


        <a href="${ROOT}pages/À propos/À propos.html">
            <span>À propos</span>
            <strong>›</strong>
        </a>


        <!-- DOMAINES -->
        <button
            class="mobile-domains-toggle"
            type="button"
        >
            <span>Nos domaines</span>
            <strong>⌄</strong>
        </button>


        <div class="mobile-domains">

            <a href="${ROOT}pages/construction/construction.html">
                <span class="mobile-domain-icon">⌂</span>
                <span>Construction</span>
                <strong>›</strong>
            </a>

            <a href="${ROOT}pages/Plomberie/Plomberie.html">
                <span class="mobile-domain-icon">⚙</span>
                <span>Plomberie</span>
                <strong>›</strong>
            </a>

            <a href="${ROOT}pages/Climatisation/Climatisation.html">
                <span class="mobile-domain-icon">❄</span>
                <span>Climatisation</span>
                <strong>›</strong>
            </a>

            <a href="${ROOT}pages/electricite/electricite.html">
                <span class="mobile-domain-icon">⚡</span>
                <span>Électricité</span>
                <strong>›</strong>
            </a>

        </div>


        <a href="${ROOT}pages/Accueil/accueil.html#presence">
            <span>Notre présence</span>
            <strong>›</strong>
        </a>


        <a href="${ROOT}pages/Contact/contact.html">
            <span>Contact</span>
            <strong>›</strong>
        </a>


        <a
            href="${ROOT}pages/Contact/contact.html"
            class="mobile-cta"
        >
            DEMANDER UN DEVIS
            <strong>→</strong>
        </a>

    </div>

</header>
`;
/* =========================
   FOOTER COMMUN
   ========================= */

const FOOTER_HTML = `
<footer class="site-footer">

    <div class="container footer-grid">

        <!-- ENTREPRISE -->
        <div class="footer-company">

            <a
                href="${ROOT}pages/Accueil/accueil.html"
                class="footer-logo"
            >
                <img
                    src="${ROOT}images/logo.png"
                    alt="COMIT TRAVAUX"
                >
            </a>

            <p>
                Des solutions professionnelles et adaptées
                à vos projets de construction et d'installation.
            </p>

        </div>


        <!-- NAVIGATION -->
        <div class="footer-column">

            <h3>Navigation</h3>

            <a href="${ROOT}pages/Accueil/accueil.html">
                Accueil
            </a>

            <a href="${ROOT}pages/À propos/À propos.html">
                À propos
            </a>

            <a href="${ROOT}pages/Accueil/accueil.html#presence">
                Notre présence
            </a>

            <a href="${ROOT}pages/Contact/contact.html">
                Contact
            </a>

        </div>


        <!-- DOMAINES -->
        <div class="footer-column">

            <h3>Nos domaines</h3>

            <a href="${ROOT}pages/construction/construction.html">
                Construction
            </a>

            <a href="${ROOT}pages/Plomberie/Plomberie.html">
                Plomberie
            </a>

            <a href="${ROOT}pages/Climatisation/Climatisation.html">
                Climatisation
            </a>

            <a href="${ROOT}pages/Électricité/electricite.html">
                Électricité
            </a>

        </div>


        <!-- CONTACT -->
        <div class="footer-column footer-contact">

            <h3>Contact</h3>

            <a href="tel:0660061737">
                0660 06 17 37
            </a>

            <a href="tel:0663507977">
                0663 50 79 77
            </a>

            <a href="mailto:comittravaux@gmail.com">
                comittravaux@gmail.com
            </a>

            <p>
                Intervention partout au Maroc
            </p>

        </div>

    </div>


    <!-- COPYRIGHT -->
    <div class="footer-bottom">

        <div class="container">

            <p>
                © ${new Date().getFullYear()} COMIT TRAVAUX.
                Tous droits réservés.
            </p>

        </div>

    </div>

</footer>
`;


/* =========================
   INJECTION HEADER / FOOTER
   ========================= */

function loadCommonElements() {

    const headerContainer = document.querySelector("#site-header");
    const footerContainer = document.querySelector("#site-footer");

    if (headerContainer) {
        headerContainer.innerHTML = HEADER_HTML;
    }

    if (footerContainer) {
        footerContainer.innerHTML = FOOTER_HTML;
    }

}


/* =========================
   HEADER AU SCROLL
   ========================= */
function initHeaderScroll() {

    const header = document.querySelector(".site-header");

    if (!header) return;


    function checkScroll() {

        if (window.scrollY > 40) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    }


    checkScroll();

    window.addEventListener("scroll", checkScroll, {
        passive: true
    });

}

/* =========================
   MENU MOBILE
   ========================= */

function initMobileMenu() {

    const button = document.querySelector(".mobile-menu-button");
    const mobileNav = document.querySelector(".mobile-nav");

    if (!button || !mobileNav) return;

    button.addEventListener("click", function () {

        const isOpen = document.body.classList.toggle("mobile-open");

        button.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );

    });


    /* Fermer après clic sur un lien */

    mobileNav.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", function () {

            document.body.classList.remove("mobile-open");

            button.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

}


/* =========================
   DROPDOWN DES DOMAINES
   ========================= */

function initDropdown() {

    const dropdown = document.querySelector(".nav-dropdown");
    const toggle = document.querySelector(".dropdown-toggle");

    if (!dropdown || !toggle) return;

    toggle.addEventListener("click", function (event) {

        event.stopPropagation();

        dropdown.classList.toggle("open");

    });


    document.addEventListener("click", function () {

        dropdown.classList.remove("open");

    });

}


/* =========================
   DOMAINES MOBILE
   ========================= */

function initMobileDomains() {

    const toggle = document.querySelector(".mobile-domains-toggle");
    const domains = document.querySelector(".mobile-domains");

    if (!toggle || !domains) return;

    toggle.addEventListener("click", function () {

        domains.classList.toggle("open");

    });

}


/* =========================
   LIENS AVEC #
   ========================= */

function initSmoothScroll() {

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (!targetId || targetId === "#") return;

            const target = document.querySelector(targetId);

            if (!target) return;

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });

}


/* =========================
   ESCAPE
   ========================= */

function initEscapeKey() {

    document.addEventListener("keydown", function (event) {

        if (event.key !== "Escape") return;

        document.body.classList.remove("mobile-open");

        const dropdown = document.querySelector(".nav-dropdown");

        if (dropdown) {
            dropdown.classList.remove("open");
        }

    });

}


/* =========================
   INITIALISATION
   ========================= */

document.addEventListener("DOMContentLoaded", function () {

    loadCommonElements();

    initHeaderScroll();
    initMobileMenu();
    initDropdown();
    initMobileDomains();
    initSmoothScroll();
    initEscapeKey();

});
