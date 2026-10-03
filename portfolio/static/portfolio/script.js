document.addEventListener("DOMContentLoaded", function () {

    const text = "Python Developer | Backend Development | Software Engineering";

    let index = 0;

    function typeText() {

        const el = document.getElementById("typing-text");

        if (!el) return;

        el.innerHTML = text.slice(0, index);

        index++;

        if (index <= text.length) {
            setTimeout(typeText, 80);
        }
    }

    typeText();



    // Mouse Glow Effect

    const glow = document.querySelector(".cursor-glow");

    document.addEventListener("mousemove", (e) => {

        glow.style.left = e.clientX + "px";
        glow.style.top = e.clientY + "px";

    });


    //scroll animation Effect

    const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

});

hiddenElements.forEach((el) => observer.observe(el));

});