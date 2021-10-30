{
    const contactModal = document.querySelector(".contact-modal");
    const exitContactModalBtn = document.querySelector("#exit-contact-modal");
    const showContactModalBtns = document.querySelectorAll("#show-contact-modal");
    const shadow = document.querySelector(".shadow")

    const exitContactModal = ()=>{

        shadow.style.opacity = "0";
        contactModal.style.opacity = "0";

        setTimeout(()=>{
            shadow.style.display = "none";
        },100);

        setTimeout(()=>{
            contactModal.style.display = "none";
        },100);
    }

    const showContactModal = ()=>{

        shadow.style.display = "block";
        shadow.style.opacity = ".4";
        contactModal.style.display = "block";

        setTimeout(()=>{
           contactModal.style.opacity = "1";
        },100);
    }

    exitContactModalBtn.onclick = exitContactModal;

    showContactModalBtns.forEach(btn => btn.onclick = showContactModal);
}