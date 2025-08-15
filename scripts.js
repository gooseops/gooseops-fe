document.addEventListener("DOMContentLoaded", function() {
    const sections = [
        { id: "about", file: "about.html" },
        { id: "why-choose", file: "why-choose.html" },
        { id: "services", file: "services.html" },
        { id: "testimonials", file: "testimonials.html" },
        { id: "contact", file: "contact.html" }
    ];

    sections.forEach(section => {
        fetch(section.file)
            .then(response => response.text())
            .then(data => document.getElementById(section.id).innerHTML = data);
    });
});
