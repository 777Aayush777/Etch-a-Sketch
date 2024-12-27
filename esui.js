const container = document.querySelector("#container");
const sixteen = document.querySelector(".sixteen");
const thirtysix=document.querySelector(".thirtysix");
const sixtyfour=document.querySelector(".sixtyfour");
const eight = document.querySelector(".eight");
const onetwoeight=document.querySelector(".onetwoeight");


eight.addEventListener("click",()=>{
    for(let i=0;i<=63;i++){
        const box = document.createElement("div");
        box.classList="gridbox"
        box.style.padding= "20px"
        container.appendChild(box);

        box.addEventListener("mouseover",()=>{
            box.style.backgroundColor="black";
            box.classList="blackbox";
            box.style.padding="20px";
        })
    }
})


sixteen.addEventListener("click",()=>{
    for(let i=0;i<=255;i++){
        const box = document.createElement("div");
        box.classList="gridbox"
        box.style.padding= "10px"
        container.appendChild(box);

        box.addEventListener("mouseover",()=>{
            box.style.backgroundColor="black";
            box.classList="blackbox";
            box.style.padding="10px";
        })
    }
})

thirtysix.addEventListener("click",()=>{
    for(let i=0;i<=1023;i++){
        const box = document.createElement("div");
        box.classList="gridbox"
        box.style.padding= "5px"
        container.appendChild(box);

        box.addEventListener("mouseover",()=>{
            box.style.backgroundColor="black";
            box.classList="blackbox";
            box.style.padding="5px";
        })
    }

})

sixtyfour.addEventListener("click",()=>{
    for(let i=0;i<=4095;i++){
        const box = document.createElement("div");
        box.classList="gridbox"
        box.style.padding= "2.5px"
        container.appendChild(box);

        box.addEventListener("mouseover",()=>{
            box.style.backgroundColor="black";
            box.classList="blackbox";
            box.style.padding="2.5px";
        })
    }
})

onetwoeight.addEventListener("click",()=>{
    for(let i=0;i<=16383;i++){
        const box = document.createElement("div");
        box.classList="gridbox"
        box.style.padding= "1.25px"
        container.appendChild(box);

        box.addEventListener("mouseover",()=>{
            box.style.backgroundColor="black";
            box.classList="blackbox";
            box.style.padding="1.25px";
        })
    }
})