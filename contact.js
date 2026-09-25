// ==========================================
// CONTACT SECTION MOBILE FIX
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    const contactSection = document.querySelector("#contect");
    const contactContainer = document.querySelector("#contect .contact-container");
    const contactInfo = document.querySelector("#contect .contact-info");
    const contactForm = document.querySelector("#contect .contact-form");

    if (!contactSection || !contactContainer || !contactInfo || !contactForm) {
        return;
    }

    function fixContactLayout() {

        if (window.innerWidth <= 768) {

            contactSection.style.width = "100%";
            contactSection.style.maxWidth = "100%";
            contactSection.style.boxSizing = "border-box";
            contactSection.style.overflow = "hidden";

            contactContainer.style.width = "100%";
            contactContainer.style.maxWidth = "100%";
            contactContainer.style.display = "flex";
            contactContainer.style.flexDirection = "column";
            contactContainer.style.boxSizing = "border-box";

            contactInfo.style.width = "100%";
            contactInfo.style.maxWidth = "100%";
            contactInfo.style.boxSizing = "border-box";

            contactForm.style.width = "100%";
            contactForm.style.maxWidth = "100%";
            contactForm.style.boxSizing = "border-box";
            contactForm.style.marginLeft = "0";
            contactForm.style.marginRight = "0";

        } else {

            contactSection.style.width = "";
            contactSection.style.maxWidth = "";
            contactSection.style.overflow = "";

            contactContainer.style.width = "";
            contactContainer.style.maxWidth = "";
            contactContainer.style.display = "";
            contactContainer.style.flexDirection = "";

            contactInfo.style.width = "";
            contactInfo.style.maxWidth = "";

            contactForm.style.width = "";
            contactForm.style.maxWidth = "";
            contactForm.style.marginLeft = "";
            contactForm.style.marginRight = "";
        }
    }

    fixContactLayout();

    window.addEventListener("resize", fixContactLayout);

});