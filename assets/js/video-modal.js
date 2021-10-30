{
    const videoModal = document.querySelector(".video-modal");
    const exitVideoModalBtn = document.querySelector("#exit-video-modal");
    const showVideoModalBtn = document.querySelector("#show-video-modal");
    const shadow = document.querySelector(".shadow")

    const exitVideoModal = ()=>{

        shadow.style.opacity = "0";
        videoModal.style.opacity = "0";

        setTimeout(()=>{
            shadow.style.display = "none";
        },100);

        setTimeout(()=>{
            videoModal.style.display = "none";
        },100);
    }

    const showVideoModal = ()=>{

        shadow.style.display = "block";
        shadow.style.opacity = ".4";
        videoModal.style.display = "block";

        setTimeout(()=>{
           videoModal.style.opacity = "1";
        },100);
    }

    exitVideoModalBtn.onclick = exitVideoModal;

    showVideoModalBtn.onclick = showVideoModal;
}