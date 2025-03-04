document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".project-card");

    // Fonction pour animer les cartes des projets au scroll
    function animateCards() {
        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                card.classList.add("visible");
            }
        });
    }

    // Animation au défilement
    window.addEventListener("scroll", animateCards);
    animateCards();
});

// Animation pour la section CV
document.addEventListener("DOMContentLoaded", function () {
    const cvSection = document.getElementById("cv");
    cvSection.style.opacity = 0;
    cvSection.style.transform = "translateY(50px)";

    setTimeout(() => {
        cvSection.style.transition = "opacity 1s ease-out, transform 1s ease-out";
        cvSection.style.opacity = 1;
        cvSection.style.transform = "translateY(0)";
    }, 300);
});

// Animation pour la section Contact
document.addEventListener("DOMContentLoaded", function () {
    const formSection = document.getElementById("contact");
    formSection.style.opacity = 0;
    formSection.style.transform = "translateY(50px)";

    setTimeout(() => {
        formSection.style.transition = "opacity 1s ease-out, transform 1s ease-out";
        formSection.style.opacity = 1;
        formSection.style.transform = "translateY(0)";
    }, 300);

    // Animation pour afficher les éléments du formulaire au scroll
    const formElements = document.querySelectorAll('.form-group, button[type="submit"]');
    window.addEventListener("scroll", () => {
        formElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                element.classList.add('visible');
            }
        });
    });
});

