/* =========================================================
   BIRTHDAY STORYBOOK
   Simple, reliable version for Netlify
   ========================================================= */


/* =========================================================
   1. EASY CUSTOMIZATION
   ========================================================= */

const birthdayData = {
    name: "Wini",
    from: "Zapier",
    birthday: "09-09-26"
};

const memoryClickSound = new Audio("assets/sounds/photo-click.mp3");

memoryClickSound.volume = 0.90;

const surpriseRevealSound = new Audio("assets/sounds/surprise-reveal.mp3");
surpriseRevealSound.volume = 0.55;


/* =========================================================
   2. MEMORIES
   ========================================================= */

const memories = [

    {
        date: "WINI",
        title: "BlaBlaBla",
        image: "assets/photos/photo1.jpg",
        description:
            "Somehow, ordinary days become special when you're around."
    },

    {
        date: "WINI",
        title: "BlaBlaBla",
        image: "assets/photos/photo2.jpg",
        description:
            "One of those little moments that deserves a permanent place in memory."
    },

    {
        date: "WINI",
        title: "BlaBlaBla",
        image: "assets/photos/photo3.jpg",
        description:
            "A completely ordinary moment that somehow turned into one of our favorites."
    },

    {
        date: "WINI",
        title: "BlaBlaBla",
        image: "assets/photos/photo4.jpg",
        description:
            "The best memories aren't always planned. Sometimes they simply happen."
    },

    {
        date: "WINI",
        title: "BlaBlaBla",
        image: "assets/photos/photo5.jpg",
        description:
            "A soft reminder that beautiful things can exist in the smallest moments."
    },

    {
        date: "WINI",
        title: "BlaBlaBla",
        image: "assets/photos/photo6.jpg",
        description:
            "If we could keep every good moment in a little jar, this one would glow."
    }

];


/* =========================================================
   3. WISHES
   ========================================================= */

const wishes = [

    {
        icon: "🌻",
        title: "Happiness",
        text:
            "May every day be filled with little reasons to smile. Just a reminder that seeing you smile makes me happy :)."
    },

    {
        icon: "☀️",
        title: "Courage",
        text:
            "May you achieve your goals in everything. I will always cover and support you."
    },

    {
        icon: "🌿",
        title: "Peace",
        text:
            "May life give you fewer problems to face."
    },

    {
        icon: "✨",
        title: "Dreams",
        text:
            "May the things you secretly wish for slowly find their way to you."
    },

    {
        icon: "☁️",
        title: "Gentleness",
        text:
            "May you remember that you don't have to rush your way through life."
    },

    {
        icon: "💛",
        title: "Beautiful things",
        text:
            "May all the beautiful things find you when you least expect them."
    },

    {
        icon: "🌙",
        title: "Rest",
        text:
            "May you always have a safe place to pause, breathe, and simply be."
    },

    {
        icon: "🌱",
        title: "Growth",
        text:
            "May you keep growing into someone you're proud to become. I trust you."
    }

];


/* =========================================================
   4. DOM READY
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    initializePersonalization();

    initializeNavigation();

    initializeParticles();

    initializeScrollReveal();

    initializeMemories();

    initializeMemoryModal();

    initializeLetter();

    initializeWishes();

    initializeSurprise();

    initializePageTransitions();

    initializeBirthdayWish();

});

/* =========================================================
   CINEMATIC PAGE TRANSITIONS
   ========================================================= */

function initializePageTransitions() {

    /*
     * Create the transition overlay.
     * We create it with JavaScript so every HTML page
     * automatically gets the same transition.
     */

    const transition =
        document.createElement("div");

    transition.className =
        "page-transition";

    transition.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.appendChild(
        transition
    );


    /*
     * Page ENTER animation
     */

    requestAnimationFrame(function () {

        document.body.classList.add(
            "page-entering"
        );

    });


    /*
     * Handle internal navigation links.
     */

    const links =
        document.querySelectorAll(
            'a[href]'
        );


    links.forEach(function (link) {

        link.addEventListener(
            "click",
            function (event) {

                const href =
                    link.getAttribute("href");


                /*
                 * Ignore:
                 *
                 * - external links
                 * - anchors
                 * - javascript links
                 * - new tabs
                 * - downloads
                 */

                if (
                    !href ||
                    href.startsWith("#") ||
                    href.startsWith("http") ||
                    href.startsWith("mailto:") ||
                    href.startsWith("tel:") ||
                    link.target === "_blank" ||
                    link.hasAttribute("download")
                ) {
                    return;
                }


                /*
                 * Don't animate if clicking
                 * the current page.
                 */

                const currentPage =
                    window.location.pathname
                        .split("/")
                        .pop() || "index.html";

                const targetPage =
                    href
                        .split("/")
                        .pop();


                if (
                    targetPage === currentPage
                ) {
                    return;
                }


                /*
                 * Stop the browser's
                 * normal navigation temporarily.
                 */

                event.preventDefault();


                /*
                 * Close mobile navigation
                 * before transition.
                 */

                const navLinks =
                    document.getElementById(
                        "navLinks"
                    );

                const menuToggle =
                    document.getElementById(
                        "menuToggle"
                    );


                if (navLinks) {

                    navLinks.classList.remove(
                        "open"
                    );
                }


                if (menuToggle) {

                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );
                }


                /*
                 * Start the transition.
                 */

                transition.classList.add(
                    "active"
                );


                /*
                 * Navigate after the
                 * animation has started.
                 */

                setTimeout(
                    function () {

                        window.location.href =
                            href;

                    },
                    500
                );

            }
        );

    });
}


/* =========================================================
   5. PERSONALIZATION
   ========================================================= */

function initializePersonalization() {

    const nameElements =
        document.querySelectorAll(".name-placeholder");

    nameElements.forEach(function (element) {
        element.textContent = birthdayData.name;
    });


    const fromName =
        document.getElementById("fromName");

    if (fromName) {
        fromName.textContent = birthdayData.from;
    }


    const letterDate =
        document.getElementById("letterDate");

    if (letterDate) {
        letterDate.textContent = birthdayData.birthday;
    }

}


/* =========================================================
   6. MOBILE NAVIGATION
   ========================================================= */

function initializeNavigation() {

    const menuToggle =
        document.getElementById("menuToggle");

    const navLinks =
        document.getElementById("navLinks");


    if (!menuToggle || !navLinks) {
        return;
    }


    menuToggle.addEventListener("click", function () {

        const isOpen =
            navLinks.classList.toggle("open");

        menuToggle.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

        menuToggle.setAttribute(
            "aria-label",
            isOpen
                ? "Close navigation menu"
                : "Open navigation menu"
        );

    });


    const links =
        navLinks.querySelectorAll("a");

    links.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        });

    });


    document.addEventListener("click", function (event) {

        if (
            !navLinks.contains(event.target) &&
            !menuToggle.contains(event.target)
        ) {

            navLinks.classList.remove("open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    });

}


/* =========================================================
   7. FLOATING PARTICLES
   ========================================================= */

function initializeParticles() {

    const container =
        document.getElementById("ambientParticles");

    if (!container) {
        return;
    }


    /* Prevent duplicate particles */

    if (container.dataset.initialized === "true") {
        return;
    }

    container.dataset.initialized = "true";


    const particleCount =
        window.innerWidth < 600
            ? 18
            : 32;


    for (
        let i = 0;
        i < particleCount;
        i++
    ) {

        const particle =
            document.createElement("span");

        particle.className =
            "ambient-particle";


        const size =
            randomBetween(2, 6);

        const duration =
            randomBetween(7, 15);

        const delay =
            randomBetween(0, 8);

        const opacity =
            randomBetween(.15, .65);


        particle.style.width =
            `${size}px`;

        particle.style.height =
            `${size}px`;

        particle.style.left =
            `${randomBetween(0, 100)}%`;

        particle.style.top =
            `${randomBetween(50, 105)}%`;

        particle.style.setProperty(
            "--duration",
            `${duration}s`
        );

        particle.style.setProperty(
            "--delay",
            `${delay}s`
        );

        particle.style.setProperty(
            "--opacity",
            opacity
        );

        particle.style.setProperty(
            "--x",
            `${randomBetween(-80, 80)}px`
        );


        container.appendChild(particle);

    }

}


/* =========================================================
   8. SCROLL REVEAL
   ========================================================= */

function initializeScrollReveal() {

    const elements =
        document.querySelectorAll(".reveal");

    if (!elements.length) {
        return;
    }


    if (!("IntersectionObserver" in window)) {

        elements.forEach(function (element) {
            element.classList.add("visible");
        });

        return;
    }


    const observer =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "visible"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: .12
            }
        );


    elements.forEach(function (element) {
        observer.observe(element);
    });

}


/* =========================================================
   9. MEMORIES
   ========================================================= */

function initializeMemories() {

    const grid =
        document.getElementById("memoryGrid");

    if (!grid) {
        return;
    }


    /*
     * Prevent duplicate memory cards.
     */

    if (grid.dataset.initialized === "true") {
        return;
    }

    grid.dataset.initialized = "true";


    memories.forEach(function (memory, index) {

        const card =
            document.createElement("article");

        card.className =
            "memory-card";

        card.setAttribute(
            "tabindex",
            "0"
        );

        card.setAttribute(
            "role",
            "button"
        );

        card.setAttribute(
            "aria-label",
            `Open memory: ${memory.title}`
        );


        card.innerHTML = `

            <div class="memory-image">

                <img
                    src="${escapeHTML(memory.image)}"
                    alt="${escapeHTML(memory.title)}"
                    loading="lazy"
                >

            </div>

            <div class="memory-info">

                <div class="memory-date">
                    ${escapeHTML(memory.date)}
                </div>

                <h2>
                    ${escapeHTML(memory.title)}
                </h2>

                <p>
                    ${escapeHTML(memory.description)}
                </p>

            </div>

            <div class="memory-flower">
                🌻
            </div>

        `;


        const image =
            card.querySelector("img");


        image.addEventListener(
            "error",
            function () {

                console.error(
                    "Could not load image:",
                    memory.image
                );

                image.src =
                    createPlaceholderImage(
                        memory.title
                    );

            }
        );


        card.addEventListener(
    "click",
    function () {

        playMemoryClickSound();

        openMemoryModal(memory);

    }
);

function playMemoryClickSound() {

    memoryClickSound.currentTime = 0;

    memoryClickSound.play().catch(function (error) {

        console.log("Memory sound could not play:", error);

    });

}

        card.addEventListener(
            "keydown",
            function (event) {

                if (
                    event.key === "Enter" ||
                    event.key === " "
                ) {

                    event.preventDefault();

                    openMemoryModal(memory);

                }

            }
        );


        grid.appendChild(card);

    });


    observeMemoryCards();

}


/* =========================================================
   10. MEMORY CARD OBSERVER
   ========================================================= */

function observeMemoryCards() {

    const cards =
        document.querySelectorAll(
            ".memory-card"
        );


    if (!cards.length) {
        return;
    }


    if (
        !("IntersectionObserver" in window)
    ) {

        cards.forEach(function (card) {
            card.classList.add("visible");
        });

        return;
    }


    const observer =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "visible"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: .12
            }
        );


    cards.forEach(function (card) {
        observer.observe(card);
    });

}


/* =========================================================
   11. MEMORY MODAL
   ========================================================= */

function initializeMemoryModal() {

    const modal =
        document.getElementById("memoryModal");

    if (!modal) {
        return;
    }


    const closeButton =
        document.getElementById("modalClose");

    const backdrop =
        modal.querySelector(
            "[data-modal-close]"
        );


    closeButton?.addEventListener(
        "click",
        closeMemoryModal
    );


    backdrop?.addEventListener(
        "click",
        closeMemoryModal
    );


    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape" &&
                modal.classList.contains("open")
            ) {

                closeMemoryModal();

            }

        }
    );

}


function openMemoryModal(memory) {

    const modal =
        document.getElementById("memoryModal");

    if (!modal) {
        return;
    }


    const image =
        document.getElementById("modalImage");

    const date =
        document.getElementById("modalDate");

    const title =
        document.getElementById("modalTitle");

    const description =
        document.getElementById(
            "modalDescription"
        );


    if (image) {

        image.src =
            memory.image;

        image.alt =
            memory.title;

        image.onerror = function () {

            image.src =
                createPlaceholderImage(
                    memory.title
                );

        };

    }


    if (date) {
        date.textContent =
            memory.date;
    }


    if (title) {
        title.textContent =
            memory.title;
    }


    if (description) {
        description.textContent =
            memory.description;
    }


    modal.classList.add("open");

    modal.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.style.overflow =
        "hidden";


    document.getElementById(
        "modalClose"
    )?.focus();

}


function closeMemoryModal() {

    const modal =
        document.getElementById("memoryModal");

    if (!modal) {
        return;
    }


    modal.classList.remove("open");

    modal.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.style.overflow =
        "";

}


/* =========================================================
   12. LETTER
   ========================================================= */

function initializeLetter() {

    const paragraphs =
        document.querySelectorAll(
            ".typewriter-paragraph"
        );


    if (!paragraphs.length) {
        return;
    }


    const reducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;


    if (reducedMotion) {

        paragraphs.forEach(function (paragraph) {

            paragraph.style.visibility =
                "visible";

            paragraph.style.opacity =
                "1";

        });

        return;
    }


    /*
     * Prevent the animation from being
     * initialized more than once.
     */

    paragraphs.forEach(function (paragraph) {

        if (
            paragraph.dataset.typewriterReady === "true"
        ) {
            return;
        }

        paragraph.dataset.typewriterReady =
            "true";

    });


    let paragraphIndex = 0;


    function typeParagraph(
        paragraph,
        onComplete
    ) {

        const originalText =
            paragraph.textContent.trim();


        paragraph.textContent = "";

        paragraph.classList.add("typing");


        let index = 0;


        function typeNextCharacter() {

            if (
                index >= originalText.length
            ) {

                paragraph.classList.remove(
                    "typing"
                );

                paragraph.classList.add(
                    "typed"
                );

                paragraph.style.visibility =
                    "visible";

                paragraph.style.opacity =
                    "1";


                setTimeout(
                    onComplete,
                    400
                );

                return;
            }


            paragraph.textContent +=
                originalText[index];


            index++;


            const delay =
                originalText[index - 1] === "."
                    ? 180
                    : 25;


            setTimeout(
                typeNextCharacter,
                delay
            );

        }


        typeNextCharacter();

    }


    function typeNextParagraph() {

        if (
            paragraphIndex >=
            paragraphs.length
        ) {
            return;
        }


        const paragraph =
            paragraphs[paragraphIndex];


        typeParagraph(
            paragraph,
            function () {

                paragraphIndex++;

                typeNextParagraph();

            }
        );

    }


    setTimeout(
        typeNextParagraph,
        700
    );

}


/* =========================================================
   13. WISHES
   ========================================================= */

function initializeWishes() {

    const grid =
        document.getElementById("wishGrid");

    const button =
        document.getElementById(
            "newWishButton"
        );


    if (!grid) {
        return;
    }


    /*
     * Prevent duplicate wishes.
     */

    if (grid.dataset.initialized === "true") {
        return;
    }

    grid.dataset.initialized = "true";


    const initialWishes =
        wishes.slice(0, 4);


    initialWishes.forEach(
        function (wish, index) {

            addWishCard(
                wish,
                grid,
                index
            );

        }
    );


    if (button) {

        button.addEventListener(
            "click",
            function () {

                const existingTitles =
                    [
                        ...grid.querySelectorAll(
                            ".wish-card"
                        )
                    ].map(
                        function (card) {
                            return card.dataset.title;
                        }
                    );


                const available =
                    wishes.filter(
                        function (wish) {

                            return !existingTitles.includes(
                                wish.title
                            );

                        }
                    );


                if (!available.length) {

                    button.innerHTML = `
                        <span>All the wishes are here</span>
                        <span>🌻</span>
                    `;

                    button.disabled = true;

                    return;

                }


                const randomWish =
                    available[
                        Math.floor(
                            Math.random()
                            * available.length
                        )
                    ];


                addWishCard(
                    randomWish,
                    grid,
                    grid.children.length
                );


                button.classList.remove(
                    "wish-button-pulse"
                );


                void button.offsetWidth;


                button.classList.add(
                    "wish-button-pulse"
                );


                createGentlePetals();

            }
        );

    }


    observeWishCards();

}

/* =========================================================
   BIRTHDAY WISH
   ========================================================= */

function initializeBirthdayWish() {

    const input =
        document.getElementById(
            "birthdayWishInput"
        );

    const counter =
        document.getElementById(
            "wishCharacterCount"
        );

    const button =
        document.getElementById(
            "sendBirthdayWish"
        );

    const buttonText =
        document.getElementById(
            "birthdayWishButtonText"
        );

    const success =
        document.getElementById(
            "birthdayWishSuccess"
        );

    const error =
        document.getElementById(
            "birthdayWishError"
        );


    /*
     * This function only runs on wishes.html.
     */

    if (
        !input ||
        !counter ||
        !button
    ) {
        return;
    }


    /* =====================================================
       CHARACTER COUNTER
    ===================================================== */

    input.addEventListener(
        "input",
        function () {

            counter.textContent =
                `${input.value.length} / 500`;

        }
    );


    /* =====================================================
       SEND WISH
    ===================================================== */

    button.addEventListener(
        "click",
        async function () {

            const wish =
                input.value.trim();


            /*
             * Don't allow empty submissions.
             */

            if (!wish) {

                error.textContent =
                    "Write a little wish first. 🌻";

                input.focus();

                return;
            }


            /*
             * Remove previous error.
             */

            error.textContent = "";


            /*
             * Prevent double submissions.
             */

            button.disabled = true;

            buttonText.textContent =
                "Sending your wish...";


            try {

                /*
                 * IMPORTANT:
                 *
                 * This URL is your own Netlify
                 * serverless function.
                 */

                const response =
                    await fetch(
                        "/.netlify/functions/send-wish",
                        {
                            method: "POST",

                            headers: {
                                "Content-Type":
                                    "application/json"
                            },

                            body: JSON.stringify({

                                wish: wish,

                                name:
                                    birthdayData.name,

                                page:
                                    window.location.href,

                                submittedAt:
                                    new Date()
                                        .toISOString()

                            })
                        }
                    );


                const result =
                    await response.json();


                if (!response.ok) {

                    throw new Error(
                        result.error ||
                        "Something went wrong."
                    );

                }


                /*
                 * SUCCESS
                 */

                input.style.display =
                    "none";

                document
                    .querySelector(
                        ".wish-input-footer"
                    )
                    ?.style.setProperty(
                        "display",
                        "none"
                    );

                button.style.display =
                    "none";


                success.classList.add(
                    "visible"
                );

                success.setAttribute(
                    "aria-hidden",
                    "false"
                );


            } catch (errorObject) {

                console.error(
                    "Birthday wish error:",
                    errorObject
                );


                error.textContent =
                    "It didn't go through yet. Please try again. 🌻";


                button.disabled =
                    false;

                buttonText.textContent =
                    "Keep my wish 🌻";

            }

        }
    );

}


/* =========================================================
   14. ADD WISH CARD
   ========================================================= */

function addWishCard(
    wish,
    grid,
    index = 0
) {

    const card =
        document.createElement("article");


    card.className =
        "wish-card";


    card.dataset.title =
        wish.title;


    card.innerHTML = `

        <div class="wish-icon">
            ${wish.icon}
        </div>

        <h2>
            ${escapeHTML(wish.title)}
        </h2>

        <p>
            ${escapeHTML(wish.text)}
        </p>

    `;


    grid.appendChild(card);


    setTimeout(
        function () {

            card.classList.add(
                "visible"
            );

        },
        80 + index * 100
    );

}


/* =========================================================
   15. WISH OBSERVER
   ========================================================= */

function observeWishCards() {

    const cards =
        document.querySelectorAll(
            ".wish-card"
        );


    if (!cards.length) {
        return;
    }


    if (
        !("IntersectionObserver" in window)
    ) {

        cards.forEach(function (card) {
            card.classList.add("visible");
        });

        return;
    }


    const observer =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "visible"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: .1
            }
        );


    cards.forEach(function (card) {
        observer.observe(card);
    });

}


/* =========================================================
   16. GENTLE PETALS
   ========================================================= */

function createGentlePetals() {

    const container =
        document.body;


    const count =
        window.innerWidth < 600
            ? 8
            : 14;


    for (
        let i = 0;
        i < count;
        i++
    ) {

        const petal =
            document.createElement("span");


        petal.textContent =
            Math.random() > .5
                ? "✦"
                : "·";


        petal.style.position =
            "fixed";

        petal.style.left =
            `${randomBetween(10, 90)}%`;

        petal.style.top =
            "-20px";

        petal.style.zIndex =
            "3000";

        petal.style.pointerEvents =
            "none";

        petal.style.color =
            Math.random() > .5
                ? "#F4C542"
                : "#A8B58A";

        petal.style.fontSize =
            `${randomBetween(10, 18)}px`;

        petal.style.opacity =
            "0";

        petal.style.transition =
            `transform ${randomBetween(2, 4)}s ease,
             opacity 500ms ease`;


        container.appendChild(petal);


        requestAnimationFrame(
            function () {

                petal.style.opacity =
                    String(
                        randomBetween(.3, .8)
                    );

                petal.style.transform =
                    `
                    translate(
                        ${randomBetween(-100, 100)}px,
                        ${window.innerHeight + 80}px
                    )
                    rotate(
                        ${randomBetween(180, 720)}deg
                    )
                    `;

            }
        );


        setTimeout(
            function () {
                petal.remove();
            },
            4500
        );

    }

}


/* =========================================================
   17. SURPRISE
   ========================================================= */

function initializeSurprise() {

    const button =
        document.getElementById(
            "surpriseButton"
        );

    const intro =
        document.getElementById(
            "surpriseIntro"
        );

    const reveal =
        document.getElementById(
            "surpriseReveal"
        );


    if (
        !button ||
        !intro ||
        !reveal
    ) {
        return;
    }


    button.addEventListener(
    "click",
    function () {

        // Play surprise sound
        surpriseRevealSound.currentTime = 0;

        surpriseRevealSound.play().catch(function (error) {
            console.log(
                "Surprise sound could not play:",
                error
            );
        });

        intro.classList.add("hidden");

        setTimeout(
            function () {

                reveal.classList.add("active");

                reveal.setAttribute(
                    "aria-hidden",
                    "false"
                );

                createSurpriseStars();

                createSurpriseParticles();

            },
            500
        );

    }
);

}


/* =========================================================
   18. SURPRISE STARS
   ========================================================= */

function createSurpriseStars() {

    const container =
        document.getElementById(
            "surpriseStars"
        );


    if (!container) {
        return;
    }


    /*
     * Prevent duplicates.
     */

    if (container.children.length > 0) {
        return;
    }


    const symbols =
        [
            "✦",
            "✧",
            "·",
            "✦",
            "⋆"
        ];


    for (
        let i = 0;
        i < 30;
        i++
    ) {

        const star =
            document.createElement("span");


        star.className =
            "surprise-star";


        star.textContent =
            symbols[
                Math.floor(
                    Math.random()
                    * symbols.length
                )
            ];


        star.style.left =
            `${randomBetween(5, 95)}%`;

        star.style.top =
            `${randomBetween(8, 85)}%`;

        star.style.fontSize =
            `${randomBetween(8, 22)}px`;

        star.style.animationDelay =
            `${randomBetween(.5, 2.5)}s`;


        container.appendChild(star);

    }

}


/* =========================================================
   19. SURPRISE PARTICLES
   ========================================================= */

function createSurpriseParticles() {

    const container =
        document.getElementById(
            "surpriseReveal"
        );


    if (!container) {
        return;
    }


    const colors =
        [
            "#F4C542",
            "#F8D96B",
            "#A8B58A",
            "#FFF8E8",
            "#D9A928"
        ];


    for (
        let i = 0;
        i < 35;
        i++
    ) {

        const particle =
            document.createElement("span");


        particle.style.position =
            "absolute";

        particle.style.left =
            `${randomBetween(10, 90)}%`;

        particle.style.bottom =
            `${randomBetween(5, 25)}%`;

        particle.style.width =
            `${randomBetween(3, 7)}px`;

        particle.style.height =
            particle.style.width;

        particle.style.borderRadius =
            "50%";

        particle.style.background =
            colors[
                Math.floor(
                    Math.random()
                    * colors.length
                )
            ];

        particle.style.opacity =
            "0";

        particle.style.pointerEvents =
            "none";


        const duration =
            randomBetween(3, 6);


        if (particle.animate) {

            particle.animate(
                [
                    {
                        opacity: 0,
                        transform:
                            "translateY(30px) scale(.5)"
                    },

                    {
                        opacity: randomBetween(.4, .9),
                        offset: .2
                    },

                    {
                        opacity: .7,
                        transform:
                            `
                            translate(
                                ${randomBetween(-100, 100)}px,
                                -${randomBetween(200, 500)}px
                            )
                            scale(1)
                            `
                    },

                    {
                        opacity: 0
                    }
                ],
                {
                    duration:
                        duration * 1000,

                    delay:
                        randomBetween(0, 2) * 1000,

                    iterations:
                        Infinity,

                    easing:
                        "ease-out"
                }
            );

        }


        container.appendChild(particle);

    }

}


/* =========================================================
   20. PLACEHOLDER IMAGE
   ========================================================= */

function createPlaceholderImage(title) {

    const safeTitle =
        String(title)
            .replace(
                /[<>&'"]/g,
                ""
            );


    const svg = `

        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="900"
            height="675"
            viewBox="0 0 900 675"
        >

            <defs>

                <linearGradient
                    id="bg"
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="1"
                >

                    <stop
                        offset="0%"
                        stop-color="#FFF8E8"
                    />

                    <stop
                        offset="55%"
                        stop-color="#F8D96B"
                    />

                    <stop
                        offset="100%"
                        stop-color="#E9B7A8"
                    />

                </linearGradient>

            </defs>


            <rect
                width="900"
                height="675"
                fill="url(#bg)"
            />


            <circle
                cx="450"
                cy="270"
                r="100"
                fill="#F4C542"
                opacity=".9"
            />


            <g
                fill="#F8D96B"
                opacity=".95"
            >

                <ellipse
                    cx="450"
                    cy="130"
                    rx="35"
                    ry="100"
                />

                <ellipse
                    cx="450"
                    cy="410"
                    rx="35"
                    ry="100"
                />

                <ellipse
                    cx="310"
                    cy="270"
                    rx="100"
                    ry="35"
                />

                <ellipse
                    cx="590"
                    cy="270"
                    rx="100"
                    ry="35"
                />

            </g>


            <circle
                cx="450"
                cy="270"
                r="55"
                fill="#7A5C45"
            />


            <text
                x="450"
                y="540"
                text-anchor="middle"
                font-family="Georgia, serif"
                font-size="32"
                fill="#7A5C45"
            >
                ${safeTitle}
            </text>


            <text
                x="450"
                y="580"
                text-anchor="middle"
                font-family="Arial, sans-serif"
                font-size="18"
                fill="#7D8B62"
            >
                Replace with your photo 🌻
            </text>

        </svg>

    `;


    return (
        "data:image/svg+xml;charset=UTF-8," +
        encodeURIComponent(svg)
    );

}


/* =========================================================
   21. UTILITY
   ========================================================= */

function randomBetween(min, max) {

    return (
        Math.random()
        * (max - min)
        + min
    );

}


function escapeHTML(value) {

    return String(value)
        .replace(
            /[&<>"']/g,
            function (character) {

                const entities = {

                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#039;"

                };

                return entities[
                    character
                ];

            }
        );

}