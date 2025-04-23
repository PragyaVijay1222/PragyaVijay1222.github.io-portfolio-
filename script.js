const texts = ["Welcome to My Portfolio!", "I am a Data Science Enthusiast", "I am a Machine Learning Admirer"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.getElementById("typing").textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 1000); 
    } else {
        setTimeout(type, 100); 
    }
})();

document.getElementById("linked").addEventListener("click", () => {
    window.open("https://www.linkedin.com/in/pragyavijay/","_blank");
});

document.getElementById("git").addEventListener("click", () => {
    window.open("https://github.com/PragyaVijay1222", "_blank");
});

function copyPhoneNumber() {
    const phoneNumber = "9508604773";
    navigator.clipboard.writeText(phoneNumber)
        .then(() => {
            alert("Phone number copied!");
        })
        .catch(err => {
            console.error("Failed to copy phone number:", err);
        });
}

document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".magnifiable");
    
    images.forEach(image => {
        image.addEventListener("click", () => {
            image.classList.toggle("magnify");
        });
    });
});
