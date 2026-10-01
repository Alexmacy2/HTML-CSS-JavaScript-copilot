const nav = document.querySelector("nav");
const hamburger = document.querySelector(".hamburger");

function toggleMenu() {
    nav.classList.toggle("open");
}

if (hamburger) {
    hamburger.addEventListener("click", toggleMenu);
}

document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });
    });
});

function filterProjects(category) {
    const projects = document.querySelectorAll(".project");

    projects.forEach(project => {
        if (category === "all" || project.dataset.category === category) {
            project.style.display = "";
        } else {
            project.style.display = "none";
        }
    });
}

document.querySelectorAll(".project-filters [data-category]").forEach(button => {
    button.addEventListener("click", () => {
        filterProjects(button.dataset.category);
    });
});

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

document.querySelectorAll(".project img").forEach(img => {
    img.addEventListener("click", () => {
        lightboxImg.src = img.src;
        lightbox.style.display = "flex";
    });
});

if (lightbox) {
    lightbox.addEventListener("click", () => {
        lightbox.style.display = "none";
    });
}

const contactForm = document.getElementById("contactForm");
const feedback = document.getElementById("feedback");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const message = document.getElementById("message");

        if (!name.value.trim()) {
            feedback.textContent = "Name is required.";
            feedback.style.color = "red";
            return;
        }

        if (!email.value.includes("@")) {
            feedback.textContent = "Please enter a valid email.";
            feedback.style.color = "red";
            return;
        }

        if (!message.value.trim()) {
            feedback.textContent = "Message cannot be empty.";
            feedback.style.color = "red";
            return;
        }

        feedback.textContent = "Message sent successfully!";
        feedback.style.color = "green";
    });
}

document.querySelectorAll("#contactForm input, #contactForm textarea")
    .forEach(field => {
        field.addEventListener("input", () => {
            field.style.borderColor = field.value.trim() ? "green" : "red";
        });
    });