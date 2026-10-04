const body = document.body;

const langBtn = document.getElementById("langBtn");
const themeBtn = document.getElementById("themeBtn");

const name = document.getElementById("name");
const job = document.getElementById("job");
const bio = document.getElementById("bio");

const langText = langBtn.querySelector("span");
const themeIcon = themeBtn.querySelector("i");

let arabic = true;
let dark = true;


// Language

langBtn.onclick = function () {

    arabic = !arabic;

    if (arabic) {

        document.documentElement.lang = "ar";
        document.documentElement.dir = "rtl";

        name.textContent = "الدكتورة ميس علي السيد";
        job.textContent = "أخصائية تخدير";
        bio.textContent = "مشفى الرازي";

        langText.textContent = "English";

    } else {

        document.documentElement.lang = "en";
        document.documentElement.dir = "ltr";

        name.textContent = "Dr. Mais Ali Al-Sayed";
        job.textContent = "Anesthesia Specialist";
        bio.textContent = "Al-Razi Hospital";

        langText.textContent = "العربية";
    }
};


// Theme

themeBtn.onclick = function () {

    dark = !dark;

    if (dark) {

        body.classList.remove("light");
        body.classList.add("dark");

        themeIcon.className = "fa-solid fa-moon";

    } else {

        body.classList.remove("dark");
        body.classList.add("light");

        themeIcon.className = "fa-solid fa-sun";
    }
};
