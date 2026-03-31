function hideAll() {
    document.querySelectorAll(".section").forEach(el => {
        el.classList.remove("active");
    });
}

function showC1() {
    hideAll();
    document.getElementById("show_C1").classList.add("active");
}

function showC2() {
    hideAll();
    document.getElementById("show_C2").classList.add("active");
}
function showC3() {
    hideAll();
    document.getElementById("show_C3").classList.add("active");
}

function showC4() {
    hideAll();
    document.getElementById("show_C4").classList.add("active");
}

document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("theme-toggle");

    toggle.addEventListener("change", () => {
        document.body.classList.toggle("dark");

        if (toggle.checked) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark");
        toggle.checked = true;
    }
});
