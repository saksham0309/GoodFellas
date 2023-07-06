// Popup messages and responses
const popups = [
    { message: "Movie tomorrow night?", responseYes: "That's great, I'll look for something.", responseNo: "Please?" },
    { message: "Please?", responseYes: "Chalo done, I'll look for something.", responseNo: "Okay." },
    { message: "Mere liye?", responseYes: "Shukriy, I'll pick one", responseNo: "Okay." },
    { message: "Just a smol one!!", responseYes: "Thank you!!", responseNo: "Okay." },
    { message: "Fir soch le...", responseYes: "Itni mehnat krwa di, chalo koi na", responseNo: "Okay." },
    { message: "Last chance, movie?", responseYes: "Good, tum dhund lena koi", responseNo: "Okay." },
    { message: "Pakka last...", responseYes: "Itna kisi ko nhi puchna pdta, pr thikk hai, movie tum dhundo ab", responseNo: "Okay." },
    { message: "Marjao." }
];

// Global variables
let currentPopupIndex = 0;

// Function to show the next popup
function showNextPopup() {
    const popup = document.getElementById("popup");
    const message = document.getElementById("message");
    const yesButton = document.getElementById("yes");
    const noButton = document.getElementById("no");

    if (currentPopupIndex < popups.length) {
        message.textContent = popups[currentPopupIndex].message;
        popup.classList.remove("hidden");

        if (popups[currentPopupIndex].responseYes) {
            yesButton.style.display = "inline-block";
            yesButton.textContent = "Yes";
            yesButton.addEventListener("click", handleYes);
        } else {
            yesButton.style.display = "none";
        }

        if (popups[currentPopupIndex].responseNo) {
            noButton.style.display = "inline-block";
            noButton.textContent = "No";
            noButton.addEventListener("click", handleNo);
        } else {
            noButton.style.display = "none";
        }
    } else {
        message.textContent = "Okay";
        yesButton.style.display = "none";
        noButton.style.display = "none";
        popup.classList.remove("hidden");
    }
}

// Function to handle the Yes button click event
function handleYes() {
    const popup = document.getElementById("popup");
    const message = document.getElementById("message");
    const yesButton = document.getElementById("yes");
    const noButton = document.getElementById("no");

    if (popups[currentPopupIndex].responseYes) {
        message.textContent = popups[currentPopupIndex].responseYes;
        yesButton.style.display = "none";
        noButton.style.display = "none";
        popup.classList.remove("hidden");
        return; // Return from the function without proceeding to the next popup
    }

    currentPopupIndex++;
    setTimeout(() => {
        popup.classList.add("hidden");
        showNextPopup();
    }, 20); // Display next popup after 2 seconds
}

// Function to handle the No button click event
function handleNo() {
    const popup = document.getElementById("popup");
    const message = document.getElementById("message");
    const yesButton = document.getElementById("yes");
    const noButton = document.getElementById("no");

    if (popups[currentPopupIndex].responseNo) {
        message.textContent = popups[currentPopupIndex].responseNo;
    }
    yesButton.style.display = "none";
    noButton.style.display = "none";
    currentPopupIndex++;
    setTimeout(() => {
        popup.classList.add("hidden");
        showNextPopup();
    }, 20); // Display next popup after 2 seconds
}

// Call the initial popup
showNextPopup();