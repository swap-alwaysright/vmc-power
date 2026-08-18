/* =====================================================
   LOADER
===================================================== */

window.addEventListener("load", () => {

    setTimeout(() => {

        document.querySelector(".loader").classList.add("hide");

    }, 1800);

});


/* =====================================================
   NAVBAR SCROLL EFFECT
===================================================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


/* =====================================================
   MOBILE MENU
===================================================== */

const menuButton = document.querySelector(".menu-btn");
const nav = document.querySelector(".navbar nav");

menuButton.addEventListener("click", () => {

    nav.classList.toggle("mobile-open");

});


/* =====================================================
   COUNTER ANIMATION
===================================================== */

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (!entry.isIntersecting)
                return;

            const counter = entry.target;

            const target = Number(
                counter.getAttribute("data-target")
            );

            let current = 0;

            const increment = target / 60;

            const updateCounter = () => {

                current += increment;

                if (current < target) {

                    counter.textContent =
                        Math.ceil(current);

                    requestAnimationFrame(updateCounter);

                } else {

                    counter.textContent = target;

                }

            };

            updateCounter();

            counterObserver.unobserve(counter);

        });

    },
    {
        threshold: 0.5
    }
);


counters.forEach(counter => {

    counterObserver.observe(counter);

});


/* =====================================================
   REVEAL ANIMATION
===================================================== */

const revealElements = document.querySelectorAll(
    ".service-module, .project, .stat, .safety-items div, .solar-features div"
);

const revealObserver = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach(element => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


/* =====================================================
   POWER GRID NODE INTERACTION
===================================================== */

const nodes = document.querySelectorAll(".network-node");

nodes.forEach(node => {

    node.addEventListener("mouseenter", () => {

        node.style.boxShadow =
            "0 0 35px rgba(244,208,0,0.2)";

    });

    node.addEventListener("mouseleave", () => {

        node.style.boxShadow = "none";

    });

});


/* =====================================================
   MOUSE PARALLAX
===================================================== */

const hero = document.querySelector(".hero");
const grid = document.querySelector(".grid-background");

hero.addEventListener("mousemove", event => {

    const x =
        (event.clientX / window.innerWidth - 0.5) * 15;

    const y =
        (event.clientY / window.innerHeight - 0.5) * 15;

    grid.style.transform =
        `perspective(600px)
         rotateX(${55 + y / 5}deg)
         rotateY(${x / 10}deg)
         scale(1.5)`;

});


/* =====================================================
   CONTACT FORM
===================================================== */

const form = document.querySelector(".contact-form");
const message = document.querySelector(".form-message");

form.addEventListener("submit", event => {

    event.preventDefault();

    message.textContent =
        "ENQUIRY INTERFACE READY — CONNECT YOUR FORM BACKEND.";

});


/* =====================================================
   MAGNETIC BUTTON EFFECT
===================================================== */

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("mousemove", event => {

        const rect =
            button.getBoundingClientRect();

        const x =
            event.clientX - rect.left - rect.width / 2;

        const y =
            event.clientY - rect.top - rect.height / 2;

        button.style.transform =
            `translate(${x * 0.08}px, ${y * 0.08}px)`;

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translate(0,0)";

    });

});


/* =====================================================
   ENERGY GRAPH RANDOM MOTION
   NOTE: CONCEPTUAL VISUALIZATION ONLY
===================================================== */

const graphBars =
    document.querySelectorAll(".graph-bars span");

setInterval(() => {

    graphBars.forEach(bar => {

        const height =
            Math.floor(Math.random() * 60) + 35;

        bar.style.height = height + "%";

    });

}, 1800);


/* =====================================================
   SYSTEM STATUS
===================================================== */

const status =
    document.querySelector(".hero-status strong");

setInterval(() => {

    status.style.opacity = "0.4";

    setTimeout(() => {

        status.style.opacity = "1";

    }, 300);

}, 3000);


/* =====================================================
   MOBILE NAV
===================================================== */

const navLinks =
    document.querySelectorAll(".navbar nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("mobile-open");

    });

});