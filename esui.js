const container = document.querySelector("#container");
const sixteen = document.querySelector(".sixteen");
const thirtysix=document.querySelector(".thirtysix");
const sixtyfour=document.querySelector(".sixtyfour");
const eight = document.querySelector(".eight");
const onetwoeight=document.querySelector(".onetwoeight");
const usrinpt = document.querySelector(".usrinpt");

usrinpt.addEventListener("click", () => {
    const inpt = prompt("Enter your Grid");
    const gridSize = Number(inpt);
    
    if (gridSize > 100) {
        alert("Enter a number less than 100");
        return;
    }
    
    container.innerHTML = '';
    
    const pad = 35 / (gridSize / 8);
    
    for (let i = 0; i < (gridSize * gridSize); i++) {
        const box = document.createElement("div");
        box.classList = "gridbox";
        box.style.padding = `${pad}px`;
        container.appendChild(box);
        
        box.addEventListener("mouseover", () => {
            box.style.backgroundColor = "black";
            box.classList = "blackbox";
            box.style.padding = `${pad}px`;
        })
    }
})





for (let i = 0; i < 8 * 8; i++) {
    const box = document.createElement("div");
    box.classList = "gridbox"
    box.style.padding = "35px"
    container.appendChild(box);

    box.addEventListener("mouseover", () => {
        box.style.backgroundColor = "black";
        box.classList = "blackbox";
        box.style.padding = "35px";
    })
}


eight.addEventListener("click",()=>{
    
    container.innerHTML = '';

    for(let i=0;i<=63;i++){
        const box = document.createElement("div");
        box.classList="gridbox"
        box.style.padding= "35px"
        container.appendChild(box);

        box.addEventListener("mouseover",()=>{
            box.style.backgroundColor="black";
            box.classList="blackbox";
            box.style.padding="35px";
        })
    }
    
})


sixteen.addEventListener("click",()=>{
    
    container.innerHTML = '';
    
    for(let i=0;i<=255;i++){
        const box = document.createElement("div");
        box.classList="gridbox"
        box.style.padding= "17.5px"
        container.appendChild(box);

        box.addEventListener("mouseover",()=>{
            box.style.backgroundColor="black";
            box.classList="blackbox";
            box.style.padding="17.5px";
        })
    }
})

thirtysix.addEventListener("click",()=>{

    container.innerHTML = '';

    for(let i=0;i<=1023;i++){
        const box = document.createElement("div");
        box.classList="gridbox"
        box.style.padding= "8.75px"
        container.appendChild(box);

        box.addEventListener("mouseover",()=>{
            box.style.backgroundColor="black";
            box.classList="blackbox";
            box.style.padding="8.75px";
        })
    }

})

sixtyfour.addEventListener("click",()=>{
    
    container.innerHTML = '';

    for(let i=0;i<=4095;i++){
        const box = document.createElement("div");
        box.classList="gridbox"
        box.style.padding= "4.375px"
        container.appendChild(box);

        box.addEventListener("mouseover",()=>{
            box.style.backgroundColor="black";
            box.classList="blackbox";
            box.style.padding="4.375px";
        })
    }
})

onetwoeight.addEventListener("click",()=>{

    container.innerHTML = '';

    for(let i=0;i<=16383;i++){
        const box = document.createElement("div");
        box.classList="gridbox"
        box.style.padding= "2.1875px"
        container.appendChild(box);

        box.addEventListener("mouseover",()=>{
            box.style.backgroundColor="black";
            box.classList="blackbox";
            box.style.padding="2.1875px";
        })
    }
})