{
    function ImgViewer(order,scrollY){

        const  imgs = [];

        [...document.querySelector("#portfolio").children[0].children[1].children].forEach(child=>{

            imgs.push(child.children[0].getAttribute("src"));
        });

        const target = document.querySelector(".image-viewer").children[0].children[0].children[0];
        target.src = imgs[order];

        const next = document.querySelector(".image-viewer .next");
        const prev = document.querySelector(".image-viewer .prev");

        next.onclick = ()=>{
            if(order < imgs.length-1){

                order++;
                target.src = imgs[order];
            }
        }

        prev.onclick = ()=>{
            if(order > 0){
                    
                order--;
                target.src = imgs[order];
            }
        }

        exit = document.querySelector(".exit-img-viewer");

        exit.onclick = ()=>{

            document.querySelector(".image-viewer").style.display = "none";
                
            document.querySelector(".page-container").classList.remove("stop-scrolling");

            document.scrollingElement.scrollTo(0,scrollY);
        }

        document.querySelector(".image-viewer").style.display = "block";
                
        document.querySelector(".page-container").classList.add("stop-scrolling");
    }
      

    const imgs = document.querySelectorAll("#portfolio .container .pictures-container div");

    for(let i = 0 ; i < imgs.length ; i++){

        imgs[i].onclick = () =>  ImgViewer(i,scrollY);
    }
    
}