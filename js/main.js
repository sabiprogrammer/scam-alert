const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelectorAll(".links");
const footerYear = document.querySelector("footer .year");

navToggle.addEventListener("click", function () {
    links.forEach(link => {
        if (link.classList.contains("flex")) {
            link.classList.toggle("show-links2");
        } else {
            link.classList.toggle("show-links");
        }
    });
});

// setting the year of the footer copyrights
footerYear.textContent = new Date().getFullYear();

