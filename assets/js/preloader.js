{
    const preloader = document.querySelector(".preloader");
    const page = document.querySelector(".page-container");

    const stopLoading = ()=>{

        setTimeout(()=>{
            preloader.style.display = "none";
        },400)
    }
    
    onload = stopLoading;
}