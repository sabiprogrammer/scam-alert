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

let myTimer;
// displaying alert/info messages
function displayInfoMessages (type, msg) {
    if (myTimer) {
        clearInterval(myTimer);
    }
    
    // displaying info - pop up messages
    const popupMessageContainer = document.querySelector(".popup-message");
    const popupMessageDiv = popupMessageContainer.querySelector("div");
    
    popupMessageDiv.innerHTML = msg;
    popupMessageDiv.classList.add("show-info-message");
    popupMessageDiv.classList.add(type);
    
    myTimer = setTimeout(() => {
        popupMessageDiv.innerHTML = "";
        popupMessageDiv.classList.remove("show-info-message");
        popupMessageDiv.classList.remove(type);
    }, 5000);
}

// setting the year of the footer copyrights
footerYear.textContent = new Date().getFullYear();

