document.addEventListener("DOMContentLoaded", function () {
    
    const navbar = document.getElementById("mainNav");

    // Smooth scroll effect for navbar
    window.addEventListener("scroll", function () {
        if (window.scrollY > 80) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // Simple reveal animation for sections
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    // Apply basic fade-in to pillar cards
    document.querySelectorAll('.pillar-card, .industry-card').forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(20px)";
        el.style.transition = "all 0.6s ease-out";
        observer.observe(el);
    });

    console.log("Enyxum Visual Enhancements Active.");
});