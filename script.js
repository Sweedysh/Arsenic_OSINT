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